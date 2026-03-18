using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class AddSelectItem : MonoBehaviour
{

    public GameObject item;
    public int row, col;
    public float height;
    public GridLayoutGroup grid;
    public RectTransform rec;
    public ItemUnit[] listUnit;

    int count = 0;

    public void CreateTable()
    {
        int numberItem = row * col;
        listUnit = new ItemUnit[numberItem];
        for (int i = 0; i < col; i++)
        {
            for (int j = 0; j < row; j++)
            {
                AddItem();
            }
        }
    }

    void AddItem()
    {
        GameObject newItem = Instantiate(item);
        newItem.transform.SetParent(transform);
        newItem.transform.localScale = Vector3.one;
        listUnit[count] = newItem.GetComponent<ItemUnit>();
        listUnit[count].index = count + 1;
        count++;
    }
}
