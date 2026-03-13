using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

public class BB10_MainObjControl : MonoBehaviour
{
    static BB10_MainObjControl main;
    public BB10_ColorControl colorControl;
    //public EffectCtr effectCtr;
    public BB10_PattemCreater pattemCreater;
    public BB10_NextViewerControl nextViewerCtr;
    public BB10_Grid grid;
    public BB10_PlaneView planeViewCrt;
    public BB10_GroundView groundView;

    public void Preload()
    {
        grid.Preload();
        //nextViewerCtr.Preload();
        //effectCtr.Preload();
        tutorial.Preload();
        scoreCtr.Preload();

        //Bricks_SG.Instant.moreAppCanvas.worldCamera = cam.cam;
    }

    public static BB10_MainObjControl Instant
    {
        get { return main; }
    }


    public CameraScript camScript;
    public BB10_ScoreCtr scoreCtr;
    public BB10_ShowHelpCtr helpCtr;
    public BB10_ScreenCtr screenCtr;
    public BB10_Tutorial tutorial;
    public CameraScript cam;

    void Awake()
    {
        Application.targetFrameRate = 60;
        Time.timeScale = 1;
        screenCtr.Fix(grid.numberRow, grid.numberCol);
        main = this;
       
    }
    private void Start()
    {
        Preload();
        nextViewerCtr.CheckUpdateNewPattem();
        BB10_MainState.state = BB10_MainState.State.Ingame;
    }


    //void Update()
    //{
    //    if (Input.GetKey(KeyCode.Escape) && MainState.state == MainState.State.Ingame)
    //    {
    //        MainCanvas.Main.lostScript.GameOver(true);
    //    }
    //}

    //    void OnGUI()
    //    {
    //        int w = Screen.width, h = Screen.height;
    //
    //        GUIStyle style = new GUIStyle();
    //
    //        Rect rect = new Rect(0, h * 0.95f, w, h * 2 / 100);
    //        style.alignment = TextAnchor.UpperLeft;
    //        style.fontSize = h * 2 / 100;
    //        style.normal.textColor = Color.white;
    //        string text = MainState.state.ToString();
    //        GUI.Label(rect, text, style);
    //    }
}