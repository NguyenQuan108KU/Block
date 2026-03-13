using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class BaseRemoteDatabaseScript : MonoBehaviour
{
    public abstract Type GetDatabaseType();
    public abstract ScriptableObject GetDatabase();
    public abstract void Clear();
    public abstract void LoadRemote();

    public abstract void Register(ScriptableObject origin);
}