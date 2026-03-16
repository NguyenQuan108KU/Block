using DG.Tweening;
//using Sonat;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_MainCanvasUI : MonoBehaviour
{
    public static BB10_MainCanvasUI mainCanvas;
    public BB10_InGameScript inGameScript;
    //public BB10_LostScript lostScript;
    //public BB10_PauseScript pauseScript;
    //public BB10_PopupRate popupRate;

    //public BB10_HomeController homeController;
    public BB10_FaderHandler faderScript;

    public Action OnDropPiece;

    void CheckPreloadTutorial()
    {
        //if (BB10_Settings.GetTimePlay < 1)
        //{
        //    BB10_MainState.typePlay = BB10_MainState.TypePlay.Tutorial;
        //}
        //else
        //{
            BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;
        //}
    }

    void Start()
    {
        StartCoroutine(InitGame());
    }
    IEnumerator InitGame()
    {
        while (BB10_MainObjControl.Instant == null)
            yield return null;

        Preload();
        Reset(false);
    }

    //public RewardVideoScript rewardVideoScript;

    public static int timePlay = 0;

    public GameObject blur;

    void Awake()
    {
        mainCanvas = this;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (blur.activeSelf)
            {
                blur.SetActive(false);
            }
        }
    }

    void Preload()
    {
        //Debug.LogError("Preload");
        CheckPreloadTutorial();
        BB10_MainObjControl.Instant.Preload();
        switch (BB10_MainState.typePlay)
        {
            case BB10_MainState.TypePlay.Tutorial:
                //SonatScript.PlayTimes++;
                //SonatScript.LogStartLevel();
                BB10_MainObjControl.Instant.tutorial.Show();
                break;
            case BB10_MainState.TypePlay.Normal:
                break;
        }
        //inGameScript.Preload();
        //lostScript.Preload();
        //pauseScript.PreLoad();
        //popupRate.Preload();
        //UnityAdsManager.Instant.InitializeUnityAds(6);

        //#if UNITY_EDITOR
        //        LeanTween.delayedCall(5f, () =>
        //        {
        //            if(UnityEngine.Advertisements.Advertisement.IsReady("banner"))
        //            {
        //                SG_AdManager.ads.bannerType = SG_AdManager.TypeAd.UNITY;
        //                UnityEngine.Advertisements.Advertisement.Banner.Show("banner");
        //            }
        //        });
        //#endif
    }



    public static BB10_MainCanvasUI Main => mainCanvas;

    public static bool newSession = false;
    private static bool firstLoaded = false;
    public void Reset(bool isIngame)
    {
        if (isIngame)
        {
            BB10_MainState.state = BB10_MainState.State.Ingame;
            faderScript.FadeInPanel(inGameScript.group, null);
        }
        else
        {
            inGameScript.group.alpha = 1;
            inGameScript.SetActive(true);
        }

        // Reset count create pattern
        Bricks_PattemTableObj.count = 0;

        // Canvas

        inGameScript.Reset();
        //lostScript.Reset();
        //pauseScript.Reset();
        faderScript.Reset();
        //lostScript.Reset();
        //rewardVideoScript.Reset();

        //popupRate.Preload();

        // other

        EffectGrid();
        Load();

        //CheckToReloadBanner();

        //        if (firstLoaded)
        //        {
        //            LeanTween.delayedCall(5f, () =>
        //            {
        //                BB10_AdsManager.bricks_adm.RequestAds();
        //                //SG_AdManager.ads.ShowBanner();
        //            });
        //        }

        firstLoaded = true;
        newSession = true;
        //Debug.Log("newSession: " + newSession);

        StartGame();
    }

    public void StartGame()
    {
        EnsureAdBreakManager();
        
    }

    private void EnsureAdBreakManager()
    {
    }

    void CheckToReloadBanner()
    {
        //if (!SG_AdManager.IsBannerLoaded())
        //{
        //    StartCoroutine(ShowBannerDelay());
        //}
    }

    IEnumerator ShowBannerDelay()
    {
        yield return new WaitForSeconds(3f);
        //SG_AdManager.ShowBanner();

        //if (!SG_AdManager.IsInterstitialLoaded())
        //{
        //    SG_AdManager.RequestInterstitial();
        //}
    }

    void CheckBundle()
    {
        //if(Application.identifier != "")
        //{
        //    Application.Quit();
        //}
    }

    void EffectGrid()
    {
        //MainAudio.Main.PlaySound(TypeAudio.StartGame);

        switch (BB10_MainState.typePlay)
        {
            case BB10_MainState.TypePlay.Tutorial:
                BB10_MainObjControl.Instant.screenCtr.StartNoAnim();
                break;
            case BB10_MainState.TypePlay.Normal:
                if (BB10_Settings.GetContinue == 0)
                {
                    BB10_MainObjControl.Instant.screenCtr.StartAnim();
                    StartCoroutine(loadPattemDelay());
                }
                else
                {
                    BB10_MainObjControl.Instant.screenCtr.StartNoAnim();
                    //BB10_MainObjControl.Instant.grid.LoadDataSave();
                }

                //MainObjControl.Instant.screenCtr.StartAnim();

                break;
        }
    }

    IEnumerator loadPattemDelay()
    {
        yield return new WaitForSeconds(0.3f);
        //BB10_MainObjControl.Instant.nextViewerCtr.GetNewPattems();
    }

    void Load()
    {
        int playNumbers = BB10_Settings.GetTimePlay;
        playNumbers++;
        BB10_Settings.SetTimePlay(playNumbers);


        //new SonatLogLevelUp().SetExtraParameter(new[]
        //{
        //    new Sonat.LogParameter("game_play","Play Game " + BB10_Settings.GetTimePlay),
        //}).Post();



        if (BB10_Settings.GetTimePlay > 500)
        {
        }
        if (BB10_Settings.GetTimePlay > 300)
        {
        }
        else if (BB10_Settings.GetTimePlay > 200)
        {
        }
        else if (BB10_Settings.GetTimePlay > 100)
        {
        }
        else if (BB10_Settings.GetTimePlay > 50)
        {
        }
        else if (BB10_Settings.GetTimePlay > 20)
        {
        }
        else if (BB10_Settings.GetTimePlay > 10)
        {
        }
        else if (BB10_Settings.GetTimePlay > 5)
        {
        }

        // Log time play
        timePlay++;
        //new SonatLogLevelUp().SetExtraParameter(new[]
        //{
        //    new Sonat.LogParameter("game_replay","Replay Game " + timePlay),
        //}).Post();

        switch (BB10_MainState.typePlay)
        {
            case BB10_MainState.TypePlay.Tutorial:
                break;
            case BB10_MainState.TypePlay.Normal:
                //MainObjControl.Instant.nextViewerCtr.GetNewPattems();
                break;
        }

    }

    public void FadeIn()
    {
        blur.SetActive(true);
        blur.GetComponent<SpriteRenderer>().DOFade(0.75f, 0.2f);
    }

    public void FadeOut()
    {
        blur.GetComponent<UnityEngine.UI.Image>()
    .DOFade(0f, 0.2f)
    .OnComplete(() =>
    {
        blur.SetActive(false);
    });
    }

    #region Ads break

    public Action OnNeedStopAdBreak;

    public void StopWaitShowAdBreask()
    {
        OnNeedStopAdBreak?.Invoke();
    }

    #endregion
}
