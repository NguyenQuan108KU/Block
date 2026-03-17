using UnityEngine;
using System.Collections;

public class DataSource : ScriptableObject {
	[SerializeField]
	public UnitListColor[] listUnitColor;
	const string InstancePath = "Data/Data";
	static DataSource instance = null;
	
	public static DataSource Instance {
		get {
			if (instance == null) {
				instance = Resources.Load<DataSource>(InstancePath);
			}
			return instance;
		}
	}
}
