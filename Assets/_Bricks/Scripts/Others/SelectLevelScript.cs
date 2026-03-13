using UnityEngine;
using System.Collections;

public class SelectLevelScript : MonoBehaviour 
{
    public AddSelectItem addScript;
    public ItemUnit[] listUnit;
    public bool isSelected;

    public void Preload()
    {
        addScript.CreateTable();
        listUnit = addScript.listUnit;
    }

    public void ReSet()
    {
        isSelected = false;
        ResetContentTable();
        SetActive(false);
    }

    void ResetContentTable()
    {
        int maxLv = BB10_Settings.GetMaxLevel;
//        maxLv = 100;

        for (int i = 0; i < listUnit.Length; i++)
        {
            if (i <= maxLv - 1)
            {
                listUnit[i].SetOpen(maxLv);
                listUnit[i].enabled = true;
            }
            else
            {
                listUnit[i].SetLock();
                listUnit[i].enabled = false;
            }
        }
    }

    public void SetActive(bool isActive)
    {
        gameObject.SetActive(isActive);
    }
}
