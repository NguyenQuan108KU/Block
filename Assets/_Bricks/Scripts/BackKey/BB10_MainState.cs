using UnityEngine;
using System.Collections;

public class BB10_MainState
{
    public static State state;

    public enum State
    {
        Home,
        Ingame,
        GameOver,
        Pause,
        Waiting,
        MoreApp,
		ShowReward,
        Exit,
    }

    public static TypePlay typePlay;

    public enum TypePlay
    {
        Normal,
        Tutorial,
    }

    public static void SetState(State newState)
    {
        state = newState;
    }

    public static State GetState
    {
        get { return state; }
    }
}


