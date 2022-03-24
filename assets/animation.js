var renderer, scene, camera, mesh, image;
var currentImage = 0;
var textures = [
  "assets/images/textures/1.png",
  "assets/images/textures/2.png",
  "assets/images/textures/3.png",
  "assets/images/textures/4.png",
  "assets/images/textures/5.png",
  "assets/images/textures/6.png",
  "assets/images/textures/7.png",
  "assets/images/textures/8.png",
];

function initaite() {
  var canvas = document.getElementById("animation");
  var width = $("#animation").width();
  var height = $("#animation").height();
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(width, height);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 150);
  // setting texture
  image = new Image();
  image.src = textures[0];
  texture = new THREE.Texture();
  image.onload = function () {
    texture.needsUpdate = true;
  };
  image.onchange = function () {
    texture.needsUpdate = true;
  };
  texture.image = image;
  var geometry = new THREE.BoxGeometry(10, 10, 10);
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.99,
    side: THREE.DoubleSide,
    alphaTest: 0.1,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // create lights
  var light = new THREE.PointLight(0xffffff, 5, 40);
  light.position.set(20, 20, 20);
  scene.add(light);
  // set the camera
  camera.position.z = 5;
  animation();
  canvas.addEventListener("mousemove", move);
  canvas.addEventListener("click", changeTexture);
}

function changeTexture() {
  image.src = textures[currentImage];
  texture = new THREE.Texture();
  texture.image = image;
  mesh.material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.99,
    side: THREE.DoubleSide,
    alphaTest: 0.1,
  });
  if (currentImage < textures.length - 1) {
    currentImage++;
  } else {
    currentImage = 0;
  }
}

// move on mouse move
function move(e) {
  mesh.rotation.x = e.pageY * 0.005;
  mesh.rotation.y = -e.pageX * 0.005;
  renderer.render(scene, camera);
}

function animation() {
  requestAnimationFrame(animation);
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  renderer.render(scene, camera);
}

window.onload = function () {
  document.getElementById("preloader").style.display = "none";
  initaite();
};
