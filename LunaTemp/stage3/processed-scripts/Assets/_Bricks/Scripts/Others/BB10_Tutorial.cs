using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_Tutorial : MonoBehaviour
{
    public GameObject finger;
    public GameObject circle;
    public float durationMoveUp, durationMoveDown;
    public float durationScale, durationMoveShort;

    public State state;
    public enum State
    {
        Step0,
        Step1,
        Step2,
        Step3,
        Step4,
        Step5,
        Step6
    }

    BB10_Grid grid;
    IEnumerator FingerMove;
    Vector3 normalScale;
    Vector3 smallScale;
        
    public void Preload()
    {
        if (BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            grid = BB10_MainObjControl.Instant.grid;
            finger.SetActive(false);
            normalScale = new Vector3(.8f, .8f, 1);
            smallScale = new Vector3(.66f, .66f, 1);
        }
    }

    public void Show()
    {
        state = State.Step0;
        finger.SetActive(false);
        Next();
    }

    public void StopFinger()
    {
        if(FingerMove != null)
        {
            StopCoroutine(FingerMove);
            finger.SetActive(false);
        }
    }

    public void StartFinger()
    {
        if(FingerMove != null)
        {
            finger.SetActive(true);
            StartCoroutine(FingerMove);
        }
    }

    #region New Version
    public void Next()
    {
        if(BB10_MainState.typePlay != BB10_MainState.TypePlay.Tutorial)
        {
            Debug.Log("Skip Tut");

            return;
        }

        switch(state)
        {
            case State.Step0:
                //Debug.Log("Tut step 0");
                BB10_MainCanvasUI.mainCanvas.inGameScript.StartTut();

                //OpenMap1();
                state = State.Step1;
                break;
            case State.Step1:
                //Debug.Log("Tut step 1");
                //StartCoroutine(WaitOpenMap2());
                state = State.Step2;
                break;
            case State.Step2:
                //Debug.Log("Tut step 2");
                //StartCoroutine(WaitOpenMap3());
                state = State.Step3;
                //MainStateWood.typePlay = MainStateWood.TypePlay.Normal;
                break;
            case State.Step3:
                //Debug.Log("Tut step 3");
                //StartCoroutine(WaitOpenMap4());
                state = State.Step4;
                break;
            case State.Step4:
                //Debug.Log("Tut step 4");
                //StartCoroutine(WaitOpenMap5());
                state = State.Step5;
                break;
            case State.Step5:
                //Debug.Log("Tut step 5");
               // StartCoroutine(FinishMap5());
                state = State.Step6;
                break;
            default:
                break;
        }
    }

    IEnumerator WaitOpenMap2()
    {
        yield return new WaitForSeconds(1f);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
           // OpenMap2();
        }
    }

    IEnumerator WaitOpenMap3()
    {
        yield return new WaitForSeconds(1f);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            OpenMap3();
        }
    }

    IEnumerator FinishMap3()
    {
        yield return new WaitForSeconds(0.6f);
    }

    IEnumerator WaitOpenMap4()
    {
        yield return new WaitForSeconds(0.1f);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            OpenMap4();
        }
    }

    IEnumerator WaitOpenMap5()
    {
        yield return new WaitForSeconds(0.1f);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            OpenMap5();
        }
    }

    IEnumerator FinishMap5()
    {
        yield return new WaitForSeconds(1f);

        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Tutorial)
        {
            // Restart
            BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;

            BB10_MainCanvasUI.Main.inGameScript.ResetScore();
            BB10_MainCanvasUI.Main.inGameScript.ResetBest();
           // BB10_MainCanvasUI.Main.inGameScript.bestInt = 0;

            BB10_MainObjControl.Instant.nextViewerCtr.GetNewPattems();

            BB10_MainCanvasUI.mainCanvas.inGameScript.FinishTut();
        }
    }

    void OpenMap1()
    {
        LoadMap1();
        BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
        Types type = Types.I1;
        List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
        next.SetPattem(listUnit, type, 0);
        next.state = BB10_NextViewer.State.Show;

        Vector2 startPos = next.transform.position;
        Vector2 targetPos = new Vector2(3, 3);

        BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2(3, 2);

        BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new Vector2(2, 3));

        FingerMove = StartMoveFinger(startPos, targetPos);
        StartFinger();
    }


    void LoadMap1()
    {
        for(int row = 0; row < grid.numberRow; row++)
        {
            for(int col = 0; col < grid.numberCol; col++)
            {
                if((col >= 2 && col <= 4) && row != 3)
                {
                    grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

                    int indexData;

                    if(row == 6)
                    {
                        indexData = 3;
                    }
                    else if(row == 7 || row == 2 || row == 4)
                    {
                        indexData = 2;
                    }
                    else
                    {
                        if(col == 3 && row < 4)
                        {
                            indexData = 1;
                        }
                        else
                        {
                            indexData = 5;
                        }
                    }

                    BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                    grid.grid[row, col].SetSprite(data);
                    grid.grid[row, col].row = row;
                    grid.grid[row, col].col = col;
                }
            }
        }

    }

    void OpenMap2()
    {
        LoadMap2();
        BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
        Types type = Types.I2;
        List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
        next.SetPattem(listUnit, type, 1);
        //next.RotatePattemOne();
        next.rotateTime = 1;
        next.state = BB10_NextViewer.State.Show;

        Vector2 startPos = next.transform.position;
        Vector2 targetPos = new Vector2(4f, 4.5f);

        BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2(6, 4);

        BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new Vector2(4, 6));

        FingerMove = StartMoveFinger(startPos, targetPos);
        finger.SetActive(true);
        StartCoroutine(FingerMove);
    }

    void LoadMap2()
    {
        for(int row = 0; row < grid.numberRow; row++)
        {
            for(int col = 0; col < grid.numberCol; col++)
            {
                if((row >= 3 && row <= 6) && col != 4)
                {
                    grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

                    int indexData;

                    if(col < 5)
                    {
                        indexData = 4;
                    }
                    else
                    {
                        if(row == 6)
                        {
                            indexData = 3;
                        }
                        else if(row == 7 || row == 7 || row == 4)
                        {
                            indexData = 2;
                        }
                        else
                        {
                            if(col == 1 && row < 2)
                            {
                                indexData = 1;
                            }
                            else
                            {
                                indexData = 5;
                            }
                        }
                    }

                    BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                    grid.grid[row, col].SetSprite(data);
                    grid.grid[row, col].row = row;
                    grid.grid[row, col].col = col;
                }
            }
        }

    }

    //public static bool lastTut = false;
    void OpenMap3()
    {
        LoadMap3();                                                  

        BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[0];
        Types type = Types.I1;
        List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
        next.SetPattem(listUnit, type, 0);
        next.state = BB10_NextViewer.State.Show;

        Vector2 startPos = next.transform.position;
        Vector2 targetPos = new Vector2(1f, 4f);

        BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2(4, 0);

        BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new Vector2(0, 4));

        FingerMove = StartMoveFinger(startPos, targetPos);
        finger.SetActive(true);
        StartCoroutine(FingerMove);

        //lastTut = true;
    }

    void OpenMap4()
    {
        BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[2];
        Types type = Types.I2;
        List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
        next.SetPattem(listUnit, type, 0);
        next.state = BB10_NextViewer.State.Show;

        Vector2 startPos = next.transform.position;
        Vector2 targetPos = new Vector2(7.5f, 4f);

        BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2(4, 6);

        BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new Vector2(6, 4));

        FingerMove = StartMoveFinger(startPos, targetPos);
        finger.SetActive(true);
        StartCoroutine(FingerMove);
    }

    void OpenMap5()
    {
        BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
        Types type = Types.O2;
        List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
        next.SetPattem(listUnit, type, 0);
        next.state = BB10_NextViewer.State.Show;

        Vector2 startPos = next.transform.position;
        Vector2 targetPos = new Vector2(4f, 4f);

        BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2(3, 3);

        BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new Vector2(3, 3));

        FingerMove = StartMoveFinger(startPos, targetPos);
        finger.SetActive(true);
        StartCoroutine(FingerMove);
    }

    void LoadMap3()
    {
        for(int row = 0; row < grid.numberRow; row++)
        {
            for(int col = 0; col < grid.numberCol; col++)
            {
                if((((row == 3 || row == 4 || row == 5)) || (col == 3 || col == 4 || col == 5))
                    && !(row == 3 && col == 3) && !(row == 4 && col == 4)
                    && !(row == 4 && col == 3) && !(row == 3 && col == 4)
                    && !(row == 3 && col == 5) && !(row == 4 && col == 5)
                    && !(row == 5 && col == 5) && !(row == 5 && col == 4) && !(row == 5 && col == 3)
                    && (row != 4))
                {
                    grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

                    int indexData;

                    if(row == 5)
                    {
                        indexData = 3;
                    }
                    else if(col == 5 && row < 2)
                    {
                        indexData = 1;
                    }
                    else if(row == 1 || row == 5 || row == 2)
                    {
                        indexData = 2;
                    }
                    else
                    {
                        if(col == 5 && row < 6)
                        {
                            indexData = 1;
                        }
                        else
                        {
                            indexData = 5;
                        }
                    }

                    BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                    grid.grid[row, col].SetSprite(data);
                    grid.grid[row, col].row = row;
                    grid.grid[row, col].col = col;
                }
            }
        }

    }
    #endregion

    public void SkipTut()
    {
        BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;

        finger.SetActive(false);

        BB10_MainCanvasUI.Main.inGameScript.ResetScore();
        BB10_MainCanvasUI.Main.inGameScript.ResetBest();
        //BB10_MainCanvasUI.Main.inGameScript.bestInt = 0;

        //BK99_MainObjControl.Instant.nextViewerCtr.GetNewPattems();
    }

    #region Old Version
    //public void Next()
    //{
    //    switch(state)
    //    {
    //        case State.Step0:
    //            OpenMap1();
    //            state = State.Step1;
    //            break;
    //        case State.Step1:
    //            StartCoroutine(WaitOpenMap2());
    //            state = State.Step2;
    //            break;
    //        case State.Step2:
    //            StartCoroutine(WaitOpenMap3());
    //            state = State.Step3;
    //            BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;
    //            break;
    //    }
    //}

    //IEnumerator WaitOpenMap2()
    //{
    //    yield return new WaitForSeconds(1.4f);
    //    OpenMap2();
    //}

    //IEnumerator WaitOpenMap3()
    //{
    //    yield return new WaitForSeconds(1.4f);
    //    OpenMap3();
    //}

    //void OpenMap1()
    //{
    //    LoadMap1();
    //    BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
    //    Types type = Types.I1;
    //    List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
    //    next.SetPattem(listUnit, type, false);
    //    next.state = BB10_NextViewer.State.Show;

    //    Vector2 startPos = next.transform.position;
    //    Vector2 targetPos = new Vector2(3, 3);
    //    FingerMove = StartMoveFinger(startPos, targetPos);
    //    StartFinger();
    //}

    //void LoadMap1()
    //{
    //    for (int row = 0; row < grid.numberRow; row++)
    //    {
    //        for (int col = 0; col < grid.numberCol; col++)
    //        {
    //            if ((col >= 2 && col <= 4) && row != 3)
    //            {
    //                grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

    //                int indexData;

    //                if (row == 7)
    //                {
    //                    indexData = 3;
    //                }
    //                else if (row == 6 || row == 5 || row == 4)
    //                {
    //                    indexData = 2;
    //                }
    //                else
    //                {
    //                    if (col == 4 && row < 2)
    //                    {
    //                        indexData = 1;
    //                    }
    //                    else
    //                    {
    //                        indexData = 5;
    //                    }
    //                }

    //                BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
    //                grid.grid[row, col].SetSprite(data);
    //                grid.grid[row, col].row = row;
    //                grid.grid[row, col].col = col;
    //            }
    //        }  
    //    }

    //}  

    //void OpenMap2()
    //{

    //    LoadMap2();
    //    BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
    //    Types type = Types.I1;
    //    List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
    //    next.SetPattemAndRotate(listUnit, type);
    //    next.state = BB10_NextViewer.State.Show;

    //    Vector2 startPos = next.transform.position;
    //    Vector2 targetPos = new Vector2(2, 4);
    //    FingerMove = StartMoveFinger(startPos, targetPos);
    //    finger.SetActive(true);
    //    StartCoroutine(FingerMove);
    //}

    //void LoadMap2()
    //{
    //    for (int row = 0; row < grid.numberRow; row++)
    //    {
    //        for (int col = 0; col < grid.numberCol; col++)
    //        {
    //            if ((row >= 3 && row <= 5) && col != 2)
    //            {
    //                grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

    //                int indexData;

    //                if (row == 7)
    //                {
    //                    indexData = 3;
    //                }
    //                else if (row == 6 || row == 5 || row == 4)
    //                {
    //                    indexData = 2;
    //                }
    //                else
    //                {
    //                    if (col == 4 && row < 2)
    //                    {
    //                        indexData = 1;
    //                    }
    //                    else
    //                    {
    //                        indexData = 5;
    //                    }
    //                }

    //                BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
    //                grid.grid[row, col].SetSprite(data);
    //                grid.grid[row, col].row = row;
    //                grid.grid[row, col].col = col;
    //            }
    //        }  
    //    }

    //}                                

    //void OpenMap3()
    //{
    //    LoadMap3();
    //    BB10_MainCanvasUI.Main.inGameScript.ResetScore();
    //    BB10_MainCanvasUI.Main.inGameScript.ResetBest();
    //    BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[1];
    //    Types type = Types.O1;
    //    List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
    //    next.SetPattem(listUnit, type, false);
    //    next.state = BB10_NextViewer.State.Show;
    //}      
    //void LoadMap3()
    //{
    //    for (int row = 0; row < grid.numberRow; row++)
    //    {
    //        for (int col = 0; col < grid.numberCol; col++)
    //        {
    //            if ((((row == 3 || row == 4)) || (col == 3 || col == 4)) && !(row == 3 && col == 3) && !(row == 4 && col == 4) && !(row == 4 && col == 3) && !(row == 3 && col == 4))
    //            {
    //                grid.grid[row, col] = BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new Vector2(col, row), 1);

    //                int indexData;

    //                if (row == 7)
    //                {
    //                    indexData = 3;
    //                }
    //                else if (row == 6 || row == 5 || row == 4)
    //                {
    //                    indexData = 2;
    //                }
    //                else
    //                {
    //                    if (col == 4 && row < 2)
    //                    {
    //                        indexData = 1;
    //                    }
    //                    else
    //                    {
    //                        indexData = 5;
    //                    }
    //                }

    //                BB10_ColorData data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
    //                grid.grid[row, col].SetSprite(data);
    //                grid.grid[row, col].row = row;
    //                grid.grid[row, col].col = col;
    //            }
    //        }  
    //    }

    //}
    #endregion

    IEnumerator StartMoveFinger([Bridge.Ref] Vector2 startPos, [Bridge.Ref] Vector2 targetPos)
    {
        float timer;
        Vector2 preStart = startPos + new Vector2(0.5f, -0.5f);
        while (true)
        {
            timer = 0;
            while (timer < durationMoveShort)
            {
                timer += Time.deltaTime;
                finger.transform.position = Vector2.Lerp(preStart, startPos, timer / durationMoveShort);
                yield return null;
            }

            finger.transform.position = startPos;
            yield return new WaitForSeconds(0.1f);

            timer = 0;
            while (timer < durationScale)
            {
                timer += Time.deltaTime;
                finger.transform.localScale = Vector2.Lerp(normalScale, smallScale, timer / durationScale);
                yield return null;
            }

            finger.transform.localScale = smallScale;
            yield return new WaitForSeconds(0.1f);

            timer = 0;
            while (timer < durationMoveUp)
            {
                timer += Time.deltaTime;
                finger.transform.position = Vector2.Lerp(startPos, targetPos, timer / durationMoveUp);
                yield return null;
            }

            finger.transform.position = targetPos;

            timer = 0;
            while (timer < durationScale)
            {
                timer += Time.deltaTime;
                finger.transform.localScale = Vector2.Lerp(normalScale, smallScale, 1 - timer / durationScale);
                yield return null;
            }

            yield return new WaitForSeconds(0.1f);

            timer = 0;
            while (timer < durationMoveDown)
            {
                timer += Time.deltaTime;
                finger.transform.position = Vector2.Lerp(preStart, targetPos, 1 - timer / durationMoveDown);
                yield return null;
            }
            finger.transform.position = preStart;
            yield return new WaitForSeconds(0.3f);
        }
    }
}
