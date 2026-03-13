using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PauseGameListener : MonoBehaviour {

    // Use this for initialization
    //void Start () {

    //}

    // Update is called once per frame
    //void Update () {

    //}

    bool onClick = false;
    private void OnMouseUp()
    {
        if (onClick || BB10_MainState.state == BB10_MainState.State.Pause)
        {
            return;
        }

        onClick = true;

        MainAudio.Main.PlaySound(TypeAudio.SoundClick);

        transform.DOScale(new Vector3(1.2f, 1.2f, 1f), 0.1f)
    .SetLoops(2, LoopType.Yoyo)
    .OnComplete(() =>
    {
        onClick = false;
    });

        //BB10_MainCanvasUI.Main.pauseScript.PauseGame();
    }
}
