using DG.Tweening;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class BB10_LostScript : MonoBehaviour
{
    public Text scoreText;
    public Text bestText;
    public CanvasGroup group;
    public bool isAuto;
    public BB10_CupShaker cupShaker;
    //public GameObject starEffecrt;
    //public GameObject starFullImage;
    //public GameObject newObj;
    int score;
    IEnumerator AnimSoundLoop;
    bool scoreCounting;

    public const string SCORE_TOTAL_KEY = "SCORE_TOTAL_KEY";
    public const string POST_SCORE_NUMBER_KEY = "POST_SCORE_NUMBER_KEY";

    public GameObject listViewAdsPannel;

    public void Preload()
    {
        group.gameObject.SetActive(false);
        //starEffecrt.SetActive(false);

    }

    public void Reset()
    {
        scoreText.text = "0";
        group.gameObject.SetActive(false);
        //newObj.SetActive(false);
        //starFullImage.SetActive(false);
    }

    bool checkToRate = false;
    IEnumerator WaitSwitch(bool isGray)
    {
        if (isGray)
        {
            yield return new WaitForSeconds(0.3f);
            BB10_MainObjControl.Instant.grid.GrayScaleMap(true);
            yield return new WaitForSeconds(3.2f);
        }
        else
        {
            yield return new WaitForSeconds(0.3f);
        }

        //if((PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) == 0)
        //    && (BB10_Settings.GetTimePlay % FireBaseController2.number_play_to_popup_rate_value) == 0)
        //{
        //    //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
        //    checkToRate = true;
        //}
        //else
        //{
        //    checkToRate = false;
        //    BB10_AdsManager.bricks_adm.ShowIntertitial("GameOver");
        //}

        //StartCoroutine(EffectControl.FadeOutSprite(MainCanvas.Main.inGameScript.bgGrid, 1));
        BB10_MainCanvasUI.Main.faderScript.SwichPanelFix(BB10_MainCanvasUI.Main.inGameScript.group, group, new BB10_FaderHandler.Callback0(AnimScore));
        // Kernel.Resolve<AdsManager>().ShowMrecBanner();
    }

    void AnimScore()
    {
        StartCoroutine(ScoreUpAnim());
        //AnimSoundLoop = AnimSound();
        //StartCoroutine(AnimSoundLoop);
    }

    private static bool fistGameOver = true;
    public void GameOver(bool isGray)
    {
        // hide banner ads
        //AdManager.HideBanner();

        BB10_Settings.SetContinue(0);

        if (!fistGameOver)
        {
            //listAds.ResetPositionListViewAds();
        }
        else
        {
            fistGameOver = false;
        }

        group.gameObject.SetActive(true);

        group.alpha = 0;
        if (isGray)
        {
            //MainAudio.Main.PlaySound(TypeAudio.SoundLose);
        }

        if (isAuto)
        {
            BB10_MainState.SetState(BB10_MainState.State.GameOver);
        }
        else
        {
            BB10_MainState.SetState(BB10_MainState.State.Waiting);
        }

        // log duration play game
        //score = BB10_MainCanvasUI.Main.inGameScript.scoreInt;

        int postNumber = PlayerPrefs.GetInt(POST_SCORE_NUMBER_KEY, 0);
        postNumber++;

        long scoreTotal = long.Parse(PlayerPrefs.GetString(SCORE_TOTAL_KEY, "0"));
        scoreTotal += score;

        int score_avg = (int)(scoreTotal / postNumber);

        //Kernel.Resolve<FireBaseController>().LogEvent(
        //Firebase.Analytics.FirebaseAnalytics.EventPostScore,
        //Firebase.Analytics.FirebaseAnalytics.ParameterScore, score);

        //Kernel.Resolve<FireBaseController>().LogEvent(Firebase.Analytics.FirebaseAnalytics.EventPostScore, "score_avg", score_avg);

        //PlayerPrefs.SetInt(POST_SCORE_NUMBER_KEY, postNumber);
        //PlayerPrefs.SetString(SCORE_TOTAL_KEY, scoreTotal.ToString());

        //SetBestScore();
        //StartCoroutine(WaitSwitch(isGray));
    }




    IEnumerator ScoreUpAnim()
    {
        int current = 0;
        int unit = Mathf.Max(1, (int)score / 25);

        while (current < score)
        {
            yield return new WaitForSeconds(0.04f);
            current = Mathf.Min(score, current + unit);
            SetScore(current);
            //MainAudio.Main.PlaySound(TypeAudio.SoundScore);
        }

        SetScore(score);

        //StopCoroutine(AnimSoundLoop);
        //scoreCounting = false;
        //MainAudio.Main.StopySound(TypeAudio.SoundScore);

        //starEffecrt.SetActive(true);
        StartCoroutine(WaitState());
    }

    //IEnumerator AnimSound()
    //{
    //    scoreCounting = true;
    //    while (true)
    //    {
    //        MainAudio.Main.PlaySound(TypeAudio.SoundScore);
    //        yield return new WaitForSeconds(0.055f);
    //    }
    //}

    IEnumerator WaitState()
    {
        yield return new WaitForSeconds(0.1f);

        //starFullImage.SetActive(true);

        //MainAudio.Main.PlaySound(TypeAudio.SoundBoom);
        //yield return new WaitForSeconds(0.1f);
        cupShaker.StartShake();
        yield return new WaitForSeconds(0.5f);
        BB10_MainState.state = BB10_MainState.State.GameOver;

        //if((PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) == 0)
        //    && (BB10_Settings.GetTimePlay % FireBaseController2.number_play_to_popup_rate_value) == 0)
        //{
        //    BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
        //}

        // For test
        //Bricks_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
    }

    public void TryAgainButton()
    {
        if (BB10_MainState.state == BB10_MainState.State.GameOver)
        {
            Debug.Log("newSession: " + BB10_MainCanvasUI.newSession);
            //if(MainCanvas.newSession && (!FireBaseController.display_intertitial_before_value &&
            //    (FireBaseController.display_intertitial_after_value
            //    || ((SG_AdManager.ads.intertitialType == SG_AdManager.TypeAd.FAN) 
            //    && FanAdsManager.isIntertitialLoaded))))
            //{
            //    MainCanvas.newSession = false;

            //    SG_AdManager.ads.ShowIntertitial();
            //}

            //starEffecrt.SetActive(false);

            // Kernel.Resolve<AdsManager>().HideMrecBanner();

            if (PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) == 0)
            {
                //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                checkToRate = true;
                NextGame();
            }
            else
            {
                checkToRate = false;
            }
        }
    }

    private void NextGame()
    {
        BB10_MainCanvasUI.Main.faderScript.Fade(MidleTryAgain);
        DOVirtual.DelayedCall(1f, () =>
        {
            if (checkToRate)
            {
                //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                checkToRate = false;
            }
        });
    }

    public void MidleTryAgain()
    {
        //MainAudio.Main.StopySound(TypeAudio.SoundScore);
        //if (scoreCounting)
        //{
        //    StopCoroutine(AnimSoundLoop);
        //    scoreCounting = false;
        //}
        BB10_MainObjControl.Instant.grid.SetAllBlock();
        BB10_MainObjControl.Instant.nextViewerCtr.SetAllBlock();
        BB10_MainObjControl.Instant.planeViewCrt.SetAllBlock();
        BB10_MainObjControl.Instant.helpCtr.HideAllBlock();

        BB10_MainCanvasUI.Main.faderScript.FadeInPanel(BB10_MainCanvasUI.Main.inGameScript.group, null);
        BB10_MainCanvasUI.Main.Reset(true);

        BB10_MainState.SetState(BB10_MainState.State.Ingame);
    }

    public void SetActive(bool isActive)
    {
        group.gameObject.SetActive(isActive);
    }

    public void SetScore(int score)
    {
        scoreText.text = score.ToString();
    }

    public void SetBestScore()
    {
        //int lastBest = BB10_MainCanvasUI.Main.inGameScript.bestInt;
        //int best = Mathf.Max(lastBest, score);
        //if (lastBest < score)
        //{
        //    //newObj.SetActive(true);
        //}

        //BB10_Settings.SetBest(best);
        //bestText.text = best.ToString();
    }

    //public void RateClick()
    //{
    //    Rate();
    //}

//    public static string GetRateLink()
//    {
//#if UNITY_IPHONE
//        return "https://apps.apple.com/us/app/fun-block-brick-puzzle/id1508942891";
//#elif UNITY_WP8
//        return "";
//#else
//        return ("https://play.google.com/store/apps/details?id=" + Application.identifier);
//#endif
//    }

    //public static void Rate()
    //{
    //    Application.OpenURL(GetRateLink());
    //}
}
