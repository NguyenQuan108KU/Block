using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using UnityEngine;
#if dummy_log
public static class SonatLogRecursive
{

}
#endif
#if !dummy_log

// ReSharper disable InconsistentNaming

namespace Sonat
{
    public static class SonatLogRecursive
    {
        private static PlayerPrefRemoteArrayInt logStartLevel;
        private static PlayerPrefListInt startLevelLogged;

        public static void Log(SonatLogLevelStart levelStart)
        {
            if (logStartLevel == null)
            {
                var fireBase = Kernel.Resolve<FireBaseController>();
                //logStartLevel = fireBase.remoteConfigController.setting.LogLevelStart;
            }

            if (startLevelLogged == null)
                startLevelLogged = new PlayerPrefListInt("start_level_logged", new List<int>());

            var levelInt = levelStart.level;
//            foreach (var level in logStartLevel.Value.ToArray())
//            {
//                if (levelInt == level && !startLevelLogged.Contains(levelInt))
//                {
//                    startLevelLogged.AddDistinct(levelInt);
//                    var logEvent = $"{levelStart.mode}_start_level_{(levelInt):D4}";
//                    new CustomSonatLog(logEvent, new List<LogParameter>()).Post(true);
                    
//#if UNITY_EDITOR
//                    Debug.LogError("Log "+logEvent);
//#endif
//                    break;
//                }
//            }
        }

        private static PlayerPrefRemoteArrayInt logStartInterstitial;
        private static PlayerPrefListInt startInterstitialLogged;
        private static readonly PlayerPrefInt countInterstitial = new PlayerPrefInt("count_interstitial_showed");

        public static void Log(SonatLogShowInterstitial interstitialLog)
        {
            if (logStartInterstitial == null)
            {
                var fireBase = Kernel.Resolve<FireBaseController>();
                logStartInterstitial = fireBase.remoteConfigController.setting.LogInterstitialAdsStart;
            }

            if (startInterstitialLogged == null)
                startInterstitialLogged = new PlayerPrefListInt("start_interstitial_logged", new List<int>());
            
            countInterstitial.Value++;
            foreach (var times in logStartInterstitial.Value.ToArray())
            {
                if (countInterstitial.Value == times && !startInterstitialLogged.Contains(countInterstitial.Value))
                {
                    startInterstitialLogged.AddDistinct(countInterstitial.Value);
                    var logEvent = $"show_interstitial_times_{(countInterstitial.Value):D4}";
                    new CustomSonatLog(logEvent, new List<LogParameter>()).Post(true);
                    
#if UNITY_EDITOR
                    Debug.LogError("Log "+logEvent);
#endif
                    break;
                }
            }
        }
    }
}
// ReSharper disable InconsistentNaming
#endif