using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public static class GameEvent
{
    private static UnityEvent<ScreenType> _onResizeScreen = new UnityEvent<ScreenType>();
    public static UnityEvent<ScreenType> OnResizeScreen => _onResizeScreen;
}
