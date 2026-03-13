using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BoomControl : MonoBehaviour
{
    public GameObject boomPrefab;
    public List<GameObject> listBoom;

    public GameObject GetBoom()
    {
        GameObject newBoom;
        if (listBoom.Count == 0)
        {
            newBoom = Instantiate(boomPrefab);
        }
        else
        {
            newBoom = listBoom[listBoom.Count - 1];
            newBoom.SetActive(true);
            listBoom.RemoveAt(listBoom.Count - 1);
        }
        return newBoom;
    }

    public void SetBoom(GameObject boom)
    {
        boom.SetActive(false);
        listBoom.Add(boom);
    }

    public void ShowBoom([Bridge.Ref] Vector3 pos, [Bridge.Ref] BB10_ColorData data)
    {
        GameObject bom = GetBoom();
//        bom.GetComponent<OrangeMest>().Boom(pos, data);
    }

}
