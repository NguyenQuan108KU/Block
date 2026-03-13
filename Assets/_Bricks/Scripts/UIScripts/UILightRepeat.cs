using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UILightRepeat : MonoBehaviour
{
    public float duration;
    public float delayStart;
    public float waitDelay;
    public float fromAlpha, toAlpha;

    SpriteRenderer image;

    void Start()
    {
        image = GetComponent<SpriteRenderer>();
        StartCoroutine(StartLight());
    }

    IEnumerator StartLight()
    {
        Color color = image.color;
        yield return new WaitForSeconds(delayStart);
        float count = 0;
        while (true)
        {
            float timer = 0;

            while (timer < duration)
            {
                timer += Time.deltaTime;
                float a = Mathf.Lerp(fromAlpha, toAlpha, timer / duration);
                image.color = new Color(color.r, color.g, color.b, a);
                yield return null;
            }

            image.color = new Color(color.r, color.g, color.b, toAlpha);
            float t = fromAlpha;
            fromAlpha = toAlpha;
            toAlpha = t;

            if (count % 2 == 0)
            {
                yield return new WaitForSeconds(waitDelay);
            }


            count++;
        }
    }
}
