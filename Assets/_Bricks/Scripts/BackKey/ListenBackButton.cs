using UnityEngine;
using System.Collections;

public class ListenBackButton : MonoBehaviour
{
    float time = -1;
#if UNITY_EDITOR || UNITY_ANDROID
	void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape) && Time.time - time > .2f)
        {
            switch (BB10_MainState.GetState)
            {
                case BB10_MainState.State.Home:
                    //HomeBack();
                    break;
                case BB10_MainState.State.Ingame:
                    IngameBack();
                    break;
                case BB10_MainState.State.GameOver:
                    GameOverBack();
                    break;
                case BB10_MainState.State.Pause:
                    PauseBack();
                    break;
                case BB10_MainState.State.MoreApp:
                    MoreAppBack();
                    break;
                default:
                    break;
            }

            time = Time.time;
        }
    }
#endif
	//void HomeBack()
 //   {
 //       Application.Quit();
 //   }

    void IngameBack()
    {
        //BB10_MainCanvasUI.Main.pauseScript.PauseGame();
    }

    void GameOverBack()
    {
        //BB10_MainCanvasUI.Main.lostScript.TryAgainButton();
    }

    void PauseBack()
    {
        //BB10_MainCanvasUI.Main.pauseScript.UnPause();
    }

    void MoreAppBack()
    {
    }
}
