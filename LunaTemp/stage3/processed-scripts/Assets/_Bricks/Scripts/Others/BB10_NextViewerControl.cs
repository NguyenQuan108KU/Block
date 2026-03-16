using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class BB10_NextViewerControl : MonoBehaviour
{
    public Bricks_PattemTableObj pattemTableObj;
    public BB10_SpawnBlockData spawnData;
    int spawnIndex = 0;

    public BB10_NextViewer[] listView;

    Types type0;
    Types type1;
    Types type2;                  

    public List<BB10_BrickCubeUnit> listUnit0;
    public List<BB10_BrickCubeUnit> listUnit1;
    public List<BB10_BrickCubeUnit> listUnit2;

    void Awake()
    {
        for (int i = 0; i < listView.Length; i++)
        {
            listView[i].index = i;
        }
    }
    public void Preload()
    {
        listUnit0 = new List<BB10_BrickCubeUnit>();
        listUnit1 = new List<BB10_BrickCubeUnit>();
        listUnit2 = new List<BB10_BrickCubeUnit>();
    }

    public void CheckUpdateNewPattem()
    {
        UpdatePattems();
        CheckImpossiblePattem();
    }

    public void CheckHelp()
    {
        if(listView[0].state == BB10_NextViewer.State.Show && !listView[0].ValidMoreThanOne())
        {
            if((listView[1].state == BB10_NextViewer.State.Hide || listView[1].state == BB10_NextViewer.State.Null)
                && (listView[2].state == BB10_NextViewer.State.Hide || listView[2].state == BB10_NextViewer.State.Null))
            {
                Vector2 posValid = listView[0].PosValid();
                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listView[0].listBlock, posValid);
            }
        }
        else if(listView[1].state == BB10_NextViewer.State.Show && !listView[1].ValidMoreThanOne())
        {
            if((listView[0].state == BB10_NextViewer.State.Hide || listView[0].state == BB10_NextViewer.State.Null)
                && (listView[2].state == BB10_NextViewer.State.Hide || listView[2].state == BB10_NextViewer.State.Null))
            {
                Vector2 posValid = listView[1].PosValid();
                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listView[1].listBlock, posValid);
            }
        }
        else if(listView[2].state == BB10_NextViewer.State.Show && !listView[2].ValidMoreThanOne())
        {
            if((listView[1].state == BB10_NextViewer.State.Hide || listView[1].state == BB10_NextViewer.State.Null)
                && (listView[0].state == BB10_NextViewer.State.Hide || listView[0].state == BB10_NextViewer.State.Null))
            {
                Vector2 posValid = listView[2].PosValid();
                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listView[2].listBlock, posValid);
            }
        }
        else
        {
            BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
        }
    }

    void UpdatePattems()
    {
        if (IsEmptyAll())
        {
            GetNewPattems();
        }
        else
        {
            CheckGameOver();
        }
    }

    void CheckImpossiblePattem()
    {
        listView[0].CheckImpossible();
        listView[1].CheckImpossible();
        listView[2].CheckImpossible();
    }      

    public void GreyWhenGameOver()
    {
        listView[0].GreyWhenGameOver();
        listView[1].GreyWhenGameOver();
        listView[2].GreyWhenGameOver();    
    }

    public void CheckGameOver()
    {
        if (IsGameOver())
        {
            //BB10_MainCanvasUI.Main.lostScript.GameOver(true);
            BB10_MainCanvasUI.Main.StopWaitShowAdBreask();

            GreyWhenGameOver();
        }
    }

    bool IsGameOver()
    {
        for (int i = 0; i < 3; i++)
        {
            if (listView[i].state != BB10_NextViewer.State.Null)
            {
                List<BB10_BrickCubeUnit> listViewer = BB10_MainObjControl.Instant.nextViewerCtr.listView[i].listBlock;
                if (!BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listViewer))
                {
                    return false;
                }
            }
        }

        return true;
    }

    public void GetNewPattems()
    {
        do
        {
            int score = BB10_MainCanvasUI.Main.inGameScript.scoreInt;
            SetAllBlockFromList(listUnit0);
            SetAllBlockFromList(listUnit1);
            SetAllBlockFromList(listUnit2);

            //type0 = pattemTableObj.GetFixedRandomType(score);
            //type1 = pattemTableObj.GetFixedRandomType(score);
            //type2 = pattemTableObj.GetFixedRandomType(score);

            if (spawnIndex < spawnData.spawnGroups.Length)
            {
                SpawnGroup g = spawnData.spawnGroups[spawnIndex];

                type0 = g.block1;
                type1 = g.block2;
                type2 = g.block3;

                spawnIndex++;
            }
            else
            {
                // chuyển sang random hệ thống
                type0 = pattemTableObj.GetFixedRandomType(score);
                type1 = pattemTableObj.GetFixedRandomType(score);
                type2 = pattemTableObj.GetFixedRandomType(score);
            }

            listUnit0 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type0, listView[0].transform.position, listView[0].scale);
            listUnit1 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type1, listView[1].transform.position, listView[1].scale);
            listUnit2 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type2, listView[2].transform.position, listView[2].scale);

            listView[0].SetPattem(listUnit0, type0, Random.Range(0, 4), true);
            listView[1].SetPattem(listUnit1, type1, Random.Range(0, 4), true);
            listView[2].SetPattem(listUnit2, type2, Random.Range(0, 4), true);
        }
        while(InvalidAllPattem() || NumberPattemO2(type0, type1, type2) > 2);


        listUnit0 = new List<BB10_BrickCubeUnit>();
        listUnit1 = new List<BB10_BrickCubeUnit>();
        listUnit2 = new List<BB10_BrickCubeUnit>();

        listView[0].state = BB10_NextViewer.State.Show;
        listView[1].state = BB10_NextViewer.State.Show;
        listView[2].state = BB10_NextViewer.State.Show;

        CheckImpossiblePattem();
    }

    public void RotatePattem(List<BB10_BrickCubeUnit> listUnitRotate)
    {
        int randRotation = Random.Range(0, 3);

        for (int t = 0; t < randRotation; t++)
        {
            for (int i = 0; i < listUnitRotate.Count; i++)
            {
                listUnitRotate[i].RotateUnit();
            }
        }
    }

    public void SetAllBlockFromList(List<BB10_BrickCubeUnit> listBlock)
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            BB10_MainObjControl.Instant.pattemCreater.SetCube(listBlock[i]);
        }

        listBlock = new List<BB10_BrickCubeUnit>();
    }

    bool IsEmptyAll()
    {
        for(int i = 0; i < listView.Length; i++)
        {
            if(listView[i].state != BB10_NextViewer.State.Null)
            {
                return false;
            }
        }
        return true;
    }

    bool InvalidAllPattem()
    {
        bool b0 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listView[0].listBlock);
        bool b1 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listView[1].listBlock);
        bool b2 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listView[2].listBlock);

        if (b0 && b1 && b2)
        {
            return true;
        }

        return false;
    }

    int NumberPattemO2(Types t0, Types t1, Types t2)
    {
        int t = 0;

        if(t0 == Types.O2)
        {
            t++;
        }

        if(t1 == Types.O2)
        {
            t++;
        }

        if(t2 == Types.O2)
        {
            t++;
        }

        return t;
    }                                        
           
    public void SetAllBlock()
    {
        listView[0].SetAllBlock();
        listView[1].SetAllBlock();
        listView[2].SetAllBlock();

        listView[0].state = BB10_NextViewer.State.Null;
        listView[1].state = BB10_NextViewer.State.Null;
        listView[2].state = BB10_NextViewer.State.Null;
    }
	
}
