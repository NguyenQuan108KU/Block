#define dummy
//#define use_iron_source

using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Threading;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.Serialization;
using Object = System.Object;
using System.IO;
using Sonat;
#if !((dummy || global_dummy) && !use_iron_source)
using AppsFlyerSDK;

#endif

#if (dummy || global_dummy) && !use_iron_source
public class AdsInstanceIronSource : AdsInstance
{
    [SerializeField] private string sdkKey = "1660f7645";

    public override void ShowVideoAds()
    {
      //  IronSource.Agent.SetPauseGame(true);
       ////UIDebugLog.Log("Dummy : ShowVideoAds");
    }

    public override void LoadVideoAds()
    {
       ////UIDebugLog.Log("Dummy : LoadVideoAds");
    }

    public override bool IsVideoAdsReady()
    {
       ////UIDebugLog.Log("Dummy : IsVideoAdsReady");
        return false;
    }

    public override bool IsInterstitialReady()
    {
        return false;
    }

    public override void ShowInterstitial(bool isOnFocus)
    {
       
    }

    public override void CheckShowBanner()
    {
        
    }

    public override bool BannerIsShowing()
    {
        return false;
    }

    public override bool IntersIsShowing()
    {
        return false;
    }

    public override bool VideoIsShowing()
    {
        return false;
    }


    public override void DestroyBanner()
    {
    }

    public override bool IsInitialized()
    {
        return true;
    }

    public override void HideBanner()
    {
        
    }

    public override void ShowBanner()
    {
    }

    public override void HideNativeBanner()
    {
    }

    public override void ShowNativeBanner()
    {
    }

    public override bool IsNativeReady()
    {
        return false;
    }

    public override bool IsRemoteActive()
    {
        return RemoteConfigKey.mediation_platform.GetValueString() == "iron_source";
    }

    public override void RequestNewAds()
    {
        
    }
    
    public override void ShowDebugger()
    {

    }
}
#else

// ReSharper disable InconsistentNaming

public class AdsInstanceIronSource : AdsInstance
{
    [SerializeField] private string sdkKey = "1660f7645";

    private bool _initialized;

    public override bool IsInitialized()
    {
        return _initialized;
    }

    

    public override void SetupAction(int index, IntAction onInitialized, BooleanAction onVideoAdsLoaded,
        BaseAction onVideoAdsRewarded,
        BooleanAction bannerShowed, bool bannerShow,  BaseAction onPaidAd = null)
    {
        base.SetupAction(index, onInitialized, onVideoAdsLoaded, onVideoAdsRewarded, bannerShowed, bannerShow,onPaidAd);
        InitAdsInstance();
    }

    public override void ShowDebugger()
    {

    }

    void OnApplicationPause(bool isPaused)
    {
        IronSource.Agent.onApplicationPause(isPaused);
    }

    public override void RequestNewAds()
    {
        Debug.Log(nameof(RequestNewAds));

        // _bannerView?.Destroy();
        // _bannerView = null;
        showBanner = false;
        _bannerState = AdsState.NotStart;

        // _interstitial?.Destroy();
        // _interstitial = null;
        _intersState = AdsState.NotStart;

        // _rewardedAd?.Destroy();
        // _rewardedAd = null;
        _videoState = AdsState.NotStart;
        VideoLoaded.Action.Invoke(false);

        Invoke(nameof(RequestBanner), 5);
        Invoke(nameof(RequestInterstitial), 10);
        Invoke(nameof(RequestRewardedAd), 12);

        Kernel.Resolve<FireBaseController>().LogEvent(nameof(RequestNewAds));
    }

    public class AdQualitySdkInit : ISAdQualityInitCallback
    {
        public void adQualitySdkInitSuccess()
        {
            Debug.Log("unity: adQualitySdkInitSuccess");
        }

        public void adQualitySdkInitFailed(ISAdQualityInitError adQualitySdkInitError, string errorMessage)
        {
            Debug.Log("unity: adQualitySdkInitFailed " + adQualitySdkInitError + " message: " + errorMessage);
        }
    }

    void InitAdsInstance()
    {
        IronSource.Agent.SetPauseGame(true);
        IronSource.Agent.setMetaData("do_not_sell", "true");
        IronSource.Agent.setMetaData("Meta_Mixed_Audience", "true");
        IronSource.Agent.setMetaData("is_child_directed", "false");
        IronSource.Agent.setUserId(SystemInfo.deviceUniqueIdentifier);
        IronSourceEvents.onSdkInitializationCompletedEvent += HandleInitCompleteAction;
        IronSource.Agent.init(sdkKey);
        UIDebugLog.Log("InitAdsInstance");

#if UNITY_EDITOR
        HandleInitCompleteAction();
#endif

        AdQualitySdkInit adQualitySdkInit = new AdQualitySdkInit();
        ISAdQualityConfig adQualityConfig = new ISAdQualityConfig
        {
            AdQualityInitCallback = adQualitySdkInit
        };
        IronSourceAdQuality.Initialize(sdkKey, adQualityConfig);
    }


    public override void OnTrackingYes(bool value)
    {
        IronSource.Agent.setConsent(value);
        IronSourceAdQuality.SetUserConsent(true);
    }

    public override bool BannerIsShowing()
    {
        UIDebugLog.Log(_bannerState);
        return _bannerState == AdsState.Loaded;
    }

    public override bool IsRemoteActive()
    {
        return false;
    }


    public override bool IntersIsShowing()
    {
        UIDebugLog.Log(_bannerState);
        return _intersState == AdsState.Showing;
    }

    public override bool VideoIsShowing()
    {
        UIDebugLog.Log(_bannerState);
        return _videoState == AdsState.Showing;
    }

    public override void DestroyBanner()
    {
    }

    private void HandleInitCompleteAction()
    {
        _initialized = true;
        InitializedEvent.Action.Invoke(_index);
        IronSourceEvents.onImpressionDataReadyEvent += ImpressionDataReadyEvent;
        UIDebugLog.Log("ironSourced : _initialized");
        //#if !UNITY_EDITOR
        RequestBanner();
        //#endif
        _requestInterstitial = StartCoroutine(wait(2, RequestInterstitial));
        _requestReward = StartCoroutine(wait(5, RequestRewardedAd));

        StartCoroutine(wait(10, () =>
        {
            UIDebugLog.Log("IronSource.Agent.validateIntegration()");
            IronSource.Agent.validateIntegration();
        }));
    }

  

    IEnumerator wait(float time, Action action)
    {
        yield return new WaitForSeconds(time);
        action.Invoke();
    }

    private bool _initCallBackBanner;

    private void RequestBanner()
    {
        //            MaxSdkCallbacks.Banner.OnAdExpandedEvent    += OnBannerAdExpandedEvent;
        //            MaxSdkCallbacks.Banner.OnAdCollapsedEvent   += OnBannerAdCollapsedEvent;

        if (!Kernel.IsInternetConnection())
        {
            UIDebugLog.Log("AdsInstanceAdmob: RequestInterstitial failed no Internet");
            HandleBannerAdFailedToLoadNoInternet();
            return;
        }

        if (!showBanner)
        {
            _bannerState = AdsState.NotStart;
            return;
        }

        if (_requestBanner != null)
            StopCoroutine(_requestBanner);
        if (_initialized)
        {
            UIDebugLog.Log("RequestBanner");
            IronSource.Agent.loadBanner(IronSourceBannerSize.SMART, IronSourceBannerPosition.BOTTOM);
            //            MaxSdkCallbacks.Banner.OnAdLoadedEvent      += OnBannerAdLoadedEvent;
            //            MaxSdkCallbacks.Banner.OnAdLoadFailedEvent  += OnBannerAdLoadFailedEvent;
            //            MaxSdkCallbacks.Banner.OnAdClickedEvent     += OnBannerAdClickedEvent;
            //            MaxSdkCallbacks.Banner.OnAdRevenuePaidEvent += OnBannerAdRevenuePaidEvent;
            //            MaxSdkCallbacks.Banner.OnAdExpandedEvent    += OnBannerAdExpandedEvent;
            //            MaxSdkCallbacks.Banner.OnAdCollapsedEvent   += OnBannerAdCollapsedEvent;

            if (!_initCallBackBanner)
            {
                _initCallBackBanner = true;
                IronSourceEvents.onBannerAdLoadedEvent += HandleBannerAdLoaded;
                IronSourceEvents.onBannerAdLoadFailedEvent += HandleBannerAdFailedToLoad;
                IronSourceEvents.onBannerAdClickedEvent += OnBannerAdClickedEvent;
                //                IronSourceEvents.onBannerAdScreenPresentedEvent += () => AdsManager.BannerOpened = true;
                //                IronSourceEvents.onBannerAdScreenDismissedEvent += () => StartCoroutine(WaitBannerFalse());
                //                IronSourceEvents.onBannerAdLeftApplicationEvent += () => AdsManager.AppLeaving = true;

                IronSourceEvents.onBannerAdScreenPresentedEvent += HandlerBannerAdScreenPresentedEvent;
                IronSourceEvents.onBannerAdScreenDismissedEvent += HandlerBannerAdScreenDismissedEvent;
                IronSourceEvents.onBannerAdLeftApplicationEvent += HandlerBannerAdLeftApplicationEvent;
            }

            _bannerState = AdsState.Requesting;
            UIDebugLog.Log("RequestBanner2");
        }
    }

    private void OnBannerAdClickedEvent()
    {
        UIDebugLog.Log(nameof(OnBannerAdClickedEvent));
        AdsManager.BannerOpened = true;
    }


    private void HandlerBannerAdLeftApplicationEvent()
    {
        UIDebugLog.Log(nameof(HandlerBannerAdLeftApplicationEvent));
        AdsManager.AppLeaving = true;
    }

    private void HandlerBannerAdScreenDismissedEvent()
    {
        UIDebugLog.Log(nameof(HandlerBannerAdScreenDismissedEvent));
        StartCoroutine(WaitBannerFalse());
    }

    private void HandlerBannerAdScreenPresentedEvent()
    {
        UIDebugLog.Log(nameof(HandlerBannerAdScreenPresentedEvent));
        AdsManager.BannerOpened = true;
    }


    IEnumerator WaitBannerFalse()
    {
        yield return new WaitForSeconds(3);
        AdsManager.BannerOpened = false;
    }

    private void ImpressionDataReadyEvent(IronSourceImpressionData impressionData)
    {
        string allData = impressionData.allData;
        string adNetwork = impressionData.adNetwork;
        double? revenue = impressionData.revenue;
        UIDebugLog.Log(
            $"duong ImpressionDataReadyEvent \n impressionData.adNetwork{impressionData.adNetwork} \n allData{allData}");
        if (revenue != null)
        {
            SonatAnalyticTracker.LogRevenue(AdsPlatform.ironsource, adNetwork, revenue.Value,
                impressionData.precision, AdTypeLog.undefined, Kernel.Resolve<FireBaseController>().FirebaseInstanceId,
                "undefined");
        }
    }

    public void LogFirebaseRevenue(string platform, string adNetwork, double revenue, string precision,
        string adType, string currencyCode = "USD")
    {
        Firebase.Analytics.Parameter[] LTVParameters =
        {
            new Firebase.Analytics.Parameter("valuemicros", revenue * 1000000f),
            new Firebase.Analytics.Parameter("value", (float) revenue),
            // These values below won’t be used in ROAS recipe.
            // But log for purposes of debugging and future reference.
            new Firebase.Analytics.Parameter("currency", currencyCode),
            new Firebase.Analytics.Parameter("precision", precision),
            new Firebase.Analytics.Parameter("ad_format", adType),
            new Firebase.Analytics.Parameter("ad_source", adNetwork),
            new Firebase.Analytics.Parameter("ad_platform", platform),
            //new Firebase.Analytics.Parameter("adunitid", adUnitId),
            //new Firebase.Analytics.Parameter("network", this.rewardedAd.MediationAdapterClassName())
        };
        Firebase.Analytics.FirebaseAnalytics.LogEvent("paid_ad_impression", LTVParameters);
    }

    private bool _initCallBackInters;

    private void RequestInterstitial()
    {
        UIDebugLog.Log(nameof(RequestInterstitial));
        if (!Kernel.IsInternetConnection())
        {
            UIDebugLog.Log("AdsInstanceAdmob: RequestInterstitial failed no Internet");
            HandleOnInterstitialAdFailedNoInternet();
            return;
        }

        _intersState = AdsState.Requesting;
        if (_requestInterstitial != null)
            StopCoroutine(_requestInterstitial);
        IronSource.Agent.loadInterstitial();
        if (!_initCallBackInters)
        {
            _initCallBackInters = true;
            IronSourceEvents.onInterstitialAdReadyEvent += HandleOnInterstitialAdLoaded;
            IronSourceEvents.onInterstitialAdLoadFailedEvent += HandleOnInterstitialAdFailedToLoad;
            IronSourceEvents.onInterstitialAdShowSucceededEvent += HandleInterOpeningEvent;
            IronSourceEvents.onInterstitialAdShowFailedEvent += HandleOnInterstitialAdFailedToShow;
            //   IronSourceEvents.onInterstitialAdClickedEvent += () => AdsManager.AppLeaving = true;
            IronSourceEvents.onInterstitialAdOpenedEvent += HandleOnInterstitialAdOpened;
            IronSourceEvents.onInterstitialAdClosedEvent += HandleOnInterstitialAdClosed;

            //            MaxSdkCallbacks.Interstitial.OnAdLoadedEvent += HandleOnInterstitialAdLoaded;
            //            MaxSdkCallbacks.Interstitial.OnAdLoadFailedEvent += HandleOnInterstitialAdFailedToLoad;
            //            MaxSdkCallbacks.Interstitial.OnAdDisplayedEvent += HandleInterOpeningEvent;
            //            //   MaxSdkCallbacks.Interstitial.OnAdClickedEvent += HandleOnInterstitialAdClosed;
            //            MaxSdkCallbacks.Interstitial.OnAdHiddenEvent += HandleOnInterstitialAdClosed;
            //            MaxSdkCallbacks.Interstitial.OnAdDisplayFailedEvent += HandleOnInterstitialAdFailedToShow;
            //            MaxSdkCallbacks.Interstitial.OnAdRevenuePaidEvent += HandleInterstitialAdPaidEvent;
        }
    }

    private bool _initCallBackReward;

    public void RequestRewardedAd()
    {
        UIDebugLog.Log(": RequestRewardedAd");
        if (!Kernel.IsInternetConnection())
        {
            UIDebugLog.Log("AdsInstanceAdmob: RequestInterstitial failed no Internet");
            HandleOnRewardAdFailedToLoadNoInternet();
            return;
        }

        _videoState = AdsState.Requesting;
        if (_requestReward != null)
            StopCoroutine(_requestReward);
        IronSource.Agent.loadRewardedVideo();

        if (!_initCallBackReward)
        {
            _initCallBackReward = true;
            IronSourceEvents.onRewardedVideoAdReadyEvent += HandleRewardedAdLoaded;
            IronSourceEvents.onRewardedVideoAdLoadFailedEvent += HandleOnRewardAdFailedToLoad;

            IronSourceEvents.onRewardedVideoAdOpenedEvent += HandleVideoAdOpenedEvent;
            //            IronSourceEvents.onRewardedVideoAdClickedEvent += RewardedVideoAdClickedEvent;
            IronSourceEvents.onRewardedVideoAdClosedEvent += HandleRewardedAdClosed;
            //            IronSourceEvents.onRewardedVideoAvailabilityChangedEvent += RewardedVideoAvailabilityChangedEvent;
            //            IronSourceEvents.onRewardedVideoAdStartedEvent += RewardedVideoAdStartedEvent;
            //            IronSourceEvents.onRewardedVideoAdEndedEvent += RewardedVideoAdEndedEvent;
            IronSourceEvents.onRewardedVideoAdRewardedEvent += OnAdReceivedRewardEvent;
            IronSourceEvents.onRewardedVideoAdShowFailedEvent += OnAdDisplayFailedEvent;

            //            MaxSdkCallbacks.Rewarded.OnAdLoadedEvent += HandleRewardedAdLoaded;
            //            MaxSdkCallbacks.Rewarded.OnAdLoadFailedEvent += HandleOnRewardAdFailedToLoad;
            //            MaxSdkCallbacks.Rewarded.OnAdDisplayedEvent += HandleVideoAdOpeningEvent;
            //            MaxSdkCallbacks.Rewarded.OnAdClickedEvent += Handler;
            //            MaxSdkCallbacks.Rewarded.OnAdRevenuePaidEvent += HandleVideoAdPaidEvent;
            //            MaxSdkCallbacks.Rewarded.OnAdHiddenEvent += HandleRewardedAdClosed;
            //            MaxSdkCallbacks.Rewarded.OnAdDisplayFailedEvent += OnAdDisplayFailedEvent;
            //            MaxSdkCallbacks.Rewarded.OnAdReceivedRewardEvent += OnAdReceivedRewardEvent;
        }
    }


  

    private AdsState _bannerState;
    private AdsState _intersState;
    private AdsState _videoState;

    public override void CheckShowBanner()
    {
        switch (_bannerState)
        {
            case AdsState.Requesting:
                break;
            case AdsState.Failed:
                RequestBanner();
                break;
            case AdsState.Loaded:
                break;
            case AdsState.Showing:
                break;
            case AdsState.Closed:
                break;
            case AdsState.NotStart:
                RequestBanner();
                break;
            default:
                throw new ArgumentOutOfRangeException();
        }
    }


    private void HandleVideoAdOpenedEvent()
    {
        _videoState = AdsState.Showing;
        AdsManager.VideoOpened = true;
        //        if (RxKernel.Instance != null && !GameRoot.Instance.Pause.Value)
        //            Time.timeScale = 0f;
    }

    private void HandleInterOpeningEvent()
    {
        _intersState = AdsState.Showing;
        //        if (RxKernel.Instance != null && !GameRoot.Instance.Pause.Value)
        //            Time.timeScale = 0f;
    }

    //    private void OnApplicationPause(bool pause)
    //    {
    //        UIDebugLog.Log(""+nameof(OnApplicationPause) + " !pause"+!pause+" "+_earned);
    //        if (_earned && !pause)
    //        {
    //            UIDebugLog.Log(""+nameof(OnApplicationPause) + " "+(OnVideoAdsFinishedEvent != null));
    //            OnVideoAdsFinishedEvent?.Invoke();
    //            _earned = false;
    //        }
    //    }

    private float _lastTimeFocus;

    void OnApplicationFocus(bool hasFocus)
    {
        if (hasFocus)
        {
            if (Time.realtimeSinceStartup - _lastTimeFocus > 30 * 60)
            {
                RequestBanner();

                _requestInterstitial = StartCoroutine(wait(2, RequestInterstitial));
                _requestReward = StartCoroutine(wait(5, RequestRewardedAd));
            }

            _lastTimeFocus = Time.realtimeSinceStartup;
        }
    }

    #region Banner callback handlers

    public void HandleBannerAdLoaded()
    {
        UIDebugLog.Log("Banner loaded");
        _bannerState = AdsState.Loaded;
        IronSource.Agent.displayBanner();
        _bannerState = AdsState.Showing;

        //        float height = _bannerView.GetHeightInPixels();
        //        if (ScreenRoot.Instance != null)
        //        {
        //            //            ScreenRoot.Instance.AdaptivePanel.Height = height;
        //            //            FPSDisplay.Message = height.ToString(CultureInfo.InvariantCulture);
        //#if UNITY_ANDROID
        //            var rectTransform = ScreenRoot.Instance.adaptivePanel.rectTransform;
        //            var size = rectTransform.sizeDelta;
        //            size.y = height * 1.1f;
        //            rectTransform.sizeDelta = size;
        //            ScreenRoot.Instance.canvasForAdaptive.gameObject.SetActive(true);
        //#endif
        //            ScreenRoot.Instance.canvasForAdaptive.gameObject.SetActive(true);
        //        }
    }

    int _retryBannerAttempt;
    private Coroutine _requestBanner;


    public void HandleBannerAdFailedToLoadNoInternet()
    {
        _bannerState = AdsState.Failed;
        _retryBannerAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(_retryBannerAttempt, 3, 7));
        _requestBanner = StartCoroutine(wait((float) retryDelay, RequestBanner));
        UIDebugLog.Log("" + nameof(HandleBannerAdFailedToLoadNoInternet) + " retryDelay-" + retryDelay);
    }

    public void HandleBannerAdFailedToLoad(IronSourceError args)
    {
        _bannerState = AdsState.Failed;
        //        if (ScreenRoot.Instance != null)
        //            ScreenRoot.Instance.canvasForAdaptive.gameObject.SetActive(false);

        _retryBannerAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(_retryBannerAttempt, 3, 7));
        //        _bannerView?.Destroy();
        //        _bannerView = null;

        _requestBanner = StartCoroutine(wait((float) retryDelay, RequestBanner));

        UIDebugLog.Log("" + nameof(HandleBannerAdFailedToLoad) + " retryDelay-" + retryDelay + " :" +
                       args.getDescription());
    }

    public void HandleBannerAdOpened()
    {
        //        AdsManager.BannerShowed = true;
        //        if (ScreenRoot.Instance != null)
        //            ScreenRoot.Instance.canvasForAdaptive.gameObject.SetActive(false);
        UIDebugLog.Log("" + nameof(HandleBannerAdOpened) + " event received");
    }

    public void HandleBannerAdClosed()
    {
        RequestBanner();
        UIDebugLog.Log("" + nameof(HandleBannerAdClosed) + " event received");
        //        UIRoot.Instance?.AdaptivePanel.SetDefault();
        //        if (ScreenRoot.Instance != null)
        //            ScreenRoot.Instance.canvasForAdaptive.gameObject.SetActive(false);
    }

    public void HandleAdLeftApplication()
    {
        UIDebugLog.Log("" + nameof(HandleBannerAdClosed) + " event received");
    }

    public override void HideBanner()
    {
//        OnBannerShow.Action.Invoke(false);
//        if (_bannerState == AdsState.Loaded)
//        {
//            _bannerView?.Hide();
//            _bannerState = AdsState.Hidden;
//        }
    }

    public override void ShowBanner()
    {
//        if (_bannerState == AdsState.Hidden)
//        {
//            OnBannerShow.Action.Invoke(true);
//            _bannerView?.Show();
//            _bannerState = AdsState.Loaded;
//        }
//        else
//        {
//            OnBannerShow.Action.Invoke(false);
//        }
    }

    public override void HideNativeBanner()
    {
//        if (_nativeBannerState == AdsState.Loaded)
//        {
//            _nativeBannerView?.Hide();
//            _nativeBannerState = AdsState.Hidden;
//        }
    }

    public override void ShowNativeBanner()
    {
//        if (_nativeBannerState == AdsState.Hidden)
//        {
//            _nativeBannerView?.Show();
//            _nativeBannerState = AdsState.Loaded;
//        }
    }

    public override bool IsNativeReady()
    {
        return false;
    }

    #endregion

    #region Rewarded

    private bool _earned;

    int _retryRewardAttempt;
    private Coroutine _requestReward;
    private Coroutine _requestInterstitial;


    private void HandleOnRewardAdFailedToLoadNoInternet()
    {
        _retryRewardAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(_retryRewardAttempt, 3, 7));
        UIDebugLog.Log("" + nameof(HandleOnRewardAdFailedToLoadNoInternet) + " retryDelay-" + retryDelay);
        _requestReward = StartCoroutine(wait((float) retryDelay, RequestRewardedAd));
    }


    private void HandleOnRewardAdFailedToLoad(IronSourceError errorInfo)
    {
        _retryRewardAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(_retryRewardAttempt, 3, 7));
        UIDebugLog.Log("" + nameof(HandleOnRewardAdFailedToLoad) + " retryDelay-" + retryDelay + " :" +
                       errorInfo.getDescription());
        // _requestInterstitial = StartCoroutine(wait(2, RequestInterstitial, false));
        _requestReward = StartCoroutine(wait((float) retryDelay, RequestRewardedAd));
    }


    private void OnAdDisplayFailedEvent(IronSourceError errorInfo)
    {
        _retryRewardAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(_retryRewardAttempt, 3, 7));
        UIDebugLog.Log(nameof(OnAdDisplayFailedEvent) + " retryDelay-" + retryDelay + " :" +
                       errorInfo.getDescription());

        _requestReward = StartCoroutine(wait((float) retryDelay, RequestRewardedAd));
    }

    public void HandleRewardedAdClosed()
    {
        UIDebugLog.Log("" + nameof(HandleRewardedAdClosed) + " _earned " + _earned);
        _videoState = AdsState.Closed;
        if (_earned)
        {
#if UNITY_IOS
            VideoRewarded?.Action.Invoke();
            _earned = false;
#endif
        }

        _requestReward = StartCoroutine(wait((float) .5f, RequestRewardedAd));
        StartCoroutine(waitToRewardFalse());
    }


    IEnumerator waitToRewardFalse()
    {
        yield return new WaitForSeconds(3);
        AdsManager.VideoOpened = false;
    }

    private void HandleRewardedAdLoaded()
    {
        _retryRewardAttempt = 1;
        UIDebugLog.Log("" + nameof(HandleRewardedAdLoaded) + " - Rewarded video loaded:" + IsVideoAdsReady());
        VideoRewarded?.Action.Invoke();
    }

    private void OnAdReceivedRewardEvent(IronSourcePlacement placement)
    {
        UIDebugLog.Log(nameof(OnAdReceivedRewardEvent));
#if UNITY_ANDROID
        // _earned = true;
        VideoRewarded?.Action.Invoke();
#else
        VideoRewarded?.Action.Invoke();
#endif
    }


    public override void ShowVideoAds()
    {
        if (IsVideoAdsReady())
        {
            IronSource.Agent.showRewardedVideo();
            _earned = false;
        }
    }

    public override void LoadVideoAds()
    {
        // load video should be handle internal
        //        if (!rewardedAd.IsLoaded())
        //            RequestRewardedAd();
    }

    public override bool IsVideoAdsReady()
    {
        return IronSource.Agent.isRewardedVideoAvailable();
    }

    #endregion

    #region interstitial

    public override bool IsInterstitialReady()
    {
        return IronSource.Agent.isInterstitialReady();
    }

    public override void ShowInterstitial(bool isOnFocus)
    {
        //if (!PlayerPrefsX.GetBool("PurchasedUser"))
        //{
        if (IsInterstitialReady())
        {
            IronSource.Agent.showInterstitial();
        }

        //else
        //    LoadInterstitial();
        //}
    }

    int retryIntersAttempt;

    private void HandleOnInterstitialAdLoaded()
    {
        retryIntersAttempt = 1;
        //        interstitialAdapter = adInfo.NetworkName;
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdLoaded) + " event received");
    }

    private void HandleOnInterstitialAdFailedNoInternet()
    {
        retryIntersAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(retryIntersAttempt, 3, 8));
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdFailedNoInternet) + " reload in:" + retryDelay);
        _requestInterstitial = StartCoroutine(wait((float) retryDelay, RequestInterstitial));
    }

    private void HandleOnInterstitialAdFailedToLoad(IronSourceError err)
    {
        retryIntersAttempt++;
        double retryDelay = Math.Pow(2, Mathf.Clamp(retryIntersAttempt, 3, 8));
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdFailedToLoad) + " event received with message: (" +
                       (float) retryDelay +
                       ") " + err.getDescription());

        _requestInterstitial = StartCoroutine(wait((float) retryDelay, RequestInterstitial));
    }

    private void HandleOnInterstitialAdFailedToShow(IronSourceError err)
    {
        RequestInterstitial();
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdFailedToShow) + " event received with message: " +
                       err.getDescription());
    }

    public void HandleOnInterstitialAdOpened()
    {
        AdsManager.OpenAdsOrInterstitialOpened = true;
        //        FireBaseController.LogEvent("interstitial", new[]
        //        {
        //            new LogParameter("event", "opened")
        //        });
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdOpened) + " event received");
    }

    public void HandleOnInterstitialAdClosed()
    {
        _intersState = AdsState.Closed;
        //        if (RxKernel.Instance != null && !GameRoot.Instance.Pause.Value)
        //            Time.timeScale = 1f;

        //        FireBaseController.LogEvent("interstitial", new[]
        //        {
        //            new LogParameter("event", "closed")
        //        });
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdClosed) + " event received");
        RequestInterstitial();
        StartCoroutine(waitToInterFalse());
    }

    IEnumerator waitToInterFalse()
    {
        yield return new WaitForSeconds(3);
        AdsManager.OpenAdsOrInterstitialOpened = false;
    }

    public void HandleOnInterstitialAdLeavingApplication()
    {
        AppsFlyer.sendEvent("af_ad_click", new Dictionary<string, string>()
        {
            {"af_adrev_ad_type", ""}
        });
        UIDebugLog.Log("" + nameof(HandleOnInterstitialAdLeavingApplication) + " event received");
    }

    #endregion
}
#endif