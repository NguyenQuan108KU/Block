using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlockJewel : BB10_BrickCubeUnit
{
    public override void Effect()
    {
        StartCoroutine(WaitEffect());
        StartCoroutine(EffectBlock());
    }
    public IEnumerator EffectBlock()
    {
        float timer = 0;

        while(timer < durationScaleEffect)
        {
            timer += Time.deltaTime;
            transform.localScale = Vector3.Lerp(Vector3.one, Vector3.one * targetScale, timer / durationScaleEffect);
            yield return null;
        }
        BB10_MainObjControl.Instant.pattemCreater.SetCube(this);
    }
}
