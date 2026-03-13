using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class AskScriptBase : MonoBehaviour
{
   public virtual void Ask() => StartCoroutine(IeAsk());
   public abstract IEnumerator IeAsk();

   public abstract bool Ready { get; }
}
