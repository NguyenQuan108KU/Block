using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BB10_ColorCtr : MonoBehaviour
{
    public float duration, durationGray;
    public float maxGray;

    IEnumerator StartGrayOff()
    {
        Shader.EnableKeyword("GRAYSCALE_ON");

        float timer = 0;
        while(timer < durationGray)
        {
            timer += Time.deltaTime;
            Shader.SetGlobalFloat("_GrayScaleFactor", maxGray * (1 - (timer / durationGray)));
            yield return null;
        }

        Shader.SetGlobalFloat("_GrayScaleFactor", 0);
        Shader.DisableKeyword("GRAYSCALE_ON");
    }

    public void GrayOff()
    {
        Shader.DisableKeyword("GRAYSCALE_ON");
        Shader.SetGlobalFloat("_GrayScaleFactor", 0);
    }

    int index;
    [SerializeField]
    public UnitListColor[] listColor;

    public void GrayOn()
    {
        StartCoroutine(StartGrayOn());
    }

    IEnumerator StartGrayOn()
    {
        Shader.EnableKeyword("GRAYSCALE_ON");

        float timer = 0;
        while (timer < durationGray)
        {
            timer += Time.deltaTime;
            Shader.SetGlobalFloat("_GrayScaleFactor", (timer / durationGray) * maxGray);
            yield return null;
        }

        Shader.SetGlobalFloat("_GrayScaleFactor", maxGray);
    }

    public void GrayOffAnim()
    {
        StartCoroutine(StartGrayOff());
    }    
}
