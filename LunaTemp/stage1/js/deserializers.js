var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointSpring' )
  var i389 = data
  i388.spring = i389[0]
  i388.damper = i389[1]
  i388.targetPosition = i389[2]
  return i388
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointMotor' )
  var i391 = data
  i390.m_TargetVelocity = i391[0]
  i390.m_Force = i391[1]
  i390.m_FreeSpin = i391[2]
  return i390
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointLimits' )
  var i393 = data
  i392.m_Min = i393[0]
  i392.m_Max = i393[1]
  i392.m_Bounciness = i393[2]
  i392.m_BounceMinVelocity = i393[3]
  i392.m_ContactDistance = i393[4]
  i392.minBounce = i393[5]
  i392.maxBounce = i393[6]
  return i392
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointDrive' )
  var i395 = data
  i394.m_PositionSpring = i395[0]
  i394.m_PositionDamper = i395[1]
  i394.m_MaximumForce = i395[2]
  i394.m_UseAcceleration = i395[3]
  return i394
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i397 = data
  i396.m_Spring = i397[0]
  i396.m_Damper = i397[1]
  return i396
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i399 = data
  i398.m_Limit = i399[0]
  i398.m_Bounciness = i399[1]
  i398.m_ContactDistance = i399[2]
  return i398
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i401 = data
  i400.m_ExtremumSlip = i401[0]
  i400.m_ExtremumValue = i401[1]
  i400.m_AsymptoteSlip = i401[2]
  i400.m_AsymptoteValue = i401[3]
  i400.m_Stiffness = i401[4]
  return i400
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i403 = data
  i402.m_LowerAngle = i403[0]
  i402.m_UpperAngle = i403[1]
  return i402
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i405 = data
  i404.m_MotorSpeed = i405[0]
  i404.m_MaximumMotorTorque = i405[1]
  return i404
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i407 = data
  i406.m_DampingRatio = i407[0]
  i406.m_Frequency = i407[1]
  i406.m_Angle = i407[2]
  return i406
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i409 = data
  i408.m_LowerTranslation = i409[0]
  i408.m_UpperTranslation = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i410 = root || new pc.UnityMaterial()
  var i411 = data
  i410.name = i411[0]
  request.r(i411[1], i411[2], 0, i410, 'shader')
  i410.renderQueue = i411[3]
  i410.enableInstancing = !!i411[4]
  var i413 = i411[5]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i413[i + 0]) );
  }
  i410.floatParameters = i412
  var i415 = i411[6]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i415[i + 0]) );
  }
  i410.colorParameters = i414
  var i417 = i411[7]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i417[i + 0]) );
  }
  i410.vectorParameters = i416
  var i419 = i411[8]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i419[i + 0]) );
  }
  i410.textureParameters = i418
  var i421 = i411[9]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i421[i + 0]) );
  }
  i410.materialFlags = i420
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i425 = data
  i424.name = i425[0]
  i424.value = i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i429 = data
  i428.name = i429[0]
  i428.value = new pc.Color(i429[1], i429[2], i429[3], i429[4])
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i433 = data
  i432.name = i433[0]
  i432.value = new pc.Vec4( i433[1], i433[2], i433[3], i433[4] )
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i437 = data
  i436.name = i437[0]
  request.r(i437[1], i437[2], 0, i436, 'value')
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i441 = data
  i440.name = i441[0]
  i440.enabled = !!i441[1]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i443 = data
  i442.name = i443[0]
  i442.width = i443[1]
  i442.height = i443[2]
  i442.mipmapCount = i443[3]
  i442.anisoLevel = i443[4]
  i442.filterMode = i443[5]
  i442.hdr = !!i443[6]
  i442.format = i443[7]
  i442.wrapMode = i443[8]
  i442.alphaIsTransparency = !!i443[9]
  i442.alphaSource = i443[10]
  i442.graphicsFormat = i443[11]
  i442.sRGBTexture = !!i443[12]
  i442.desiredColorSpace = i443[13]
  i442.wrapU = i443[14]
  i442.wrapV = i443[15]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i445 = data
  i444.position = new pc.Vec3( i445[0], i445[1], i445[2] )
  i444.scale = new pc.Vec3( i445[3], i445[4], i445[5] )
  i444.rotation = new pc.Quat(i445[6], i445[7], i445[8], i445[9])
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i447 = data
  i446.color = new pc.Color(i447[0], i447[1], i447[2], i447[3])
  request.r(i447[4], i447[5], 0, i446, 'sprite')
  i446.flipX = !!i447[6]
  i446.flipY = !!i447[7]
  i446.drawMode = i447[8]
  i446.size = new pc.Vec2( i447[9], i447[10] )
  i446.tileMode = i447[11]
  i446.adaptiveModeThreshold = i447[12]
  i446.maskInteraction = i447[13]
  i446.spriteSortPoint = i447[14]
  i446.enabled = !!i447[15]
  request.r(i447[16], i447[17], 0, i446, 'sharedMaterial')
  var i449 = i447[18]
  var i448 = []
  for(var i = 0; i < i449.length; i += 2) {
  request.r(i449[i + 0], i449[i + 1], 2, i448, '')
  }
  i446.sharedMaterials = i448
  i446.receiveShadows = !!i447[19]
  i446.shadowCastingMode = i447[20]
  i446.sortingLayerID = i447[21]
  i446.sortingOrder = i447[22]
  i446.lightmapIndex = i447[23]
  i446.lightmapSceneIndex = i447[24]
  i446.lightmapScaleOffset = new pc.Vec4( i447[25], i447[26], i447[27], i447[28] )
  i446.lightProbeUsage = i447[29]
  i446.reflectionProbeUsage = i447[30]
  return i446
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i452 = root || request.c( 'BB10_BrickCubeUnit' )
  var i453 = data
  i452.thisType = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'viewer')
  request.r(i453[3], i453[4], 0, i452, 'render')
  i452.ID = i453[5]
  i452.row = i453[6]
  i452.col = i453[7]
  i452.indexRow = i453[8]
  i452.indexCol = i453[9]
  i452.scale = i453[10]
  i452.myData = request.d('BB10_ColorData', i453[11], i452.myData)
  i452.targetGray = i453[12]
  i452.durationDrop = i453[13]
  i452.dropScaleMin = new pc.Vec3( i453[14], i453[15], i453[16] )
  i452.ac = new pc.AnimationCurve( { keys_flow: i453[17] } )
  i452.speed = i453[18]
  i452.targetScale = i453[19]
  i452.durationScaleEffect = i453[20]
  i452.speedRotate = i453[21]
  request.r(i453[22], i453[23], 0, i452, 'shadowDropBlock')
  return i452
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i454 = root || request.c( 'BB10_ColorData' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'sprite')
  i454.ID = i455[2]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i457 = data
  i456.usedByComposite = !!i457[0]
  i456.autoTiling = !!i457[1]
  i456.size = new pc.Vec2( i457[2], i457[3] )
  i456.edgeRadius = i457[4]
  i456.enabled = !!i457[5]
  i456.isTrigger = !!i457[6]
  i456.usedByEffector = !!i457[7]
  i456.density = i457[8]
  i456.offset = new pc.Vec2( i457[9], i457[10] )
  request.r(i457[11], i457[12], 0, i456, 'material')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i459 = data
  i458.name = i459[0]
  i458.tagId = i459[1]
  i458.enabled = !!i459[2]
  i458.isStatic = !!i459[3]
  i458.layer = i459[4]
  return i458
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i460 = root || request.c( 'BB10_ColorControl' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('BB10_ColorData', i463[i + 0]) );
  }
  i460.sprites = i462
  var i465 = i461[1]
  var i464 = []
  for(var i = 0; i < i465.length; i += 2) {
  request.r(i465[i + 0], i465[i + 1], 2, i464, '')
  }
  i460.spriteTexs = i464
  var i467 = i461[2]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
  var i469 = i467[i + 0]
  var i468 = []
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 2, i468, '')
  }
    i466.push( i468 );
  }
  i460.preloadSprite = i466
  i460.preload = i461[3]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'additionalVertexStreams')
  i480.enabled = !!i481[2]
  request.r(i481[3], i481[4], 0, i480, 'sharedMaterial')
  var i483 = i481[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 2) {
  request.r(i483[i + 0], i483[i + 1], 2, i482, '')
  }
  i480.sharedMaterials = i482
  i480.receiveShadows = !!i481[6]
  i480.shadowCastingMode = i481[7]
  i480.sortingLayerID = i481[8]
  i480.sortingOrder = i481[9]
  i480.lightmapIndex = i481[10]
  i480.lightmapSceneIndex = i481[11]
  i480.lightmapScaleOffset = new pc.Vec4( i481[12], i481[13], i481[14], i481[15] )
  i480.lightProbeUsage = i481[16]
  i480.reflectionProbeUsage = i481[17]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i485 = data
  i484.m_Alignment = i485[0]
  i484.m_Anchor = i485[1]
  i484.m_CharacterSize = i485[2]
  request.r(i485[3], i485[4], 0, i484, 'm_Font')
  i484.m_FontSize = i485[5]
  i484.m_FontStyle = i485[6]
  i484.m_LineSpacing = i485[7]
  i484.m_OffsetZ = i485[8]
  i484.m_RichText = !!i485[9]
  i484.m_TabSize = i485[10]
  i484.m_Text = i485[11]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i487 = data
  i486.name = i487[0]
  i486.atlasId = i487[1]
  i486.mipmapCount = i487[2]
  i486.hdr = !!i487[3]
  i486.size = i487[4]
  i486.anisoLevel = i487[5]
  i486.filterMode = i487[6]
  var i489 = i487[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 4) {
    i488.push( UnityEngine.Rect.MinMaxRect(i489[i + 0], i489[i + 1], i489[i + 2], i489[i + 3]) );
  }
  i486.rects = i488
  i486.wrapU = i487[8]
  i486.wrapV = i487[9]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i493 = data
  i492.name = i493[0]
  i492.index = i493[1]
  i492.startup = !!i493[2]
  return i492
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i494 = root || request.c( 'BB10_MainObjControl' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'colorControl')
  request.r(i495[2], i495[3], 0, i494, 'pattemCreater')
  request.r(i495[4], i495[5], 0, i494, 'nextViewerCtr')
  request.r(i495[6], i495[7], 0, i494, 'grid')
  request.r(i495[8], i495[9], 0, i494, 'planeViewCrt')
  request.r(i495[10], i495[11], 0, i494, 'groundView')
  request.r(i495[12], i495[13], 0, i494, 'camScript')
  request.r(i495[14], i495[15], 0, i494, 'scoreCtr')
  request.r(i495[16], i495[17], 0, i494, 'helpCtr')
  request.r(i495[18], i495[19], 0, i494, 'screenCtr')
  request.r(i495[20], i495[21], 0, i494, 'tutorial')
  request.r(i495[22], i495[23], 0, i494, 'cam')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i497 = data
  i496.aspect = i497[0]
  i496.orthographic = !!i497[1]
  i496.orthographicSize = i497[2]
  i496.backgroundColor = new pc.Color(i497[3], i497[4], i497[5], i497[6])
  i496.nearClipPlane = i497[7]
  i496.farClipPlane = i497[8]
  i496.fieldOfView = i497[9]
  i496.depth = i497[10]
  i496.clearFlags = i497[11]
  i496.cullingMask = i497[12]
  i496.rect = i497[13]
  request.r(i497[14], i497[15], 0, i496, 'targetTexture')
  i496.usePhysicalProperties = !!i497[16]
  i496.focalLength = i497[17]
  i496.sensorSize = new pc.Vec2( i497[18], i497[19] )
  i496.lensShift = new pc.Vec2( i497[20], i497[21] )
  i496.gateFit = i497[22]
  i496.commandBufferCount = i497[23]
  i496.cameraType = i497[24]
  i496.enabled = !!i497[25]
  return i496
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i498 = root || request.c( 'CameraScript' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'cam')
  return i498
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i500 = root || request.c( 'MainAudio' )
  var i501 = data
  var i503 = i501[0]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('InputAudio', i503[i + 0]) );
  }
  i500.listInputAudio = i502
  i500.isMute = !!i501[1]
  return i500
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i506 = root || request.c( 'InputAudio' )
  var i507 = data
  i506.type = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'audioClip')
  i506.loop = !!i507[3]
  i506.volume = i507[4]
  return i506
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i508 = root || request.c( 'BB10_Grid' )
  var i509 = data
  i508.numberCol = i509[0]
  i508.numberRow = i509[1]
  i508.waitDelete = i509[2]
  i508.waitPerUnit = i509[3]
  i508.durationGray = i509[4]
  i508.nonGray = i509[5]
  i508.halfGray = i509[6]
  i508.fullGray = i509[7]
  i508.waitUnit = i509[8]
  return i508
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i510 = root || request.c( 'BB10_PattemCreater' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'cubePrefab')
  var i513 = i511[2]
  var i512 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 1, i512, '')
  }
  i510.listCube = i512
  request.r(i511[3], i511[4], 0, i510, 'pattemDataSave')
  return i510
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i516 = root || request.c( 'BB10_PlaneView' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'camera')
  i516.y = i517[2]
  i516.scale = i517[3]
  i516.scaleSmall = i517[4]
  i516.distanceTouch = i517[5]
  i516.duration = i517[6]
  request.r(i517[7], i517[8], 0, i516, 'cam')
  var i519 = i517[9]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 1, i518, '')
  }
  i516.listBlock = i518
  i516.selected = i517[10]
  i516.isScaling = !!i517[11]
  i516.groundAcepted = !!i517[12]
  i516.faceMousePos = new pc.Vec2( i517[13], i517[14] )
  i516.isAuto = !!i517[15]
  i516.state = i517[16]
  i516.speedMoveDrop = i517[17]
  return i516
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i520 = root || request.c( 'BB10_GroundView' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'groundPrefab')
  var i523 = i521[2]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 1, i522, '')
  }
  i520.listBlockRender = i522
  return i520
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i526 = root || request.c( 'BB10_NextViewerControl' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'pattemTableObj')
  var i529 = i527[2]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i526.listView = i528
  var i531 = i527[3]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 1, i530, '')
  }
  i526.listUnit0 = i530
  var i533 = i527[4]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 1, i532, '')
  }
  i526.listUnit1 = i532
  var i535 = i527[5]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 1, i534, '')
  }
  i526.listUnit2 = i534
  return i526
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i538 = root || request.c( 'BB10_NextViewer' )
  var i539 = data
  i538.index = i539[0]
  i538.scale = i539[1]
  i538.durationLight = i539[2]
  i538.duration = i539[3]
  i538.durationIn = i539[4]
  i538.myType = i539[5]
  i538.rotateTime = i539[6]
  var i541 = i539[7]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 1, i540, '')
  }
  i538.listBlock = i540
  i538.state = i539[8]
  i538.startPos1 = new pc.Vec2( i539[9], i539[10] )
  i538.startPos2 = new pc.Vec2( i539[11], i539[12] )
  i538.ac1 = new pc.AnimationCurve( { keys_flow: i539[13] } )
  i538.ac2 = new pc.AnimationCurve( { keys_flow: i539[14] } )
  return i538
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i542 = root || request.c( 'BB10_ScoreCtr' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'scorePrefab')
  var i545 = i543[2]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 1, i544, '')
  }
  i542.listText = i544
  i542.startColor = new pc.Color(i543[3], i543[4], i543[5], i543[6])
  i542.endColor = new pc.Color(i543[7], i543[8], i543[9], i543[10])
  request.r(i543[11], i543[12], 0, i542, 'mat')
  i542.speed0 = i543[13]
  i542.G = i543[14]
  i542.duration = i543[15]
  return i542
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i548 = root || request.c( 'BB10_ShowHelpCtr' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'groundPrefab')
  var i551 = i549[2]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 1, i550, '')
  }
  i548.listBlockDisable = i550
  var i553 = i549[3]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 1, i552, '')
  }
  i548.listBlockActive = i552
  return i548
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i556 = root || request.c( 'BB10_Tutorial' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'finger')
  request.r(i557[2], i557[3], 0, i556, 'circle')
  i556.durationMoveUp = i557[4]
  i556.durationMoveDown = i557[5]
  i556.durationScale = i557[6]
  i556.durationMoveShort = i557[7]
  i556.state = i557[8]
  return i556
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i558 = root || request.c( 'BB10_ScreenCtr' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'BgUnit')
  request.r(i559[2], i559[3], 0, i558, 'topRec')
  request.r(i559[4], i559[5], 0, i558, 'bottomTrans')
  var i561 = i559[6]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.listPattemTrans = i560
  i558.defaultPattemY = i559[7]
  i558.defaultPattemUIY = i559[8]
  i558.orthographicSizeMin = i559[9]
  request.r(i559[10], i559[11], 0, i558, 'cam')
  i558.distanceEdge = i559[12]
  i558.durationFadeIn = i559[13]
  i558.distanceMoveFade = i559[14]
  i558.startAlpha = i559[15]
  i558.F = i559[16]
  i558.FUI = i559[17]
  request.r(i559[18], i559[19], 0, i558, 'BG')
  i558.targetAlpha = i559[20]
  request.r(i559[21], i559[22], 0, i558, 'partTop')
  request.r(i559[23], i559[24], 0, i558, 'partDown')
  request.r(i559[25], i559[26], 0, i558, 'partLeft')
  request.r(i559[27], i559[28], 0, i558, 'partRight')
  var i563 = i559[29]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i558.grid = i562
  i558.gridMoving = !!i559[30]
  i558.waitStep = i559[31]
  i558.durationScaleUp = i559[32]
  i558.acScale = new pc.AnimationCurve( { keys_flow: i559[33] } )
  request.r(i559[34], i559[35], 0, i558, 'parentCell')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i569 = data
  i568.type = i569[0]
  i568.color = new pc.Color(i569[1], i569[2], i569[3], i569[4])
  i568.cullingMask = i569[5]
  i568.intensity = i569[6]
  i568.range = i569[7]
  i568.spotAngle = i569[8]
  i568.shadows = i569[9]
  i568.shadowNormalBias = i569[10]
  i568.shadowBias = i569[11]
  i568.shadowStrength = i569[12]
  i568.shadowResolution = i569[13]
  i568.lightmapBakeType = i569[14]
  i568.renderMode = i569[15]
  request.r(i569[16], i569[17], 0, i568, 'cookie')
  i568.cookieSize = i569[18]
  i568.enabled = !!i569[19]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i571 = data
  i570.pivot = new pc.Vec2( i571[0], i571[1] )
  i570.anchorMin = new pc.Vec2( i571[2], i571[3] )
  i570.anchorMax = new pc.Vec2( i571[4], i571[5] )
  i570.sizeDelta = new pc.Vec2( i571[6], i571[7] )
  i570.anchoredPosition3D = new pc.Vec3( i571[8], i571[9], i571[10] )
  i570.rotation = new pc.Quat(i571[11], i571[12], i571[13], i571[14])
  i570.scale = new pc.Vec3( i571[15], i571[16], i571[17] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i573 = data
  i572.planeDistance = i573[0]
  i572.referencePixelsPerUnit = i573[1]
  i572.isFallbackOverlay = !!i573[2]
  i572.renderMode = i573[3]
  i572.renderOrder = i573[4]
  i572.sortingLayerName = i573[5]
  i572.sortingOrder = i573[6]
  i572.scaleFactor = i573[7]
  request.r(i573[8], i573[9], 0, i572, 'worldCamera')
  i572.overrideSorting = !!i573[10]
  i572.pixelPerfect = !!i573[11]
  i572.targetDisplay = i573[12]
  i572.overridePixelPerfect = !!i573[13]
  i572.enabled = !!i573[14]
  return i572
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i575 = data
  i574.m_UiScaleMode = i575[0]
  i574.m_ReferencePixelsPerUnit = i575[1]
  i574.m_ScaleFactor = i575[2]
  i574.m_ReferenceResolution = new pc.Vec2( i575[3], i575[4] )
  i574.m_ScreenMatchMode = i575[5]
  i574.m_MatchWidthOrHeight = i575[6]
  i574.m_PhysicalUnit = i575[7]
  i574.m_FallbackScreenDPI = i575[8]
  i574.m_DefaultSpriteDPI = i575[9]
  i574.m_DynamicPixelsPerUnit = i575[10]
  i574.m_PresetInfoIsWorld = !!i575[11]
  return i574
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i577 = data
  i576.m_IgnoreReversedGraphics = !!i577[0]
  i576.m_BlockingObjects = i577[1]
  i576.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i577[2] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i579 = data
  i578.cullTransparentMesh = !!i579[0]
  return i578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Image' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Sprite')
  i580.m_Type = i581[2]
  i580.m_PreserveAspect = !!i581[3]
  i580.m_FillCenter = !!i581[4]
  i580.m_FillMethod = i581[5]
  i580.m_FillAmount = i581[6]
  i580.m_FillClockwise = !!i581[7]
  i580.m_FillOrigin = i581[8]
  i580.m_UseSpriteMesh = !!i581[9]
  i580.m_PixelsPerUnitMultiplier = i581[10]
  i580.m_Maskable = !!i581[11]
  request.r(i581[12], i581[13], 0, i580, 'm_Material')
  i580.m_Color = new pc.Color(i581[14], i581[15], i581[16], i581[17])
  i580.m_RaycastTarget = !!i581[18]
  i580.m_RaycastPadding = new pc.Vec4( i581[19], i581[20], i581[21], i581[22] )
  return i580
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i582 = root || request.c( 'BB10_MainCanvasUI' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'inGameScript')
  request.r(i583[2], i583[3], 0, i582, 'faderScript')
  i582.OnDropPiece = request.d('System.Action', i583[4], i582.OnDropPiece)
  request.r(i583[5], i583[6], 0, i582, 'blur')
  i582.OnNeedStopAdBreak = request.d('System.Action', i583[7], i582.OnNeedStopAdBreak)
  return i582
}

Deserializers["System.Action"] = function (request, data, root) {
  var i584 = root || request.c( 'System.Action' )
  var i585 = data
  return i584
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i586 = root || request.c( 'BB10_InGameScript' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'rec')
  request.r(i587[2], i587[3], 0, i586, 'scoreTxt')
  request.r(i587[4], i587[5], 0, i586, 'bestTxt')
  i586.scoreInt = i587[6]
  i586.bestInt = i587[7]
  request.r(i587[8], i587[9], 0, i586, 'group')
  request.r(i587[10], i587[11], 0, i586, 'blur_1')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i589 = data
  i588.m_Alpha = i589[0]
  i588.m_Interactable = !!i589[1]
  i588.m_BlocksRaycasts = !!i589[2]
  i588.m_IgnoreParentGroups = !!i589[3]
  i588.enabled = !!i589[4]
  return i588
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_FirstSelected')
  i590.m_sendNavigationEvents = !!i591[2]
  i590.m_DragThreshold = i591[3]
  return i590
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i593 = data
  i592.m_HorizontalAxis = i593[0]
  i592.m_VerticalAxis = i593[1]
  i592.m_SubmitButton = i593[2]
  i592.m_CancelButton = i593[3]
  i592.m_InputActionsPerSecond = i593[4]
  i592.m_RepeatDelay = i593[5]
  i592.m_ForceModuleActive = !!i593[6]
  i592.m_SendPointerHoverToParent = !!i593[7]
  return i592
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i594 = root || request.c( 'BB10_FaderHandler' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'image')
  i594.durationFade = i595[2]
  i594.durationFadeOut = i595[3]
  i594.durationSwich = i595[4]
  return i594
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i596 = root || request.c( 'BB10_HomeController' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'group')
  return i596
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i598 = root || request.c( 'BB10_LostScript' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'scoreText')
  request.r(i599[2], i599[3], 0, i598, 'bestText')
  request.r(i599[4], i599[5], 0, i598, 'group')
  i598.isAuto = !!i599[6]
  request.r(i599[7], i599[8], 0, i598, 'cupShaker')
  request.r(i599[9], i599[10], 0, i598, 'listViewAdsPannel')
  return i598
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i600 = root || request.c( 'BB10_PopupRate' )
  var i601 = data
  var i603 = i601[0]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 1, i602, '')
  }
  i600.starList = i602
  request.r(i601[1], i601[2], 0, i600, 'submit')
  request.r(i601[3], i601[4], 0, i600, 'textRate')
  request.r(i601[5], i601[6], 0, i600, 'starOn')
  request.r(i601[7], i601[8], 0, i600, 'starOff')
  i600.starNumber = i601[9]
  request.r(i601[10], i601[11], 0, i600, 'popup')
  request.r(i601[12], i601[13], 0, i600, 'pannel')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i607 = data
  i606.ambientIntensity = i607[0]
  i606.reflectionIntensity = i607[1]
  i606.ambientMode = i607[2]
  i606.ambientLight = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.ambientSkyColor = new pc.Color(i607[7], i607[8], i607[9], i607[10])
  i606.ambientGroundColor = new pc.Color(i607[11], i607[12], i607[13], i607[14])
  i606.ambientEquatorColor = new pc.Color(i607[15], i607[16], i607[17], i607[18])
  i606.fogColor = new pc.Color(i607[19], i607[20], i607[21], i607[22])
  i606.fogEndDistance = i607[23]
  i606.fogStartDistance = i607[24]
  i606.fogDensity = i607[25]
  i606.fog = !!i607[26]
  request.r(i607[27], i607[28], 0, i606, 'skybox')
  i606.fogMode = i607[29]
  var i609 = i607[30]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i609[i + 0]) );
  }
  i606.lightmaps = i608
  i606.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i607[31], i606.lightProbes)
  i606.lightmapsMode = i607[32]
  i606.mixedBakeMode = i607[33]
  i606.environmentLightingMode = i607[34]
  i606.ambientProbe = new pc.SphericalHarmonicsL2(i607[35])
  i606.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i607[36])
  i606.useReferenceAmbientProbe = !!i607[37]
  request.r(i607[38], i607[39], 0, i606, 'customReflection')
  request.r(i607[40], i607[41], 0, i606, 'defaultReflection')
  i606.defaultReflectionMode = i607[42]
  i606.defaultReflectionResolution = i607[43]
  i606.sunLightObjectId = i607[44]
  i606.pixelLightCount = i607[45]
  i606.defaultReflectionHDR = !!i607[46]
  i606.hasLightDataAsset = !!i607[47]
  i606.hasManualGenerate = !!i607[48]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'lightmapColor')
  request.r(i613[2], i613[3], 0, i612, 'lightmapDirection')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i614 = root || new UnityEngine.LightProbes()
  var i615 = data
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i623 = data
  var i625 = i623[0]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i625[i + 0]));
  }
  i622.ShaderCompilationErrors = i624
  i622.name = i623[1]
  i622.guid = i623[2]
  var i627 = i623[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i622.shaderDefinedKeywords = i626
  var i629 = i623[4]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i629[i + 0]) );
  }
  i622.passes = i628
  var i631 = i623[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i631[i + 0]) );
  }
  i622.usePasses = i630
  var i633 = i623[6]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i633[i + 0]) );
  }
  i622.defaultParameterValues = i632
  request.r(i623[7], i623[8], 0, i622, 'unityFallbackShader')
  i622.readDepth = !!i623[9]
  i622.isCreatedByShaderGraph = !!i623[10]
  i622.disableBatching = !!i623[11]
  i622.compiled = !!i623[12]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i637 = data
  i636.shaderName = i637[0]
  i636.errorMessage = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i642 = root || new pc.UnityShaderPass()
  var i643 = data
  i642.id = i643[0]
  i642.subShaderIndex = i643[1]
  i642.name = i643[2]
  i642.passType = i643[3]
  i642.grabPassTextureName = i643[4]
  i642.usePass = !!i643[5]
  i642.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[6], i642.zTest)
  i642.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[7], i642.zWrite)
  i642.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[8], i642.culling)
  i642.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[9], i642.blending)
  i642.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[10], i642.alphaBlending)
  i642.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[11], i642.colorWriteMask)
  i642.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[12], i642.offsetUnits)
  i642.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[13], i642.offsetFactor)
  i642.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[14], i642.stencilRef)
  i642.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[15], i642.stencilReadMask)
  i642.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[16], i642.stencilWriteMask)
  i642.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[17], i642.stencilOp)
  i642.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[18], i642.stencilOpFront)
  i642.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[19], i642.stencilOpBack)
  var i645 = i643[20]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i645[i + 0]) );
  }
  i642.tags = i644
  var i647 = i643[21]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.passDefinedKeywords = i646
  var i649 = i643[22]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i649[i + 0]) );
  }
  i642.passDefinedKeywordGroups = i648
  var i651 = i643[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i651[i + 0]) );
  }
  i642.variants = i650
  var i653 = i643[24]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i653[i + 0]) );
  }
  i642.excludedVariants = i652
  i642.hasDepthReader = !!i643[25]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i655 = data
  i654.val = i655[0]
  i654.name = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i657 = data
  i656.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[0], i656.src)
  i656.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[1], i656.dst)
  i656.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[2], i656.op)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i659 = data
  i658.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[0], i658.pass)
  i658.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[1], i658.fail)
  i658.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[2], i658.zFail)
  i658.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[3], i658.comp)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i663 = data
  i662.name = i663[0]
  i662.value = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i666.keywords = i668
  i666.hasDiscard = !!i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i673 = data
  i672.passId = i673[0]
  i672.subShaderIndex = i673[1]
  var i675 = i673[2]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.keywords = i674
  i672.vertexProgram = i673[3]
  i672.fragmentProgram = i673[4]
  i672.exportedForWebGl2 = !!i673[5]
  i672.readDepth = !!i673[6]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'shader')
  i678.pass = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i683 = data
  i682.name = i683[0]
  i682.type = i683[1]
  i682.value = new pc.Vec4( i683[2], i683[3], i683[4], i683[5] )
  i682.textureValue = i683[6]
  i682.shaderPropertyFlag = i683[7]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'texture')
  i684.aabb = i685[3]
  i684.vertices = i685[4]
  i684.triangles = i685[5]
  i684.textureRect = UnityEngine.Rect.MinMaxRect(i685[6], i685[7], i685[8], i685[9])
  i684.packedRect = UnityEngine.Rect.MinMaxRect(i685[10], i685[11], i685[12], i685[13])
  i684.border = new pc.Vec4( i685[14], i685[15], i685[16], i685[17] )
  i684.transparency = i685[18]
  i684.bounds = i685[19]
  i684.pixelsPerUnit = i685[20]
  i684.textureWidth = i685[21]
  i684.textureHeight = i685[22]
  i684.nativeSize = new pc.Vec2( i685[23], i685[24] )
  i684.pivot = new pc.Vec2( i685[25], i685[26] )
  i684.textureRectOffset = new pc.Vec2( i685[27], i685[28] )
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i687 = data
  i686.name = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i689 = data
  i688.name = i689[0]
  i688.ascent = i689[1]
  i688.originalLineHeight = i689[2]
  i688.fontSize = i689[3]
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i691[i + 0]) );
  }
  i688.characterInfo = i690
  request.r(i689[5], i689[6], 0, i688, 'texture')
  i688.originalFontSize = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i695 = data
  i694.index = i695[0]
  i694.advance = i695[1]
  i694.bearing = i695[2]
  i694.glyphWidth = i695[3]
  i694.glyphHeight = i695[4]
  i694.minX = i695[5]
  i694.maxX = i695[6]
  i694.minY = i695[7]
  i694.maxY = i695[8]
  i694.uvBottomLeftX = i695[9]
  i694.uvBottomLeftY = i695[10]
  i694.uvBottomRightX = i695[11]
  i694.uvBottomRightY = i695[12]
  i694.uvTopLeftX = i695[13]
  i694.uvTopLeftY = i695[14]
  i694.uvTopRightX = i695[15]
  i694.uvTopRightY = i695[16]
  return i694
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i696 = root || request.c( 'Bricks_PattemTableObj' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('PattemInfor', i699[i + 0]) );
  }
  i696.listPattemsInfor = i698
  var i701 = i697[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('LevelData', i701[i + 0]) );
  }
  i696.levelData = i700
  return i696
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i704 = root || request.c( 'PattemInfor' )
  var i705 = data
  i704.type = i705[0]
  var i707 = i705[1]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( !!i707[i + 0] );
  }
  i704.grid = i706
  return i704
}

Deserializers["LevelData"] = function (request, data, root) {
  var i712 = root || request.c( 'LevelData' )
  var i713 = data
  i712.level = i713[0]
  i712.Score = i713[1]
  i712.weight = i713[2]
  return i712
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i715 = data
  i714.useSafeMode = !!i715[0]
  i714.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i715[1], i714.safeModeOptions)
  i714.timeScale = i715[2]
  i714.unscaledTimeScale = i715[3]
  i714.useSmoothDeltaTime = !!i715[4]
  i714.maxSmoothUnscaledTime = i715[5]
  i714.rewindCallbackMode = i715[6]
  i714.showUnityEditorReport = !!i715[7]
  i714.logBehaviour = i715[8]
  i714.drawGizmos = !!i715[9]
  i714.defaultRecyclable = !!i715[10]
  i714.defaultAutoPlay = i715[11]
  i714.defaultUpdateType = i715[12]
  i714.defaultTimeScaleIndependent = !!i715[13]
  i714.defaultEaseType = i715[14]
  i714.defaultEaseOvershootOrAmplitude = i715[15]
  i714.defaultEasePeriod = i715[16]
  i714.defaultAutoKill = !!i715[17]
  i714.defaultLoopType = i715[18]
  i714.debugMode = !!i715[19]
  i714.debugStoreTargetId = !!i715[20]
  i714.showPreviewPanel = !!i715[21]
  i714.storeSettingsLocation = i715[22]
  i714.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i715[23], i714.modules)
  i714.createASMDEF = !!i715[24]
  i714.showPlayingTweens = !!i715[25]
  i714.showPausedTweens = !!i715[26]
  return i714
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i716 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i717 = data
  i716.logBehaviour = i717[0]
  i716.nestedTweenFailureBehaviour = i717[1]
  return i716
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i718 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i719 = data
  i718.showPanel = !!i719[0]
  i718.audioEnabled = !!i719[1]
  i718.physicsEnabled = !!i719[2]
  i718.physics2DEnabled = !!i719[3]
  i718.spriteEnabled = !!i719[4]
  i718.uiEnabled = !!i719[5]
  i718.textMeshProEnabled = !!i719[6]
  i718.tk2DEnabled = !!i719[7]
  i718.deAudioEnabled = !!i719[8]
  i718.deUnityExtendedEnabled = !!i719[9]
  i718.epoOutlineEnabled = !!i719[10]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i723[i + 0]) );
  }
  i720.files = i722
  i720.componentToPrefabIds = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i727 = data
  i726.path = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'unityObject')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i731[i + 0]) );
  }
  i728.scriptsExecutionOrder = i730
  var i733 = i729[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i733[i + 0]) );
  }
  i728.sortingLayers = i732
  var i735 = i729[2]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i735[i + 0]) );
  }
  i728.cullingLayers = i734
  i728.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i729[3], i728.timeSettings)
  i728.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i729[4], i728.physicsSettings)
  i728.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i729[5], i728.physics2DSettings)
  i728.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i729[6], i728.qualitySettings)
  i728.enableRealtimeShadows = !!i729[7]
  i728.enableAutoInstancing = !!i729[8]
  i728.enableStaticBatching = !!i729[9]
  i728.enableDynamicBatching = !!i729[10]
  i728.lightmapEncodingQuality = i729[11]
  i728.desiredColorSpace = i729[12]
  var i737 = i729[13]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i728.allTags = i736
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i745 = data
  i744.id = i745[0]
  i744.name = i745[1]
  i744.value = i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i749 = data
  i748.id = i749[0]
  i748.name = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i751 = data
  i750.fixedDeltaTime = i751[0]
  i750.maximumDeltaTime = i751[1]
  i750.timeScale = i751[2]
  i750.maximumParticleTimestep = i751[3]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i753 = data
  i752.gravity = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.defaultSolverIterations = i753[3]
  i752.bounceThreshold = i753[4]
  i752.autoSyncTransforms = !!i753[5]
  i752.autoSimulation = !!i753[6]
  var i755 = i753[7]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i755[i + 0]) );
  }
  i752.collisionMatrix = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.layerId = i759[1]
  i758.otherLayerId = i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'material')
  i760.gravity = new pc.Vec2( i761[2], i761[3] )
  i760.positionIterations = i761[4]
  i760.velocityIterations = i761[5]
  i760.velocityThreshold = i761[6]
  i760.maxLinearCorrection = i761[7]
  i760.maxAngularCorrection = i761[8]
  i760.maxTranslationSpeed = i761[9]
  i760.maxRotationSpeed = i761[10]
  i760.baumgarteScale = i761[11]
  i760.baumgarteTOIScale = i761[12]
  i760.timeToSleep = i761[13]
  i760.linearSleepTolerance = i761[14]
  i760.angularSleepTolerance = i761[15]
  i760.defaultContactOffset = i761[16]
  i760.autoSimulation = !!i761[17]
  i760.queriesHitTriggers = !!i761[18]
  i760.queriesStartInColliders = !!i761[19]
  i760.callbacksOnDisable = !!i761[20]
  i760.reuseCollisionCallbacks = !!i761[21]
  i760.autoSyncTransforms = !!i761[22]
  var i763 = i761[23]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i763[i + 0]) );
  }
  i760.collisionMatrix = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i767 = data
  i766.enabled = !!i767[0]
  i766.layerId = i767[1]
  i766.otherLayerId = i767[2]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i771[i + 0]) );
  }
  i768.qualityLevels = i770
  var i773 = i769[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i768.names = i772
  i768.shadows = i769[2]
  i768.anisotropicFiltering = i769[3]
  i768.antiAliasing = i769[4]
  i768.lodBias = i769[5]
  i768.shadowCascades = i769[6]
  i768.shadowDistance = i769[7]
  i768.shadowmaskMode = i769[8]
  i768.shadowProjection = i769[9]
  i768.shadowResolution = i769[10]
  i768.softParticles = !!i769[11]
  i768.softVegetation = !!i769[12]
  i768.activeColorSpace = i769[13]
  i768.desiredColorSpace = i769[14]
  i768.masterTextureLimit = i769[15]
  i768.maxQueuedFrames = i769[16]
  i768.particleRaycastBudget = i769[17]
  i768.pixelLightCount = i769[18]
  i768.realtimeReflectionProbes = !!i769[19]
  i768.shadowCascade2Split = i769[20]
  i768.shadowCascade4Split = new pc.Vec3( i769[21], i769[22], i769[23] )
  i768.streamingMipmapsActive = !!i769[24]
  i768.vSyncCount = i769[25]
  i768.asyncUploadBufferSize = i769[26]
  i768.asyncUploadTimeSlice = i769[27]
  i768.billboardsFaceCameraPosition = !!i769[28]
  i768.shadowNearPlaneOffset = i769[29]
  i768.streamingMipmapsMemoryBudget = i769[30]
  i768.maximumLODLevel = i769[31]
  i768.streamingMipmapsAddAllCameras = !!i769[32]
  i768.streamingMipmapsMaxLevelReduction = i769[33]
  i768.streamingMipmapsRenderersPerFrame = i769[34]
  i768.resolutionScalingFixedDPIFactor = i769[35]
  i768.streamingMipmapsMaxFileIORequests = i769[36]
  i768.currentQualityLevel = i769[37]
  return i768
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"27":[25],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[25],"11":[10],"83":[84],"85":[84],"34":[33],"86":[33],"87":[33],"37":[34],"39":[38,33],"88":[33],"36":[34],"89":[33],"90":[33],"91":[33],"92":[33],"93":[33],"94":[33],"95":[33],"96":[33],"97":[33],"98":[38,33],"99":[33],"100":[33],"101":[33],"102":[33],"103":[38,33],"104":[33],"105":[44],"106":[44],"45":[44],"107":[44],"108":[25],"109":[25],"110":[34],"111":[112],"113":[33],"114":[10,33],"115":[33,38],"116":[33],"117":[38,33],"118":[10],"119":[38,33],"120":[33],"121":[122],"123":[122],"124":[122]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","MainAudio","UnityEngine.AudioClip","Bricks_PattemTableObj","BB10_NextViewer","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","UnityEngine.UI.Button","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/13/2026 16:19:11";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37420";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1849";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4133";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, mecanim-wasm";

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

Deserializers.buildID = "b9834dcf-027d-4528-ac0c-90201aac8c2a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

