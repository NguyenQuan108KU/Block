using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AutoPlay : MonoBehaviour
{
    BB10_Grid grid;
    BB10_NextViewerControl nextViewerCtr;
    BB10_PlaneView planeView;

    public int timeScale;

    void Start()
    {
        Time.timeScale = timeScale;
        StartCoroutine(InitAuto());
    }
    IEnumerator InitAuto()
    {
        while (BB10_MainObjControl.Instant == null)
            yield return null;

        grid = BB10_MainObjControl.Instant.grid;
        nextViewerCtr = BB10_MainObjControl.Instant.nextViewerCtr;
        planeView = BB10_MainObjControl.Instant.planeViewCrt;

        planeView.isAuto = true;

        StartCoroutine(StartAuto());
    }
    IEnumerator StartAuto()
    {
        while (true)
        {

            yield return new WaitForSeconds(1);

            // select pattem to drag
            BB10_NextViewer next;

            if (nextViewerCtr.listView[0].state == BB10_NextViewer.State.Show && !grid.InvalidPlacePattem(nextViewerCtr.listView[0].listBlock))
            {
                next = nextViewerCtr.listView[0];
                planeView.selected = 0;
                Vector2 posSelect = nextViewerCtr.listView[0].transform.position;
                planeView.faceMousePos = new Vector2(posSelect.x, posSelect.y + planeView.distanceTouch);
            }
            else if (nextViewerCtr.listView[1].state == BB10_NextViewer.State.Show && !grid.InvalidPlacePattem(nextViewerCtr.listView[1].listBlock))
            {
                next = nextViewerCtr.listView[1];
                planeView.selected = 1;
                Vector2 posSelect = nextViewerCtr.listView[1].transform.position;
                planeView.faceMousePos = new Vector2(posSelect.x, posSelect.y + planeView.distanceTouch);
            }
            else
            {
                next = nextViewerCtr.listView[2];
                planeView.selected = 2;
                Vector2 posSelect = nextViewerCtr.listView[2].transform.position;
                planeView.faceMousePos = new Vector2(posSelect.x, posSelect.y + planeView.distanceTouch);
            }


            BB10_MainObjControl.Instant.planeViewCrt.SetPattem(next.listBlock, next.gameObject.transform.position, next.listBlock[0].myData, next.index, next.scale);
            Vector2[] listBlockLocalPos = new Vector2[next.listBlock.Count];

            for (int i = 0; i < next.listBlock.Count; i++)
            {
                listBlockLocalPos[i] = ((Vector2)next.listBlock[i].transform.position - (Vector2)next.transform.position) / next.scale;
            }


            next.HideAllBlock();

            Vector2 facePos = nextViewerCtr.listView[planeView.selected].transform.position;
            planeView.faceMousePos = new Vector2(facePos.x, facePos.y + planeView.distanceTouch);

            Vec2 place = grid.GetPlacePattem(next.listBlock);
            yield return new WaitForSeconds(0.4f);

            float timer = 0;

            Vector2 startPos = planeView.faceMousePos;
            Vector2 correctPos = listBlockLocalPos[0];
            Vector2 targetPos = new Vector2(place.C - correctPos.x, place.R - correctPos.y);

//            planeView.faceMousePos = targetPos;

            float duration = .7f;
            while (timer < duration)
            {
                timer += Time.deltaTime;
                planeView.faceMousePos = Vector2.Lerp(startPos, targetPos, timer / duration);
                yield return null;
            }

            planeView.faceMousePos = targetPos;

//             Place pattem to ground

            planeView.PlacePattemGround();

            yield return new WaitForSeconds(2.2f);

            if (BB10_MainState.state == BB10_MainState.State.GameOver)
            {
                Debug.Log("Wait game over");
                yield return new WaitForSeconds(8.5f);
                //BB10_MainCanvasUI.Main.lostScript.TryAgainButton();
                yield return new WaitForSeconds(2f);
            }
        }
    }
}
