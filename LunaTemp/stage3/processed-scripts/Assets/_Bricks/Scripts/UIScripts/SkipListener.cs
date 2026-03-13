using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SkipListener : MonoBehaviour
{
    // Start is called before the first frame update
    //void Start()
    //{

    //}

    // Update is called once per frame
    //void Update()
    //{

    //}

    bool onClick = false;
    private void OnMouseUp()
    {
        if(onClick)
        {
            return;
        }

        onClick = true;

        MainAudio.Main.PlaySound(TypeAudio.SoundClick);

        transform.DOScale(new Vector3(1.2f, 1.2f, 1f), 0.1f)
    .SetLoops(2, LoopType.Yoyo)
    .OnComplete(() =>
    {
        // onClick = false;
    });

        BB10_MainCanvasUI.Main.inGameScript.SkipTut();
    }
}
