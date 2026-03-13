using System.Collections;
using System.Collections.Generic;
using Sonat;
using UnityEngine;

public static class SonatScript 
{
    public static int PlayTimes
    {
        get => PlayerPrefs.GetInt("PlayTimes");
        set => PlayerPrefs.SetInt("PlayTimes", value);
    }
    
    public static int BestScore
    {
        get => PlayerPrefs.GetInt("BestScore");
        set => PlayerPrefs.SetInt("BestScore", value);
    }

    public static void LogStartLevel()
    {
        var log = new SonatLogLevelStart()
        {
            level = PlayTimes,
            mode = "classic"
        };
        log.Post();

        Debug.Log("LogStartLevel" +log.level);
    
    }
    
    public static void LogLevelEnd(string loseCause,int playTime,int score)
    {
        if (BestScore < score)
            BestScore = score;
        var log = new SonatLogLevelEnd()
        {
            level = PlayTimes,
            mode = "classic",
            highest_score = BestScore,
            score = score,
            success = false,
            lose_cause = loseCause,
            play_time = playTime,
        };
        log.Post();
        

        Debug.Log("LogLevelEnd" +log.level);
  

    }
}
