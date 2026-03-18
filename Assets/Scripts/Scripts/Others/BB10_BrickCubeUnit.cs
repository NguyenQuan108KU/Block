using UnityEngine;
using System.Collections;

public class BB10_BrickCubeUnit : MonoBehaviour
{
    //public TypePattem.Type thisType;
    public Types thisType;
    public BB10_NextViewer viewer;
    public SpriteRenderer render;

    public int ID;
    public int row;
    public int col;

    public int indexRow;
    public int indexCol;

    public float scale;

    public BB10_ColorData myData;
    public float targetGray;


    public float durationDrop;
    public Vector3 dropScaleMin;

    public AnimationCurve ac;
    public float speed;
    void OnClickBlock()
    {

        if (viewer != null)
        {
            viewer.ClickPattern();
        }
    }
    void Update()
    {
        if (Input.GetMouseButtonDown(0) && !GamePlayManager.Instance.isFinishGame)
        {
            Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            Collider2D[] hits = Physics2D.OverlapPointAll(mousePos);

            for (int i = 0; i < hits.Length; i++)
            {
                if (hits[i].gameObject == gameObject)
                {
                    OnClickBlock();
                    GamePlayManager.Instance.UpClick();
                    TutorialManager.Instance.Hand.SetActive(false);
                    TutorialManager.Instance.TextTut.SetActive(false);
                    MainAudio.Main.PlaySound(TypeAudio.SoundClick);
                    break;
                }
            }
        }
    }
    public void SetSprite(BB10_ColorData data)
    {
        myData = data;
        render.sprite = myData.sprite;
    }

    public void SetSprite(Sprite sprite)
    {
        render.sprite = sprite;
    }

    public int GetSpriteID
    {
        get { return myData.ID; }
    }

    public void SetLayer(int layer)
    {
        render.sortingOrder = layer;
    }

    public void SetAlpha(float alpha)
    {
        render.color = new Color(1, 1, 1, alpha);
    }

    public void RotateUnit()
    {
        float newRow, newCol;
        newCol = transform.position.x - (indexCol - indexRow) * scale;
        newRow = transform.position.y - (indexRow + indexCol) * scale;

        int t = indexCol;
        indexCol = indexRow;
        indexRow = -t;

        transform.position = new Vector3(newCol, newRow);
    }

    public void MoveCenterPos(Vector2 pos, Vector2 center)
    {
        transform.position = pos + new Vector2((indexCol - center.x) * scale, (indexRow - center.y) * scale);
    }

    public void ApplyRotate()
    {
        if(thisType != Types.O1)
        {
            transform.position = new Vector3(col, row);
        }

        //if (thisType != TypePattem.Type.O1)
        //{
        //    transform.position = new Vector3(col, row);
        //}
    }

    public GameObject GetObj
    {
        get { return gameObject; }
    }

    public void DropDown(Vector2 startPos, Vector2 targetPos, float durationMove)
    {
        StartCoroutine(StartDrop(startPos, targetPos, durationMove));
    }

    IEnumerator StartDrop(Vector2 startPos, Vector2 targetPos, float durationMove)
    {
        float timer = 0;
        Vector3 targetScale = Vector3.one;

        // Scale         
        //while(timer < durationDrop)
        //{
        //    timer += Time.deltaTime;
        //    transform.localScale = Vector3.Lerp(transform.localScale, targetScale, timer / durationDrop);
        //    yield return null;
        //}

        //transform.localScale = targetScale;

        // Drop
        timer = 0;
        while(timer < durationMove)
        {
            timer += Time.deltaTime;

            // Move
            transform.position = Vector2.Lerp(startPos, targetPos, timer / durationMove);

            // Scale
            transform.localScale = Vector3.Lerp(transform.localScale, targetScale, timer / durationMove);

            yield return null;
        }

        transform.position = targetPos;

        transform.localScale = targetScale;

        #region New Effect
        //float timer = 0;
        //while(timer < durationMove)
        //{
        //    timer += Time.deltaTime;
        //    transform.position = Vector2.Lerp(startPos, targetPos, timer / durationMove);

        //    //transform.localScale = Vector3.Lerp(transform.localScale, dropScaleMin, timer / durationMove);

        //    yield return null;
        //}

        //transform.position = targetPos;

        ////transform.localScale = dropScaleMin;

        //yield return null;

        //Vector3 targetScale = Vector3.one;                    

        //timer = 0;
        //while(timer < durationDrop)
        //{
        //    timer += Time.deltaTime;
        //    transform.localScale = Vector3.Lerp(transform.localScale, targetScale, timer / durationDrop);
        //    yield return null;
        //}

        //transform.localScale = targetScale;
        #endregion
    }

    public virtual void Effect()
    {
        StartCoroutine(EffectHideBlock());
    }

    public virtual IEnumerator WaitEffect()
    {
        yield return new WaitForSeconds(0.02f);
        Vector2 effectPos = (Vector2)transform.position;
        BB10_MainObjControl.Instant.sG_Block_EffectCtr.EffectBreakBlock(effectPos, myData.ID);
        //MainObjControl.Instant.effectCtr.Effect(effectPos);
    }

    public float targetScale = 0.75f;
    public float durationScaleEffect = 0.1f;
    public float speedRotate;

    IEnumerator EffectHideBlock()
    {
        yield return new WaitForSeconds(0.03f);
        float timer = 0;

        while (timer < durationScaleEffect)
        {
            timer += Time.deltaTime;
            float t = ac.Evaluate(timer / durationScaleEffect);
            transform.localScale = Vector3.LerpUnclamped(Vector3.one, Vector3.zero, t);
            transform.Rotate(Vector3.forward, speedRotate * Time.deltaTime);
            yield return null;
        }

        BB10_MainObjControl.Instant.pattemCreater.SetCube(this);
    }

    public GameObject shadowDropBlock;
    public void SetShadowDropBlock(bool enable)
    {
        shadowDropBlock.SetActive(enable);
    }

}
