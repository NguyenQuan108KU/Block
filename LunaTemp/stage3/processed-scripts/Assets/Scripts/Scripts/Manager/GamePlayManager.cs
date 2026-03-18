using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GamePlayManager : SingletonBase<GamePlayManager>
{
    public int score;
    [LunaPlaygroundField(fieldSection: "Target Settings")]
    public int target;
    [LunaPlaygroundField(fieldSection: "Target Settings")]
    public int totalClick;

    public int countClick;
    public TextMeshProUGUI textProScore;
    public TextMeshProUGUI textProTarget;

    public Text textScore;
    public Text textTarget;
    public GameObject win;
    public GameObject lose;
    public GameObject buttonDownload;


    public bool isFinishGame;
    private void Start()
    {
        if (textProScore != null && textProTarget != null)
        {
            textProTarget.text = target.ToString();
            textProScore.text = score.ToString();
        }
        if (textScore != null && textTarget != null)
        {
            textTarget.text = target.ToString();
            textScore.text = score.ToString();
        }
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && isFinishGame)
        {
            GoToStore();
        }
    }
    public void UpScore(int point)
    {
        int startScore = score;
        int endScore = score + point;

        score = endScore;

        // Animate số
        DOTween.To(() => startScore, x =>
        {
            startScore = x;
            if (textProScore != null)
                textProScore.text = startScore.ToString();
            else if (textScore != null)
                textScore.text = startScore.ToString();
        }, endScore, 0.5f) // thời gian tăng (chỉnh tùy ý)
        .SetEase(Ease.OutQuad)
        .OnComplete(() =>
        {
            if (textProScore != null)
                textProScore.text = endScore.ToString();
            else if (textScore != null)
                textScore.text = endScore.ToString();

            if (score >= target)
            {
                TimerProgress.Instance.StopTimer();
                GameOver(true);
            }
        });

        // hiệu ứng nhún (giữ nguyên)
        if (textProScore != null)
        {
            textProScore.transform.DOKill();
            textProScore.transform.localScale = Vector3.one;
            textProScore.transform.DOScale(1.2f, 0.15f).SetLoops(2, LoopType.Yoyo);
        }else if(textScore != null)
        {
            textScore.transform.DOKill();
            textScore.transform.localScale = Vector3.one;
            textScore.transform.DOScale(1.2f, 0.15f).SetLoops(2, LoopType.Yoyo);
        }
    }
    public void GameOver(bool isOver)
    {
        if (isOver && !isFinishGame)
        {
            isFinishGame = true;
            GameEnd();
            DOVirtual.DelayedCall(0.5f, () =>
        {
            MainAudio.Main.PlaySound(TypeAudio.SoundWin);
            buttonDownload.SetActive(false);
            win.SetActive(true);
        });
        }
        else if (isOver == false && !isFinishGame)
        {
            isFinishGame = true;
            GameEnd();
            DOVirtual.DelayedCall(0.5f, () =>
        {
            MainAudio.Main.PlaySound(TypeAudio.SoundLose);
            buttonDownload.SetActive(false);
            lose.SetActive(true);
        });
        }
    }
    public void UpClick()
    {
        countClick++;
        if (countClick >= totalClick)
        {
            GameEnd();
            Debug.Log("GameEnd");
            isFinishGame = true;
        }
    }
    public void GoToStore()
    {
        PlayableAPI.GoToStore();
    }
    public void GameEnd()
    {
        PlayableAPI.GameEnded();
    }
}
