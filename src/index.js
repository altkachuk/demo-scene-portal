let inPortal = false;
let scene = null;

// get progress of assets loading; from 0 to 1
const onSceneLoading = (progress) => {
  const str = (progress * 100).toFixed(1) + '%';
  const preloader = document.getElementById("preloader");
  preloader.textContent = str;
};


// fires when scene is completely loaded
const onSceneLoaded = () => {
  const preloader = document.getElementById("preloader");
  preloader.textContent = "LOADED";
};

// get rototranslation matrix in every frame
const onProcess = (roto) => {
  const debugPosition = document.getElementById('debugPosition');
  debugPosition.textContent =
    'x: ' + roto[3].toString().substring(0, 5) + '; ' +
    'y: ' + roto[7].toString().substring(0, 5) + ', ' +
    'z: ' + roto[11].toString().substring(0, 5);
};

// fires when user is entering to the portal
const onEnterPortal = () => {
  inPortal = true;
  const debugPortal = document.getElementById('debugPortal');
  debugPortal.textContent = "Inside Portal";
};

// fires when user is exiting from the portal
const onExitPortal = () => {
  inPortal = false;
  const debugPortal = document.getElementById('debugPortal');
  debugPortal.textContent = "Outside Portal";
};

const onLoad = () => {
  scene = document.getElementById("vidometryScene");
  scene.onLoading = onSceneLoading;
  scene.onLoaded = onSceneLoaded;


  const vidometryVidometer = document.getElementById("vidometryVidometer");
  vidometryVidometer.onProcess = onProcess;


  // const vidometryViewer = document.getElementById("vidometryViewer");
  // vidometryViewer.onProcess = onProcess;


  const vidometryPortal = document.getElementById("vidometryPortal");
  vidometryPortal.onEnterPortal = onEnterPortal;
  vidometryPortal.onExitPortal = onExitPortal;
};

document.body.onload = onLoad;