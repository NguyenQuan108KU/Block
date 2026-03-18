using UnityEngine;
using UnityEngine.UI;

public class BB10_PauseScript : MonoBehaviour
{
    public CanvasGroup group;
    public Image soundIgame;

    public Sprite soundOn;
    public Sprite soundOff;

    bool isFading = false;
    public void PauseGame()
    {
        if(BB10_MainState.typePlay == BB10_MainState.TypePlay.Normal && BB10_MainState.state != BB10_MainState.State.Waiting && !isFading)
        {
            isFading = true;
            BB10_MainCanvasUI.Main.faderScript.FadeInPanelFix(group, new BB10_FaderHandler.Callback0(OffFading));
            BB10_MainState.SetState(BB10_MainState.State.Pause);

            CheckSound();
        }
    }

    public void UnPause()
    {
        if(!isFading)
        {
            BB10_MainState.SetState(BB10_MainState.State.Ingame);
            isFading = true;
            BB10_MainCanvasUI.Main.faderScript.FadeOutPanelFix(group, new BB10_FaderHandler.Callback0(OffFading));
        }
    }

    public void ShowHome()
    {
        
        if (!isFading)
        {
        }
        
    }

    public void Restart()
    {
    }

    public void Reset()
    {
        SetActive(false);
        //CheckSound();
    }

    public void PreLoad()
    {
        CheckSound();
    }

    public void CheckSound()
    {
        if (BB10_Settings.GetSound == 0)
        {
            soundIgame.sprite = soundOff;
            MainAudio.Main.MuteSound(true);
        }
        else
        {
            soundIgame.sprite = soundOn;
            MainAudio.Main.MuteSound(false);
        }
    }

    public void SoundClick()
    {
        if (BB10_Settings.GetSound == 1)
        {
            soundIgame.sprite = soundOff;
            BB10_Settings.SetSound(0);
            MainAudio.Main.MuteSound(true);
        }
        else
        {
            soundIgame.sprite = soundOn;
            BB10_Settings.SetSound(1);
            MainAudio.Main.MuteSound(false);
        }
    }

                               
    

    void OffFading()
    {
        isFading = false;
    }

    public void MidleTryAgain()
    {
        BB10_Settings.SetContinue(0);

        BB10_MainObjControl.Instant.grid.SetAllBlock();
        BB10_MainObjControl.Instant.nextViewerCtr.SetAllBlock();
        BB10_MainObjControl.Instant.planeViewCrt.SetAllBlock();
        BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
		BB10_MainCanvasUI.Main.faderScript.FadeInPanel(BB10_MainCanvasUI.Main.inGameScript.group, null);
        BB10_MainCanvasUI.Main.Reset(true);
    }

    //public void Exit()
    //{
    //    Application.Quit();
    //}

    public void SetActive(bool isActive)
    {
        gameObject.SetActive(isActive);
    }

    
}
