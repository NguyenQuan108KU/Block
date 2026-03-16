using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_PlaneView : MonoBehaviour
{
    public Camera camera;
    public float y;
    public float scale, scaleSmall;
    public float distanceTouch;

    public float duration;
    public Transform cam;

    public Vec2 cellTutAcepted = new Vec2();

    public void SetPattem(List<BB10_BrickCubeUnit> listBlock0, Vector2 pos, BB10_ColorData data, int select, float viewScale)
    {
        state = State.Drag;

        selected = select;
        startPos = pos;
        thisData = data;
        groundAcepted = false;
        SetAllBlock();
        listBlockLocalPos = new Vector2[listBlock0.Count];
        for(int i = 0; i < listBlock0.Count; i++)
        {

            int indexRow = listBlock0[i].indexRow;
            int indexCol = listBlock0[i].indexCol;
            Vector2 p = listBlock0[i].transform.position;
            listBlock.Add(pattemCreater.CreateABlock(p, scale));

            listBlock[i].indexRow = indexRow;
            listBlock[i].indexCol = indexCol;
            listBlock[i].SetSprite(thisData);
            listBlock[i].SetLayer(GameDefine.selectingLayer);
            listBlockLocalPos[i] = (p - pos) / viewScale;

            listBlock[i].SetShadowDropBlock(true);
        }

        ScaleBlock(scaleSmall);

        if (ScaleUpAnim != null && isScaling)
        {
            StopCoroutine(ScaleUpAnim);
        }

        ScaleUpAnim = ScaleUpBlock();
        StartCoroutine(ScaleUpAnim);
        BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
    }

    BB10_TypePattem.Type myType;
    public List<BB10_BrickCubeUnit> listBlock;
    Vector2[] listBlockLocalPos;
    Vector3 touchPos;
    Vector3 startPos;
    public int selected;
    int row, col;
    BB10_GroundView groundView;
    BB10_Grid grid;
    BB10_NextViewerControl nextViewerCtr;
    BB10_PattemCreater pattemCreater;
    BB10_ColorData thisData;
    IEnumerator ScaleUpAnim;

    void SetBlockPos(Vector3 pos, float newScale) // fixed
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            float posX = pos.x + listBlockLocalPos[i].x * Mathf.Min(newScale, scale) / scale;
            float posY = pos.y + listBlockLocalPos[i].y * Mathf.Min(newScale, scale) / scale;

            listBlock[i].transform.position = new Vector2(posX, posY);
        }
    }

    void ScaleBlock(float newScale)
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].transform.localScale = new Vector3(newScale, newScale, newScale);
        }
    }

    public void SetAllBlock()
    {
        for(int i = 0; i < listBlock.Count; i++)
        {
            listBlock[i].SetLayer(GameDefine.freeLayer);
            BB10_MainObjControl.Instant.pattemCreater.SetCube(listBlock[i]);
        }

        listBlock.Clear();
    }

    public bool isScaling;
    public bool groundAcepted;
    Vec2 cellAcepted = new Vec2();
    Vec2 lastResetFillCel;

    public Vector2 faceMousePos;

    public bool isAuto;

    public State state;
    public float speedMoveDrop;
    public enum State
    {
        Free,
        Drag,
    }

    void Awake()
    {
        listBlock = new List<BB10_BrickCubeUnit>();
        row = BB10_MainObjControl.Instant.grid.numberRow;
        col = BB10_MainObjControl.Instant.grid.numberCol;
        groundView = BB10_MainObjControl.Instant.groundView;
        grid = BB10_MainObjControl.Instant.grid;
        nextViewerCtr = BB10_MainObjControl.Instant.nextViewerCtr;
        pattemCreater = BB10_MainObjControl.Instant.pattemCreater;
    }

    IEnumerator ScaleDownBlock()
    {
        isScaling = true;
        float timer = 0f;
        Vector2 currentMousePos;
        Vector2 originalPos = new Vector2(nextViewerCtr.listView[selected].transform.position.x,
            nextViewerCtr.listView[selected].transform.position.y);

        //Debug.Log("listBlock.Count: " + listBlock.Count);

        float timeScaleDown = duration / 2f;
        while(timer < timeScaleDown && listBlock.Count > 0)
        {
            timer += Time.deltaTime;
            float newScale = Mathf.Lerp(scale, scaleSmall, timer / timeScaleDown);

            ScaleBlock(newScale);

            currentMousePos = GetFixedMousePos();
            Vector2 newPos = Vector2.Lerp(currentMousePos, originalPos, timer / timeScaleDown);

            SetBlockPos(newPos, newScale);
            yield return null;
        }

        currentMousePos = GetFixedMousePos();
        SetBlockPos(originalPos, scaleSmall);

        nextViewerCtr.listView[selected].ShowAllBlock();

        isScaling = false;
    }

    IEnumerator ScaleUpBlock()
    {
        isScaling = true;
        float timer = 0f;
        Vector2 currentMousePos;

        Vector2 currentPos = new Vector2(nextViewerCtr.listView[selected].transform.position.x,
            nextViewerCtr.listView[selected].transform.position.y);
              
        while (timer < duration && listBlock.Count > 0)
        {
            timer += Time.deltaTime;
            float newScale = Mathf.Lerp(scaleSmall, scale, timer / duration);
            ScaleBlock(newScale);

            currentMousePos = GetFixedMousePos();
            Vector2 newPos = Vector2.Lerp(currentPos, currentMousePos, timer / duration);

            currentMousePos = GetFixedMousePos();
            SetBlockPos(newPos, newScale);
            yield return null;
        }

        currentMousePos = GetFixedMousePos();
        SetBlockPos(currentMousePos, scale);

       
        isScaling = false;
    }

    void Update()
    {
        Drag();

        if (isAuto)
        {
            return;
        }

        CheckPlace();

    }

    void Drag()
    {
        if (state == State.Drag && listBlock.Count > 0 && !isScaling)
        {
            SetBlockPos(GetFixedMousePos(), scale);
            CheckGround();
        }
    }

    void CheckPlace()
    {
        if (Input.GetMouseButtonUp(0) && listBlock.Count > 0)
        {
            CheckGround();
            PlacePattemGround();
            MainAudio.Main.PlaySound(TypeAudio.SoundStop);

            if (BB10_MainCanvasUI.Main.blur.activeSelf)
            {
                BB10_MainCanvasUI.Main.blur.SetActive(false);
            }

            BB10_MainCanvasUI.Main.OnDropPiece?.Invoke();
        }
    }

    float timeDelaySetAllBlock = 0f;
    public void PlacePattemGround()
    {
        CheckSelectedBlock();
        DOVirtual.DelayedCall(timeDelaySetAllBlock, () =>
        {
            SetAllBlock();
        });

        groundView.HideAllBlock();
        BB10_MainObjControl.Instant.nextViewerCtr.CheckHelp();
        state = State.Free;
    }

    void CheckSelectedBlock()
    {
        if (groundAcepted && !isScaling)
        {
            timeDelaySetAllBlock = 0f;

            int r1 = cellAcepted.R;
            int c1 = cellAcepted.C;
            Vector2 posPlace1 = new Vector2(c1, r1);
            Vector2 startPos1 = listBlock[0].transform.position;
            float durationMoveDrop = (startPos1 - posPlace1).magnitude / speedMoveDrop;
            durationMoveDrop = Mathf.Min(durationMoveDrop, 0.09f);
            List<BB10_BrickCubeUnit> newListCubeUnit = new List<BB10_BrickCubeUnit>();
            for (int i = 0; i < listBlock.Count; i++)
            {
                int r = cellAcepted.R - (listBlock[0].indexRow - listBlock[i].indexRow);
                int c = cellAcepted.C - (listBlock[0].indexCol - listBlock[i].indexCol);
                Vector2 posPlace = new Vector2(c, r);
                Vector2 startPos = listBlock[i].transform.position;
                BB10_BrickCubeUnit newCubeUnit = pattemCreater.CreateABlock(startPos, scale);

                grid.grid[r, c] = newCubeUnit;
                newCubeUnit.col = c;
                newCubeUnit.row = r;
                newCubeUnit.SetSprite(thisData);
                newListCubeUnit.Add(newCubeUnit);
                newCubeUnit.DropDown(startPos, posPlace, durationMoveDrop);

                newCubeUnit.SetShadowDropBlock(false);
            }

            bool isColect = false;
            BB10_MainObjControl.Instant.grid.CheckGrid(newListCubeUnit, ref isColect);

            nextViewerCtr.listView[selected].SetAllBlock();
            nextViewerCtr.listView[selected].state = BB10_NextViewer.State.Null;
           

            if (BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
            {
                BB10_MainObjControl.Instant.tutorial.Next();
            }
            else
            {
                BB10_MainObjControl.Instant.nextViewerCtr.CheckUpdateNewPattem();
            }

            if (isColect)
            {
                //MainAudio.Main.PlaySound(TypeAudio.SoundCollect);
            }
            else
            {
                //MainAudio.Main.PlaySound(TypeAudio.SoundStop);
            }
    }
        else
        {
            timeDelaySetAllBlock = duration / 2f;

            if (ScaleUpAnim != null && isScaling)
            {
                StopCoroutine(ScaleUpAnim);
            }

            ScaleUpAnim = ScaleDownBlock();
            StartCoroutine(ScaleUpAnim);

            DOVirtual.DelayedCall(timeDelaySetAllBlock, () =>
            {
                nextViewerCtr.listView[selected].ShowAllBlock();
            });

            //MainAudio.Main.PlaySound(TypeAudio.SoundPutFall);
            if (BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
            {
                BB10_MainObjControl.Instant.tutorial.StartFinger();
                grid.TurnOffAllFillLine();
            }
        }
    }

    bool CheckPlaceInTuto()
    {
        if (BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            int mainRow = listBlock[0].indexRow;
            int mainCol = listBlock[0].indexCol;

            for (int i = 0; i < listBlock.Count; i++)
            {
                int unitRow = cellAcepted.R - (mainRow - listBlock[i].indexRow);
                int unitCol = cellAcepted.C - (mainCol - listBlock[i].indexCol);

                if (!grid.IsRowFillWith(unitRow, unitCol) && !grid.IsColFillWith(unitRow, unitCol))
                {
                    return false;
                }
            }
        }

        return true;
    }

    void CheckGround()
    {
        if (IsInvalidGrid())
        {
            groundAcepted = true;
            groundView.SetPattem(listBlock, cellAcepted.R, cellAcepted.C, listBlock[0].myData);
            // check fill line
            if (lastResetFillCel == null || lastResetFillCel.R != cellAcepted.R || lastResetFillCel.C != cellAcepted.C)
            {
                grid.TurnOffAllFillLine();
                grid.CheckGridFillTest(listBlock, cellAcepted.R, cellAcepted.C, listBlock[0].myData);
                lastResetFillCel = new Vec2(cellAcepted.R, cellAcepted.C);
            }
        }
        else
        {
            groundAcepted = false;
            grid.TurnOffAllFillLine();
            groundView.HideAllBlock();
            lastResetFillCel = null;
        }
    }

    bool IsInvalidGrid()
    {
        Vector2 mainPos = listBlock[0].transform.position;
        cellAcepted.C = Mathf.RoundToInt(mainPos.x);
        cellAcepted.R = Mathf.RoundToInt(mainPos.y);

        bool isAcept = false;  //!grid.InvalidPoint(listBlock, cellAcepted.R, cellAcepted.C);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            if((Mathf.RoundToInt(mainPos.x) == cellTutAcepted.C) && (Mathf.RoundToInt(mainPos.y) == cellTutAcepted.R))
            {
                isAcept = true;
            }
            else
            {
                isAcept = false;
            }
        }
        else
        {
            isAcept = !grid.InvalidPoint(listBlock, cellAcepted.R, cellAcepted.C);
        }

        return isAcept;
    }

    Vector2 GetFixedMousePos()
    {
        if (!isAuto)
        {
            Vector2 mousePos;
            mousePos = camera.ScreenToWorldPoint(Input.mousePosition);
            mousePos = new Vector2(mousePos.x, mousePos.y + distanceTouch);
            return mousePos;
        }
        else
        {
            return faceMousePos;
        }
    }
}
