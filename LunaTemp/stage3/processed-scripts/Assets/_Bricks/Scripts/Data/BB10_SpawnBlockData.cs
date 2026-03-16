using UnityEngine;

[CreateAssetMenu(fileName = "SpawnBlockData", menuName = "BB10/Spawn Block Data")]
public class BB10_SpawnBlockData : ScriptableObject
{
    public SpawnGroup[] spawnGroups;
}

[System.Serializable]
public class SpawnGroup
{
    public Types block1;
    public Types block2;
    public Types block3;
}