Shader "Custom/TextureSwitch" {
	Properties {
	_MainTex1 ("Texture1", 2D) = "" {}
	_MainTex2 ("Texture2", 2D) = "" {}
	_MainTexLerp ("TextureLerp", 2D) = "" {}
	_T ("t", float) = 1
}
SubShader{
		Tags{ "RenderType" = "Transparent" "Queue" = "Transparent" }
		Pass{
		Blend SrcAlpha OneMinusSrcAlpha
		CGPROGRAM

		#pragma vertex vert 
		#pragma fragment frag

		struct VertexInput {
			half4 vertex : POSITION;
			half2 texcoord : TEXCOORD;
		} ; 

		struct VertexOutput {
			half4 pos : SV_POSITION;
			half2 uv : TEXCOORD;
		} ;

		sampler2D _MainTex1;
		sampler2D _MainTex2;
		sampler2D _MainTexLerp;
		half _T;

		VertexOutput vert (VertexInput i) {
		    VertexOutput o;
		    o.pos = UnityObjectToClipPos(i.vertex);
		    o.uv = i.texcoord;
		    return o;
		}
        
		half4 frag (VertexOutput i) : COLOR {
		     half4 tex1 = tex2D(_MainTex1, i.uv);
		     half4 tex2 = tex2D(_MainTex2, i.uv);
		     half4 texLerp = lerp(tex1, tex2, _T);
		     return texLerp;	
		}

		ENDCG
	}
}  
FallBack Off
}
