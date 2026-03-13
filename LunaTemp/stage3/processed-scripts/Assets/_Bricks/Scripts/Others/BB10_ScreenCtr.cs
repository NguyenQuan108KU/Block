using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BB10_ScreenCtr : MonoBehaviour
{
    public GameObject BgUnit;
    public RectTransform topRec;
    public Transform bottomTrans;

    public Transform[] listPattemTrans;
    public float defaultPattemY, defaultPattemUIY;
    public float orthographicSizeMin;
    public Camera cam;
    public float distanceEdge;
    public float durationFadeIn;
    public float distanceMoveFade;
    public float startAlpha;
    public float F, FUI;
    public GameObject BG;
    public float targetAlpha;

    SpriteRenderer[,] listSprites;

    int myR, myC;

    public Transform partTop, partDown, partLeft, partRight;

    float defaultScreen;
    float currentScren;

    public GameObject[] grid;

    public bool gridMoving = false;

    IEnumerator StartGridAnim()
    {
        partTop.localPosition = new Vector2(0, 1.93f);
        partDown.localPosition = new Vector2(0, -1.78f);
        partRight.localPosition = new Vector2(-1.4f, 0);
        partLeft.localPosition = new Vector2(2.95f, 0);

        partTop.gameObject.SetActive(true);
        partDown.gameObject.SetActive(true);

        yield return new WaitForSeconds(0.1f);
        StartCoroutine(MovePart(partRight, Vector2.zero, 1.3f));
        StartCoroutine(MovePart(partLeft, Vector2.zero, 1.3f));

        //        yield return new WaitForSeconds(0.07f);
        //StartCoroutine(FadeInPart2(.8f, 1, 0.5f));

        StartCoroutine(MovePart(partTop, Vector2.zero, 1.65f));
        StartCoroutine(MovePart(partDown, Vector2.zero, 1.65f));
    }

    IEnumerator MovePart(Transform part, [Bridge.Ref] Vector2 target, float duration)
    {
        Vector2 startPos = part.localPosition;
        float timer = 0;
        while(timer < duration)
        {
            timer += Time.deltaTime;
            part.localPosition = Vector2.Lerp(startPos, target, easeOutQuad(0, 1, timer / duration));
            yield return null;
        }

        part.localPosition = target;
    }

    public float waitStep;
    public float durationScaleUp;

    public AnimationCurve acScale;

    public Transform parentCell;

    public void Fix(int row, int col)
    {
        myR = row;
        myC = col;

        //grid = new GameObject[row * col];
        //CreateBG(row, col);

        //float size = col + distanceEdge;

        //defaultScreen = 1920.0f / 1080.0f;
        //currentScren = (float)Screen.height / (float)Screen.width;

        //cam.orthographicSize = Mathf.Max(orthographicSizeMin, size / (2.0f * cam.aspect));

        FixMultiScreen();

        //ScaleToFitBg();

        //FixPattemPos();
    }

    void FixMultiScreen()
    {
        defaultScreen = 1920.0f / 1080.0f;
        float fatScreen = 4.0f / 3.0f;
        float thinScreen = 21.0f / 9.0f;
        currentScren = (float)Screen.height / (float)Screen.width;

        float screenFThin = (currentScren - defaultScreen) / (thinScreen - defaultScreen);
        float screenFFat = (currentScren - defaultScreen) / (fatScreen - defaultScreen);

        //float defaultOg = 7.9f;
        //float defaultBottom = -0f;
        //float defaultCamY = 4f;


        //1.47 // -1.22

        //if(currentScren < defaultScreen - 0.1f)
        //{
        //    orthographicSizeMin = 10.5f;
        //}

        //if (currentScren > (defaultScreen + 0.3))
        //{

        //}

        //if (currentScreen > defaultScreen + 0.1f)
        //{
        float size = myC + distanceEdge;
        cam.orthographicSize = Mathf.Max(orthographicSizeMin, size / (2.0f * cam.aspect));

        //float camYMax = 1.9f;
        //cam.transform.position = new Vector3(4.5f, Mathf.LerpUnclamped(defaultCamY, camYMax, screenFThin), -20);

        //BG.transform.localPosition = new Vector2(0, cam.transform.position.y);

        //float bottomMax = -1.17f;
        //bottomTrans.position = new Vector2(0, Mathf.LerpUnclamped(defaultBottom, bottomMax, screenFThin));
        
        //}
        //else if (currentScreen < defaultScreen - 0.1f)
        //{
        //    //cs.matchWidthOrHeight = 1;

        //    float ogMax = 7.28f;
        //    cam.orthographicSize = Mathf.LerpUnclamped(defaultOg, ogMax, screenFFat) + 1f;

        //    float bottomMax = -0.24f;
        //    bottomTrans.position = new Vector2(0, Mathf.LerpUnclamped(defaultBottom, bottomMax, screenFFat));
        //}
    }

    void CreateBG(int row, int col)
    {
        for(int r = 0; r < row; r++)
        {
            for(int c = 0; c < col; c++)
            {
                GameObject cell = Instantiate(BgUnit);
                cell.transform.position = new Vector2(c - 0.5f, r - 0.5f);
                cell.transform.SetParent(parentCell);
                grid[r + c * row] = cell;
            }
        }
    }

    public void StartNoAnim()
    {
        //SetAlphaAll(1);
        //partTop.gameObject.SetActive(false);
        //partDown.gameObject.SetActive(false);
    }

    public void StartAnim()
    {
        //StartCoroutine(StartGridAnim());

        //for(int i = 0; i < 64; i++)
        //{
        //    grid[i].transform.localScale = Vector3.zero;
        //}

        MainAudio.Main.PlaySound(TypeAudio.StartGame);

        StartCoroutine(Step());
    }

    IEnumerator Step()
    {
        gridMoving = true;

        //for(int i = 0; i < 8; i++)
        //{
        //    for(int j = 0; j <= i; j++)
        //    {
        //        StartCoroutine(ScaleUpUnit(i + 7 * j));
        //    }

        //    yield return new WaitForSeconds(waitStep);
        //}

        //for(int i = 0; i < 7; i++)
        //{
        //    for(int j = 6 - i; j >= 0; j--)
        //    {
        //        StartCoroutine(ScaleUpUnit(15 + i * 8 + 7 * j));
        //    }

        //    yield return new WaitForSeconds(waitStep);
        //}

        yield return null;

        gridMoving = false;
    }

    IEnumerator ScaleUpUnit(int index)
    {
        GameObject unit = grid[index];
        float timer = 0;

        while(timer < durationScaleUp)
        {
            timer += Time.deltaTime;
            unit.transform.localScale = Vector3.one * Mathf.LerpUnclamped(0, 1, acScale.Evaluate(timer / durationScaleUp));
            yield return null;
        }

        unit.transform.localScale = Vector3.one;
    }

    float easeOutQuad(float start, float end, float value)
    {
        value--;
        end -= start;
        return end * (value * value * value * value * value + 1) + start;
    }

    void SetAlphaPart1(float alpha)
    {
        Color color = new Color(1, 1, 1, alpha);
        for(int r = 0; r < myR; r++)
        {
            for(int c = 0; c < myC; c++)
            {
                listSprites[r, c].color = color;
            }
        }
    }


    void SetAlphaAll(float alpha)
    {
        Color color = new Color(1, 1, 1, alpha);
        for(int r = 0; r < myR; r++)
        {
            for(int c = 0; c < myC; c++)
            {
                listSprites[r, c].color = color;
            }
        }
    }

    void FixPattemPos()
    {
        if(currentScren > defaultScreen)
        {
            float newY = defaultPattemY - (currentScren - defaultScreen) * F;
            for(int i = 0; i < listPattemTrans.Length; i++)
            {
                listPattemTrans[i].transform.position = new Vector2(listPattemTrans[i].transform.position.x, newY);
            }

            float newUIY = defaultPattemUIY - (currentScren - defaultScreen) * FUI;
            topRec.anchoredPosition = new Vector2(0, newUIY);
        }
    }

    void ScaleToFitBg()
    {
        Vector3 size = BG.GetComponent<SpriteRenderer>().sprite.bounds.size;

        float width = size.x;
        float height = size.y;

        float worldScreenHeight = cam.orthographicSize * 2.0f;
        float worldScreenWidth = worldScreenHeight / Screen.height * Screen.width;
        BG.transform.localScale = new Vector3(worldScreenWidth / width, worldScreenHeight / height, 1);
    }


    IEnumerator StartFade(GameObject obj, [Bridge.Ref] Vector2 startPos, [Bridge.Ref] Vector2 targetPos, bool enableGrid)
    {
        obj.SetActive(true);
        SpriteRenderer render = obj.GetComponent<SpriteRenderer>();
        Color startColor = Color.white;

        float timer = 0;

        while(timer < durationFadeIn)
        {
            timer += Time.deltaTime;
            float t = timer / durationFadeIn;
            obj.transform.position = Vector2.Lerp(startPos, targetPos, t);
            render.color = new Color(startColor.r, startColor.g, startColor.b, Mathf.Lerp(startAlpha, 1, t));
            yield return null;
        }
        render.color = new Color(startColor.r, startColor.g, startColor.b, 1);
        obj.transform.position = targetPos;
    }

}
