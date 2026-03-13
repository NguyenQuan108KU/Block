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
        MainAudio.Main.PlaySound(TypeAudio.SoundClick);
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
        #if UNITY_ANDROID
//        Application.OpenURL("http://play.google.com/store/apps/details?id=" + Application.identifier);
        #elif UNITY_IPHONE
        Application.OpenURL("itms-apps://itunes.apple.com/app/id1185235076");
        #endif

    }

    public void MoreClick()
    {
        Application.OpenURL("https://play.google.com/store/apps/developer?id=WaterApp");

//        #if UNITY_ANDROID
//        Application.OpenURL("http://play.google.com/store/apps/details?id=" + Application.bundleIdentifier);
//        #elif UNITY_IPHONE
//        Application.OpenURL("itms-apps://itunes.apple.com/app/id1185235076");
//        #endif
    }

}
