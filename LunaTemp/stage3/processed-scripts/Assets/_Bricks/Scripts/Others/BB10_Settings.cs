using UnityEngine;
using System.Collections;

public class BB10_Settings
{
    public static bool HasKey(string key)
    {
        return PlayerPrefs.HasKey(key);
    }

    public static void SetBest(int value)
    {
        PlayerPrefs.SetInt("best", value);
    }

    public static int GetBest
    {
        get
        { 
            if (!BB10_Settings.HasKey("best"))
            {
                BB10_Settings.SetBest(0);
            }
            return PlayerPrefs.GetInt("best"); 
        }
    }                   
                 
    public static void SetLevel(int value)
    {
        PlayerPrefs.SetInt("level", value);
    }

    public static int GetLevel
    {
        get
        { 
            if (!BB10_Settings.HasKey("level"))
            {
                BB10_Settings.SetLevel(1);
            }
            return PlayerPrefs.GetInt("level"); 
        }
    }

    //-------------------------------------------

    public static void SetMaxLevel(int value)
    {
        PlayerPrefs.SetInt("maxlevel", value);
    }

    public static int GetMaxLevel
    {
        get
        { 
            if (!BB10_Settings.HasKey("maxlevel"))
            {
                BB10_Settings.SetMaxLevel(1);
            }
            return PlayerPrefs.GetInt("maxlevel"); 
        }
    }






	//-------------------------------------------

	public static void SetDuration_Avg(int value)
	{
		PlayerPrefs.SetInt("durationavg", value);
	}

	public static int GetDuration_Avg
	{
		get
		{
			if (!BB10_Settings.HasKey("durationavg"))
			{
				BB10_Settings.SetDuration_Avg(0);
			}
			return PlayerPrefs.GetInt("durationavg");
		}
	}



	public static void SetTypeMove(int value)
    {
        PlayerPrefs.SetInt("typemove", value);
    }

    public static int GetTypeMove
    {
        get { return PlayerPrefs.GetInt("typemove"); }
    }     
    public static void SetSound(int value)
    {
        PlayerPrefs.SetInt("sound", value);
    }

    public static int GetSound
    {
        get
        { 
            if (!BB10_Settings.HasKey("sound"))
            {
                BB10_Settings.SetSound(1);
            }

            return PlayerPrefs.GetInt("sound");
        }
    }

    public static void SetMusic(int value)
    {
        PlayerPrefs.SetInt("music", value);
    }

    public static int GetMusic
    {
        get
        { 
            if (!BB10_Settings.HasKey("music"))
            {
                BB10_Settings.SetMusic(1);
            }

            return PlayerPrefs.GetInt("music");
        }
    }

                                 




    public static void SetTime(int value)
    {
        PlayerPrefs.SetInt("time", value);
    }

    public static int GetTime
    {
        get { return PlayerPrefs.GetInt("time"); }
    }

    //-------------------------------------------

    public static void SetTimePlay(int value)
    {
        PlayerPrefs.SetInt("timeplay", value);
    }

    public static int GetTimePlay
    {
        get
        { 
            if (!BB10_Settings.HasKey("timeplay"))
            {
                BB10_Settings.SetTimePlay(0);
            }
            return PlayerPrefs.GetInt("timeplay"); 
        }
    }

	//-------------------------------------------

	public static void SetTimePlayForDuration(int value)
	{
		PlayerPrefs.SetInt("timeplayduration", value);
	}

	public static int GetTimePlayForDuration
	{
		get
		{
			if (!BB10_Settings.HasKey("timeplayduration"))
			{
				BB10_Settings.SetTimePlayForDuration(0);
			}
			return PlayerPrefs.GetInt("timeplayduration");
		}
	}




	//-------------------------------------------

	public static void SetStar(int value, int index)
    {
        PlayerPrefs.SetInt("star" + index, value);
    }

    public static int GetStar(int index)
    {
        if (!BB10_Settings.HasKey("star" + index))
        {
            BB10_Settings.SetStar(1, index);
        }

        return PlayerPrefs.GetInt("star" + index);
    }



    public static int GetContinue
    {
        get
        {
            if(!BB10_Settings.HasKey("continue"))
            {
                BB10_Settings.SetContinue(0);
            }
            return PlayerPrefs.GetInt("continue");
        }
    }           
    public static void SetContinue(int value)
    {
        PlayerPrefs.SetInt("continue", value);
    }

    public static void SetContinueData(string value)
    {
        PlayerPrefs.SetString("continuedata", value);
    }

    public static string GetContinueData
    {
        get
        {
            if(!BB10_Settings.HasKey("continuedata"))
            {
                BB10_Settings.SetContinueData("");
            }
            return PlayerPrefs.GetString("continuedata");
        }
    }

    public static long GetTimeStamp()
    {           
        return long.Parse(PlayerPrefs.GetString("time_stamp", "0"));   
    }

    public static void  SetTimeStamp(long timeStamp)
    {
        PlayerPrefs.SetString("time_stamp", timeStamp.ToString());
    }



    public static int GetShowFanInDay()
    {
        return PlayerPrefs.GetInt("show_fan_in_day", 0);
    }

    public static void SetShowFanInDay(int value)
    {
        PlayerPrefs.SetInt("show_fan_in_day", value);
    }
}


