using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TutorialManager : SingletonBase<TutorialManager>
{
    public BB10_GroundView groundView;
    public BB10_NextViewer firstBlock;
    public GameObject Hand;


    IEnumerator Start()
    {
        yield return new WaitForSeconds(0.2f); // đợi block spawn
        ShowTutorial();
    }

    void ShowTutorial()
    {
        if (firstBlock.listBlock == null || firstBlock.listBlock.Count == 0)
            return;

        List<BB10_BrickCubeUnit> listUnit = firstBlock.listBlock;

        int row = 0;
        int col = 0;

        BB10_ColorData data = listUnit[0].myData;

        // hiện ghost block
        groundView.SetPattem(listUnit, row, col, data);

        PlayHandTutorial();
    }

    void PlayHandTutorial()
    {
        Hand.SetActive(true);

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
}