using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_ScoreCtr : MonoBehaviour
{
    public GameObject scorePrefab;
    public List<TextMesh> listText;

    public Color startColor, endColor;
    public Material mat;

    public TextMesh GetText()
    {
        TextMesh newText;
        if(listText.Count == 0)
        {
            newText = Instantiate(scorePrefab).GetComponent<TextMesh>();
        }
        else
        {
            newText = listText[listText.Count - 1];
            newText.gameObject.SetActive(true);
            newText.color = startColor;
            listText.RemoveAt(listText.Count - 1);
        }
        return newText;
    }

    public void SetText(TextMesh text)
    {
        text.gameObject.SetActive(false);
        listText.Add(text);
    }

    public void ShowText([Bridge.Ref] Vector2 pos, int score)
    {
        TextMesh text = GetText();
        text.transform.position = pos;
        text.text = "+" + score;

        StartCoroutine(FadeOut(text));
    }

    // score jump and fade out
    public float speed0;
    public float G;
    public float duration;

    public void Preload()
    {
        TextMesh text1 = GetText();
        TextMesh text2 = GetText();

        SetText(text1);
        SetText(text2);
    }
          
    IEnumerator FadeOut(TextMesh text)
    {
        Transform textTrans = text.transform;
        float startX = textTrans.position.x;
        float startY = textTrans.position.y;
        float t = 0;

        while (t < duration)
        {
            t += Time.deltaTime;
            textTrans.position = new Vector2(startX, startY + GetY(t));
            mat.SetColor("_Color", Color.Lerp(startColor, endColor, t / duration));
            yield return null;
        }

        SetText(text);
    }

    float GetY(float t)
    {
        return speed0 * t + 0.5f * G * t * t;
    }       
}
