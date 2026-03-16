using DG.Tweening;
using TMPro;
using UnityEngine;

public class GamePlayManager : MonoBehaviour
{
    public static GamePlayManager Instance;
    public int score;
    public TextMeshProUGUI textScore;
    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);
    }
    public void UpScore(int point)
    {
        score += point;
        textScore.text = score.ToString() + "/100";

        // hiệu ứng nhún
        textScore.transform.DOKill();
        textScore.transform.localScale = Vector3.one;
        textScore.transform.DOScale(1.2f, 0.15f).SetLoops(2, LoopType.Yoyo);
    }
}
