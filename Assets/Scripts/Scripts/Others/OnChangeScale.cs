using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnChangeScale : MonoBehaviour {

    public float duration;
    public float f;

    Vector3 to;
    Vector3 from;
    IEnumerator scale;
    bool running;


    void Awake()
    {
        from = transform.localScale;
        to = from * f;
        running = false;
    }

    void OnEnable()
    {
        transform.localScale = from;
    }

    public void OnChange()
    {
        if (running)
        {
            running = false;
            StopCoroutine(scale);
        }

        scale = StartScaleInOut();
        StartCoroutine(scale);
    }

    IEnumerator StartScaleInOut()
    {
        running = true;
        float timer = 0;

        while (timer <= duration)
        {
            timer += Time.deltaTime;
            transform.localScale = Vector3.Lerp(transform.localScale, to, timer /duration );
            yield return null;
        }

        yield return null;
        timer = 0;

        while (timer <= duration)
        {
            timer += Time.deltaTime;
            transform.localScale = Vector3.Lerp(transform.localScale, from, timer /duration );
            yield return null;
        }

        transform.localScale = from;
        running = false;
    }
}
