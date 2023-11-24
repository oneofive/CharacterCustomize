window.onload = function init() {
  const canvas = document.getElementById('gl-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.width, canvas.height);

  const scene = new THREE.Scene();
  const backgroundTextureLoader = new THREE.TextureLoader();
  const backgroundImage = backgroundTextureLoader.load('image/가천대배경.png');
  scene.background = backgroundImage; // set background with gachon image

  const camera = new THREE.PerspectiveCamera(65, canvas.width / canvas.height, 0.1, 1000);
  //camera.position.set(500, 500, 500);
  camera.position.set(400, 400, 505);
  camera.position.setY(-30);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  const loader = new THREE.GLTFLoader();
  let shirtMesh; // 상의 메쉬

  const colorButton = document.createElement('button');
  colorButton.textContent = 'Select Color';
  document.body.appendChild(colorButton);

  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.style.display = 'none';
  document.body.appendChild(colorPicker);

  let currentModel = null; // 현재 로드할 모델 tracking
  let modelLoaded = false; // 현재 모델이 로드된 상태인지를 나타내는 flag 값

  const textureLoader = new THREE.TextureLoader();
  let userImageTexture;

  // 광원 추가
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  let bodyMesh;

  function defaultMoohan() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null;
      modelLoaded = false;
    }
    loader.load('./model/moohan_T_shirt_final.glb', function (gltf) {
      // 상의 메쉬 식별자 (Blender에서 설정한 이름과 동일해야 함)
      const shirtMeshName = 'customize';
      // const bodyMesh = 'body';

      gltf.scene.traverse(
        function (child) {
          if (child.isMesh && child.name === shirtMeshName) {
            shirtMesh = child;

            // Adjust the position of the loaded model
            //gltf.scene.rotation.set(0, (90 * Math.PI) / 180, 0);

            const newModel = gltf.scene;

            newModel.lookAt(new THREE.Vector3(25, 0, 30));
            scene.add(newModel); // Add the new model to the scenes

            gltf.scene.position.set(20, -260, 0);

            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag

            //scene.add(gltf.scene);
            //animate();
          }
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    });
  }

  // 버튼 클릭 시 다른 무한이 모델 업로드
  function loadHeartGlasses() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null;
      modelLoaded = false;
    }
    loader.load('./model/moohan_heart_glasses.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -210, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadProtectionGlasses() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_protection_glasses.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -210, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadCoat() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_lab_coat.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -210, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadSweater() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_sweater.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -210, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadJacket() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_Varsity_jacket.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -220, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadWizardHat() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_wizard_hat.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -200, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadXmasHat() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_xmas_hat.glb', function (gltf) {
      const newModel = gltf.scene;

      newModel.lookAt(new THREE.Vector3(25, 0, 30));

      scene.add(newModel); // Add the new model to the scene
      gltf.scene.position.set(20, -210, 0);

      currentModel = newModel; // Update the current model reference
      modelLoaded = true;
    });
  }

  function loadAnimation() {
    if (currentModel) {
      scene.remove(currentModel); // Remove the current model from the scene
      currentModel = null; // Clear the current model reference
      modelLoaded = false; // Reset the model loaded flag
    }
    loader.load('./model/moohan_animation.glb', function (gltf) {
      const newModel = gltf.scene;

      // 애니메이션 모델 크기가 작아 4배 늘림
      newModel.scale.set(4, 4, 4);

      // 모델이 로드되었는지와 애니메이션이 있는지 확인
      if (gltf.animations && gltf.animations.length > 0) {
        // AnimationMixer 생성
        const mixer = new THREE.AnimationMixer(newModel);

        // AnimationClip 추출 (첫 번째 애니메이션을 사용한다고 가정)
        const clip = gltf.animations[0];

        // AnimationAction 생성
        const action = mixer.clipAction(clip);

        // AnimationAction 재생
        action.play();

        // 모델이 특정 방향을 보도록 설정
        newModel.lookAt(new THREE.Vector3(25, 0, 30));

        // 새 모델을 장면에 추가
        scene.add(newModel);
        gltf.scene.position.set(20, -210, 0);

        // 현재 모델 참조 및 모델 로드 상태 업데이트
        currentModel = newModel;
        modelLoaded = true;

        // Animation 업데이트 함수 정의
        const animate = () => {
          requestAnimationFrame(animate);

          // AnimationMixer 업데이트
          mixer.update(0.01); // 시간 간격을 조절하여 애니메이션 속도 조절

          // 렌더링
          renderer.render(scene, camera);
        };

        // 애니메이션 시작
        animate();
      } else {
        console.error('No animations found in the loaded model.');
      }
    });
  }

  function handleModelLoadAndAnimate() {
    if (modelLoaded) {
      animate(); // Start the animation loop if a model is loaded
    } else {
      requestAnimationFrame(handleModelLoadAndAnimate); // Retry until model is loaded
    }
  }

  // Event listeners for the buttons
  document.getElementById('Home').addEventListener('click', function () {
    defaultMoohan();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button0').addEventListener('click', function () {
    loadHeartGlasses();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button1').addEventListener('click', function () {
    loadProtectionGlasses();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button2').addEventListener('click', function () {
    loadCoat();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button3').addEventListener('click', function () {
    loadSweater();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button4').addEventListener('click', function () {
    loadJacket();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button5').addEventListener('click', function () {
    loadWizardHat();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button6').addEventListener('click', function () {
    loadXmasHat();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });
  document.getElementById('Button7').addEventListener('click', function () {
    loadAnimation();
    handleModelLoadAndAnimate(); // Start the animation loop after loading
  });

  // Add color selection button event
  colorButton.addEventListener('click', function () {
    colorPicker.click();
  });

  // Apply selected color to the T-shirt material
  colorPicker.addEventListener('input', function (event) {
    const selectedColor = event.target.value;

    if (shirtMesh) {
      // Create a new material with the specified color
      const newMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(selectedColor) });

      // Replace the current material on the shirt mesh
      shirtMesh.material = newMaterial;
    }
  });

  // 이미지 업로드 이벤트 핸들러
  const fileInput = document.getElementById('image-upload-input');
  fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    userImageTexture = textureLoader.load(imageUrl);

    if (shirtMesh) {
      // 상의 메쉬에만 새로운 이미지 텍스처를 적용
      shirtMesh.material.map = userImageTexture;
      shirtMesh.material.needsUpdate = true;
    }
  });

  function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
};
