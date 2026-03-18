using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BB10_Grid : MonoBehaviour
{
    public int numberCol;
    public int numberRow;
    public BB10_BrickCubeUnit[,] grid;
    public Vector2[,] gridPos;

    public float waitDelete, waitPerUnit;
    BB10_PattemCreater pattemCreater;
    public float durationGray;
    public float nonGray, halfGray, fullGray;
    public float waitUnit;

    public List<fillData> listFill;

    BB10_ColorControl colorCtr;

    public GameObject completeText;
    List<Vector2> effectPositions = new List<Vector2>();

    public int score;

    public GameObject cellPrefab;
    public Transform parentGrid; // để chứa grid cho gọn
    public float cellSize = 1f;  // khoảng cách giữa các ô
    public bool isCreateCell;
    public GridSaveData saveData;
    private void Awake()
    {
        Preload();
        if (isCreateCell)
            SpawnGridVisual();
    }
    void SpawnGridVisual()
    {
        gridPos = new Vector2[numberRow, numberCol];

        float startX = -numberCol / 2f + 3.5f;
        float startY = -numberRow / 2f + 3.5f;

        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                Vector2 pos = new Vector2(
                    startX + col,
                    startY + row
                );

                GameObject cell = Instantiate(cellPrefab, pos, Quaternion.identity, transform);

                gridPos[row, col] = pos;
            }
        }
    }
    public struct fillData
    {
        public int cubeRow;
        public int cubeCol;
        public BB10_ColorData data;
    }

    public struct unitWait
    {
        public BB10_BrickCubeUnit unit;
        public bool isWait;
    }

    public void Preload()
    {
        grid = new BB10_BrickCubeUnit[numberRow, numberCol];

        listFill = new List<fillData>();
        pattemCreater = BB10_MainObjControl.Instant.pattemCreater;
        colorCtr = BB10_MainObjControl.Instant.colorControl;
    }

    public void GrayScaleMap(bool isGrayIn)
    {
        StartCoroutine(StartGrayScale(isGrayIn));
    }

    IEnumerator GrayBlock(BB10_BrickCubeUnit unit, float targetGray, bool isGrayIn)
    {
        float timer = 0;
        while (timer < durationGray)
        {
            timer += Time.deltaTime;
            Sprite sprite;
            if (isGrayIn)
            {
                sprite = colorCtr.GetSprite(unit.GetSpriteID, timer * targetGray / durationGray);
            }
            else
            {
                sprite = colorCtr.GetSprite(unit.GetSpriteID, targetGray * (Mathf.Max(1 - timer / durationGray, 0)));
            }

            unit.SetSprite(sprite);
            yield return null;
        }

        if (!isGrayIn)
        {
            unit.SetSprite(colorCtr.GetSpriteData(unit.GetSpriteID));
        }
    }

    float GetRandGray()
    {
        float rand = Random.value;
        if (rand > 0.24f)
        {
            return fullGray;
        }
        else if (rand > 0.1f)
        {
            return halfGray;
        }

        return nonGray;
    }

    IEnumerator StartGrayScale(bool isGrayIn)
    {
        List<Vec2> vecs = new List<Vec2>();
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                vecs.Add(new Vec2(row, col));
            }
        }

        while (vecs.Count > 0)
        {
            for (int i = 0; i < 3; i++)
            {
                int rand = Random.Range(0, vecs.Count);
                if (grid[vecs[rand].R, vecs[rand].C] != null)
                {
                    if (isGrayIn)
                    {
                        float randGray = GetRandGray();
                        grid[vecs[rand].R, vecs[rand].C].targetGray = randGray;
                        StartCoroutine(GrayBlock(grid[vecs[rand].R, vecs[rand].C], randGray, isGrayIn));
                    }
                    else
                    {
                        StartCoroutine(GrayBlock(grid[vecs[rand].R, vecs[rand].C], grid[vecs[rand].R, vecs[rand].C].targetGray, isGrayIn));
                    }


                    yield return new WaitForSeconds(waitUnit);
                }
                vecs.RemoveAt(rand);

                if (vecs.Count == 0)
                {
                    break;
                }
            }
        }
    }

    public bool InvalidPlacePattem(List<BB10_BrickCubeUnit> listUnit)
    {
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                if (!InvalidPoint(listUnit, row, col))
                {
                    return false;
                }
            }
        }

        return true;
    }

    public bool ValidPlaceMoreThanOne(List<BB10_BrickCubeUnit> listUnit)
    {
        int time = 0;
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                if (!InvalidPoint(listUnit, row, col))
                {
                    time++;

                    if (time >= 2)
                    {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public Vector2 PosValidPattem(List<BB10_BrickCubeUnit> listUnit)
    {
        int time = 0;
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                if (!InvalidPoint(listUnit, row, col))
                {
                    return new Vector2(col, row);
                }
            }
        }

        return Vector2.zero;
    }

    public bool InvalidPoint(List<BB10_BrickCubeUnit> listUnit, int row, int col)
    {
        int mainRow = listUnit[0].indexRow;
        int mainCol = listUnit[0].indexCol;

        for (int i = 0; i < listUnit.Count; i++)
        {
            int unitRow = row - (mainRow - listUnit[i].indexRow);
            int unitCol = col - (mainCol - listUnit[i].indexCol);

            if (unitRow < 0 || unitRow >= numberRow || unitCol < 0 || unitCol >= numberCol)
            {
                return true;
            }

            if (grid == null)
            {
                return true;
            }

            if (grid[unitRow, unitCol] != null)
            {

                return true;
            }
        }

        return false;
    }

    public void CheckGridFillTest(List<BB10_BrickCubeUnit> listUnit, int mainRow, int mainCol, [Bridge.Ref] BB10_ColorData data)
    {
        for (int col = 0; col < numberCol; col++)
        {
            if (isColFullTest(col, listUnit, mainRow, mainCol))
            {
                //                Debug.Log("run 11");
                ChangeSpriteFillCol(col, data);
            }
        }

        for (int row = 0; row < numberRow; row++)
        {
            if (isRowFullTest(row, listUnit, mainRow, mainCol))
            {
                //                Debug.Log("run 11");
                ChangeSpriteFillRow(row, data);
            }
        }
    }

    public bool IsRowFillWith(int r, int c)
    {
        for (int col = 0; col < numberCol; col++)
        {
            if (grid[r, col] == null && col != c)
            {
                return false;
            }
        }
        return true;
    }

    public bool IsColFillWith(int r, int c)
    {
        for (int row = 0; row < numberRow; row++)
        {
            if (grid[row, c] == null && row != r)
            {
                return false;
            }
        }
        return true;
    }

    public bool isRowFullTest(int row, List<BB10_BrickCubeUnit> listUnit, int mainRow, int mainCol)
    {
        for (int col = 0; col < numberCol; col++)
        {
            if (grid[row, col] == null && !IsInListTest(row, col, listUnit, mainRow, mainCol))
            {
                return false;
            }
        }
        return true;
    }

    public bool isColFullTest(int col, List<BB10_BrickCubeUnit> listUnit, int mainRow, int mainCol)
    {
        for (int row = 0; row < numberRow; row++)
        {
            if (grid[row, col] == null && !IsInListTest(row, col, listUnit, mainRow, mainCol))
            {
                return false;
            }
        }
        return true;
    }

    public void ChangeSpriteFillCol(int col, [Bridge.Ref] BB10_ColorData data)
    {
        for (int row = 0; row < numberRow; row++)
        {
            if (grid[row, col] != null)
            {
                // save data before change
                fillData fillData = new fillData();
                fillData.cubeRow = grid[row, col].row;
                fillData.cubeCol = grid[row, col].col;
                fillData.data = grid[row, col].myData;
                listFill.Add(fillData);

                grid[row, col].SetSprite(data);
            }
        }
    }

    public void ChangeSpriteFillRow(int row, [Bridge.Ref] BB10_ColorData data)
    {
        for (int col = 0; col < numberCol; ++col)
        {
            if (grid[row, col] != null)
            {
                // save data before change
                fillData fillData = new fillData();
                fillData.cubeRow = grid[row, col].row;
                fillData.cubeCol = grid[row, col].col;
                fillData.data = grid[row, col].myData;
                listFill.Add(fillData);

                grid[row, col].SetSprite(data);
            }
        }
    }

    public void CheckGrid(List<BB10_BrickCubeUnit> newCubeUnit, ref bool isCollect)
    {
        int numberLine = 0;
        List<Vector2> listFillPos = new List<Vector2>();
        List<int> listColDeleted = new List<int>();

        for (int col = 0; col < numberCol; ++col)
        {
            if (isColFull(col, newCubeUnit))
            {
                Vector2 pos = GetCenterCol(col);
                effectPositions.Add(pos);
                GamePlayManager.Instance.UpScore(10);
                for (int i = 0; i < newCubeUnit.Count; i++)
                {
                    if (newCubeUnit[i].col == col)
                    {
                        listFillPos.Add(newCubeUnit[i].transform.position);
                    }
                }

                numberLine++;
                deleteCol(col, newCubeUnit);
                listColDeleted.Add(col);

            }
        }

        for (int row = 0; row < numberRow; row++)
        {
            if (isRowFull(row, newCubeUnit, listColDeleted))
            {
                Vector2 pos = GetCenterRow(row);
                effectPositions.Add(pos);
                GamePlayManager.Instance.UpScore(10);
                for (int i = 0; i < newCubeUnit.Count; i++)
                {
                    if (newCubeUnit[i].row == row)
                    {
                        listFillPos.Add(newCubeUnit[i].transform.position);
                    }
                }

                numberLine++;
                deleteRow(row, newCubeUnit);
            }
        }

        int scoreFillLine = GameDefine.GetScore(numberLine);
        if (effectPositions.Count > 0)
        {
            Vector2 centerScreen = Camera.main.ViewportToWorldPoint(new Vector2(0.5f, 0.5f));
            CreateEffect(centerScreen);
            effectPositions.Clear();
        }
        if (scoreFillLine > 0)
        {
            isCollect = true;
            ClearListFill();

            int score = 0;
            // BB10_MainObjControl.Instant.scoreCtr.ShowText(CenterOfList(listFillPos), scoreFillLine);
        }


        BB10_MainCanvasUI.Main.inGameScript.SetNewScore(scoreFillLine, newCubeUnit.Count);
    }
    //Tạo effect CompleteText
    public void CreateEffect([Bridge.Ref] Vector3 pos)
    {
        MainAudio.Main.PlaySound(TypeAudio.CollectBlock);
        GameObject effect = Instantiate(completeText, pos, Quaternion.identity);
        effect.GetComponent<CompleteBlocks>().PlayRandom();
    }
    //Lấy tâm hàng
    Vector2 GetCenterRow(int row)
    {
        return new Vector2((numberCol - 1) * 0.5f, 0);
    }
    //Lấy tâm cột
    Vector2 GetCenterCol(int col)
    {
        return new Vector2(col, 0);
    }
    public bool isRowFull(int row, List<BB10_BrickCubeUnit> newCubeUnit, List<int> listColDeleted)
    {
        if (listColDeleted.Count == 0)
        {
            for (int col = 0; col < numberCol; ++col)
            {
                if (grid[row, col] == null && !IsInList(row, col, newCubeUnit))
                {
                    return false;
                }
            }
        }
        else
        {
            for (int col = 0; col < numberCol; ++col)
            {
                if (grid[row, col] == null && !IsInList(row, col, newCubeUnit) && !IsInListInt(col, listColDeleted))
                {
                    return false;
                }
            }
        }
        return true;
    }


    public bool isColFull(int col, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        for (int row = 0; row < numberRow; row++)
        {
            if (grid[row, col] == null && !IsInList(row, col, newCubeUnit))
            {
                return false;
            }
        }
        return true;
    }

    void CheckBundle()
    {
        //if(Application.identifier != "")
        //{
        //    Application.Quit();
        //}
    }

    Vector2 CenterOfList(List<Vector2> listFill)
    {
        Vector2 total = Vector2.zero;
        for (int i = 0; i < listFill.Count; i++)
        {
            total += listFill[i];
        }

        return total / listFill.Count;
    }

    public void TurnOffAllFillLine()
    {
        if (listFill.Count > 0)
        {
            //            Debug.Log("run");
            for (int i = 0; i < listFill.Count; i++)
            {
                grid[listFill[i].cubeRow, listFill[i].cubeCol].SetSprite(listFill[i].data);
            }

            ClearListFill();
        }
    }

    public void ClearListFill()
    {
        listFill.Clear();
    }

    bool IsInListTest(int r, int c, List<BB10_BrickCubeUnit> listUnit, int mainRow, int mainCol)
    {
        for (int i = 0; i < listUnit.Count; i++)
        {
            if (mainRow - (listUnit[0].indexRow - listUnit[i].indexRow) == r && mainCol - (listUnit[0].indexCol - listUnit[i].indexCol) == c)
            {
                return true;
            }
        }

        return false;
    }

    void deleteRow(int row, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        BB10_BrickCubeUnit oneInRow = GetOneInRow(row, newCubeUnit);
        int thisCol = oneInRow.col;

        DeleteOneRow(row, thisCol, newCubeUnit, true);
        DeleteOneRow(row, thisCol, newCubeUnit, false);
    }

    void DeleteOneRow(int row, int thisCol, List<BB10_BrickCubeUnit> newCubeUnit, bool isUp)
    {
        List<unitWait> newList = new List<unitWait>();
        if (isUp)
        {
            for (int col = thisCol; col < numberCol; col++)
            {
                if (grid[row, col] != null)
                {
                    unitWait newUnit = new unitWait();
                    newUnit.unit = grid[row, col];
                    if (!IsInList(row, col, newCubeUnit))
                    {
                        newUnit.isWait = true;
                    }
                    else
                    {
                        newUnit.isWait = false;
                    }

                    newList.Add(newUnit);

                    grid[row, col] = null;
                }
            }
        }
        else
        {
            for (int col = thisCol - 1; col >= 0; col--)
            {
                if (grid[row, col] != null)
                {
                    unitWait newUnit = new unitWait();
                    newUnit.unit = grid[row, col];
                    if (!IsInList(row, col, newCubeUnit))
                    {
                        newUnit.isWait = true;
                    }
                    else
                    {
                        newUnit.isWait = false;
                    }

                    newList.Add(newUnit);

                    grid[row, col] = null;
                }
            }
        }

        StartCoroutine(DeleteList(newList));
    }

    public void DeleteSomeBlock()
    {
        List<BB10_BrickCubeUnit> listBlock = new List<BB10_BrickCubeUnit>();
        for (int r = 0; r < numberRow; r++)
        {
            for (int c = 0; c < numberCol; c++)
            {
                if (grid[r, c] != null)
                {
                    listBlock.Add(grid[r, c]);
                }
            }
        }

        int numberDelete = Mathf.FloorToInt(listBlock.Count * 0.7f);
        List<BB10_BrickCubeUnit> listBlockDelete = new List<BB10_BrickCubeUnit>();

        for (int i = 0; i < numberDelete; i++)
        {
            if (listBlock.Count > 0)
            {
                int rand = Random.Range(0, listBlock.Count);
                listBlockDelete.Add(listBlock[rand]);
                grid[listBlock[rand].row, listBlock[rand].col] = null;
                listBlock.RemoveAt(rand);
            }
        }

        StartCoroutine(DeleteListEffect(listBlockDelete));
    }

    IEnumerator DeleteListEffect(List<BB10_BrickCubeUnit> listBlockDelete)
    {
        for (int i = 0; i < listBlockDelete.Count; i++)
        {
            listBlockDelete[i].Effect();
            yield return new WaitForSeconds(0.03f);
        }
    }

    void deleteCol(int col, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        BB10_BrickCubeUnit oneInCol = GetOneInCol(col, newCubeUnit);
        int thisRow = oneInCol.row;
        DeleteOneCol(col, thisRow, newCubeUnit, true);
        DeleteOneCol(col, thisRow, newCubeUnit, false);
    }

    void DeleteOneCol(int col, int thisRow, List<BB10_BrickCubeUnit> newCubeUnit, bool isUp)
    {
        List<unitWait> newList = new List<unitWait>();
        if (isUp)
        {
            for (int row = thisRow; row < numberRow; row++)
            {
                if (grid[row, col] != null)
                {
                    unitWait newUnit = new unitWait();
                    newUnit.unit = grid[row, col];
                    if (!IsInList(row, col, newCubeUnit))
                    {
                        newUnit.isWait = true;
                    }
                    else
                    {
                        newUnit.isWait = false;
                    }

                    newList.Add(newUnit);

                    grid[row, col] = null;
                }
            }
        }
        else
        {
            for (int row = thisRow - 1; row >= 0; row--)
            {
                if (grid[row, col] != null)
                {
                    unitWait newUnit = new unitWait();
                    newUnit.unit = grid[row, col];
                    if (!IsInList(row, col, newCubeUnit))
                    {
                        newUnit.isWait = true;
                    }
                    else
                    {
                        newUnit.isWait = false;
                    }

                    newList.Add(newUnit);

                    grid[row, col] = null;
                }
            }
        }

        StartCoroutine(DeleteList(newList));
    }

    IEnumerator DeleteList(List<unitWait> newCubeUnitWait)
    {
        yield return new WaitForSeconds(waitDelete);

        for (int i = 0; i < newCubeUnitWait.Count; i++)
        {
            if (newCubeUnitWait[i].isWait)
            {
                yield return new WaitForSeconds(waitPerUnit);
            }

            newCubeUnitWait[i].unit.Effect();
            //            grid[newCubeUnitWait[i].unit.row, newCubeUnitWait[i].unit.col] = null;
        }
    }

    bool IsInList(int r, int c, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        for (int i = 0; i < newCubeUnit.Count; i++)
        {
            if (newCubeUnit[i].row == r && newCubeUnit[i].col == c)
            {
                return true;
            }
        }

        return false;
    }

    public bool IsInListInt(int value, List<int> listInt)
    {
        for (int i = 0; i < listInt.Count; i++)
        {
            if (value == listInt[i])
            {
                return true;
            }
        }
        return false;
    }

    BB10_BrickCubeUnit GetOneInCol(int c, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        for (int i = 0; i < newCubeUnit.Count; i++)
        {
            if (newCubeUnit[i].col == c)
            {
                return newCubeUnit[i];
            }
        }
        return newCubeUnit[0];
    }

    BB10_BrickCubeUnit GetOneInRow(int r, List<BB10_BrickCubeUnit> newCubeUnit)
    {
        for (int i = 0; i < newCubeUnit.Count; i++)
        {
            if (newCubeUnit[i].row == r)
            {
                return newCubeUnit[i];
            }
        }
        return newCubeUnit[0];
    }

    public int insideBorder(BB10_BrickCubeUnit cubeUnit)
    {
        if (cubeUnit.col < 0)
        {
            return 1;
        }
        else if (cubeUnit.col >= numberCol)
        {
            return 2;
        }
        else if (cubeUnit.row < 0)
        {
            return 3;
        }

        return 0;
    }

    public void SetAllBlock()
    {
        for (int row = 0; row < numberRow; row++)
            for (int col = 0; col < numberCol; col++)
                if (grid[row, col] != null)
                {
                    pattemCreater.SetCube(grid[row, col]);
                    grid[row, col] = null;
                }

        //SonatScript.PlayTimes++;
        //SonatScript.LogStartLevel();
    }


    public Vec2 GetPlacePattem(List<BB10_BrickCubeUnit> listUnit)
    {
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                if (!InvalidPoint(listUnit, row, col))
                {
                    return new Vec2(row, col);
                }
            }
        }

        return new Vec2(0, 0);
    }

    //void OnApplicationPause(bool pauseStatus)
    //{
    //    if(pauseStatus
    //        && (BB10_MainState.state == BB10_MainState.State.Ingame
    //        || BB10_MainState.state == BB10_MainState.State.Pause))
    //    {
    //        SaveData();
    //    }

    //    CheckBundle();
    //}



    void SaveData()
    {
        string save = "";
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
            {
                if (grid[row, col] != null)
                {
                    //save += "1";
                    save += (grid[row, col].myData.ID + 1);
                }
                else
                {
                    save += "0";
                }
                save += "-";
            }
        }

        save += "+";
        //save += BB10_MainCanvasUI.Main.inGameScript.scoreInt.ToString();

        if (BB10_MainObjControl.Instant.nextViewerCtr.listView[0].state == BB10_NextViewer.State.Null
            && BB10_MainObjControl.Instant.nextViewerCtr.listView[1].state == BB10_NextViewer.State.Null
            && BB10_MainObjControl.Instant.nextViewerCtr.listView[2].state == BB10_NextViewer.State.Null)
        {
            Debug.Log("dont save");
            return;
        }

        for (int i = 0; i < 3; i++)
        {
            save += "+";
            if (BB10_MainObjControl.Instant.nextViewerCtr.listView[i].state != BB10_NextViewer.State.Null)
            {
                save += BB10_MainObjControl.Instant.nextViewerCtr.listView[i].myType.ToString();
                //save += "-";
                //save += MainObjControl.Instant.nextViewerCtr.listView[i].rotateTime.ToString();
            }
        }

        //Debug.Log(save);
        BB10_Settings.SetContinueData(save);
        BB10_Settings.SetContinue(1);
    }

    public void LoadDataSave()
    {
        string save = ConvertListToString(saveData.gridData);
        if (string.IsNullOrEmpty(save))
        {
            return;
        }
        string[] wordsTotal = save.Split('+');

        string[] words = wordsTotal[0].Split('-');
        int count = 0;
        for (int row = 0; row < numberRow; row++)
        {
            for (int col = 0; col < numberCol; col++)
{
    int number = int.Parse(words[count]);

    if (number == 0)
    {
        Debug.Log("null");
    }
    else if (number > 0)
    {
        BB10_BrickCubeUnit block = pattemCreater.CreateABlock(new Vector2(col, row), 1);

        int spriteIndex = saveData.gridSprites[count];

            if (spriteIndex >= 0)
            {
                block.SetSprite(colorCtr.GetSpriteData(spriteIndex));
            }

        block.row = row;
        block.col = col;

        block.indexRow = row;
        block.indexCol = col;

        grid[row, col] = block;
    }

    count++;
}

        }

        BB10_MainCanvasUI.Main.inGameScript.SetScoreContinue(int.Parse(wordsTotal[1]));

        for (int i = 0; i < 3; i++)
        {
            if (wordsTotal[2 + i] != "")
            {
                string[] wordsPattem = wordsTotal[2 + i].Split('-');
                BB10_NextViewer next = BB10_MainObjControl.Instant.nextViewerCtr.listView[i];
                Types type = pattemCreater.GetTypeFromString(wordsPattem[0]);
                List<BB10_BrickCubeUnit> listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, next.transform.position, next.scale);
                next.state = BB10_NextViewer.State.Show;
                next.SetPattem(listUnit, type, int.Parse(wordsPattem[1]), false);
                next.SetPattem(listUnit, type, Random.Range(0, 4), false);
                next.FixCenterPos();
                next.CheckImpossible();
            }
        }
    }
    string ConvertListToString(List<int> data)
    {
        string result = "";

        for (int i = 0; i < data.Count; i++)
        {
            result += data[i].ToString() + "-";
        }

        result += "+0+++"; // giữ format cũ của bạn

        return result;
    }
}
