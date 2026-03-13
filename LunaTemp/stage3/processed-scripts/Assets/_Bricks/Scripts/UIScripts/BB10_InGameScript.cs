using UnityEngine;
using System.Collections;
using TMPro;
//using UnityEngine.UI;

public class BB10_InGameScript : MonoBehaviour
{
    public RectTransform rec;
    public TextMesh scoreTxt;
    public TextMesh bestTxt;

    public int scoreInt;
    public int bestInt;
    public CanvasGroup group;
    //public GameObject bgGrid;

    bool scoreRuning;
    IEnumerator scoreUp;

    private void Awake()
    {
        blur.SetActive(false);
        //skip.SetActive(false);
    }

    private void Start()
    {
        scoreTxt.GetComponent<MeshRenderer>().sortingOrder = -7;
        bestTxt.GetComponent<MeshRenderer>().sortingOrder = -7;
    }

    public void Preload()
    {
        SetActive(false);
    }

    public void Reset()
    {
        ResetScore();
        bestInt = BB10_Settings.GetBest;
        //bestTxt.text = bestInt.ToString();         
    }

    IEnumerator ScoreUpAnim(int fromScore)
    {
        scoreRuning = true;
        int unitPlus = Mathf.Max(1, (scoreInt - fromScore) / 12);
        yield return new WaitForSeconds(0.2f);
        while (fromScore < scoreInt)
        {
            yield return new WaitForSeconds(0.08f);
            fromScore = Mathf.Min(scoreInt, fromScore + unitPlus);
            //scoreTxt.text = fromScore.ToString();

            if (fromScore > bestInt)
            {
                bestInt = fromScore;
                bestTxt.text = bestInt.ToString();
            }

        }

        scoreTxt.text = scoreInt.ToString();

        if (bestInt > BB10_Settings.GetBest)
        {
            BB10_Settings.SetBest(bestInt);
        }

        scoreRuning = false;
    }

    public void ResetScore()
    {
        if (scoreRuning)
        {
            StopCoroutine(scoreUp);
        }

        scoreInt = 0;
        scoreTxt.text = scoreInt.ToString();
    }

    public void ResetBest()
    {
        bestInt = 0;
        BB10_Settings.SetBest(0);
    }

    public void SetActive(bool isActive)
    {
        gameObject.SetActive(isActive);
    }

    public void Pause()
    {
        //BB10_MainCanvasUI.Main.pauseScript.PauseGame();
    }

    public void SetNewScore(int scoreFillLine, int numberUnit)
    {
        int value = scoreFillLine + numberUnit;

        UpScoreTxt(value);  
    }

    public void UpScoreTxt(int value)
    {
        if (value > 0)
        {
            int from = scoreInt;
            scoreInt += value;
            if (scoreRuning)
            {
                StopCoroutine(scoreUp);
                scoreTxt.text = scoreInt.ToString();
            }

            scoreUp = ScoreUpAnim(from);
            StartCoroutine(scoreUp);
        }
    }
                      
    public void SetScoreContinue(int value)
    {
        scoreInt = value;
        scoreTxt.text = scoreInt.ToString();
    }

    public GameObject blur;
    //public GameObject skip;

    public void StartTut()
    {
        blur.SetActive(true);
        //skip.SetActive(true);
    }

    public void FinishTut()
    {
        blur.SetActive(false);
        //skip.SetActive(false);
    }

    public void SkipTut()
    {
        //StopAllCoroutines();

        BB10_MainObjControl.Instant.tutorial.SkipTut();
        //BB10_MainCanvasUI.mainCanvas.pauseScript.Restart();

        blur.SetActive(false);
        //skip.SetActive(false);
    }

}
