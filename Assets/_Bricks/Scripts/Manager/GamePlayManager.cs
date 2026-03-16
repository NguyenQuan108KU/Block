using DG.Tweening;
using TMPro;
using UnityEngine;

public class GamePlayManager : MonoBehaviour
{
    public static GamePlayManager Instance;
    public int score;
    public int target;
    public TextMeshProUGUI textScore;

    public GameObject win;
    public GameObject lose;
    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);
    }
    private void Start()
    {
        textScore.text = score.ToString() + "/" + target;
    }
    public void UpScore(int point)
    {
        score += point;
        textScore.text = score.ToString() + "/" + target;

        // hiệu ứng nhún
        textScore.transform.DOKill();
        textScore.transform.localScale = Vector3.one;
        textScore.transform.DOScale(1.2f, 0.15f).SetLoops(2, LoopType.Yoyo);
        if(score >= target)
        {
            TimerProgress.Instance.StopTimer();
            GameOver(true);
        }
    }
    public void GameOver(bool isOver)
    {
        if (isOver)
        {
            //MainAudio.Main.PlaySound(TypeAudio.SoundWin);    
            win.SetActive(true);
        }
        else if (isOver == false)
        {
            //MainAudio.Main.PlaySound(TypeAudio.SoundLose);
            lose.SetActive(true);
        }
    }
}
