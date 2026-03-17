using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class StartGameScript : MonoBehaviour
{
    public RectTransform rec;
    public CanvasGroup group;
    public float duration;

    public Text tetrisText;
    public Text tapText;
    public Image moreImage;
    public Image rateImage;
    public Image likeImage;


    public void Reset()
    {
        SetActive(false);

    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && BB10_MainState.GetState == BB10_MainState.State.Home
            && !EventSystem.current.IsPointerOverGameObject(0))
        {
            StartPlayGame();
        }
    }



    public void StartPlayGame()
    {
        Middle();
    }

    void Middle()
    {
        BB10_MainState.SetState(BB10_MainState.State.Ingame);
        CanvasGroup toGroup = BB10_MainCanvasUI.Main.inGameScript.group;
        BB10_MainCanvasUI.Main.faderScript.SwichPanel(group, toGroup, null);
    }

    public void SetActive(bool isActive)
    {
        gameObject.SetActive(isActive);
    }

    public void FbClick()
    {
//        UtilsFB.OpenFacebook(GameDefine.pageID, GameDefine.pageName);
//        Application.OpenURL("fb://profile/" + GameDefine.pageID);
    }

    public void RateClick()
    {

    }

    public void MoreClick()
    {
    }

}
