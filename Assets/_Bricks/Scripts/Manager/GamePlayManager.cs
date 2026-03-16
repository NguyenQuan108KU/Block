using DG.Tweening;
using TMPro;
using UnityEngine;

public class GamePlayManager : MonoBehaviour
{
    public static GamePlayManager Instance;
    public int score;
    [LunaPlaygroundField(fieldSection: "Target Settings")]
    public int target;
    public TextMeshProUGUI textScore;

    public GameObject win;
    public GameObject lose;

    public bool isFinishGame;
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
    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && isFinishGame)
        {
            GoToStore();
        }
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
            MainAudio.Main.PlaySound(TypeAudio.SoundWin);
            isFinishGame = true;
            GameEnd();
            win.SetActive(true);
        }
        else if (isOver == false)
        {
            MainAudio.Main.PlaySound(TypeAudio.SoundLose);
            isFinishGame = true;
            GameEnd();
            lose.SetActive(true);
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
