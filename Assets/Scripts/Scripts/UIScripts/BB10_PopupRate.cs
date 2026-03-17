using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_PopupRate : MonoBehaviour {

    #region For New Version
    public List<BB10_RateStar> starList = new List<BB10_RateStar>(5);

    public GameObject submit;
    public GameObject textRate;

    //public UnityEngine.UI.Image starImg;
    public Sprite starOn;
    public Sprite starOff;

    public int starNumber = 5;

    public void HandleClickStar()
    {
        for(int i = 0; i < starNumber; i++)
        {
            starList[i].starImg.sprite = starOn;
        }

        for(int i = starNumber; i < starList.Count; i++)
        {
            starList[i].starImg.sprite = starOff;
        }

        textRate.SetActive(false);
        submit.SetActive(true);
        //LeanTween.scale(submit, Vector3.one, 0.2f);
        submit.transform.DOScale(Vector3.one * 1.1f, 0.2f).OnComplete(() =>
        {
            submit.transform.DOScale(Vector3.one, 0.05f);
        });
    }

    public void HandleSubmit()
    {
        if(starNumber == 5)
        {
            HandleRate5Star();
        }
        else
        {
            HandleRate4Star();
        }
    }
    #endregion

    //// Use this for initialization
    //void Start () {

    //}

    //// Update is called once per frame
    //void Update () {

    //}

    public const string rate_inpopup_key = "rate_inpopup_key";

    public GameObject popup;
    public GameObject pannel;            

    public void Preload()
    {
        popup.SetActive(false);

        InitPopup();
    }

    void InitPopup()
    {
        textRate.SetActive(true);
        submit.SetActive(false);
        submit.transform.localScale = Vector3.zero;

        for(int i = 0; i < starList.Count; i++)
        {
            starList[i].starImg.sprite = starOff;
        }
    }

    public void ShowPopup()
    {
        //BB10_MainCanvasUI.mainCanvas.lostScript.group.gameObject.SetActive(false);
        popup.SetActive(true);

        pannel.transform.localScale = Vector3.zero;
        pannel.transform.DOScale(Vector3.one * 1.1f, 0.3f)
    .OnComplete(() =>
    {
        pannel.transform.DOScale(Vector3.one, 0.05f);
    });

        //MainAudio.Main.PlaySound(TypeAudio.SoundGood);
    }

    public void HidePopup()
    {
        pannel.transform.DOScale(Vector3.one * 1.1f, 0.05f)
    .OnComplete(() =>
    {
        pannel.transform.DOScale(Vector3.zero, 0.3f);
    });

        DOVirtual.DelayedCall(0.36f, () =>
        {
            popup.SetActive(false);
        });
    }

    public void CloseBtn()
    {
        HidePopup();
         
    }

    public void HandleRate4Star()
    {
        PlayerPrefs.SetInt(rate_inpopup_key, 1);

        HidePopup();
    }

    public void HandleRate5Star()
    {
        PlayerPrefs.SetInt(rate_inpopup_key, 1);

        Rate();

        DOVirtual.DelayedCall(0.3f, () =>
        {
            HidePopup();
        });
    }
   
    public static void Rate()
    {
    }
}
