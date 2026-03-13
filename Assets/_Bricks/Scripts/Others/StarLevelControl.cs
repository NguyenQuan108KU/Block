using UnityEngine;
using System.Collections;

public class StarLevelControl : MonoBehaviour {

    public GameObject starObj;

    public void SetActive(bool isActive)
    {
        starObj.SetActive(isActive);
        if (isActive && !gameObject.activeSelf)
        {
            SetActiveObj(true);
        }
    }

    public void SetActiveObj(bool isActive)
    {
        gameObject.SetActive(isActive);
    }
}
