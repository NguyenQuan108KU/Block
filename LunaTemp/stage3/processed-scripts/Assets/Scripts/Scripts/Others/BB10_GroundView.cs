using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BB10_GroundView : MonoBehaviour
{
    public GameObject groundPrefab;
    public List<SpriteRenderer> listBlockRender;
    Vector3 vecDown;

    int ID = -1;

    SpriteRenderer GetCube()
    {
        SpriteRenderer render = Instantiate(groundPrefab).GetComponent<SpriteRenderer>();

        render.sortingOrder = -1;   // ghost nằm dưới block thật

        Color c = render.color;
        c.a = 0.35f;                // làm block mờ
        render.color = c;

        listBlockRender.Add(render);
        return render;
    }

    public void HideAllBlock()
    {
        for(int i = 0; i < listBlockRender.Count; i++)
        {
            listBlockRender[i].transform.position = vecDown;
        }
    }

    void Start()
    {
        listBlockRender = new List<SpriteRenderer>();
        vecDown = new Vector2(0, -100);
    }

    public void SetPattem(List<BB10_BrickCubeUnit> listUnit, int row, int col, [Bridge.Ref] BB10_ColorData data)
    {
        HideAllBlock();

        for (int i = 0; i < listUnit.Count; i++)
        {
            if (listBlockRender.Count <= i)
            {
                GetCube();
            }

            int posRow = row - (listUnit[0].indexRow - listUnit[i].indexRow);
            int posCol = col - (listUnit[0].indexCol - listUnit[i].indexCol);
            listBlockRender[i].transform.position = new Vector2(posCol, posRow);

            if (ID != data.ID)
            {
                listBlockRender[i].sprite = data.sprite;

                Color c = listBlockRender[i].color;
                c.a = 0.35f;       // giữ block mờ
                listBlockRender[i].color = c;
            }

        }

        ID = data.ID;
    }     

}
