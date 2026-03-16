using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BB10_NextViewer : MonoBehaviour
{


    public int index;
    public float scale;
    public float durationLight;
    public float duration, durationIn;
    
    //TypePattem.Type myType;
    public Types myType;

    public int rotateTime;
    

    public void SetPattem(List<BB10_BrickCubeUnit> listUnit, Types type, int numberRotate, bool isRotate)
    {
        myType = type;
        listBlock = listUnit;
        for (int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].viewer = this;
        }
        if(isRotate)
            RotatePattem(numberRotate);

        FixCenterPos();

        listBlockLocalPos = new Vector2[listUnit.Count];

        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlockLocalPos[i] = (Vector2)listBlock[i].transform.position - normalPos;
        }

        if(ScaleUpAnim != null && isMoving)
        {
            StopCoroutine(ScaleUpAnim);
        }

        ScaleUpAnim = MoveBlocks();
        StartCoroutine(ScaleUpAnim);

    }

    public List<BB10_BrickCubeUnit> listBlock;
    Vector2[] listBlockLocalPos;
    IEnumerator ScaleUpAnim;
    public State state;
    Vector2 normalPos;
    public Vector2 startPos1, startPos2;
    public AnimationCurve ac1, ac2;

    bool isMoving;
    public enum State
    {
        Null,
        Show,
        Hide,
    }

    void Awake()
    {
        normalPos = transform.position;
    }

    void Start()
    {
        //startPos1 = new Vector2(startPos1.x, startPos1.y + (transform.localPosition.y + 2.77f));
        //startPos2 = new Vector2(startPos2.x, startPos2.y + (transform.localPosition.y + 2.77f));
    }

    public void SetPattemAndRotate(List<BB10_BrickCubeUnit> listUnit, Types type)
    {
        myType = type;
        listBlock = listUnit;

        RotatePattemOne();

        FixCenterPos();

        listBlockLocalPos = new Vector2[listUnit.Count];

        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlockLocalPos[i] = (Vector2)listBlock[i].transform.position - normalPos;
        }

        if(ScaleUpAnim != null && isMoving)
        {
            StopCoroutine(ScaleUpAnim);
        }

        ScaleUpAnim = MoveBlocks();
        StartCoroutine(ScaleUpAnim);

    }

    void SetBlockPos([Bridge.Ref] Vector2 pos) // fixed
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].transform.position = listBlockLocalPos[i] + pos;
        }
    }

    public void RotatePattem(int numberRotate)
    {
        if(myType == Types.I3
            || myType == Types.O1
            || myType == Types.O0)
        {
            rotateTime = 0;
            return;
        }
        else
        {
            rotateTime = numberRotate;

            for(int t = 0; t < rotateTime; t++)
            {
                for(int i = 0; i < listBlock.Count; i++)
                {
                    listBlock[i].RotateUnit();
                }
            }
        }     
    }

    IEnumerator MoveBlocks()
    {
        isMoving = true;
        float timer = 0;

        while (timer < durationIn)
        {
            timer += Time.deltaTime;
            Vector2 pos = Vector2.Lerp(startPos1, startPos2, ac1.Evaluate(timer / durationIn));
            SetBlockPos(pos);
            yield return null;
        }

        timer = 0;

        while (timer < duration)
        {
            timer += Time.deltaTime;
            Vector2 pos = Vector2.Lerp(startPos2, normalPos, ac2.Evaluate(timer / duration));
            SetBlockPos(pos);
            yield return null;
        }

        SetBlockPos(normalPos);
        isMoving = false;
    }

    public void RotatePattemOne()
    {
        for (int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].RotateUnit();
            listBlockLocalPos[i] = (Vector2)listBlock[i].transform.position - normalPos;
        }
    }

    public void FixCenterPos()
    {
        float centerX = 0;
        float centerY = 0;

        for (int i = 0; i < listBlock.Count; i++)
        {
            centerX += listBlock[i].indexCol;
            centerY += listBlock[i].indexRow;
        }

        centerX = centerX / (float)listBlock.Count;
        centerY = centerY / (float)listBlock.Count;

        Vector2 center = new Vector2(centerX, centerY);

        for (int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].MoveCenterPos(transform.position, center);
        }
    }

    public void ClickPattern()
    {

        if ((state == State.Show || state == State.Hide)
            && BB10_MainState.GetState == BB10_MainState.State.Ingame)
        {
            BB10_MainObjControl.Instant.planeViewCrt.SetPattem(
                listBlock,
                transform.position,
                listBlock[0].myData,
                index,
                scale
            );

            MainAudio.Main.PlaySound(TypeAudio.SellectPattem);
            HideAllBlock();

            if (BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
            {
                BB10_MainObjControl.Instant.tutorial.StopFinger();
            }
        }
    }

    public void CheckImpossible()
    {
        // Comment for disable grey block when InImpossible
        if (state != State.Null)
        {
            if (!BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listBlock))
            {
                if (state == State.Hide)
                {
                    //StartCoroutine(StartSetLight(GameDefine.pattemDarkAlpha, GameDefine.pattemLightAlpha));
                    state = State.Show;
                }
            }
            else
            {
                if (state == State.Show)
                {
                    //StartCoroutine(StartSetLight(GameDefine.pattemLightAlpha, GameDefine.pattemDarkAlpha));
                    state = State.Hide;
                }
            }
        }
    }

    public void GreyWhenGameOver()
    {
        if(state != State.Null)
        {
            if(BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listBlock))
            {
                StartCoroutine(StartSetLight(GameDefine.pattemLightAlpha, GameDefine.pattemDarkAlpha));
            }
        }
    }

    public bool ValidMoreThanOne()
    {
        return BB10_MainObjControl.Instant.grid.ValidPlaceMoreThanOne(listBlock);
    }

    public Vector2 PosValid()
    {
        return BB10_MainObjControl.Instant.grid.PosValidPattem(listBlock);
    }

    public void HideAllBlock()
    {
        if(ScaleUpAnim != null && isMoving)
        {
            StopCoroutine(ScaleUpAnim);
        }

        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].transform.position = new Vector2(0, -100);
        }
    }

    public void ShowAllBlock()
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].transform.position = normalPos + listBlockLocalPos[i];
        }
    }

    public void SetAllBlock()
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            BB10_MainObjControl.Instant.pattemCreater.SetCube(listBlock[i]);
        }

        listBlock = new List<BB10_BrickCubeUnit>();
    }

    IEnumerator StartSetLight(float fromAlpha, float toAlpha)
    {
        float timer = 0;

        while (timer < durationLight)
        {
            timer += Time.deltaTime;
            SetLight(Mathf.Lerp(fromAlpha, toAlpha, timer / durationLight));
            yield return null;
        }

        SetLight(toAlpha);
    }

    void SetLight(float alpha)
    {
        for (int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].SetAlpha(alpha);
        }
    }    
}
