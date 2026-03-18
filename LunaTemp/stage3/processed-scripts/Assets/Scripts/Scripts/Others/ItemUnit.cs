using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.EventSystems;

//using UnityEngine.Events;

public class ItemUnit : MonoBehaviour, IPointerClickHandler
{
    public int index;
    public StarLevelControl star1, star2, star3;

    public Text numberText;
    public GameObject lockObj;
    public GameObject openObj;

    public Vector3 scaleZoom = new Vector3(1.5f, 1.5f, 1.5f);
    float timeZoomOut = 0.1f;
    float timeZoomIn = 0.2f;
    bool running = false;

    void OnEnable()
    {
        running = false;
        transform.localScale = Vector3.one;
    }

    public void SetLock()
    {
        lockObj.SetActive(true);
        openObj.SetActive(false);

        star1.SetActiveObj(false);
        star2.SetActiveObj(false);
        star3.SetActiveObj(false);
    }

    public void SetOpen(int maxLv)
    {
        lockObj.SetActive(false);
        openObj.SetActive(true);
        numberText.text = index.ToString();

        if (index == maxLv)
        {
            star1.SetActiveObj(false);
            star2.SetActiveObj(false);
            star3.SetActiveObj(false);
        }
        else
        {
            star1.SetActive(true);
            star2.SetActive(true);
            star3.SetActive(true);

            int numberStar = BB10_Settings.GetStar(index);
            if (numberStar == 1)
            {
                star1.SetActive(true);
                star2.SetActive(false);
                star3.SetActive(false);
            }
            else if (numberStar == 2)
            {
                star1.SetActive(true);
                star2.SetActive(true);
                star3.SetActive(false);
            }
            else
            {
                star1.SetActive(true);
                star2.SetActive(true);
                star3.SetActive(true);
            }

        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
//        if (!running && !MainCanvas.Main.selectLevelScript.isSelected)
//        {
//            StartCoroutine(ButtonClick());
//        }
    }

    public IEnumerator ButtonClick()
    {
//        MainCanvas.Main.selectLevelScript.isSelected = true;
        running = true;

        float currentTime = 0;

        while (currentTime < timeZoomOut)
        {
            transform.localScale = Vector3.Lerp(Vector3.one, scaleZoom, currentTime / timeZoomOut);
            currentTime += Time.unscaledDeltaTime;
            yield return null;
        }

//        MainCanvas.Main.startGameScript.StartPlayLevel(index);
        currentTime = 0;

        while (currentTime < timeZoomIn)
        {
            transform.localScale = Vector3.Lerp(scaleZoom, Vector3.one, currentTime / timeZoomIn);
            currentTime += Time.unscaledDeltaTime;
            yield return null;
        }

        yield return new WaitForSeconds(0.3f);
        running = false;
    }
}


