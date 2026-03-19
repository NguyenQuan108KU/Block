var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.JointSpring' )
  var i2281 = data
  i2280.spring = i2281[0]
  i2280.damper = i2281[1]
  i2280.targetPosition = i2281[2]
  return i2280
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.JointMotor' )
  var i2283 = data
  i2282.m_TargetVelocity = i2283[0]
  i2282.m_Force = i2283[1]
  i2282.m_FreeSpin = i2283[2]
  return i2282
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointLimits' )
  var i2285 = data
  i2284.m_Min = i2285[0]
  i2284.m_Max = i2285[1]
  i2284.m_Bounciness = i2285[2]
  i2284.m_BounceMinVelocity = i2285[3]
  i2284.m_ContactDistance = i2285[4]
  i2284.minBounce = i2285[5]
  i2284.maxBounce = i2285[6]
  return i2284
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointDrive' )
  var i2287 = data
  i2286.m_PositionSpring = i2287[0]
  i2286.m_PositionDamper = i2287[1]
  i2286.m_MaximumForce = i2287[2]
  i2286.m_UseAcceleration = i2287[3]
  return i2286
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2289 = data
  i2288.m_Spring = i2289[0]
  i2288.m_Damper = i2289[1]
  return i2288
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2291 = data
  i2290.m_Limit = i2291[0]
  i2290.m_Bounciness = i2291[1]
  i2290.m_ContactDistance = i2291[2]
  return i2290
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2293 = data
  i2292.m_ExtremumSlip = i2293[0]
  i2292.m_ExtremumValue = i2293[1]
  i2292.m_AsymptoteSlip = i2293[2]
  i2292.m_AsymptoteValue = i2293[3]
  i2292.m_Stiffness = i2293[4]
  return i2292
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2295 = data
  i2294.m_LowerAngle = i2295[0]
  i2294.m_UpperAngle = i2295[1]
  return i2294
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2297 = data
  i2296.m_MotorSpeed = i2297[0]
  i2296.m_MaximumMotorTorque = i2297[1]
  return i2296
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2299 = data
  i2298.m_DampingRatio = i2299[0]
  i2298.m_Frequency = i2299[1]
  i2298.m_Angle = i2299[2]
  return i2298
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2301 = data
  i2300.m_LowerTranslation = i2301[0]
  i2300.m_UpperTranslation = i2301[1]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2302 = root || new pc.UnityMaterial()
  var i2303 = data
  i2302.name = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'shader')
  i2302.renderQueue = i2303[3]
  i2302.enableInstancing = !!i2303[4]
  var i2305 = i2303[5]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2305[i + 0]) );
  }
  i2302.floatParameters = i2304
  var i2307 = i2303[6]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2307[i + 0]) );
  }
  i2302.colorParameters = i2306
  var i2309 = i2303[7]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2309[i + 0]) );
  }
  i2302.vectorParameters = i2308
  var i2311 = i2303[8]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2311[i + 0]) );
  }
  i2302.textureParameters = i2310
  var i2313 = i2303[9]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2313[i + 0]) );
  }
  i2302.materialFlags = i2312
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.value = i2317[1]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.value = new pc.Color(i2321[1], i2321[2], i2321[3], i2321[4])
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.value = new pc.Vec4( i2325[1], i2325[2], i2325[3], i2325[4] )
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2329 = data
  i2328.name = i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'value')
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.enabled = !!i2333[1]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2335 = data
  i2334.name = i2335[0]
  i2334.width = i2335[1]
  i2334.height = i2335[2]
  i2334.mipmapCount = i2335[3]
  i2334.anisoLevel = i2335[4]
  i2334.filterMode = i2335[5]
  i2334.hdr = !!i2335[6]
  i2334.format = i2335[7]
  i2334.wrapMode = i2335[8]
  i2334.alphaIsTransparency = !!i2335[9]
  i2334.alphaSource = i2335[10]
  i2334.graphicsFormat = i2335[11]
  i2334.sRGBTexture = !!i2335[12]
  i2334.desiredColorSpace = i2335[13]
  i2334.wrapU = i2335[14]
  i2334.wrapV = i2335[15]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2337 = data
  i2336.position = new pc.Vec3( i2337[0], i2337[1], i2337[2] )
  i2336.scale = new pc.Vec3( i2337[3], i2337[4], i2337[5] )
  i2336.rotation = new pc.Quat(i2337[6], i2337[7], i2337[8], i2337[9])
  return i2336
}

Deserializers["CompleteBlocks"] = function (request, data, root) {
  var i2338 = root || request.c( 'CompleteBlocks' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'spriteRenderer')
  var i2341 = i2339[2]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('TextAndSound')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(request.d('TextAndSound', i2341[i + 0]));
  }
  i2338.listTextAndSound = i2340
  return i2338
}

Deserializers["TextAndSound"] = function (request, data, root) {
  var i2344 = root || request.c( 'TextAndSound' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'sprite')
  request.r(i2345[2], i2345[3], 0, i2344, 'audioClip')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'clip')
  request.r(i2347[2], i2347[3], 0, i2346, 'outputAudioMixerGroup')
  i2346.playOnAwake = !!i2347[4]
  i2346.loop = !!i2347[5]
  i2346.time = i2347[6]
  i2346.volume = i2347[7]
  i2346.pitch = i2347[8]
  i2346.enabled = !!i2347[9]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2349 = data
  i2348.color = new pc.Color(i2349[0], i2349[1], i2349[2], i2349[3])
  request.r(i2349[4], i2349[5], 0, i2348, 'sprite')
  i2348.flipX = !!i2349[6]
  i2348.flipY = !!i2349[7]
  i2348.drawMode = i2349[8]
  i2348.size = new pc.Vec2( i2349[9], i2349[10] )
  i2348.tileMode = i2349[11]
  i2348.adaptiveModeThreshold = i2349[12]
  i2348.maskInteraction = i2349[13]
  i2348.spriteSortPoint = i2349[14]
  i2348.enabled = !!i2349[15]
  request.r(i2349[16], i2349[17], 0, i2348, 'sharedMaterial')
  var i2351 = i2349[18]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 2, i2350, '')
  }
  i2348.sharedMaterials = i2350
  i2348.receiveShadows = !!i2349[19]
  i2348.shadowCastingMode = i2349[20]
  i2348.sortingLayerID = i2349[21]
  i2348.sortingOrder = i2349[22]
  i2348.lightmapIndex = i2349[23]
  i2348.lightmapSceneIndex = i2349[24]
  i2348.lightmapScaleOffset = new pc.Vec4( i2349[25], i2349[26], i2349[27], i2349[28] )
  i2348.lightProbeUsage = i2349[29]
  i2348.reflectionProbeUsage = i2349[30]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'animatorController')
  request.r(i2355[2], i2355[3], 0, i2354, 'avatar')
  i2354.updateMode = i2355[4]
  i2354.hasTransformHierarchy = !!i2355[5]
  i2354.applyRootMotion = !!i2355[6]
  var i2357 = i2355[7]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 2, i2356, '')
  }
  i2354.humanBones = i2356
  i2354.enabled = !!i2355[8]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.tagId = i2361[1]
  i2360.enabled = !!i2361[2]
  i2360.isStatic = !!i2361[3]
  i2360.layer = i2361[4]
  return i2360
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i2362 = root || request.c( 'BB10_BrickCubeUnit' )
  var i2363 = data
  i2362.thisType = i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'viewer')
  request.r(i2363[3], i2363[4], 0, i2362, 'render')
  i2362.ID = i2363[5]
  i2362.row = i2363[6]
  i2362.col = i2363[7]
  i2362.indexRow = i2363[8]
  i2362.indexCol = i2363[9]
  i2362.scale = i2363[10]
  i2362.myData = request.d('BB10_ColorData', i2363[11], i2362.myData)
  i2362.targetGray = i2363[12]
  i2362.durationDrop = i2363[13]
  i2362.dropScaleMin = new pc.Vec3( i2363[14], i2363[15], i2363[16] )
  i2362.ac = new pc.AnimationCurve( { keys_flow: i2363[17] } )
  i2362.speed = i2363[18]
  i2362.targetScale = i2363[19]
  i2362.durationScaleEffect = i2363[20]
  i2362.speedRotate = i2363[21]
  request.r(i2363[22], i2363[23], 0, i2362, 'shadowDropBlock')
  return i2362
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i2364 = root || request.c( 'BB10_ColorData' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'sprite')
  i2364.ID = i2365[2]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2367 = data
  i2366.usedByComposite = !!i2367[0]
  i2366.autoTiling = !!i2367[1]
  i2366.size = new pc.Vec2( i2367[2], i2367[3] )
  i2366.edgeRadius = i2367[4]
  i2366.enabled = !!i2367[5]
  i2366.isTrigger = !!i2367[6]
  i2366.usedByEffector = !!i2367[7]
  i2366.density = i2367[8]
  i2366.offset = new pc.Vec2( i2367[9], i2367[10] )
  request.r(i2367[11], i2367[12], 0, i2366, 'material')
  return i2366
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i2368 = root || request.c( 'BB10_ColorControl' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('BB10_ColorData', i2371[i + 0]) );
  }
  i2368.sprites = i2370
  var i2373 = i2369[1]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2368.spriteTexs = i2372
  var i2375 = i2369[2]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
  var i2377 = i2375[i + 0]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
    i2374.push( i2376 );
  }
  i2368.preloadSprite = i2374
  i2368.preload = i2369[3]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'additionalVertexStreams')
  i2388.enabled = !!i2389[2]
  request.r(i2389[3], i2389[4], 0, i2388, 'sharedMaterial')
  var i2391 = i2389[5]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 2) {
  request.r(i2391[i + 0], i2391[i + 1], 2, i2390, '')
  }
  i2388.sharedMaterials = i2390
  i2388.receiveShadows = !!i2389[6]
  i2388.shadowCastingMode = i2389[7]
  i2388.sortingLayerID = i2389[8]
  i2388.sortingOrder = i2389[9]
  i2388.lightmapIndex = i2389[10]
  i2388.lightmapSceneIndex = i2389[11]
  i2388.lightmapScaleOffset = new pc.Vec4( i2389[12], i2389[13], i2389[14], i2389[15] )
  i2388.lightProbeUsage = i2389[16]
  i2388.reflectionProbeUsage = i2389[17]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i2393 = data
  i2392.m_Alignment = i2393[0]
  i2392.m_Anchor = i2393[1]
  i2392.m_CharacterSize = i2393[2]
  request.r(i2393[3], i2393[4], 0, i2392, 'm_Font')
  i2392.m_FontSize = i2393[5]
  i2392.m_FontStyle = i2393[6]
  i2392.m_LineSpacing = i2393[7]
  i2392.m_OffsetZ = i2393[8]
  i2392.m_RichText = !!i2393[9]
  i2392.m_TabSize = i2393[10]
  i2392.m_Text = i2393[11]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2395 = data
  i2394.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2395[0], i2394.main)
  i2394.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2395[1], i2394.colorBySpeed)
  i2394.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2395[2], i2394.colorOverLifetime)
  i2394.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2395[3], i2394.emission)
  i2394.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2395[4], i2394.rotationBySpeed)
  i2394.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2395[5], i2394.rotationOverLifetime)
  i2394.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2395[6], i2394.shape)
  i2394.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2395[7], i2394.sizeBySpeed)
  i2394.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2395[8], i2394.sizeOverLifetime)
  i2394.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2395[9], i2394.textureSheetAnimation)
  i2394.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2395[10], i2394.velocityOverLifetime)
  i2394.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2395[11], i2394.noise)
  i2394.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2395[12], i2394.inheritVelocity)
  i2394.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2395[13], i2394.forceOverLifetime)
  i2394.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2395[14], i2394.limitVelocityOverLifetime)
  i2394.useAutoRandomSeed = !!i2395[15]
  i2394.randomSeed = i2395[16]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemMain()
  var i2397 = data
  i2396.duration = i2397[0]
  i2396.loop = !!i2397[1]
  i2396.prewarm = !!i2397[2]
  i2396.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.startDelay)
  i2396.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[4], i2396.startLifetime)
  i2396.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[5], i2396.startSpeed)
  i2396.startSize3D = !!i2397[6]
  i2396.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[7], i2396.startSizeX)
  i2396.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[8], i2396.startSizeY)
  i2396.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[9], i2396.startSizeZ)
  i2396.startRotation3D = !!i2397[10]
  i2396.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[11], i2396.startRotationX)
  i2396.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[12], i2396.startRotationY)
  i2396.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[13], i2396.startRotationZ)
  i2396.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2397[14], i2396.startColor)
  i2396.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[15], i2396.gravityModifier)
  i2396.simulationSpace = i2397[16]
  request.r(i2397[17], i2397[18], 0, i2396, 'customSimulationSpace')
  i2396.simulationSpeed = i2397[19]
  i2396.useUnscaledTime = !!i2397[20]
  i2396.scalingMode = i2397[21]
  i2396.playOnAwake = !!i2397[22]
  i2396.maxParticles = i2397[23]
  i2396.emitterVelocityMode = i2397[24]
  i2396.stopAction = i2397[25]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2398 = root || new pc.MinMaxCurve()
  var i2399 = data
  i2398.mode = i2399[0]
  i2398.curveMin = new pc.AnimationCurve( { keys_flow: i2399[1] } )
  i2398.curveMax = new pc.AnimationCurve( { keys_flow: i2399[2] } )
  i2398.curveMultiplier = i2399[3]
  i2398.constantMin = i2399[4]
  i2398.constantMax = i2399[5]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2400 = root || new pc.MinMaxGradient()
  var i2401 = data
  i2400.mode = i2401[0]
  i2400.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2401[1], i2400.gradientMin)
  i2400.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2401[2], i2400.gradientMax)
  i2400.colorMin = new pc.Color(i2401[3], i2401[4], i2401[5], i2401[6])
  i2400.colorMax = new pc.Color(i2401[7], i2401[8], i2401[9], i2401[10])
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2403 = data
  i2402.mode = i2403[0]
  var i2405 = i2403[1]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2405[i + 0]) );
  }
  i2402.colorKeys = i2404
  var i2407 = i2403[2]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2407[i + 0]) );
  }
  i2402.alphaKeys = i2406
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemColorBySpeed()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2409[1], i2408.color)
  i2408.range = new pc.Vec2( i2409[2], i2409[3] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2413 = data
  i2412.color = new pc.Color(i2413[0], i2413[1], i2413[2], i2413[3])
  i2412.time = i2413[4]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2417 = data
  i2416.alpha = i2417[0]
  i2416.time = i2417[1]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemColorOverLifetime()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2419[1], i2418.color)
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2420 = root || new pc.ParticleSystemEmitter()
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[1], i2420.rateOverTime)
  i2420.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[2], i2420.rateOverDistance)
  var i2423 = i2421[3]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2423[i + 0]) );
  }
  i2420.bursts = i2422
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemBurst()
  var i2427 = data
  i2426.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[0], i2426.count)
  i2426.cycleCount = i2427[1]
  i2426.minCount = i2427[2]
  i2426.maxCount = i2427[3]
  i2426.repeatInterval = i2427[4]
  i2426.time = i2427[5]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2428 = root || new pc.ParticleSystemRotationBySpeed()
  var i2429 = data
  i2428.enabled = !!i2429[0]
  i2428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[1], i2428.x)
  i2428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[2], i2428.y)
  i2428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[3], i2428.z)
  i2428.separateAxes = !!i2429[4]
  i2428.range = new pc.Vec2( i2429[5], i2429[6] )
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[1], i2430.x)
  i2430.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[2], i2430.y)
  i2430.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[3], i2430.z)
  i2430.separateAxes = !!i2431[4]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2432 = root || new pc.ParticleSystemShape()
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.shapeType = i2433[1]
  i2432.randomDirectionAmount = i2433[2]
  i2432.sphericalDirectionAmount = i2433[3]
  i2432.randomPositionAmount = i2433[4]
  i2432.alignToDirection = !!i2433[5]
  i2432.radius = i2433[6]
  i2432.radiusMode = i2433[7]
  i2432.radiusSpread = i2433[8]
  i2432.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[9], i2432.radiusSpeed)
  i2432.radiusThickness = i2433[10]
  i2432.angle = i2433[11]
  i2432.length = i2433[12]
  i2432.boxThickness = new pc.Vec3( i2433[13], i2433[14], i2433[15] )
  i2432.meshShapeType = i2433[16]
  request.r(i2433[17], i2433[18], 0, i2432, 'mesh')
  request.r(i2433[19], i2433[20], 0, i2432, 'meshRenderer')
  request.r(i2433[21], i2433[22], 0, i2432, 'skinnedMeshRenderer')
  i2432.useMeshMaterialIndex = !!i2433[23]
  i2432.meshMaterialIndex = i2433[24]
  i2432.useMeshColors = !!i2433[25]
  i2432.normalOffset = i2433[26]
  i2432.arc = i2433[27]
  i2432.arcMode = i2433[28]
  i2432.arcSpread = i2433[29]
  i2432.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[30], i2432.arcSpeed)
  i2432.donutRadius = i2433[31]
  i2432.position = new pc.Vec3( i2433[32], i2433[33], i2433[34] )
  i2432.rotation = new pc.Vec3( i2433[35], i2433[36], i2433[37] )
  i2432.scale = new pc.Vec3( i2433[38], i2433[39], i2433[40] )
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2434 = root || new pc.ParticleSystemSizeBySpeed()
  var i2435 = data
  i2434.enabled = !!i2435[0]
  i2434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[1], i2434.x)
  i2434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[2], i2434.y)
  i2434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[3], i2434.z)
  i2434.separateAxes = !!i2435[4]
  i2434.range = new pc.Vec2( i2435[5], i2435[6] )
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2437 = data
  i2436.enabled = !!i2437[0]
  i2436.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[1], i2436.x)
  i2436.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[2], i2436.y)
  i2436.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[3], i2436.z)
  i2436.separateAxes = !!i2437[4]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2438 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2439 = data
  i2438.enabled = !!i2439[0]
  i2438.mode = i2439[1]
  i2438.animation = i2439[2]
  i2438.numTilesX = i2439[3]
  i2438.numTilesY = i2439[4]
  i2438.useRandomRow = !!i2439[5]
  i2438.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[6], i2438.frameOverTime)
  i2438.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[7], i2438.startFrame)
  i2438.cycleCount = i2439[8]
  i2438.rowIndex = i2439[9]
  i2438.flipU = i2439[10]
  i2438.flipV = i2439[11]
  i2438.spriteCount = i2439[12]
  var i2441 = i2439[13]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2438.sprites = i2440
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[1], i2442.x)
  i2442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[2], i2442.y)
  i2442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[3], i2442.z)
  i2442.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[4], i2442.radial)
  i2442.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[5], i2442.speedModifier)
  i2442.space = i2443[6]
  i2442.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[7], i2442.orbitalX)
  i2442.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[8], i2442.orbitalY)
  i2442.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[9], i2442.orbitalZ)
  i2442.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[10], i2442.orbitalOffsetX)
  i2442.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[11], i2442.orbitalOffsetY)
  i2442.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[12], i2442.orbitalOffsetZ)
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2444 = root || new pc.ParticleSystemNoise()
  var i2445 = data
  i2444.enabled = !!i2445[0]
  i2444.separateAxes = !!i2445[1]
  i2444.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[2], i2444.strengthX)
  i2444.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[3], i2444.strengthY)
  i2444.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[4], i2444.strengthZ)
  i2444.frequency = i2445[5]
  i2444.damping = !!i2445[6]
  i2444.octaveCount = i2445[7]
  i2444.octaveMultiplier = i2445[8]
  i2444.octaveScale = i2445[9]
  i2444.quality = i2445[10]
  i2444.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[11], i2444.scrollSpeed)
  i2444.scrollSpeedMultiplier = i2445[12]
  i2444.remapEnabled = !!i2445[13]
  i2444.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[14], i2444.remapX)
  i2444.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[15], i2444.remapY)
  i2444.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[16], i2444.remapZ)
  i2444.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[17], i2444.positionAmount)
  i2444.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[18], i2444.rotationAmount)
  i2444.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[19], i2444.sizeAmount)
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2446 = root || new pc.ParticleSystemInheritVelocity()
  var i2447 = data
  i2446.enabled = !!i2447[0]
  i2446.mode = i2447[1]
  i2446.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[2], i2446.curve)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemForceOverLifetime()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[1], i2448.x)
  i2448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.y)
  i2448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[3], i2448.z)
  i2448.space = i2449[4]
  i2448.randomized = !!i2449[5]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[1], i2450.limit)
  i2450.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.limitX)
  i2450.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.limitY)
  i2450.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[4], i2450.limitZ)
  i2450.dampen = i2451[5]
  i2450.separateAxes = !!i2451[6]
  i2450.space = i2451[7]
  i2450.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[8], i2450.drag)
  i2450.multiplyDragByParticleSize = !!i2451[9]
  i2450.multiplyDragByParticleVelocity = !!i2451[10]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'mesh')
  i2452.meshCount = i2453[2]
  i2452.activeVertexStreamsCount = i2453[3]
  i2452.alignment = i2453[4]
  i2452.renderMode = i2453[5]
  i2452.sortMode = i2453[6]
  i2452.lengthScale = i2453[7]
  i2452.velocityScale = i2453[8]
  i2452.cameraVelocityScale = i2453[9]
  i2452.normalDirection = i2453[10]
  i2452.sortingFudge = i2453[11]
  i2452.minParticleSize = i2453[12]
  i2452.maxParticleSize = i2453[13]
  i2452.pivot = new pc.Vec3( i2453[14], i2453[15], i2453[16] )
  request.r(i2453[17], i2453[18], 0, i2452, 'trailMaterial')
  i2452.applyActiveColorSpace = !!i2453[19]
  i2452.enabled = !!i2453[20]
  request.r(i2453[21], i2453[22], 0, i2452, 'sharedMaterial')
  var i2455 = i2453[23]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2452.sharedMaterials = i2454
  i2452.receiveShadows = !!i2453[24]
  i2452.shadowCastingMode = i2453[25]
  i2452.sortingLayerID = i2453[26]
  i2452.sortingOrder = i2453[27]
  i2452.lightmapIndex = i2453[28]
  i2452.lightmapSceneIndex = i2453[29]
  i2452.lightmapScaleOffset = new pc.Vec4( i2453[30], i2453[31], i2453[32], i2453[33] )
  i2452.lightProbeUsage = i2453[34]
  i2452.reflectionProbeUsage = i2453[35]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.atlasId = i2457[1]
  i2456.mipmapCount = i2457[2]
  i2456.hdr = !!i2457[3]
  i2456.size = i2457[4]
  i2456.anisoLevel = i2457[5]
  i2456.filterMode = i2457[6]
  var i2459 = i2457[7]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 4) {
    i2458.push( UnityEngine.Rect.MinMaxRect(i2459[i + 0], i2459[i + 1], i2459[i + 2], i2459[i + 3]) );
  }
  i2456.rects = i2458
  i2456.wrapU = i2457[8]
  i2456.wrapV = i2457[9]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2463 = data
  i2462.name = i2463[0]
  i2462.index = i2463[1]
  i2462.startup = !!i2463[2]
  return i2462
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i2464 = root || request.c( 'BB10_MainObjControl' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'colorControl')
  request.r(i2465[2], i2465[3], 0, i2464, 'pattemCreater')
  request.r(i2465[4], i2465[5], 0, i2464, 'nextViewerCtr')
  request.r(i2465[6], i2465[7], 0, i2464, 'grid')
  request.r(i2465[8], i2465[9], 0, i2464, 'planeViewCrt')
  request.r(i2465[10], i2465[11], 0, i2464, 'groundView')
  request.r(i2465[12], i2465[13], 0, i2464, 'sG_Block_EffectCtr')
  request.r(i2465[14], i2465[15], 0, i2464, 'camScript')
  request.r(i2465[16], i2465[17], 0, i2464, 'scoreCtr')
  request.r(i2465[18], i2465[19], 0, i2464, 'helpCtr')
  request.r(i2465[20], i2465[21], 0, i2464, 'screenCtr')
  request.r(i2465[22], i2465[23], 0, i2464, 'tutorial')
  request.r(i2465[24], i2465[25], 0, i2464, 'cam')
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2467 = data
  i2466.aspect = i2467[0]
  i2466.orthographic = !!i2467[1]
  i2466.orthographicSize = i2467[2]
  i2466.backgroundColor = new pc.Color(i2467[3], i2467[4], i2467[5], i2467[6])
  i2466.nearClipPlane = i2467[7]
  i2466.farClipPlane = i2467[8]
  i2466.fieldOfView = i2467[9]
  i2466.depth = i2467[10]
  i2466.clearFlags = i2467[11]
  i2466.cullingMask = i2467[12]
  i2466.rect = i2467[13]
  request.r(i2467[14], i2467[15], 0, i2466, 'targetTexture')
  i2466.usePhysicalProperties = !!i2467[16]
  i2466.focalLength = i2467[17]
  i2466.sensorSize = new pc.Vec2( i2467[18], i2467[19] )
  i2466.lensShift = new pc.Vec2( i2467[20], i2467[21] )
  i2466.gateFit = i2467[22]
  i2466.commandBufferCount = i2467[23]
  i2466.cameraType = i2467[24]
  i2466.enabled = !!i2467[25]
  return i2466
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i2468 = root || request.c( 'CameraScript' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'cam')
  return i2468
}

Deserializers["CameraResponsive"] = function (request, data, root) {
  var i2470 = root || request.c( 'CameraResponsive' )
  var i2471 = data
  i2470.orthoSizeV = i2471[0]
  i2470.orthoSizeVTall = i2471[1]
  i2470.orthoSizeH = i2471[2]
  i2470.orthoSizeTab = i2471[3]
  return i2470
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i2472 = root || request.c( 'MainAudio' )
  var i2473 = data
  var i2475 = i2473[0]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('InputAudio', i2475[i + 0]) );
  }
  i2472.listInputAudio = i2474
  i2472.isMute = !!i2473[1]
  return i2472
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i2478 = root || request.c( 'InputAudio' )
  var i2479 = data
  i2478.type = i2479[0]
  request.r(i2479[1], i2479[2], 0, i2478, 'audioClip')
  i2478.loop = !!i2479[3]
  i2478.volume = i2479[4]
  return i2478
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i2480 = root || request.c( 'BB10_Grid' )
  var i2481 = data
  i2480.numberCol = i2481[0]
  i2480.numberRow = i2481[1]
  i2480.waitDelete = i2481[2]
  i2480.waitPerUnit = i2481[3]
  i2480.durationGray = i2481[4]
  i2480.nonGray = i2481[5]
  i2480.halfGray = i2481[6]
  i2480.fullGray = i2481[7]
  i2480.waitUnit = i2481[8]
  request.r(i2481[9], i2481[10], 0, i2480, 'completeText')
  i2480.score = i2481[11]
  request.r(i2481[12], i2481[13], 0, i2480, 'cellPrefab')
  request.r(i2481[14], i2481[15], 0, i2480, 'parentGrid')
  i2480.cellSize = i2481[16]
  i2480.isCreateCell = !!i2481[17]
  request.r(i2481[18], i2481[19], 0, i2480, 'saveData')
  return i2480
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i2482 = root || request.c( 'BB10_PattemCreater' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'cubePrefab')
  var i2485 = i2483[2]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 1, i2484, '')
  }
  i2482.listCube = i2484
  request.r(i2483[3], i2483[4], 0, i2482, 'pattemDataSave')
  return i2482
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i2488 = root || request.c( 'BB10_PlaneView' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'camera')
  i2488.y = i2489[2]
  i2488.scale = i2489[3]
  i2488.scaleSmall = i2489[4]
  i2488.distanceTouch = i2489[5]
  i2488.duration = i2489[6]
  request.r(i2489[7], i2489[8], 0, i2488, 'cam')
  var i2491 = i2489[9]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 1, i2490, '')
  }
  i2488.listBlock = i2490
  i2488.selected = i2489[10]
  i2488.isScaling = !!i2489[11]
  i2488.groundAcepted = !!i2489[12]
  i2488.faceMousePos = new pc.Vec2( i2489[13], i2489[14] )
  i2488.isAuto = !!i2489[15]
  i2488.state = i2489[16]
  i2488.speedMoveDrop = i2489[17]
  return i2488
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i2492 = root || request.c( 'BB10_GroundView' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'groundPrefab')
  var i2495 = i2493[2]
  var i2494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2495.length; i += 2) {
  request.r(i2495[i + 0], i2495[i + 1], 1, i2494, '')
  }
  i2492.listBlockRender = i2494
  return i2492
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i2498 = root || request.c( 'BB10_NextViewerControl' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'pattemTableObj')
  request.r(i2499[2], i2499[3], 0, i2498, 'spawnData')
  var i2501 = i2499[4]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2498.listView = i2500
  var i2503 = i2499[5]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 1, i2502, '')
  }
  i2498.listUnit0 = i2502
  var i2505 = i2499[6]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 1, i2504, '')
  }
  i2498.listUnit1 = i2504
  var i2507 = i2499[7]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2507.length; i += 2) {
  request.r(i2507[i + 0], i2507[i + 1], 1, i2506, '')
  }
  i2498.listUnit2 = i2506
  return i2498
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i2510 = root || request.c( 'BB10_NextViewer' )
  var i2511 = data
  i2510.index = i2511[0]
  i2510.scale = i2511[1]
  i2510.durationLight = i2511[2]
  i2510.duration = i2511[3]
  i2510.durationIn = i2511[4]
  i2510.myType = i2511[5]
  i2510.rotateTime = i2511[6]
  var i2513 = i2511[7]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i2513.length; i += 2) {
  request.r(i2513[i + 0], i2513[i + 1], 1, i2512, '')
  }
  i2510.listBlock = i2512
  i2510.state = i2511[8]
  i2510.startPos1 = new pc.Vec2( i2511[9], i2511[10] )
  i2510.startPos2 = new pc.Vec2( i2511[11], i2511[12] )
  i2510.ac1 = new pc.AnimationCurve( { keys_flow: i2511[13] } )
  i2510.ac2 = new pc.AnimationCurve( { keys_flow: i2511[14] } )
  return i2510
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i2514 = root || request.c( 'BB10_ScoreCtr' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'scorePrefab')
  var i2517 = i2515[2]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 1, i2516, '')
  }
  i2514.listText = i2516
  i2514.startColor = new pc.Color(i2515[3], i2515[4], i2515[5], i2515[6])
  i2514.endColor = new pc.Color(i2515[7], i2515[8], i2515[9], i2515[10])
  request.r(i2515[11], i2515[12], 0, i2514, 'mat')
  i2514.speed0 = i2515[13]
  i2514.G = i2515[14]
  i2514.duration = i2515[15]
  return i2514
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i2520 = root || request.c( 'BB10_ShowHelpCtr' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'groundPrefab')
  var i2523 = i2521[2]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2520.listBlockDisable = i2522
  var i2525 = i2521[3]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2525.length; i += 2) {
  request.r(i2525[i + 0], i2525[i + 1], 1, i2524, '')
  }
  i2520.listBlockActive = i2524
  return i2520
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i2528 = root || request.c( 'BB10_Tutorial' )
  var i2529 = data
  request.r(i2529[0], i2529[1], 0, i2528, 'finger')
  request.r(i2529[2], i2529[3], 0, i2528, 'circle')
  i2528.durationMoveUp = i2529[4]
  i2528.durationMoveDown = i2529[5]
  i2528.durationScale = i2529[6]
  i2528.durationMoveShort = i2529[7]
  i2528.state = i2529[8]
  return i2528
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i2530 = root || request.c( 'BB10_ScreenCtr' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'BgUnit')
  request.r(i2531[2], i2531[3], 0, i2530, 'topRec')
  request.r(i2531[4], i2531[5], 0, i2530, 'bottomTrans')
  var i2533 = i2531[6]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2530.listPattemTrans = i2532
  i2530.defaultPattemY = i2531[7]
  i2530.defaultPattemUIY = i2531[8]
  i2530.orthographicSizeMin = i2531[9]
  request.r(i2531[10], i2531[11], 0, i2530, 'cam')
  i2530.distanceEdge = i2531[12]
  i2530.durationFadeIn = i2531[13]
  i2530.distanceMoveFade = i2531[14]
  i2530.startAlpha = i2531[15]
  i2530.F = i2531[16]
  i2530.FUI = i2531[17]
  request.r(i2531[18], i2531[19], 0, i2530, 'BG')
  i2530.targetAlpha = i2531[20]
  request.r(i2531[21], i2531[22], 0, i2530, 'partTop')
  request.r(i2531[23], i2531[24], 0, i2530, 'partDown')
  request.r(i2531[25], i2531[26], 0, i2530, 'partLeft')
  request.r(i2531[27], i2531[28], 0, i2530, 'partRight')
  var i2535 = i2531[29]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2530.grid = i2534
  i2530.gridMoving = !!i2531[30]
  i2530.waitStep = i2531[31]
  i2530.durationScaleUp = i2531[32]
  i2530.acScale = new pc.AnimationCurve( { keys_flow: i2531[33] } )
  request.r(i2531[34], i2531[35], 0, i2530, 'parentCell')
  return i2530
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i2538 = root || request.c( 'GamePlayManager' )
  var i2539 = data
  i2538.score = i2539[0]
  i2538.target = i2539[1]
  i2538.totalClick = i2539[2]
  i2538.countClick = i2539[3]
  request.r(i2539[4], i2539[5], 0, i2538, 'textProScore')
  request.r(i2539[6], i2539[7], 0, i2538, 'textProTarget')
  request.r(i2539[8], i2539[9], 0, i2538, 'textScore')
  request.r(i2539[10], i2539[11], 0, i2538, 'textTarget')
  request.r(i2539[12], i2539[13], 0, i2538, 'win')
  request.r(i2539[14], i2539[15], 0, i2538, 'lose')
  request.r(i2539[16], i2539[17], 0, i2538, 'buttonDownload')
  i2538.isFinishGame = !!i2539[18]
  return i2538
}

Deserializers["ResponsiveManager"] = function (request, data, root) {
  var i2540 = root || request.c( 'ResponsiveManager' )
  var i2541 = data
  i2540.screenType = i2541[0]
  return i2540
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i2542 = root || request.c( 'TutorialManager' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'groundView')
  request.r(i2543[2], i2543[3], 0, i2542, 'firstBlock')
  request.r(i2543[4], i2543[5], 0, i2542, 'Hand')
  request.r(i2543[6], i2543[7], 0, i2542, 'TextTut')
  i2542.idleTimer = i2543[8]
  i2542.idleTimeToShow = i2543[9]
  request.r(i2543[10], i2543[11], 0, i2542, 'blockTutorial')
  var i2545 = i2543[12]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_NextViewer')))
  for(var i = 0; i < i2545.length; i += 2) {
  request.r(i2545[i + 0], i2545[i + 1], 1, i2544, '')
  }
  i2542.nextViewers = i2544
  i2542.r = i2543[13]
  i2542.c = i2543[14]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2549 = data
  i2548.pivot = new pc.Vec2( i2549[0], i2549[1] )
  i2548.anchorMin = new pc.Vec2( i2549[2], i2549[3] )
  i2548.anchorMax = new pc.Vec2( i2549[4], i2549[5] )
  i2548.sizeDelta = new pc.Vec2( i2549[6], i2549[7] )
  i2548.anchoredPosition3D = new pc.Vec3( i2549[8], i2549[9], i2549[10] )
  i2548.rotation = new pc.Quat(i2549[11], i2549[12], i2549[13], i2549[14])
  i2548.scale = new pc.Vec3( i2549[15], i2549[16], i2549[17] )
  return i2548
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.TextMeshPro' )
  var i2551 = data
  i2550._SortingLayer = i2551[0]
  i2550._SortingLayerID = i2551[1]
  i2550._SortingOrder = i2551[2]
  i2550.m_hasFontAssetChanged = !!i2551[3]
  request.r(i2551[4], i2551[5], 0, i2550, 'm_renderer')
  i2550.m_maskType = i2551[6]
  i2550.m_text = i2551[7]
  i2550.m_isRightToLeft = !!i2551[8]
  request.r(i2551[9], i2551[10], 0, i2550, 'm_fontAsset')
  request.r(i2551[11], i2551[12], 0, i2550, 'm_sharedMaterial')
  var i2553 = i2551[13]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 2, i2552, '')
  }
  i2550.m_fontSharedMaterials = i2552
  request.r(i2551[14], i2551[15], 0, i2550, 'm_fontMaterial')
  var i2555 = i2551[16]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2550.m_fontMaterials = i2554
  i2550.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2551[17], i2551[18], i2551[19], i2551[20])
  i2550.m_fontColor = new pc.Color(i2551[21], i2551[22], i2551[23], i2551[24])
  i2550.m_enableVertexGradient = !!i2551[25]
  i2550.m_colorMode = i2551[26]
  i2550.m_fontColorGradient = request.d('TMPro.VertexGradient', i2551[27], i2550.m_fontColorGradient)
  request.r(i2551[28], i2551[29], 0, i2550, 'm_fontColorGradientPreset')
  request.r(i2551[30], i2551[31], 0, i2550, 'm_spriteAsset')
  i2550.m_tintAllSprites = !!i2551[32]
  request.r(i2551[33], i2551[34], 0, i2550, 'm_StyleSheet')
  i2550.m_TextStyleHashCode = i2551[35]
  i2550.m_overrideHtmlColors = !!i2551[36]
  i2550.m_faceColor = UnityEngine.Color32.ConstructColor(i2551[37], i2551[38], i2551[39], i2551[40])
  i2550.m_fontSize = i2551[41]
  i2550.m_fontSizeBase = i2551[42]
  i2550.m_fontWeight = i2551[43]
  i2550.m_enableAutoSizing = !!i2551[44]
  i2550.m_fontSizeMin = i2551[45]
  i2550.m_fontSizeMax = i2551[46]
  i2550.m_fontStyle = i2551[47]
  i2550.m_HorizontalAlignment = i2551[48]
  i2550.m_VerticalAlignment = i2551[49]
  i2550.m_textAlignment = i2551[50]
  i2550.m_characterSpacing = i2551[51]
  i2550.m_wordSpacing = i2551[52]
  i2550.m_lineSpacing = i2551[53]
  i2550.m_lineSpacingMax = i2551[54]
  i2550.m_paragraphSpacing = i2551[55]
  i2550.m_charWidthMaxAdj = i2551[56]
  i2550.m_enableWordWrapping = !!i2551[57]
  i2550.m_wordWrappingRatios = i2551[58]
  i2550.m_overflowMode = i2551[59]
  request.r(i2551[60], i2551[61], 0, i2550, 'm_linkedTextComponent')
  request.r(i2551[62], i2551[63], 0, i2550, 'parentLinkedComponent')
  i2550.m_enableKerning = !!i2551[64]
  i2550.m_enableExtraPadding = !!i2551[65]
  i2550.checkPaddingRequired = !!i2551[66]
  i2550.m_isRichText = !!i2551[67]
  i2550.m_parseCtrlCharacters = !!i2551[68]
  i2550.m_isOrthographic = !!i2551[69]
  i2550.m_isCullingEnabled = !!i2551[70]
  i2550.m_horizontalMapping = i2551[71]
  i2550.m_verticalMapping = i2551[72]
  i2550.m_uvLineOffset = i2551[73]
  i2550.m_geometrySortingOrder = i2551[74]
  i2550.m_IsTextObjectScaleStatic = !!i2551[75]
  i2550.m_VertexBufferAutoSizeReduction = !!i2551[76]
  i2550.m_useMaxVisibleDescender = !!i2551[77]
  i2550.m_pageToDisplay = i2551[78]
  i2550.m_margin = new pc.Vec4( i2551[79], i2551[80], i2551[81], i2551[82] )
  i2550.m_isUsingLegacyAnimationComponent = !!i2551[83]
  i2550.m_isVolumetricText = !!i2551[84]
  i2550.m_Maskable = !!i2551[85]
  request.r(i2551[86], i2551[87], 0, i2550, 'm_Material')
  i2550.m_Color = new pc.Color(i2551[88], i2551[89], i2551[90], i2551[91])
  i2550.m_RaycastTarget = !!i2551[92]
  i2550.m_RaycastPadding = new pc.Vec4( i2551[93], i2551[94], i2551[95], i2551[96] )
  return i2550
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.VertexGradient' )
  var i2557 = data
  i2556.topLeft = new pc.Color(i2557[0], i2557[1], i2557[2], i2557[3])
  i2556.topRight = new pc.Color(i2557[4], i2557[5], i2557[6], i2557[7])
  i2556.bottomLeft = new pc.Color(i2557[8], i2557[9], i2557[10], i2557[11])
  i2556.bottomRight = new pc.Color(i2557[12], i2557[13], i2557[14], i2557[15])
  return i2556
}

Deserializers["ScaleElement"] = function (request, data, root) {
  var i2558 = root || request.c( 'ScaleElement' )
  var i2559 = data
  i2558.animationDuration = i2559[0]
  i2558.delay = i2559[1]
  i2558.targetScale = new pc.Vec3( i2559[2], i2559[3], i2559[4] )
  return i2558
}

Deserializers["SG_Block_EffectCtr"] = function (request, data, root) {
  var i2560 = root || request.c( 'SG_Block_EffectCtr' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.particlePrefabs = i2562
  var i2565 = i2561[1]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
  var i2567 = i2565[i + 0]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2567.length; i += 2) {
  request.r(i2567[i + 0], i2567[i + 1], 1, i2566, '')
  }
    i2564.push( i2566 );
  }
  i2560.listParticlesDisable = i2564
  i2560.preload = i2561[2]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2575 = data
  i2574.type = i2575[0]
  i2574.color = new pc.Color(i2575[1], i2575[2], i2575[3], i2575[4])
  i2574.cullingMask = i2575[5]
  i2574.intensity = i2575[6]
  i2574.range = i2575[7]
  i2574.spotAngle = i2575[8]
  i2574.shadows = i2575[9]
  i2574.shadowNormalBias = i2575[10]
  i2574.shadowBias = i2575[11]
  i2574.shadowStrength = i2575[12]
  i2574.shadowResolution = i2575[13]
  i2574.lightmapBakeType = i2575[14]
  i2574.renderMode = i2575[15]
  request.r(i2575[16], i2575[17], 0, i2574, 'cookie')
  i2574.cookieSize = i2575[18]
  i2574.enabled = !!i2575[19]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2577 = data
  i2576.planeDistance = i2577[0]
  i2576.referencePixelsPerUnit = i2577[1]
  i2576.isFallbackOverlay = !!i2577[2]
  i2576.renderMode = i2577[3]
  i2576.renderOrder = i2577[4]
  i2576.sortingLayerName = i2577[5]
  i2576.sortingOrder = i2577[6]
  i2576.scaleFactor = i2577[7]
  request.r(i2577[8], i2577[9], 0, i2576, 'worldCamera')
  i2576.overrideSorting = !!i2577[10]
  i2576.pixelPerfect = !!i2577[11]
  i2576.targetDisplay = i2577[12]
  i2576.overridePixelPerfect = !!i2577[13]
  i2576.enabled = !!i2577[14]
  return i2576
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2579 = data
  i2578.m_UiScaleMode = i2579[0]
  i2578.m_ReferencePixelsPerUnit = i2579[1]
  i2578.m_ScaleFactor = i2579[2]
  i2578.m_ReferenceResolution = new pc.Vec2( i2579[3], i2579[4] )
  i2578.m_ScreenMatchMode = i2579[5]
  i2578.m_MatchWidthOrHeight = i2579[6]
  i2578.m_PhysicalUnit = i2579[7]
  i2578.m_FallbackScreenDPI = i2579[8]
  i2578.m_DefaultSpriteDPI = i2579[9]
  i2578.m_DynamicPixelsPerUnit = i2579[10]
  i2578.m_PresetInfoIsWorld = !!i2579[11]
  return i2578
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2581 = data
  i2580.m_IgnoreReversedGraphics = !!i2581[0]
  i2580.m_BlockingObjects = i2581[1]
  i2580.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2581[2] )
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2583 = data
  i2582.cullTransparentMesh = !!i2583[0]
  return i2582
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.UI.Image' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'm_Sprite')
  i2584.m_Type = i2585[2]
  i2584.m_PreserveAspect = !!i2585[3]
  i2584.m_FillCenter = !!i2585[4]
  i2584.m_FillMethod = i2585[5]
  i2584.m_FillAmount = i2585[6]
  i2584.m_FillClockwise = !!i2585[7]
  i2584.m_FillOrigin = i2585[8]
  i2584.m_UseSpriteMesh = !!i2585[9]
  i2584.m_PixelsPerUnitMultiplier = i2585[10]
  i2584.m_Maskable = !!i2585[11]
  request.r(i2585[12], i2585[13], 0, i2584, 'm_Material')
  i2584.m_Color = new pc.Color(i2585[14], i2585[15], i2585[16], i2585[17])
  i2584.m_RaycastTarget = !!i2585[18]
  i2584.m_RaycastPadding = new pc.Vec4( i2585[19], i2585[20], i2585[21], i2585[22] )
  return i2584
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i2586 = root || request.c( 'BB10_MainCanvasUI' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'inGameScript')
  request.r(i2587[2], i2587[3], 0, i2586, 'faderScript')
  i2586.OnDropPiece = request.d('System.Action', i2587[4], i2586.OnDropPiece)
  request.r(i2587[5], i2587[6], 0, i2586, 'blur')
  i2586.OnNeedStopAdBreak = request.d('System.Action', i2587[7], i2586.OnNeedStopAdBreak)
  return i2586
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2588 = root || request.c( 'System.Action' )
  var i2589 = data
  return i2588
}

Deserializers["ResponsiveWorld"] = function (request, data, root) {
  var i2590 = root || request.c( 'ResponsiveWorld' )
  var i2591 = data
  i2590.positionVertical = new pc.Vec3( i2591[0], i2591[1], i2591[2] )
  i2590.positionVerticalTall = new pc.Vec3( i2591[3], i2591[4], i2591[5] )
  i2590.positionHorizontal = new pc.Vec3( i2591[6], i2591[7], i2591[8] )
  i2590.positionTablet = new pc.Vec3( i2591[9], i2591[10], i2591[11] )
  return i2590
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2593 = data
  i2592.m_hasFontAssetChanged = !!i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'm_baseMaterial')
  i2592.m_maskOffset = new pc.Vec4( i2593[3], i2593[4], i2593[5], i2593[6] )
  i2592.m_text = i2593[7]
  i2592.m_isRightToLeft = !!i2593[8]
  request.r(i2593[9], i2593[10], 0, i2592, 'm_fontAsset')
  request.r(i2593[11], i2593[12], 0, i2592, 'm_sharedMaterial')
  var i2595 = i2593[13]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.m_fontSharedMaterials = i2594
  request.r(i2593[14], i2593[15], 0, i2592, 'm_fontMaterial')
  var i2597 = i2593[16]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2592.m_fontMaterials = i2596
  i2592.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2593[17], i2593[18], i2593[19], i2593[20])
  i2592.m_fontColor = new pc.Color(i2593[21], i2593[22], i2593[23], i2593[24])
  i2592.m_enableVertexGradient = !!i2593[25]
  i2592.m_colorMode = i2593[26]
  i2592.m_fontColorGradient = request.d('TMPro.VertexGradient', i2593[27], i2592.m_fontColorGradient)
  request.r(i2593[28], i2593[29], 0, i2592, 'm_fontColorGradientPreset')
  request.r(i2593[30], i2593[31], 0, i2592, 'm_spriteAsset')
  i2592.m_tintAllSprites = !!i2593[32]
  request.r(i2593[33], i2593[34], 0, i2592, 'm_StyleSheet')
  i2592.m_TextStyleHashCode = i2593[35]
  i2592.m_overrideHtmlColors = !!i2593[36]
  i2592.m_faceColor = UnityEngine.Color32.ConstructColor(i2593[37], i2593[38], i2593[39], i2593[40])
  i2592.m_fontSize = i2593[41]
  i2592.m_fontSizeBase = i2593[42]
  i2592.m_fontWeight = i2593[43]
  i2592.m_enableAutoSizing = !!i2593[44]
  i2592.m_fontSizeMin = i2593[45]
  i2592.m_fontSizeMax = i2593[46]
  i2592.m_fontStyle = i2593[47]
  i2592.m_HorizontalAlignment = i2593[48]
  i2592.m_VerticalAlignment = i2593[49]
  i2592.m_textAlignment = i2593[50]
  i2592.m_characterSpacing = i2593[51]
  i2592.m_wordSpacing = i2593[52]
  i2592.m_lineSpacing = i2593[53]
  i2592.m_lineSpacingMax = i2593[54]
  i2592.m_paragraphSpacing = i2593[55]
  i2592.m_charWidthMaxAdj = i2593[56]
  i2592.m_enableWordWrapping = !!i2593[57]
  i2592.m_wordWrappingRatios = i2593[58]
  i2592.m_overflowMode = i2593[59]
  request.r(i2593[60], i2593[61], 0, i2592, 'm_linkedTextComponent')
  request.r(i2593[62], i2593[63], 0, i2592, 'parentLinkedComponent')
  i2592.m_enableKerning = !!i2593[64]
  i2592.m_enableExtraPadding = !!i2593[65]
  i2592.checkPaddingRequired = !!i2593[66]
  i2592.m_isRichText = !!i2593[67]
  i2592.m_parseCtrlCharacters = !!i2593[68]
  i2592.m_isOrthographic = !!i2593[69]
  i2592.m_isCullingEnabled = !!i2593[70]
  i2592.m_horizontalMapping = i2593[71]
  i2592.m_verticalMapping = i2593[72]
  i2592.m_uvLineOffset = i2593[73]
  i2592.m_geometrySortingOrder = i2593[74]
  i2592.m_IsTextObjectScaleStatic = !!i2593[75]
  i2592.m_VertexBufferAutoSizeReduction = !!i2593[76]
  i2592.m_useMaxVisibleDescender = !!i2593[77]
  i2592.m_pageToDisplay = i2593[78]
  i2592.m_margin = new pc.Vec4( i2593[79], i2593[80], i2593[81], i2593[82] )
  i2592.m_isUsingLegacyAnimationComponent = !!i2593[83]
  i2592.m_isVolumetricText = !!i2593[84]
  i2592.m_Maskable = !!i2593[85]
  request.r(i2593[86], i2593[87], 0, i2592, 'm_Material')
  i2592.m_Color = new pc.Color(i2593[88], i2593[89], i2593[90], i2593[91])
  i2592.m_RaycastTarget = !!i2593[92]
  i2592.m_RaycastPadding = new pc.Vec4( i2593[93], i2593[94], i2593[95], i2593[96] )
  return i2592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.UI.Button' )
  var i2599 = data
  i2598.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2599[0], i2598.m_OnClick)
  i2598.m_Navigation = request.d('UnityEngine.UI.Navigation', i2599[1], i2598.m_Navigation)
  i2598.m_Transition = i2599[2]
  i2598.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2599[3], i2598.m_Colors)
  i2598.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2599[4], i2598.m_SpriteState)
  i2598.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2599[5], i2598.m_AnimationTriggers)
  i2598.m_Interactable = !!i2599[6]
  request.r(i2599[7], i2599[8], 0, i2598, 'm_TargetGraphic')
  return i2598
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2601 = data
  i2600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2601[0], i2600.m_PersistentCalls)
  return i2600
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('UnityEngine.Events.PersistentCall', i2605[i + 0]));
  }
  i2602.m_Calls = i2604
  return i2602
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'm_Target')
  i2608.m_TargetAssemblyTypeName = i2609[2]
  i2608.m_MethodName = i2609[3]
  i2608.m_Mode = i2609[4]
  i2608.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2609[5], i2608.m_Arguments)
  i2608.m_CallState = i2609[6]
  return i2608
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'm_ObjectArgument')
  i2610.m_ObjectArgumentAssemblyTypeName = i2611[2]
  i2610.m_IntArgument = i2611[3]
  i2610.m_FloatArgument = i2611[4]
  i2610.m_StringArgument = i2611[5]
  i2610.m_BoolArgument = !!i2611[6]
  return i2610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2613 = data
  i2612.m_Mode = i2613[0]
  i2612.m_WrapAround = !!i2613[1]
  request.r(i2613[2], i2613[3], 0, i2612, 'm_SelectOnUp')
  request.r(i2613[4], i2613[5], 0, i2612, 'm_SelectOnDown')
  request.r(i2613[6], i2613[7], 0, i2612, 'm_SelectOnLeft')
  request.r(i2613[8], i2613[9], 0, i2612, 'm_SelectOnRight')
  return i2612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2615 = data
  i2614.m_NormalColor = new pc.Color(i2615[0], i2615[1], i2615[2], i2615[3])
  i2614.m_HighlightedColor = new pc.Color(i2615[4], i2615[5], i2615[6], i2615[7])
  i2614.m_PressedColor = new pc.Color(i2615[8], i2615[9], i2615[10], i2615[11])
  i2614.m_SelectedColor = new pc.Color(i2615[12], i2615[13], i2615[14], i2615[15])
  i2614.m_DisabledColor = new pc.Color(i2615[16], i2615[17], i2615[18], i2615[19])
  i2614.m_ColorMultiplier = i2615[20]
  i2614.m_FadeDuration = i2615[21]
  return i2614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'm_HighlightedSprite')
  request.r(i2617[2], i2617[3], 0, i2616, 'm_PressedSprite')
  request.r(i2617[4], i2617[5], 0, i2616, 'm_SelectedSprite')
  request.r(i2617[6], i2617[7], 0, i2616, 'm_DisabledSprite')
  return i2616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2619 = data
  i2618.m_NormalTrigger = i2619[0]
  i2618.m_HighlightedTrigger = i2619[1]
  i2618.m_PressedTrigger = i2619[2]
  i2618.m_SelectedTrigger = i2619[3]
  i2618.m_DisabledTrigger = i2619[4]
  return i2618
}

Deserializers["CTAButton"] = function (request, data, root) {
  var i2620 = root || request.c( 'CTAButton' )
  var i2621 = data
  return i2620
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i2622 = root || request.c( 'BB10_InGameScript' )
  var i2623 = data
  request.r(i2623[0], i2623[1], 0, i2622, 'rec')
  request.r(i2623[2], i2623[3], 0, i2622, 'scoreTxt')
  request.r(i2623[4], i2623[5], 0, i2622, 'bestTxt')
  i2622.scoreInt = i2623[6]
  i2622.bestInt = i2623[7]
  request.r(i2623[8], i2623[9], 0, i2622, 'group')
  request.r(i2623[10], i2623[11], 0, i2622, 'blur_1')
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2625 = data
  i2624.m_Alpha = i2625[0]
  i2624.m_Interactable = !!i2625[1]
  i2624.m_BlocksRaycasts = !!i2625[2]
  i2624.m_IgnoreParentGroups = !!i2625[3]
  i2624.enabled = !!i2625[4]
  return i2624
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'm_FirstSelected')
  i2626.m_sendNavigationEvents = !!i2627[2]
  i2626.m_DragThreshold = i2627[3]
  return i2626
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2629 = data
  i2628.m_HorizontalAxis = i2629[0]
  i2628.m_VerticalAxis = i2629[1]
  i2628.m_SubmitButton = i2629[2]
  i2628.m_CancelButton = i2629[3]
  i2628.m_InputActionsPerSecond = i2629[4]
  i2628.m_RepeatDelay = i2629[5]
  i2628.m_ForceModuleActive = !!i2629[6]
  i2628.m_SendPointerHoverToParent = !!i2629[7]
  return i2628
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i2630 = root || request.c( 'BB10_FaderHandler' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'image')
  i2630.durationFade = i2631[2]
  i2630.durationFadeOut = i2631[3]
  i2630.durationSwich = i2631[4]
  return i2630
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i2632 = root || request.c( 'BB10_HomeController' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'group')
  return i2632
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, 'm_FillRect')
  request.r(i2635[2], i2635[3], 0, i2634, 'm_HandleRect')
  i2634.m_Direction = i2635[4]
  i2634.m_MinValue = i2635[5]
  i2634.m_MaxValue = i2635[6]
  i2634.m_WholeNumbers = !!i2635[7]
  i2634.m_Value = i2635[8]
  i2634.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2635[9], i2634.m_OnValueChanged)
  i2634.m_Navigation = request.d('UnityEngine.UI.Navigation', i2635[10], i2634.m_Navigation)
  i2634.m_Transition = i2635[11]
  i2634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2635[12], i2634.m_Colors)
  i2634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2635[13], i2634.m_SpriteState)
  i2634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2635[14], i2634.m_AnimationTriggers)
  i2634.m_Interactable = !!i2635[15]
  request.r(i2635[16], i2635[17], 0, i2634, 'm_TargetGraphic')
  return i2634
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2637 = data
  i2636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2637[0], i2636.m_PersistentCalls)
  return i2636
}

Deserializers["TimerProgress"] = function (request, data, root) {
  var i2638 = root || request.c( 'TimerProgress' )
  var i2639 = data
  request.r(i2639[0], i2639[1], 0, i2638, 'fillImageRed')
  request.r(i2639[2], i2639[3], 0, i2638, 'fillImage')
  request.r(i2639[4], i2639[5], 0, i2638, 'slider')
  i2638.timer = i2639[6]
  request.r(i2639[7], i2639[8], 0, i2638, 'timerText')
  i2638.haveTimer = !!i2639[9]
  request.r(i2639[10], i2639[11], 0, i2638, 'warningSprite')
  i2638.timeWarning = i2639[12]
  i2638.warningSoundTimer = i2639[13]
  i2638.isFormatTimeMMSS = !!i2639[14]
  return i2638
}

Deserializers["UITweenElement"] = function (request, data, root) {
  var i2640 = root || request.c( 'UITweenElement' )
  var i2641 = data
  i2640.tweenData = request.d('TweenData', i2641[0], i2640.tweenData)
  i2640.playOnAwake = !!i2641[1]
  return i2640
}

Deserializers["TweenData"] = function (request, data, root) {
  var i2642 = root || request.c( 'TweenData' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'target')
  request.r(i2643[2], i2643[3], 0, i2642, 'configSO')
  i2642.custom = !!i2643[4]
  i2642.config = request.d('TweenConfig', i2643[5], i2642.config)
  i2642.OnCompleted = request.d('System.Action', i2643[6], i2642.OnCompleted)
  return i2642
}

Deserializers["TweenConfig"] = function (request, data, root) {
  var i2644 = root || request.c( 'TweenConfig' )
  var i2645 = data
  i2644.tweenType = i2645[0]
  i2644.from = i2645[1]
  i2644.to = i2645[2]
  i2644.mFrom = new pc.Vec3( i2645[3], i2645[4], i2645[5] )
  i2644.mTo = new pc.Vec3( i2645[6], i2645[7], i2645[8] )
  i2644.duration = i2645[9]
  i2644.delay = i2645[10]
  i2644.curve = new pc.AnimationCurve( { keys_flow: i2645[11] } )
  return i2644
}

Deserializers["TextMeshProController"] = function (request, data, root) {
  var i2646 = root || request.c( 'TextMeshProController' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'textMeshPro')
  i2646.useCurve = !!i2647[2]
  i2646.radius = i2647[3]
  i2646.arcAngle = i2647[4]
  i2646.playOnEnable = !!i2647[5]
  i2646.animDuration = i2647[6]
  i2646.delayBetweenChars = i2647[7]
  i2646.scaleCurve = new pc.AnimationCurve( { keys_flow: i2647[8] } )
  return i2646
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i2648 = root || request.c( 'BB10_LostScript' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'scoreText')
  request.r(i2649[2], i2649[3], 0, i2648, 'bestText')
  request.r(i2649[4], i2649[5], 0, i2648, 'group')
  i2648.isAuto = !!i2649[6]
  request.r(i2649[7], i2649[8], 0, i2648, 'cupShaker')
  request.r(i2649[9], i2649[10], 0, i2648, 'listViewAdsPannel')
  return i2648
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i2650 = root || request.c( 'BB10_PopupRate' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 1, i2652, '')
  }
  i2650.starList = i2652
  request.r(i2651[1], i2651[2], 0, i2650, 'submit')
  request.r(i2651[3], i2651[4], 0, i2650, 'textRate')
  request.r(i2651[5], i2651[6], 0, i2650, 'starOn')
  request.r(i2651[7], i2651[8], 0, i2650, 'starOff')
  i2650.starNumber = i2651[9]
  request.r(i2651[10], i2651[11], 0, i2650, 'popup')
  request.r(i2651[12], i2651[13], 0, i2650, 'pannel')
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2657 = data
  i2656.ambientIntensity = i2657[0]
  i2656.reflectionIntensity = i2657[1]
  i2656.ambientMode = i2657[2]
  i2656.ambientLight = new pc.Color(i2657[3], i2657[4], i2657[5], i2657[6])
  i2656.ambientSkyColor = new pc.Color(i2657[7], i2657[8], i2657[9], i2657[10])
  i2656.ambientGroundColor = new pc.Color(i2657[11], i2657[12], i2657[13], i2657[14])
  i2656.ambientEquatorColor = new pc.Color(i2657[15], i2657[16], i2657[17], i2657[18])
  i2656.fogColor = new pc.Color(i2657[19], i2657[20], i2657[21], i2657[22])
  i2656.fogEndDistance = i2657[23]
  i2656.fogStartDistance = i2657[24]
  i2656.fogDensity = i2657[25]
  i2656.fog = !!i2657[26]
  request.r(i2657[27], i2657[28], 0, i2656, 'skybox')
  i2656.fogMode = i2657[29]
  var i2659 = i2657[30]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2659[i + 0]) );
  }
  i2656.lightmaps = i2658
  i2656.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2657[31], i2656.lightProbes)
  i2656.lightmapsMode = i2657[32]
  i2656.mixedBakeMode = i2657[33]
  i2656.environmentLightingMode = i2657[34]
  i2656.ambientProbe = new pc.SphericalHarmonicsL2(i2657[35])
  i2656.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2657[36])
  i2656.useReferenceAmbientProbe = !!i2657[37]
  request.r(i2657[38], i2657[39], 0, i2656, 'customReflection')
  request.r(i2657[40], i2657[41], 0, i2656, 'defaultReflection')
  i2656.defaultReflectionMode = i2657[42]
  i2656.defaultReflectionResolution = i2657[43]
  i2656.sunLightObjectId = i2657[44]
  i2656.pixelLightCount = i2657[45]
  i2656.defaultReflectionHDR = !!i2657[46]
  i2656.hasLightDataAsset = !!i2657[47]
  i2656.hasManualGenerate = !!i2657[48]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'lightmapColor')
  request.r(i2663[2], i2663[3], 0, i2662, 'lightmapDirection')
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2664 = root || new UnityEngine.LightProbes()
  var i2665 = data
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2675[i + 0]));
  }
  i2672.ShaderCompilationErrors = i2674
  i2672.name = i2673[1]
  i2672.guid = i2673[2]
  var i2677 = i2673[3]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( i2677[i + 0] );
  }
  i2672.shaderDefinedKeywords = i2676
  var i2679 = i2673[4]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2679[i + 0]) );
  }
  i2672.passes = i2678
  var i2681 = i2673[5]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2681[i + 0]) );
  }
  i2672.usePasses = i2680
  var i2683 = i2673[6]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2683[i + 0]) );
  }
  i2672.defaultParameterValues = i2682
  request.r(i2673[7], i2673[8], 0, i2672, 'unityFallbackShader')
  i2672.readDepth = !!i2673[9]
  i2672.isCreatedByShaderGraph = !!i2673[10]
  i2672.disableBatching = !!i2673[11]
  i2672.compiled = !!i2673[12]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2687 = data
  i2686.shaderName = i2687[0]
  i2686.errorMessage = i2687[1]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2692 = root || new pc.UnityShaderPass()
  var i2693 = data
  i2692.id = i2693[0]
  i2692.subShaderIndex = i2693[1]
  i2692.name = i2693[2]
  i2692.passType = i2693[3]
  i2692.grabPassTextureName = i2693[4]
  i2692.usePass = !!i2693[5]
  i2692.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[6], i2692.zTest)
  i2692.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[7], i2692.zWrite)
  i2692.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[8], i2692.culling)
  i2692.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2693[9], i2692.blending)
  i2692.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2693[10], i2692.alphaBlending)
  i2692.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[11], i2692.colorWriteMask)
  i2692.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[12], i2692.offsetUnits)
  i2692.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[13], i2692.offsetFactor)
  i2692.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[14], i2692.stencilRef)
  i2692.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[15], i2692.stencilReadMask)
  i2692.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[16], i2692.stencilWriteMask)
  i2692.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[17], i2692.stencilOp)
  i2692.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[18], i2692.stencilOpFront)
  i2692.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[19], i2692.stencilOpBack)
  var i2695 = i2693[20]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2695[i + 0]) );
  }
  i2692.tags = i2694
  var i2697 = i2693[21]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( i2697[i + 0] );
  }
  i2692.passDefinedKeywords = i2696
  var i2699 = i2693[22]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2699[i + 0]) );
  }
  i2692.passDefinedKeywordGroups = i2698
  var i2701 = i2693[23]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2701[i + 0]) );
  }
  i2692.variants = i2700
  var i2703 = i2693[24]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2703[i + 0]) );
  }
  i2692.excludedVariants = i2702
  i2692.hasDepthReader = !!i2693[25]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2705 = data
  i2704.val = i2705[0]
  i2704.name = i2705[1]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2707 = data
  i2706.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[0], i2706.src)
  i2706.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[1], i2706.dst)
  i2706.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[2], i2706.op)
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2709 = data
  i2708.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[0], i2708.pass)
  i2708.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[1], i2708.fail)
  i2708.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[2], i2708.zFail)
  i2708.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[3], i2708.comp)
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.value = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2717 = data
  var i2719 = i2717[0]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( i2719[i + 0] );
  }
  i2716.keywords = i2718
  i2716.hasDiscard = !!i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2723 = data
  i2722.passId = i2723[0]
  i2722.subShaderIndex = i2723[1]
  var i2725 = i2723[2]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2722.keywords = i2724
  i2722.vertexProgram = i2723[3]
  i2722.fragmentProgram = i2723[4]
  i2722.exportedForWebGl2 = !!i2723[5]
  i2722.readDepth = !!i2723[6]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2729 = data
  request.r(i2729[0], i2729[1], 0, i2728, 'shader')
  i2728.pass = i2729[2]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2733 = data
  i2732.name = i2733[0]
  i2732.type = i2733[1]
  i2732.value = new pc.Vec4( i2733[2], i2733[3], i2733[4], i2733[5] )
  i2732.textureValue = i2733[6]
  i2732.shaderPropertyFlag = i2733[7]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2735 = data
  i2734.name = i2735[0]
  request.r(i2735[1], i2735[2], 0, i2734, 'texture')
  i2734.aabb = i2735[3]
  i2734.vertices = i2735[4]
  i2734.triangles = i2735[5]
  i2734.textureRect = UnityEngine.Rect.MinMaxRect(i2735[6], i2735[7], i2735[8], i2735[9])
  i2734.packedRect = UnityEngine.Rect.MinMaxRect(i2735[10], i2735[11], i2735[12], i2735[13])
  i2734.border = new pc.Vec4( i2735[14], i2735[15], i2735[16], i2735[17] )
  i2734.transparency = i2735[18]
  i2734.bounds = i2735[19]
  i2734.pixelsPerUnit = i2735[20]
  i2734.textureWidth = i2735[21]
  i2734.textureHeight = i2735[22]
  i2734.nativeSize = new pc.Vec2( i2735[23], i2735[24] )
  i2734.pivot = new pc.Vec2( i2735[25], i2735[26] )
  i2734.textureRectOffset = new pc.Vec2( i2735[27], i2735[28] )
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2737 = data
  i2736.name = i2737[0]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.wrapMode = i2739[1]
  i2738.isLooping = !!i2739[2]
  i2738.length = i2739[3]
  var i2741 = i2739[4]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2741[i + 0]) );
  }
  i2738.curves = i2740
  var i2743 = i2739[5]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2743[i + 0]) );
  }
  i2738.events = i2742
  i2738.halfPrecision = !!i2739[6]
  i2738._frameRate = i2739[7]
  i2738.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2739[8], i2738.localBounds)
  i2738.hasMuscleCurves = !!i2739[9]
  var i2745 = i2739[10]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2738.clipMuscleConstant = i2744
  i2738.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2739[11], i2738.clipBindingConstant)
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2749 = data
  i2748.path = i2749[0]
  i2748.hash = i2749[1]
  i2748.componentType = i2749[2]
  i2748.property = i2749[3]
  i2748.keys = i2749[4]
  var i2751 = i2749[5]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2751[i + 0]) );
  }
  i2748.objectReferenceKeys = i2750
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2755 = data
  i2754.time = i2755[0]
  request.r(i2755[1], i2755[2], 0, i2754, 'value')
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2759 = data
  i2758.functionName = i2759[0]
  i2758.floatParameter = i2759[1]
  i2758.intParameter = i2759[2]
  i2758.stringParameter = i2759[3]
  request.r(i2759[4], i2759[5], 0, i2758, 'objectReferenceParameter')
  i2758.time = i2759[6]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2761 = data
  i2760.center = new pc.Vec3( i2761[0], i2761[1], i2761[2] )
  i2760.extends = new pc.Vec3( i2761[3], i2761[4], i2761[5] )
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( i2767[i + 0] );
  }
  i2764.genericBindings = i2766
  var i2769 = i2765[1]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( i2769[i + 0] );
  }
  i2764.pptrCurveMapping = i2768
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2771 = data
  i2770.name = i2771[0]
  i2770.ascent = i2771[1]
  i2770.originalLineHeight = i2771[2]
  i2770.fontSize = i2771[3]
  var i2773 = i2771[4]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2773[i + 0]) );
  }
  i2770.characterInfo = i2772
  request.r(i2771[5], i2771[6], 0, i2770, 'texture')
  i2770.originalFontSize = i2771[7]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2777 = data
  i2776.index = i2777[0]
  i2776.advance = i2777[1]
  i2776.bearing = i2777[2]
  i2776.glyphWidth = i2777[3]
  i2776.glyphHeight = i2777[4]
  i2776.minX = i2777[5]
  i2776.maxX = i2777[6]
  i2776.minY = i2777[7]
  i2776.maxY = i2777[8]
  i2776.uvBottomLeftX = i2777[9]
  i2776.uvBottomLeftY = i2777[10]
  i2776.uvBottomRightX = i2777[11]
  i2776.uvBottomRightY = i2777[12]
  i2776.uvTopLeftX = i2777[13]
  i2776.uvTopLeftY = i2777[14]
  i2776.uvTopRightX = i2777[15]
  i2776.uvTopRightY = i2777[16]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2779 = data
  i2778.name = i2779[0]
  var i2781 = i2779[1]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2781[i + 0]) );
  }
  i2778.layers = i2780
  var i2783 = i2779[2]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2783[i + 0]) );
  }
  i2778.parameters = i2782
  i2778.animationClips = i2779[3]
  i2778.avatarUnsupported = i2779[4]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2787 = data
  i2786.name = i2787[0]
  i2786.defaultWeight = i2787[1]
  i2786.blendingMode = i2787[2]
  i2786.avatarMask = i2787[3]
  i2786.syncedLayerIndex = i2787[4]
  i2786.syncedLayerAffectsTiming = !!i2787[5]
  i2786.syncedLayers = i2787[6]
  i2786.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2787[7], i2786.stateMachine)
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2789 = data
  i2788.id = i2789[0]
  i2788.name = i2789[1]
  i2788.path = i2789[2]
  var i2791 = i2789[3]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2791[i + 0]) );
  }
  i2788.states = i2790
  var i2793 = i2789[4]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2793[i + 0]) );
  }
  i2788.machines = i2792
  var i2795 = i2789[5]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2795[i + 0]) );
  }
  i2788.entryStateTransitions = i2794
  var i2797 = i2789[6]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2797[i + 0]) );
  }
  i2788.exitStateTransitions = i2796
  var i2799 = i2789[7]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2799[i + 0]) );
  }
  i2788.anyStateTransitions = i2798
  i2788.defaultStateId = i2789[8]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2803 = data
  i2802.id = i2803[0]
  i2802.name = i2803[1]
  i2802.cycleOffset = i2803[2]
  i2802.cycleOffsetParameter = i2803[3]
  i2802.cycleOffsetParameterActive = !!i2803[4]
  i2802.mirror = !!i2803[5]
  i2802.mirrorParameter = i2803[6]
  i2802.mirrorParameterActive = !!i2803[7]
  i2802.motionId = i2803[8]
  i2802.nameHash = i2803[9]
  i2802.fullPathHash = i2803[10]
  i2802.speed = i2803[11]
  i2802.speedParameter = i2803[12]
  i2802.speedParameterActive = !!i2803[13]
  i2802.tag = i2803[14]
  i2802.tagHash = i2803[15]
  i2802.writeDefaultValues = !!i2803[16]
  var i2805 = i2803[17]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 2) {
  request.r(i2805[i + 0], i2805[i + 1], 2, i2804, '')
  }
  i2802.behaviours = i2804
  var i2807 = i2803[18]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2807[i + 0]) );
  }
  i2802.transitions = i2806
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2813 = data
  i2812.fullPath = i2813[0]
  i2812.canTransitionToSelf = !!i2813[1]
  i2812.duration = i2813[2]
  i2812.exitTime = i2813[3]
  i2812.hasExitTime = !!i2813[4]
  i2812.hasFixedDuration = !!i2813[5]
  i2812.interruptionSource = i2813[6]
  i2812.offset = i2813[7]
  i2812.orderedInterruption = !!i2813[8]
  i2812.destinationStateId = i2813[9]
  i2812.isExit = !!i2813[10]
  i2812.mute = !!i2813[11]
  i2812.solo = !!i2813[12]
  var i2815 = i2813[13]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2815[i + 0]) );
  }
  i2812.conditions = i2814
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2821 = data
  i2820.destinationStateId = i2821[0]
  i2820.isExit = !!i2821[1]
  i2820.mute = !!i2821[2]
  i2820.solo = !!i2821[3]
  var i2823 = i2821[4]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2823[i + 0]) );
  }
  i2820.conditions = i2822
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2827 = data
  i2826.defaultBool = !!i2827[0]
  i2826.defaultFloat = i2827[1]
  i2826.defaultInt = i2827[2]
  i2826.name = i2827[3]
  i2826.nameHash = i2827[4]
  i2826.type = i2827[5]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2829 = data
  i2828.name = i2829[0]
  i2828.bytes64 = i2829[1]
  i2828.data = i2829[2]
  return i2828
}

Deserializers["GridSaveData"] = function (request, data, root) {
  var i2830 = root || request.c( 'GridSaveData' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(i2833[i + 0]);
  }
  i2830.gridData = i2832
  var i2835 = i2831[1]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(i2835[i + 0]);
  }
  i2830.gridSprites = i2834
  return i2830
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i2838 = root || request.c( 'Bricks_PattemTableObj' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('PattemInfor', i2841[i + 0]) );
  }
  i2838.listPattemsInfor = i2840
  var i2843 = i2839[1]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('LevelData', i2843[i + 0]) );
  }
  i2838.levelData = i2842
  return i2838
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i2846 = root || request.c( 'PattemInfor' )
  var i2847 = data
  i2846.type = i2847[0]
  var i2849 = i2847[1]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( !!i2849[i + 0] );
  }
  i2846.grid = i2848
  return i2846
}

Deserializers["LevelData"] = function (request, data, root) {
  var i2854 = root || request.c( 'LevelData' )
  var i2855 = data
  i2854.level = i2855[0]
  i2854.Score = i2855[1]
  i2854.weight = i2855[2]
  return i2854
}

Deserializers["BB10_SpawnBlockData"] = function (request, data, root) {
  var i2856 = root || request.c( 'BB10_SpawnBlockData' )
  var i2857 = data
  var i2859 = i2857[0]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('SpawnGroup', i2859[i + 0]) );
  }
  i2856.spawnGroups = i2858
  return i2856
}

Deserializers["SpawnGroup"] = function (request, data, root) {
  var i2862 = root || request.c( 'SpawnGroup' )
  var i2863 = data
  i2862.block1 = i2863[0]
  i2862.block2 = i2863[1]
  i2862.block3 = i2863[2]
  return i2862
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2865 = data
  request.r(i2865[0], i2865[1], 0, i2864, 'atlas')
  i2864.normalStyle = i2865[2]
  i2864.normalSpacingOffset = i2865[3]
  i2864.boldStyle = i2865[4]
  i2864.boldSpacing = i2865[5]
  i2864.italicStyle = i2865[6]
  i2864.tabSize = i2865[7]
  i2864.hashCode = i2865[8]
  request.r(i2865[9], i2865[10], 0, i2864, 'material')
  i2864.materialHashCode = i2865[11]
  i2864.m_Version = i2865[12]
  i2864.m_SourceFontFileGUID = i2865[13]
  request.r(i2865[14], i2865[15], 0, i2864, 'm_SourceFontFile_EditorRef')
  request.r(i2865[16], i2865[17], 0, i2864, 'm_SourceFontFile')
  i2864.m_AtlasPopulationMode = i2865[18]
  i2864.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2865[19], i2864.m_FaceInfo)
  var i2867 = i2865[20]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.add(request.d('UnityEngine.TextCore.Glyph', i2867[i + 0]));
  }
  i2864.m_GlyphTable = i2866
  var i2869 = i2865[21]
  var i2868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.add(request.d('TMPro.TMP_Character', i2869[i + 0]));
  }
  i2864.m_CharacterTable = i2868
  var i2871 = i2865[22]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 2, i2870, '')
  }
  i2864.m_AtlasTextures = i2870
  i2864.m_AtlasTextureIndex = i2865[23]
  i2864.m_IsMultiAtlasTexturesEnabled = !!i2865[24]
  i2864.m_ClearDynamicDataOnBuild = !!i2865[25]
  var i2873 = i2865[26]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('UnityEngine.TextCore.GlyphRect', i2873[i + 0]));
  }
  i2864.m_UsedGlyphRects = i2872
  var i2875 = i2865[27]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.add(request.d('UnityEngine.TextCore.GlyphRect', i2875[i + 0]));
  }
  i2864.m_FreeGlyphRects = i2874
  i2864.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2865[28], i2864.m_fontInfo)
  i2864.m_AtlasWidth = i2865[29]
  i2864.m_AtlasHeight = i2865[30]
  i2864.m_AtlasPadding = i2865[31]
  i2864.m_AtlasRenderMode = i2865[32]
  var i2877 = i2865[33]
  var i2876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.add(request.d('TMPro.TMP_Glyph', i2877[i + 0]));
  }
  i2864.m_glyphInfoList = i2876
  i2864.m_KerningTable = request.d('TMPro.KerningTable', i2865[34], i2864.m_KerningTable)
  i2864.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2865[35], i2864.m_FontFeatureTable)
  var i2879 = i2865[36]
  var i2878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2879.length; i += 2) {
  request.r(i2879[i + 0], i2879[i + 1], 1, i2878, '')
  }
  i2864.fallbackFontAssets = i2878
  var i2881 = i2865[37]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 1, i2880, '')
  }
  i2864.m_FallbackFontAssetTable = i2880
  i2864.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2865[38], i2864.m_CreationSettings)
  var i2883 = i2865[39]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('TMPro.TMP_FontWeightPair', i2883[i + 0]) );
  }
  i2864.m_FontWeightTable = i2882
  var i2885 = i2865[40]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('TMPro.TMP_FontWeightPair', i2885[i + 0]) );
  }
  i2864.fontWeights = i2884
  return i2864
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2887 = data
  i2886.m_FaceIndex = i2887[0]
  i2886.m_FamilyName = i2887[1]
  i2886.m_StyleName = i2887[2]
  i2886.m_PointSize = i2887[3]
  i2886.m_Scale = i2887[4]
  i2886.m_UnitsPerEM = i2887[5]
  i2886.m_LineHeight = i2887[6]
  i2886.m_AscentLine = i2887[7]
  i2886.m_CapLine = i2887[8]
  i2886.m_MeanLine = i2887[9]
  i2886.m_Baseline = i2887[10]
  i2886.m_DescentLine = i2887[11]
  i2886.m_SuperscriptOffset = i2887[12]
  i2886.m_SuperscriptSize = i2887[13]
  i2886.m_SubscriptOffset = i2887[14]
  i2886.m_SubscriptSize = i2887[15]
  i2886.m_UnderlineOffset = i2887[16]
  i2886.m_UnderlineThickness = i2887[17]
  i2886.m_StrikethroughOffset = i2887[18]
  i2886.m_StrikethroughThickness = i2887[19]
  i2886.m_TabWidth = i2887[20]
  return i2886
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2890 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2891 = data
  i2890.m_Index = i2891[0]
  i2890.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2891[1], i2890.m_Metrics)
  i2890.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2891[2], i2890.m_GlyphRect)
  i2890.m_Scale = i2891[3]
  i2890.m_AtlasIndex = i2891[4]
  i2890.m_ClassDefinitionType = i2891[5]
  return i2890
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2893 = data
  i2892.m_Width = i2893[0]
  i2892.m_Height = i2893[1]
  i2892.m_HorizontalBearingX = i2893[2]
  i2892.m_HorizontalBearingY = i2893[3]
  i2892.m_HorizontalAdvance = i2893[4]
  return i2892
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2895 = data
  i2894.m_X = i2895[0]
  i2894.m_Y = i2895[1]
  i2894.m_Width = i2895[2]
  i2894.m_Height = i2895[3]
  return i2894
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.TMP_Character' )
  var i2899 = data
  i2898.m_ElementType = i2899[0]
  i2898.m_Unicode = i2899[1]
  i2898.m_GlyphIndex = i2899[2]
  i2898.m_Scale = i2899[3]
  return i2898
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2902 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2903 = data
  i2902.Name = i2903[0]
  i2902.PointSize = i2903[1]
  i2902.Scale = i2903[2]
  i2902.CharacterCount = i2903[3]
  i2902.LineHeight = i2903[4]
  i2902.Baseline = i2903[5]
  i2902.Ascender = i2903[6]
  i2902.CapHeight = i2903[7]
  i2902.Descender = i2903[8]
  i2902.CenterLine = i2903[9]
  i2902.SuperscriptOffset = i2903[10]
  i2902.SubscriptOffset = i2903[11]
  i2902.SubSize = i2903[12]
  i2902.Underline = i2903[13]
  i2902.UnderlineThickness = i2903[14]
  i2902.strikethrough = i2903[15]
  i2902.strikethroughThickness = i2903[16]
  i2902.TabWidth = i2903[17]
  i2902.Padding = i2903[18]
  i2902.AtlasWidth = i2903[19]
  i2902.AtlasHeight = i2903[20]
  return i2902
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2907 = data
  i2906.id = i2907[0]
  i2906.x = i2907[1]
  i2906.y = i2907[2]
  i2906.width = i2907[3]
  i2906.height = i2907[4]
  i2906.xOffset = i2907[5]
  i2906.yOffset = i2907[6]
  i2906.xAdvance = i2907[7]
  i2906.scale = i2907[8]
  return i2906
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.KerningTable' )
  var i2909 = data
  var i2911 = i2909[0]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.add(request.d('TMPro.KerningPair', i2911[i + 0]));
  }
  i2908.kerningPairs = i2910
  return i2908
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2914 = root || request.c( 'TMPro.KerningPair' )
  var i2915 = data
  i2914.xOffset = i2915[0]
  i2914.m_FirstGlyph = i2915[1]
  i2914.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2915[2], i2914.m_FirstGlyphAdjustments)
  i2914.m_SecondGlyph = i2915[3]
  i2914.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2915[4], i2914.m_SecondGlyphAdjustments)
  i2914.m_IgnoreSpacingAdjustments = !!i2915[5]
  return i2914
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2916 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2917 = data
  var i2919 = i2917[0]
  var i2918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2919[i + 0]));
  }
  i2916.m_GlyphPairAdjustmentRecords = i2918
  return i2916
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2923 = data
  i2922.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2923[0], i2922.m_FirstAdjustmentRecord)
  i2922.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2923[1], i2922.m_SecondAdjustmentRecord)
  i2922.m_FeatureLookupFlags = i2923[2]
  return i2922
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2926 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2927 = data
  i2926.sourceFontFileName = i2927[0]
  i2926.sourceFontFileGUID = i2927[1]
  i2926.pointSizeSamplingMode = i2927[2]
  i2926.pointSize = i2927[3]
  i2926.padding = i2927[4]
  i2926.packingMode = i2927[5]
  i2926.atlasWidth = i2927[6]
  i2926.atlasHeight = i2927[7]
  i2926.characterSetSelectionMode = i2927[8]
  i2926.characterSequence = i2927[9]
  i2926.referencedFontAssetGUID = i2927[10]
  i2926.referencedTextAssetGUID = i2927[11]
  i2926.fontStyle = i2927[12]
  i2926.fontStyleModifier = i2927[13]
  i2926.renderMode = i2927[14]
  i2926.includeFontFeatures = !!i2927[15]
  return i2926
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'regularTypeface')
  request.r(i2931[2], i2931[3], 0, i2930, 'italicTypeface')
  return i2930
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2933 = data
  i2932.useSafeMode = !!i2933[0]
  i2932.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2933[1], i2932.safeModeOptions)
  i2932.timeScale = i2933[2]
  i2932.unscaledTimeScale = i2933[3]
  i2932.useSmoothDeltaTime = !!i2933[4]
  i2932.maxSmoothUnscaledTime = i2933[5]
  i2932.rewindCallbackMode = i2933[6]
  i2932.showUnityEditorReport = !!i2933[7]
  i2932.logBehaviour = i2933[8]
  i2932.drawGizmos = !!i2933[9]
  i2932.defaultRecyclable = !!i2933[10]
  i2932.defaultAutoPlay = i2933[11]
  i2932.defaultUpdateType = i2933[12]
  i2932.defaultTimeScaleIndependent = !!i2933[13]
  i2932.defaultEaseType = i2933[14]
  i2932.defaultEaseOvershootOrAmplitude = i2933[15]
  i2932.defaultEasePeriod = i2933[16]
  i2932.defaultAutoKill = !!i2933[17]
  i2932.defaultLoopType = i2933[18]
  i2932.debugMode = !!i2933[19]
  i2932.debugStoreTargetId = !!i2933[20]
  i2932.showPreviewPanel = !!i2933[21]
  i2932.storeSettingsLocation = i2933[22]
  i2932.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2933[23], i2932.modules)
  i2932.createASMDEF = !!i2933[24]
  i2932.showPlayingTweens = !!i2933[25]
  i2932.showPausedTweens = !!i2933[26]
  return i2932
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2934 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2935 = data
  i2934.logBehaviour = i2935[0]
  i2934.nestedTweenFailureBehaviour = i2935[1]
  return i2934
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2937 = data
  i2936.showPanel = !!i2937[0]
  i2936.audioEnabled = !!i2937[1]
  i2936.physicsEnabled = !!i2937[2]
  i2936.physics2DEnabled = !!i2937[3]
  i2936.spriteEnabled = !!i2937[4]
  i2936.uiEnabled = !!i2937[5]
  i2936.textMeshProEnabled = !!i2937[6]
  i2936.tk2DEnabled = !!i2937[7]
  i2936.deAudioEnabled = !!i2937[8]
  i2936.deUnityExtendedEnabled = !!i2937[9]
  i2936.epoOutlineEnabled = !!i2937[10]
  return i2936
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.TMP_Settings' )
  var i2939 = data
  i2938.m_enableWordWrapping = !!i2939[0]
  i2938.m_enableKerning = !!i2939[1]
  i2938.m_enableExtraPadding = !!i2939[2]
  i2938.m_enableTintAllSprites = !!i2939[3]
  i2938.m_enableParseEscapeCharacters = !!i2939[4]
  i2938.m_EnableRaycastTarget = !!i2939[5]
  i2938.m_GetFontFeaturesAtRuntime = !!i2939[6]
  i2938.m_missingGlyphCharacter = i2939[7]
  i2938.m_warningsDisabled = !!i2939[8]
  request.r(i2939[9], i2939[10], 0, i2938, 'm_defaultFontAsset')
  i2938.m_defaultFontAssetPath = i2939[11]
  i2938.m_defaultFontSize = i2939[12]
  i2938.m_defaultAutoSizeMinRatio = i2939[13]
  i2938.m_defaultAutoSizeMaxRatio = i2939[14]
  i2938.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2939[15], i2939[16] )
  i2938.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2939[17], i2939[18] )
  i2938.m_autoSizeTextContainer = !!i2939[19]
  i2938.m_IsTextObjectScaleStatic = !!i2939[20]
  var i2941 = i2939[21]
  var i2940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 1, i2940, '')
  }
  i2938.m_fallbackFontAssets = i2940
  i2938.m_matchMaterialPreset = !!i2939[22]
  request.r(i2939[23], i2939[24], 0, i2938, 'm_defaultSpriteAsset')
  i2938.m_defaultSpriteAssetPath = i2939[25]
  i2938.m_enableEmojiSupport = !!i2939[26]
  i2938.m_MissingCharacterSpriteUnicode = i2939[27]
  i2938.m_defaultColorGradientPresetsPath = i2939[28]
  request.r(i2939[29], i2939[30], 0, i2938, 'm_defaultStyleSheet')
  i2938.m_StyleSheetsResourcePath = i2939[31]
  request.r(i2939[32], i2939[33], 0, i2938, 'm_leadingCharacters')
  request.r(i2939[34], i2939[35], 0, i2938, 'm_followingCharacters')
  i2938.m_UseModernHangulLineBreakingRules = !!i2939[36]
  return i2938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2943 = data
  i2942.m_GlyphIndex = i2943[0]
  i2942.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2943[1], i2942.m_GlyphValueRecord)
  return i2942
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2945 = data
  i2944.m_XPlacement = i2945[0]
  i2944.m_YPlacement = i2945[1]
  i2944.m_XAdvance = i2945[2]
  i2944.m_YAdvance = i2945[3]
  return i2944
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2946 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2947 = data
  request.r(i2947[0], i2947[1], 0, i2946, 'spriteSheet')
  var i2949 = i2947[2]
  var i2948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.add(request.d('TMPro.TMP_Sprite', i2949[i + 0]));
  }
  i2946.spriteInfoList = i2948
  var i2951 = i2947[3]
  var i2950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2951.length; i += 2) {
  request.r(i2951[i + 0], i2951[i + 1], 1, i2950, '')
  }
  i2946.fallbackSpriteAssets = i2950
  i2946.hashCode = i2947[4]
  request.r(i2947[5], i2947[6], 0, i2946, 'material')
  i2946.materialHashCode = i2947[7]
  i2946.m_Version = i2947[8]
  i2946.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2947[9], i2946.m_FaceInfo)
  var i2953 = i2947[10]
  var i2952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.add(request.d('TMPro.TMP_SpriteCharacter', i2953[i + 0]));
  }
  i2946.m_SpriteCharacterTable = i2952
  var i2955 = i2947[11]
  var i2954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.add(request.d('TMPro.TMP_SpriteGlyph', i2955[i + 0]));
  }
  i2946.m_SpriteGlyphTable = i2954
  return i2946
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2958 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2959 = data
  i2958.name = i2959[0]
  i2958.hashCode = i2959[1]
  i2958.unicode = i2959[2]
  i2958.pivot = new pc.Vec2( i2959[3], i2959[4] )
  request.r(i2959[5], i2959[6], 0, i2958, 'sprite')
  i2958.id = i2959[7]
  i2958.x = i2959[8]
  i2958.y = i2959[9]
  i2958.width = i2959[10]
  i2958.height = i2959[11]
  i2958.xOffset = i2959[12]
  i2958.yOffset = i2959[13]
  i2958.xAdvance = i2959[14]
  i2958.scale = i2959[15]
  return i2958
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2964 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2965 = data
  i2964.m_Name = i2965[0]
  i2964.m_HashCode = i2965[1]
  i2964.m_ElementType = i2965[2]
  i2964.m_Unicode = i2965[3]
  i2964.m_GlyphIndex = i2965[4]
  i2964.m_Scale = i2965[5]
  return i2964
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2968 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2969 = data
  request.r(i2969[0], i2969[1], 0, i2968, 'sprite')
  i2968.m_Index = i2969[2]
  i2968.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2969[3], i2968.m_Metrics)
  i2968.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2969[4], i2968.m_GlyphRect)
  i2968.m_Scale = i2969[5]
  i2968.m_AtlasIndex = i2969[6]
  i2968.m_ClassDefinitionType = i2969[7]
  return i2968
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2970 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.add(request.d('TMPro.TMP_Style', i2973[i + 0]));
  }
  i2970.m_StyleList = i2972
  return i2970
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2976 = root || request.c( 'TMPro.TMP_Style' )
  var i2977 = data
  i2976.m_Name = i2977[0]
  i2976.m_HashCode = i2977[1]
  i2976.m_OpeningDefinition = i2977[2]
  i2976.m_ClosingDefinition = i2977[3]
  i2976.m_OpeningTagArray = i2977[4]
  i2976.m_ClosingTagArray = i2977[5]
  i2976.m_OpeningTagUnicodeArray = i2977[6]
  i2976.m_ClosingTagUnicodeArray = i2977[7]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2979 = data
  var i2981 = i2979[0]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2981[i + 0]) );
  }
  i2978.files = i2980
  i2978.componentToPrefabIds = i2979[1]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2985 = data
  i2984.path = i2985[0]
  request.r(i2985[1], i2985[2], 0, i2984, 'unityObject')
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2987 = data
  var i2989 = i2987[0]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2989[i + 0]) );
  }
  i2986.scriptsExecutionOrder = i2988
  var i2991 = i2987[1]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2991[i + 0]) );
  }
  i2986.sortingLayers = i2990
  var i2993 = i2987[2]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2993[i + 0]) );
  }
  i2986.cullingLayers = i2992
  i2986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2987[3], i2986.timeSettings)
  i2986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2987[4], i2986.physicsSettings)
  i2986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2987[5], i2986.physics2DSettings)
  i2986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2987[6], i2986.qualitySettings)
  i2986.enableRealtimeShadows = !!i2987[7]
  i2986.enableAutoInstancing = !!i2987[8]
  i2986.enableStaticBatching = !!i2987[9]
  i2986.enableDynamicBatching = !!i2987[10]
  i2986.lightmapEncodingQuality = i2987[11]
  i2986.desiredColorSpace = i2987[12]
  var i2995 = i2987[13]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( i2995[i + 0] );
  }
  i2986.allTags = i2994
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2999 = data
  i2998.name = i2999[0]
  i2998.value = i2999[1]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3003 = data
  i3002.id = i3003[0]
  i3002.name = i3003[1]
  i3002.value = i3003[2]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3007 = data
  i3006.id = i3007[0]
  i3006.name = i3007[1]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3009 = data
  i3008.fixedDeltaTime = i3009[0]
  i3008.maximumDeltaTime = i3009[1]
  i3008.timeScale = i3009[2]
  i3008.maximumParticleTimestep = i3009[3]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3011 = data
  i3010.gravity = new pc.Vec3( i3011[0], i3011[1], i3011[2] )
  i3010.defaultSolverIterations = i3011[3]
  i3010.bounceThreshold = i3011[4]
  i3010.autoSyncTransforms = !!i3011[5]
  i3010.autoSimulation = !!i3011[6]
  var i3013 = i3011[7]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3013[i + 0]) );
  }
  i3010.collisionMatrix = i3012
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3017 = data
  i3016.enabled = !!i3017[0]
  i3016.layerId = i3017[1]
  i3016.otherLayerId = i3017[2]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3019 = data
  request.r(i3019[0], i3019[1], 0, i3018, 'material')
  i3018.gravity = new pc.Vec2( i3019[2], i3019[3] )
  i3018.positionIterations = i3019[4]
  i3018.velocityIterations = i3019[5]
  i3018.velocityThreshold = i3019[6]
  i3018.maxLinearCorrection = i3019[7]
  i3018.maxAngularCorrection = i3019[8]
  i3018.maxTranslationSpeed = i3019[9]
  i3018.maxRotationSpeed = i3019[10]
  i3018.baumgarteScale = i3019[11]
  i3018.baumgarteTOIScale = i3019[12]
  i3018.timeToSleep = i3019[13]
  i3018.linearSleepTolerance = i3019[14]
  i3018.angularSleepTolerance = i3019[15]
  i3018.defaultContactOffset = i3019[16]
  i3018.autoSimulation = !!i3019[17]
  i3018.queriesHitTriggers = !!i3019[18]
  i3018.queriesStartInColliders = !!i3019[19]
  i3018.callbacksOnDisable = !!i3019[20]
  i3018.reuseCollisionCallbacks = !!i3019[21]
  i3018.autoSyncTransforms = !!i3019[22]
  var i3021 = i3019[23]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3021[i + 0]) );
  }
  i3018.collisionMatrix = i3020
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3025 = data
  i3024.enabled = !!i3025[0]
  i3024.layerId = i3025[1]
  i3024.otherLayerId = i3025[2]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3027 = data
  var i3029 = i3027[0]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3029[i + 0]) );
  }
  i3026.qualityLevels = i3028
  var i3031 = i3027[1]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( i3031[i + 0] );
  }
  i3026.names = i3030
  i3026.shadows = i3027[2]
  i3026.anisotropicFiltering = i3027[3]
  i3026.antiAliasing = i3027[4]
  i3026.lodBias = i3027[5]
  i3026.shadowCascades = i3027[6]
  i3026.shadowDistance = i3027[7]
  i3026.shadowmaskMode = i3027[8]
  i3026.shadowProjection = i3027[9]
  i3026.shadowResolution = i3027[10]
  i3026.softParticles = !!i3027[11]
  i3026.softVegetation = !!i3027[12]
  i3026.activeColorSpace = i3027[13]
  i3026.desiredColorSpace = i3027[14]
  i3026.masterTextureLimit = i3027[15]
  i3026.maxQueuedFrames = i3027[16]
  i3026.particleRaycastBudget = i3027[17]
  i3026.pixelLightCount = i3027[18]
  i3026.realtimeReflectionProbes = !!i3027[19]
  i3026.shadowCascade2Split = i3027[20]
  i3026.shadowCascade4Split = new pc.Vec3( i3027[21], i3027[22], i3027[23] )
  i3026.streamingMipmapsActive = !!i3027[24]
  i3026.vSyncCount = i3027[25]
  i3026.asyncUploadBufferSize = i3027[26]
  i3026.asyncUploadTimeSlice = i3027[27]
  i3026.billboardsFaceCameraPosition = !!i3027[28]
  i3026.shadowNearPlaneOffset = i3027[29]
  i3026.streamingMipmapsMemoryBudget = i3027[30]
  i3026.maximumLODLevel = i3027[31]
  i3026.streamingMipmapsAddAllCameras = !!i3027[32]
  i3026.streamingMipmapsMaxLevelReduction = i3027[33]
  i3026.streamingMipmapsRenderersPerFrame = i3027[34]
  i3026.resolutionScalingFixedDPIFactor = i3027[35]
  i3026.streamingMipmapsMaxFileIORequests = i3027[36]
  i3026.currentQualityLevel = i3027[37]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3037 = data
  i3036.mode = i3037[0]
  i3036.parameter = i3037[1]
  i3036.threshold = i3037[2]
  return i3036
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3038 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3039 = data
  i3038.xPlacement = i3039[0]
  i3038.yPlacement = i3039[1]
  i3038.xAdvance = i3039[2]
  i3038.yAdvance = i3039[3]
  return i3038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"35":[33],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[33],"16":[15],"111":[112],"113":[112],"52":[46],"70":[43],"114":[46],"115":[46],"54":[52],"56":[55,46],"116":[46],"53":[52],"117":[46],"118":[46],"119":[46],"120":[46],"121":[46],"122":[46],"123":[46],"124":[46],"125":[46],"126":[55,46],"127":[46],"128":[46],"129":[46],"67":[46],"130":[55,46],"131":[46],"132":[64],"133":[64],"65":[64],"134":[64],"135":[33],"136":[33],"137":[52],"138":[61],"139":[46],"48":[15,46],"43":[46,55],"140":[46],"141":[55,46],"142":[15],"143":[55,46],"144":[46],"145":[146],"147":[146],"148":[146]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CompleteBlocks","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","SG_Block_EffectCtr","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","CameraResponsive","MainAudio","GridSaveData","Bricks_PattemTableObj","BB10_SpawnBlockData","BB10_NextViewer","GamePlayManager","TMPro.TextMeshProUGUI","ResponsiveManager","TutorialManager","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","ScaleElement","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","ResponsiveWorld","UnityEngine.UI.Button","CTAButton","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","UnityEngine.UI.Slider","TimerProgress","UITweenElement","TextMeshProController","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/12/2026 10:41:13";

Deserializers.lunaDaysRunning = "6.7";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Basic1";

Deserializers.lunaAppID = "37895";

Deserializers.projectId = "8fb0e5c3e8de46d44924511e3d0b28a5";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1702";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4867";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BlockPuzzle";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "f9eb24c8-f314-4223-905f-d2ece58e00e8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

