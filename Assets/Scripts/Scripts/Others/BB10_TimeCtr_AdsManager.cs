using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_TimeCtr_AdsManager : MonoBehaviour
{
    public float durationPlay;
    public bool isPaused;
    static float timeStamp = 0;
   
    public void LogDurationPlay(string loseCause)
    {
        if (!isPaused)
        {
            //int timePlay = BB10_Settings.GetTimePlayForDuration;
            //BB10_Settings.SetTimePlayForDuration(timePlay + 1);
            //int timer = Mathf.RoundToInt(Time.time - durationPlay);
            //float durationAvg = ((timePlay * BB10_Settings.GetDuration_Avg) + timer) / (float)(timePlay + 1);
            //BB10_Settings.SetDuration_Avg(Mathf.RoundToInt(durationAvg));
            //Debug.Log("duration : " + timer);
            //Debug.Log("durationAvg : " + durationAvg);
        }
    }

    public IEnumerator MoveLight(float loadingTime = 2f)
    {
        float timer = 0;
        while(timer < loadingTime)
        {
            timer += Time.deltaTime;
            light.MoveLocal(timer / loadingTime);

            yield return null;
        }
    }

    public float timeToLoading = 1f;
    public GameObject loading;
    public MoveLerp light;

    public bool notFocus;
    
//    protected override void OnApplicationFocus(bool hasFocus)
//    {
//        if(notFocus)
//            return;
//        if (IsAdsOpened()) /*|| BB10_FanManager.didClick*/
//            return;

//        if (BB10_Settings.GetTimePlay < FireBaseController2.levels_display_fullscreen_ads_value)
//        {
//            Debug.Log("not show inters 1: "+BB10_Settings.GetTimePlay +"<"+ FireBaseController2.levels_display_fullscreen_ads_value);
//            return;
//        }

//        if (AppLeaving > 0)
//            return;

////        float currentTime = Time.unscaledTime;
////        float deltaTime = currentTime - timeStamp;
////
////        if (deltaTime < FireBaseController2.time_display_fullscreen_ads_value)
////        {
////            Debug.Log("not show inters 2: "+deltaTime +"<"+ FireBaseController2.time_display_fullscreen_ads_value);
////            return;
////        }
            
////        timeStamp = currentTime;

//        int rand = UnityEngine.Random.Range(0, (int) (FireBaseController2.home_ads_ratio_value
//                                                      + FireBaseController2.mobile_network_ads_ratio_value));

//        if ((rand < FireBaseController2.home_ads_ratio_value) && BB10_MainState.state == BB10_MainState.State.Ingame
//                                                              && BB10_SmartMoreAppHandler.instance
//                                                                  .CheckToShowSmartMoreApp())
//        {
//            //if(MoreAppController.instance.isLoaded)
//            //{
//            Debug.Log("not show inters show more app");
//            BB10_SmartMoreAppHandler.instance.ShowSmartMoreApp();
//            BB10_MainState.state = BB10_MainState.State.MoreApp;
//        }
//        else
//        {
//            if (FireBaseController2.display_intertitial_ads_value && IsInterstitialAdsReady())
//                base.OnApplicationFocus(hasFocus);
//            else
//            {
//                Debug.Log(" show more app");
//            }
//        }
//    }
}
