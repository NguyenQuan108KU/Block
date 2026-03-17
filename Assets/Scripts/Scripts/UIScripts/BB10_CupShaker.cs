using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_CupShaker : MonoBehaviour
{
    public RectTransform rec;
    public float duration;
    public float delay;
    public float fromAngle;
    public float toAngle;
    public int timeShake;
    public float durationMove;
    public float distanceMove;
    public float waitMoveDown;
    public float scale;

    bool running = true;

    Vector2 normalPos;

    void Awake()
    {
        normalPos = rec.anchoredPosition;
    }

    public void StartShake()
    {
        transform.rotation = Quaternion.identity;
        rec.anchoredPosition = normalPos;
        rec.localScale = Vector2.one;

        StartCoroutine(StartEffect());
        StartCoroutine(StartMove());
    }

    IEnumerator StartMove()
    {
        // move cup up
        float timer = 0;
        Vector2 targetPos = new Vector2(normalPos.x, normalPos.y + distanceMove);
        Vector2 targetScale = Vector2.one * scale;

        while (timer < durationMove)
        {
            timer += Time.deltaTime;
            rec.anchoredPosition = Vector2.Lerp(rec.anchoredPosition, targetPos, timer / durationMove);
            rec.localScale = Vector2.Lerp(rec.localScale, targetScale, timer / durationMove);
            yield return null;
        }

        yield return new WaitForSeconds(waitMoveDown);
        // move cup down
        timer = 0;

        while (timer < durationMove)
        {
            timer += Time.deltaTime;
            rec.anchoredPosition = Vector2.Lerp(rec.anchoredPosition, normalPos, timer / durationMove);
            rec.localScale = Vector2.Lerp(rec.localScale, Vector2.one, timer / durationMove);
            yield return null;
        }

    }

    IEnumerator StartEffect()
    {
        int time = 0;

        while (time < timeShake)
        {
            time++;

            if (running)
            {
                float timeCounter = 0;
                float rotateTime = duration * 0.25f;
                while (timeCounter < rotateTime)
                {
                    timeCounter += Time.deltaTime;
                    float zAngle = Mathf.Lerp(0, fromAngle, timeCounter / rotateTime);
                    var currentAngle = gameObject.transform.rotation;
                    transform.rotation = Quaternion.Euler(currentAngle.x, currentAngle.y, zAngle);
                    yield return null;
                }

                timeCounter = 0;
                rotateTime = duration * 0.5f;
                while (timeCounter < rotateTime)
                {
                    timeCounter += Time.deltaTime;
                    float zAngle = Mathf.Lerp(fromAngle, toAngle, timeCounter / rotateTime);
                    var currentAngle = gameObject.transform.rotation;
                    gameObject.transform.rotation = Quaternion.Euler(currentAngle.x, currentAngle.y, zAngle);
                    yield return null;
                }

                timeCounter = 0;
                rotateTime = duration * 0.25f;
                while (timeCounter < rotateTime)
                {
                    timeCounter += Time.deltaTime;
                    float zAngle = Mathf.Lerp(toAngle, 0, timeCounter / rotateTime);
                    var currentAngle = gameObject.transform.rotation;
                    gameObject.transform.rotation = Quaternion.Euler(currentAngle.x, currentAngle.y, zAngle);
                    yield return null;
                }
            }
            yield return new WaitForSeconds(delay);
        }

      
    }
}
