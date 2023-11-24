window.onload = function init() {
    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xE6E6FA);

    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.set(500, 500, 500);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    const loader = new THREE.GLTFLoader();
    let shirtMesh; // 상의 메쉬

    let currentModel = null; // 현재 로드할 모델 tracking
    let modelLoaded = false;  // 현재 모델이 로드된 상태인지를 나타내는 flag 값

    // loader.load('./model/moohan_T_shirt2.glb', function (gltf) {
    //     // 상의 메쉬 식별자 (Blender에서 설정한 이름과 동일해야 함)
    //     const shirtMeshName = 'customize';

    //     gltf.scene.traverse(function (child) {
    //         if (child.isMesh && child.name === shirtMeshName) {
    //             shirtMesh = child;

    //             const newModel = gltf.scene;
    //             scene.add(newModel); // Add the new model to the scene
    //             currentModel = newModel; // Update the current model reference

    //             // 광원 추가
    //             const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    //             scene.add(ambientLight);

    //             scene.add(gltf.scene);
    //             animate();
    //         }
    //     }, undefined, function (error) {
    //         console.error(error);
    //     });
    // });

    const textureLoader = new THREE.TextureLoader();
    let userImageTexture;

    // 광원 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    let bodyMesh;


    function defaultMoohan(){
        if (currentModel) {
            scene.remove(currentModel); // Remove the current model from the scene
            currentModel = null;
            modelLoaded = false;
        }
        loader.load('./model/moohan_fisrt_tshirt_two.glb', function (gltf) {
            // 상의 메쉬 식별자 (Blender에서 설정한 이름과 동일해야 함)
            const shirtMeshName = 'customize';
            // const bodyMesh = 'body';
    
            gltf.scene.traverse(function (child) {
                if (child.isMesh && child.name === shirtMeshName) {
                    shirtMesh = child;
    
                    const newModel = gltf.scene;
                    scene.add(newModel); // Add the new model to the scene
                    currentModel = newModel; // Update the current model reference
                    modelLoaded = true; // Set the model loaded flag
    

    
                    //scene.add(gltf.scene);
                    //animate();
                }

            }, undefined, function (error) {
                console.error(error);
            });
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
            scene.add(newModel); // Add the new model to the scene
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
            scene.add(newModel); // Add the new model to the scene
            currentModel = newModel; // Update the current model reference
            modelLoaded = true; // Set the model loaded flag
            
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
    document.getElementById('Home').addEventListener('click', function() {
        defaultMoohan();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button0').addEventListener('click', function() {
        loadHeartGlasses();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button1').addEventListener('click', function() {
        loadProtectionGlasses();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button2').addEventListener('click', function() {
        loadCoat();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button3').addEventListener('click', function() {
        loadSweater();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button4').addEventListener('click', function() {
        loadJacket();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button5').addEventListener('click', function() {
        loadWizardHat();
        handleModelLoadAndAnimate(); // Start the animation loop after loading
    });
    document.getElementById('Button6').addEventListener('click', function() {
        loadXmasHat();
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
}


