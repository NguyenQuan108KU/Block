using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Canvas))]
public class LoadingTransition : MonoBehaviour
{
    public static LoadingTransition Instance;
    [SerializeField] private GameObject[] activeOnShows;
    [SerializeField] private GraphicRaycaster graphicRaycaster;
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private PlayerPrefRemoteFloat delay_after_in_load_before_ads = new PlayerPrefRemoteFloat("delay_after_in_load_before_ads",1f);
    [SerializeField] private PlayerPrefRemoteFloat delay_after_ads_to_action = new PlayerPrefRemoteFloat("delay_after_ads_to_action",.5f);
    private bool _register;
    public void CheckRegister()
    {
        if (!_register)
        {
            Register();
            _register = true;
        }
    }
 
    public void Register()
    {
        Instance = this;
        GetComponent<Canvas>().sortingOrder = 999;
        Hide();
        DontDestroyOnLoad(this);
    }
    
    private void Awake()
    {
        CheckRegister();
    }

    public void Show(int index)
    {
        var clamp = Mathf.Clamp(index,0, activeOnShows.Length);
        gameObject.SetActive(true);
        for (var i = 0; i < activeOnShows.Length; i++)
            activeOnShows[i].gameObject.SetActive(i == clamp);
    }

    private void OnEnable()
    {
        if(!TurnOffForceHide)
            StartCoroutine(ForceHide());
    }

    private void OnDisable()
    {
        TurnOffForceHide = false;
    }


    public void Hide()
    {
        gameObject.SetActive(false);
    }
    
    public bool TurnOffForceHide { get; set; }

    public IEnumerator LoadingIn(int index)
    {
        Show(index);
        canvasGroup.alpha = 0;
        graphicRaycaster.enabled = true;
        float t = 0f;
        while (t < 0.3f)
        {
            t += Time.unscaledDeltaTime;
            yield return null;
            canvasGroup.alpha = t / 0.3f;
        }
        yield return new WaitForSecondsRealtime(delay_after_in_load_before_ads.Value);
    }
    
    public IEnumerator ForceHide()
    {
        yield return new WaitForSecondsRealtime(1+delay_after_in_load_before_ads.Value + delay_after_in_load_before_ads.Value);
        Hide();
    }
    
    public IEnumerator LoadingOut(Action actionAfterShow)
    {
        yield return new WaitForSecondsRealtime(delay_after_ads_to_action.Value);
        if(actionAfterShow != null)
            actionAfterShow.Invoke();
        graphicRaycaster.enabled = false;
        float t = 0f;
        while (t < 0.3f)
        {
            t += Time.unscaledDeltaTime;
            yield return null;
            canvasGroup.alpha = 1 - t / 0.3f;
        }
        Hide();
    }
}
