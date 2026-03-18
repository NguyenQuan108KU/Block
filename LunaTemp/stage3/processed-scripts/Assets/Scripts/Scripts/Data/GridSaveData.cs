using UnityEngine;
using System.Collections.Generic;

[CreateAssetMenu(fileName = "GridSaveData", menuName = "BB10/Grid Save Data")]
public class GridSaveData : ScriptableObject
{
    public List<int> gridData;
    public List<int> gridSprites;
}