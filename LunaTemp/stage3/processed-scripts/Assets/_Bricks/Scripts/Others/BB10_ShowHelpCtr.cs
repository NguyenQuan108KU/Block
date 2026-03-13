using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_ShowHelpCtr : MonoBehaviour
{
    public GameObject groundPrefab;
    public List<GameObject> listBlockDisable;
    public List<GameObject> listBlockActive;

    public void ShowHelp(List<BB10_BrickCubeUnit> listBlock, [Bridge.Ref] Vector2 posValid)
    {
        int mainRow = listBlock[0].indexRow;
        int mainCol = listBlock[0].indexCol;

        for (int i = 0; i < listBlock.Count; i++)
        {
            GameObject newBlock = GetBlock();
            Vector2 pos = posValid + new Vector2(listBlock[i].indexCol - mainCol, listBlock[i].indexRow - mainRow);
            newBlock.transform.position = pos;
            listBlockActive.Add(newBlock);
        }
//        Time.timeScale = 0;
    }

    public GameObject GetBlock()
    {
        GameObject newBlock;
        if (listBlockDisable.Count == 0)
        {
            newBlock = Instantiate(groundPrefab);
        }
        else
        {
            newBlock = listBlockDisable[listBlockDisable.Count - 1];
            newBlock.SetActive(true);
            listBlockDisable.RemoveAt(listBlockDisable.Count - 1);
        }
        return newBlock;
    }

    public void SetBlock(GameObject block)
    {
        block.SetActive(false);
        listBlockDisable.Add(block);
    }

    public void HideAllBlock()
    {
        if (listBlockActive.Count > 0)
        {
            for (int i = 0; i < listBlockActive.Count; i++)
            {
                SetBlock(listBlockActive[i]);
            }

            listBlockActive.Clear();
        }
    }
}
