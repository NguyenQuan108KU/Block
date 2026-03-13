using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class BB10_FaderHandler : MonoBehaviour
{
    public Image image;
    public float durationFade;
    public float durationFadeOut;
    public float durationSwich;

    public delegate void Callback0();

    public void Reset()
    {
        //SetActive(false);
    }

    public void Fade(Callback0 fn)
    {
        StartCoroutine(StartFade(fn));
    }

    void SetActive(bool isActive)
    {
        image.enabled = isActive;
    }

    IEnumerator StartFade(Callback0 fn)
    {
        SetActive(true);
        float timer = 0;
        Color color = image.color;

        image.color = new Color(color.r, color.g, color.b, 0);
        while (timer <= durationFade)
        {
            timer += Time.unscaledDeltaTime;
            image.color = new Color(color.r, color.g, color.b, Mathf.Lerp(0, 1, timer / durationFade));
            yield return null;
        }

        image.color = new Color(color.r, color.g, color.b, 1);

        if (fn != null)
        {
            fn();
        }
       

        timer = 0;
        while (timer <= durationFade)
        {
            timer += Time.unscaledDeltaTime;
            image.color = new Color(color.r, color.g, color.b, Mathf.Lerp(1, 0, timer / durationFade));
            yield return null;
        }

        image.color = new Color(color.r, color.g, color.b, 0);

        SetActive(false);
    }

    public void SwichPanel(CanvasGroup group1, CanvasGroup group2, Callback0 fn)
    {
        StartCoroutine(StartSwichPanel(group1, group2, fn));
    }


    IEnumerator StartSwichPanel(CanvasGroup group1, CanvasGroup group2, Callback0 fn)
    {
        float timer = 0;

        group1.alpha = 1;
        group2.alpha = 0;

        group2.gameObject.SetActive(true);

        if (fn != null)
        {
            fn();
        }

        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;

            group1.alpha = 1 - t;
            group2.alpha = t;
            yield return null;
        }
            
        group1.gameObject.SetActive(false);
        group1.alpha = 1;
    }

    public void SwichPanelFix(CanvasGroup group1, CanvasGroup group2, Callback0 fn)
    {
        StartCoroutine(StartSwichPanelFix(group1, group2, fn));
    }


    IEnumerator StartSwichPanelFix(CanvasGroup group1, CanvasGroup group2, Callback0 fn)
    {
        float timer = 0;

        group1.alpha = 1;
        group2.alpha = 0;

        group2.gameObject.SetActive(true);

       

        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;

            group1.alpha = 1 - t;
            group2.alpha = t;
            yield return null;
        }

        if (fn != null)
        {
            fn();
        }

        group1.gameObject.SetActive(false);
        group1.alpha = 1;
    }

    public void FadeInPanel(CanvasGroup group, Callback0 fn)
    {
        StartCoroutine(StartFadeInPanel(group, fn));
    }

    IEnumerator StartFadeInPanel(CanvasGroup group, Callback0 fn)
    {
        float timer = 0;

        group.alpha = 0;

        group.gameObject.SetActive(true);

        if (fn != null)
        {
            fn();
        }

        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;
            group.alpha = t;
            yield return null;
        }

        group.alpha = 1;
    }

    public void FadeInPanelFix(CanvasGroup group, Callback0 fn)
    {
        StartCoroutine(StartFadeInPanelFix(group, fn));
    }

    IEnumerator StartFadeInPanelFix(CanvasGroup group, Callback0 fn)
    {
        float timer = 0;

        group.alpha = 0;

        group.gameObject.SetActive(true);

       

        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;
            group.alpha = t;
            yield return null;
        }

        if (fn != null)
        {
            fn();
        }

        group.alpha = 1;
    }

    public void FadeOutPanel(CanvasGroup group, Callback0 fn)
    {
        StartCoroutine(StartFadeOutPanel(group, fn));
    }

    IEnumerator StartFadeOutPanel(CanvasGroup group, Callback0 fn)
    {
        float timer = 0;

        group.alpha = 1;

        if (fn != null)
        {
            fn();
        }

        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;
            group.alpha = 1 - t;
            yield return null;
        }



        group.gameObject.SetActive(false);
        group.alpha = 1;
    }

    public void FadeOutPanelFix(CanvasGroup group, Callback0 fn)
    {
        StartCoroutine(StartFadeOutPanelFix(group, fn));
    }

    IEnumerator StartFadeOutPanelFix(CanvasGroup group, Callback0 fn)
    {
        float timer = 0;

        group.alpha = 1;


        while (timer <= durationSwich)
        {
            timer += Time.deltaTime;
            float t = timer / durationSwich;
            group.alpha = 1 - t;
            yield return null;
        }

        if (fn != null)
        {
            fn();
        }


        group.gameObject.SetActive(false);
        group.alpha = 1;
    }
}
