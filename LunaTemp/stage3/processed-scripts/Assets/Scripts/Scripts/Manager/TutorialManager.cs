using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TutorialManager : SingletonBase<TutorialManager>
{
    public BB10_GroundView groundView;
    public BB10_NextViewer firstBlock;
    public GameObject Hand;
    public GameObject TextTut;

    [Header("---------- Tutorial -----------")]
    public float idleTimer = 0f;
    public float idleTimeToShow = 3f;
    public BB10_NextViewer blockTutorial;
    public List<BB10_NextViewer> nextViewers;
    Sequence bounceTween;
    bool isTutorialPlaying = false;
    bool isFirstTouch = false;

    public int r;
    public int c;
    IEnumerator Start()
    {
        yield return new WaitForSeconds(0.5f); // đợi block spawn
        ShowTutorial();
    }
    // private void Update()
    // {
    //     // click lần đầu tiên mới bắt đầu tính idle
    //     if (!isFirstTouch)
    //     {
    //         if (Input.GetMouseButtonDown(0))
    //         {
    //             isFirstTouch = true;
    //         }
    //         return;
    //     }

    //     if (Input.GetMouseButton(0))
    //     {
    //         idleTimer = 0f;
    //         return;
    //     }

    //     if (Input.GetMouseButtonUp(0))
    //     {
    //         ResetIdleTimer();
    //         return;
    //     }

    //     idleTimer += Time.deltaTime;

    //     if (idleTimer >= idleTimeToShow && !isTutorialPlaying)
    //     {
    //         StartBounceTutorial();
    //     }
    // }
    void ShowTutorial()
    {
        if (firstBlock.listBlock == null || firstBlock.listBlock.Count == 0)
            return;

        List<BB10_BrickCubeUnit> listUnit = firstBlock.listBlock;

        int row = r;
        int col = c;

        BB10_ColorData data = listUnit[0].myData;

        // hiện ghost block
        groundView.SetPattem(listUnit, row, col, data);

        PlayHandTutorial();
    }
    void PlayHandTutorial()
    {
        Hand.SetActive(true);
        TextTut.SetActive(true);

        // vị trí block ở NextViewer
        Vector3 startPos = GetBlockCenter();

        // vị trí ghost block trên grid
        Vector3 targetPos = GetShadowCenter();

        Hand.transform.position = startPos;

        Sequence seq = DOTween.Sequence();

        seq.Append(Hand.transform.DOMove(targetPos, 1f).SetEase(Ease.InOutSine));
        seq.AppendInterval(0.3f);
        seq.Append(Hand.transform.DOMove(startPos, 0f));

        seq.SetLoops(-1);
    }
    Vector3 GetBlockCenter()
    {
        Vector3 center = Vector3.zero;

        foreach (var cube in firstBlock.listBlock)
        {
            center += cube.transform.position;
        }

        center /= firstBlock.listBlock.Count;

        return center;
    }
    Vector3 GetShadowCenter()
    {
        Vector3 center = Vector3.zero;
        int count = firstBlock.listBlock.Count;

        for (int i = 0; i < count; i++)
        {
            center += groundView.listBlockRender[i].transform.position;
        }

        center /= count;

        return center;
    }
    void StartBounceTutorial()
    {
        blockTutorial = GetValidBlock();

        if (blockTutorial == null)
            return;

        isTutorialPlaying = true;

        bounceTween = DOTween.Sequence();

        foreach (var cube in blockTutorial.listBlock)
        {
            bounceTween.Join(
                cube.transform
                    .DOScale(0.65f, 0.35f)
                    .SetLoops(-1, LoopType.Yoyo)
                    .SetEase(Ease.InOutSine)
            );
        }
    }
    void ResetIdleTimer()
    {
        idleTimer = 0f;

        if (bounceTween != null)
        {
            bounceTween.Kill();
            bounceTween = null;

            if (blockTutorial.listBlock != null && blockTutorial.listBlock != null)
            {
                foreach (var cube in blockTutorial.listBlock)
                {
                    cube.transform.localScale = Vector3.one;
                }
            }

            isTutorialPlaying = false;
        }
    }
    BB10_NextViewer GetValidBlock()
{
    foreach (var viewer in nextViewers)
    {
        if (viewer != null && viewer.listBlock != null && viewer.listBlock.Count > 0)
        {
            return viewer;
        }
    }

    return null;
}
}