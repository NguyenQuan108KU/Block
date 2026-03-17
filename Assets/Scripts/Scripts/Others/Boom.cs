using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Boom : MonoBehaviour
{
    public float durationMin, durationMax;
    public float speed0Min, speed0Max;
    public float speedX;
    public float rMin, rMax;
    public float G;

    Transform[] listTrans;
    SpriteRenderer[] listRender;
    Vector2[] listPos;
    Color startColor, targetColor;
    float speed0;
    float r;
    float duration;

    void Awake()
    {
        startColor = new Color(1, 1, 1, 1);
        targetColor = new Color(1, 1, 1, 0);

        listTrans = new Transform[transform.childCount];
        listRender = new SpriteRenderer[transform.childCount];
        listPos = new Vector2[transform.childCount];

        for (int i = 0; i < transform.childCount; i++)
        {
            listTrans[i] = transform.GetChild(i);
            listRender[i] = listTrans[i].GetComponent<SpriteRenderer>();
            listPos[i] = listTrans[i].localPosition;
        }
    }

    public void ShowEffec(Vector2 pos)
    {
        transform.position = pos;
        Reset();

        for (int i = 0; i < transform.childCount; i++)
        {
            StartCoroutine(FadeOut(i));
        }
    }

    void Reset()
    {
        duration = Random.Range(durationMin, durationMax);
        speed0 = Random.Range(speed0Min, speed0Max);
        r = Random.Range(rMin, rMax);

        for (int i = 0; i < transform.childCount; i++)
        {
            listTrans[i].localPosition = listPos[i];
            listTrans[i].eulerAngles = Vector3.zero;
            listTrans[i].localScale = Vector3.one;
            listRender[i].color = startColor;
        }
    }

    void SetBoom()
    {
        Destroy(gameObject);
    }

    IEnumerator FadeOut(int index)
    {
        Transform trans = listTrans[index];
        SpriteRenderer render = listRender[index];
        float timer = 0;
        float localX = Random.Range(-0.5f, 0.5f);

        while (timer < duration)
        {
            timer += Time.deltaTime;
            trans.localPosition = new Vector2(listPos[index].x + GetX(timer, localX), listPos[index].y + GetY(timer));
            trans.localScale = Vector2.one * Mathf.Lerp(1, 0, timer / duration);
            render.color = Color.Lerp(startColor, targetColor, timer / duration);
            trans.Rotate(Vector3.forward * r * Time.deltaTime);
            yield return null;
        }

        if (index == transform.childCount - 1)
        {
            SetBoom();
        }
    }

    float GetY(float t)
    {
        return speed0 * t + 0.5f * G * t * t;
    }

    float GetX(float t, float localX)
    {
        return localX * t * speedX;
    }
}