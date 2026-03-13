using UnityEngine;
using System.Collections;

public class GameDefine
{
    public static Vector2 posRight = new Vector2(2000, 0);
    public static Vector2 posLeft = new Vector2(-2000, 0);
    public static Vector2 posTop = new Vector2(0, 2000);
    public static Vector2 posCenter = new Vector2(0, 0);

    public static float pikachuNormalScale = 0.48f;
    public static float pikachuYScale = 0.15f;
    public static string pageID = "1384190174944235";
    public static string pageName = "Connect Animal Game";
    //    public static Vector3 boxScale = new Vector3();

    public static int startRow = 16;
    public static int startCol = 4;
    public static int selectingLayer = 5;
    public static int freeLayer = 0;
    public static float pattemDarkAlpha = 0.38f;
    public static float pattemLightAlpha = 1;

    public static int GetScore(int numberLine)
    {
        return 1000;
    }
}
