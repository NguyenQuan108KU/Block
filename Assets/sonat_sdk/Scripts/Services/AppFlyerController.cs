#define dummy
//#define use_appflyer

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Sonat;
#if !((dummy || global_dummy) && !use_appflyer)
using Firebase.Analytics;
using AppsFlyerSDK;
using Firebase.Crashlytics;
#endif
using UnityEngine;
using UnityEngine.Serialization;

#if (dummy || global_dummy) && !use_appflyer
public class AppFlyerController : BaseService
{
    public static bool FirebaseReady { get; set; }
    public string devKey;
    public string appID_IOS;
    public bool isDebug;
    public bool getConversionData;

    protected override void Register()
    {
        base.Register();
        Initialized = true;
    }


    public void SendEvent(string eventName, Dictionary<string, string> eventValues)
    {
    }

    public void SendEvent(string eventName)
    {
    }

    public void LogAppsFlyerAdRevenue(string interstitialAdapter, double adValueValue, string banner)
    {

    }
}

#else

public class AppFlyerController : BaseService, IAppsFlyerConversionData
{

    public class Util
    {
        private static readonly string AUTO_ID_ALPHABET =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        private static readonly int AUTO_ID_LENGTH = 24;
        private static readonly System.Random rand = new System.Random();

        public static string generateSonatARMUserID()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            long unixTimeMilliseconds = now.ToUnixTimeMilliseconds();

            return unixTimeMilliseconds.ToString() + "-" + _AutoId();
        }


        private static string _AutoId()
        {
            StringBuilder builder = new StringBuilder();
            int maxRandom = AUTO_ID_ALPHABET.Length;
            for (int i = 0; i < AUTO_ID_LENGTH; i++)
            {
                builder.Append(AUTO_ID_ALPHABET[rand.Next(maxRandom)]);
            }

            return builder.ToString();
        }
    }


    public string devKey = "Ry3zd9x7iEihJdcAdRb7PX";
    public string appID_GP;
    public string appID_IOS;
    public string UWPAppID;
    public bool isDebug;

    public bool getConversionData => true;
    //******************************//

    public static string CustomerUserId
    {
        get
        {
            if (!PlayerPrefs.HasKey(nameof(CustomerUserId)))
                PlayerPrefs.SetString(nameof(CustomerUserId), Util.generateSonatARMUserID());
            return PlayerPrefs.GetString(nameof(CustomerUserId));
        }
        set => PlayerPrefs.SetString(nameof(CustomerUserId), value);
    }

    public static bool ConversionLogged
    {
        get => PlayerPrefs.GetInt(nameof(ConversionLogged)) == 1;
        set => PlayerPrefs.SetInt(nameof(ConversionLogged), value ? 1 : 0);
    }

    public static bool Firebase
    {
        get => PlayerPrefs.GetInt(nameof(ConversionLogged)) == 1;
        set => PlayerPrefs.SetInt(nameof(ConversionLogged), value ? 1 : 0);
    }

    protected override void Register()
    {
        base.Register();
        AppsFlyer.setCustomerUserId(CustomerUserId);
        // These fields are set from the editor so do not modify!
        //******************************//
        AppsFlyer.setIsDebug(isDebug);
#if UNITY_WSA_10_0 && !UNITY_EDITOR
        AppsFlyer.initSDK(devKey.RemoveWhiteSpace(), UWPAppID, getConversionData ? this : null);
#else
#if UNITY_IOS
        AppsFlyer.initSDK(devKey.RemoveWhiteSpace(), appID_IOS.RemoveWhiteSpace(), getConversionData ? this : null);
#endif
#if UNITY_ANDROID
        AppsFlyer.initSDK(devKey.RemoveWhiteSpace(), appID_GP.RemoveWhiteSpace(), getConversionData ? this : null);
#endif
#endif
        //******************************/

        AppsFlyer.startSDK();
        // AppsFlyerAdRevenue.start();
        Invoke(nameof(Initialize), 2f);
        StartCoroutine(Wait2());
    }

    void Initialize()
    {
        Initialized = true;
    }

    public void onConversionDataSuccess(string conversionData)
    {
        AppsFlyer.AFLog("didReceiveConversionData", conversionData);
        Dictionary<string, object> conversionDataDictionary = AppsFlyer.CallbackStringToDictionary(conversionData);
        if (!ConversionLogged)
        {
            Debug.Log("duong first conversionData: " + conversionData);
            StartCoroutine(Wait(conversionData));
        }

        // add deferred deeplink logic here
    }

    IEnumerator Wait2()
    {
        while (!SonatAnalyticTracker.FirebaseReady)
            yield return null;

        yield return new WaitForSeconds(3);
        FirebaseAnalytics.SetUserId(CustomerUserId);
        Crashlytics.SetUserId(CustomerUserId);
    }

    IEnumerator Wait(string conversionData)
    {
        while (!SonatAnalyticTracker.FirebaseReady)
            yield return null;

        yield return new WaitForSeconds(3);
        if (!ConversionLogged)
        {
            ConversionLogged = true;
            Debug.Log("duong: FonConversionDataSuccess" + conversionData);
            var obj2 = MiniJSON.Json.Deserialize(conversionData) as Dictionary<string, object>;

            if (obj2 != null)
            {
                List<Parameter> parameters = new List<Parameter>();
                foreach (var keyValuePair in obj2)
                    if (!(keyValuePair.Value == null || keyValuePair.Value.ToString().Length > 100))
                    {
                        var strValue = keyValuePair.Value.ToString();
                        parameters.Add(new Parameter(keyValuePair.Key, strValue, GetPrior(strValue)));
                    }

                var logs = parameters.OrderBy(pr => pr.order).Take(25).ToArray();
                Debug.Log("duong: " + string.Join(",", logs.Select(x => x.log)));
                FirebaseAnalytics.LogEvent("af_conversion_data", logs.Select(x => x.Param).ToArray());


                bool campaign_id = obj2.ContainsKey("campaign_id");
                foreach (var keyValuePair in obj2)
                    if (updateProperty.Contains(keyValuePair.Key))
                        FirebaseAnalytics.SetUserProperty(keyValuePair.Key, keyValuePair.Value.ToString());

                if (!campaign_id)
                    foreach (var keyValuePair in obj2)
                        if (keyValuePair.Key == "af_c_id")
                            FirebaseAnalytics.SetUserProperty(keyValuePair.Key, keyValuePair.Value.ToString());
            }
            else
            {
                Debug.LogError(this.name + " obj2 == null");
            }
           
        }
    }

    private string[] updateProperty = new[]
    {
        "media_source",
        "campaign_id",
      //  "af_c_id",
        "campaign",
        "af_adset_id",
        "af_adset",
        "af_ad_id",
        "af_ad",
        "af_channel",
        "af_cpi",
    };
    

    public class Parameter
    {
        public Firebase.Analytics.Parameter Param;
        public int order { get; private set; }

        public string log { get; private set; }

        public Parameter(string name, string value, int order = 0)
        {
            this.order = order;
            Param = new Firebase.Analytics.Parameter(name, value);
            log = name + "=" + value;
        }
    }

    private int GetPrior(string compare)
    {
        if (compare == "click_time "
            || compare == "af_status"
            || compare == "media_source"
            || compare == "campaign_id"
            || compare == "campaign"
            || compare == "advertising_id"
            || compare == "adgroup_id"
            || compare == "is_retargeting"
            || compare == "retargeting_conversion_type"
            || compare == "engmnt_source"
            || compare == "ts"
            || compare == "channel"
            || compare == "adset"
            || compare == "adset_id"
            || compare == "ad"
            || compare == "ad_id"
            || compare == "ad_type"
            || compare == "dma")
            return 0;

        if (compare.StartsWith("af_sub")
            || compare.StartsWith("iscache")
            || compare.StartsWith("af_r")
            || compare.StartsWith("is_universal_link")
            || compare.StartsWith("af_click_lookback")
            || compare.StartsWith("is_incentivized")
        )
            return 1;

        if (compare == "clickid"
            || compare == "match_type"
            || compare == "is_branded_link"
            || compare == "af_r"
            || compare == "http_referrer "
        )
            return 2;
        return 0;
    }


    public void onConversionDataFail(string error)
    {
        AppsFlyer.AFLog("didReceiveConversionDataWithError", error);
    }

    public void onAppOpenAttribution(string attributionData)
    {
        AppsFlyer.AFLog("onAppOpenAttribution", attributionData);
        Dictionary<string, object> attributionDataDictionary = AppsFlyer.CallbackStringToDictionary(attributionData);
        // add direct deeplink logic here
    }

    public void onAppOpenAttributionFailure(string error)
    {
        AppsFlyer.AFLog("onAppOpenAttributionFailure", error);
    }


    public void SendEvent(string eventName, Dictionary<string, string> eventValues)
    {
        AppsFlyer.sendEvent(eventName, eventValues);
    }

    public void SendEvent(string eventName)
    {
        Dictionary<string, string> eventValues = new Dictionary<string, string>();
        AppsFlyer.sendEvent(eventName, eventValues);
    }

//
//    public void LogAppsFlyerAdRevenue(string networkName, double revenue, string adType, string currencyCode = "USD",
//        AppsFlyerAdRevenueMediationNetworkType networkType = AppsFlyerAdRevenueMediationNetworkType
//            .AppsFlyerAdRevenueMediationNetworkTypeGoogleAdMob)
//    {
//        SonatAnalyticTracker.LogAppsFlyerAdRevenue(SonatTrackingHelper.GetNetworkName(adapter,platform), revenue, adType, currencyCode, networkType);
//    }
}

#endif
