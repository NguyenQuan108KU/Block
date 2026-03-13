using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Exit : MonoBehaviour
{
    public float duration;

    public void Reset(bool isActive)
    {
        SetActive(isActive);
    }

    public void SetActive(bool isActive)
    {
        gameObject.SetActive(isActive);
    }

    public void StartWait(bool isHome)
    {
        SetActive(true);
        StartCoroutine(Wait(isHome));
    }

    IEnumerator Wait(bool isHome)
    {
        BB10_MainState.SetState(BB10_MainState.State.Exit);
        yield return new WaitForSeconds(duration);

        if (isHome)
        {
            BB10_MainState.SetState(BB10_MainState.State.Home);
        }
        else
        {
            BB10_MainState.SetState(BB10_MainState.State.GameOver);
        }
        SetActive(false);
    }
}
