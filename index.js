const colourInput = document.querySelector('#colour-input');
const lineWidthInput = document.querySelector('#line-width');
const lineShapeInput = document.querySelector('#line-shape');
const checkboxInput = document.querySelector('#checkbox');
const canvas = document.querySelector('#draw');
const downloadEl = document.querySelector('.download');
const DEFAULT_LINE_COLOUR = '#366edd';

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 88;
const canvasCTX = canvas.getContext('2d');

const userSettings = {
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  multicolour: false,
  currentH: hexToHSL(colourInput.value),
  hue: 0,
};

const downloadHanler = () => {
  downloadEl.download = 'canvas.png';
  downloadEl.href = canvas.toDataURL();
};

const changeColorHanler = (e) => {
  canvasCTX.strokeStyle = e.target.value;
  userSettings.currentH = hexToHSL(e.target.value);
  userSettings.hue = userSettings.currentH[0];
};

const changeLineWidthHanler = (e) => {
  canvasCTX.lineWidth = Number(e.target.value);
};

const lineShapeHandler = (e) => {
  switch (e.target.value) {
    case 'round':
      canvasCTX.lineJoin = 'round';
      canvasCTX.lineCap = 'round';
      break;
    case 'bevel':
      canvasCTX.lineJoin = 'bevel';
      canvasCTX.lineCap = 'square';
      break;
    case 'miter': //as default goes miter and butt
      canvasCTX.lineJoin = 'miter';
      canvasCTX.lineCap = 'butt';
      break;
  }

  canvasCTX.lineJoin = e.target.value;
  canvasCTX.lineCap = e.target.value;
};
const drawHandler = (e) => {
  if (!userSettings.isDrawing) return;
  if (userSettings.multicolour) {
    canvasCTX.strokeStyle = `hsl(${userSettings.hue} ${userSettings.currentH[1]}% ${userSettings.currentH[2]}%)`; //colourful
  } else {
    canvasCTX.strokeStyle = colourInput.value;
  }
  //we will see the effect only when we call ctx.stroke()
  canvasCTX.beginPath();
  canvasCTX.moveTo(userSettings.lastX, userSettings.lastY); //start
  canvasCTX.lineTo(e.offsetX, e.offsetY); //stop
  canvasCTX.stroke();
  userSettings.lastX = e.offsetX;
  userSettings.lastY = e.offsetY;
  userSettings.hue++;
  if (userSettings.hue >= 360) {
    userSettings.hue = 0;
  }
};

const setDefaultSettings = () => {
  colourInput.value = DEFAULT_LINE_COLOUR;
  lineWidthInput.value = 100;
  checkboxInput.checked=true;
  userSettings.multicolour=checkboxInput.checked;
  userSettings.currentH=hexToHSL(colourInput.value);
  userSettings.hue = userSettings.currentH[0];
  canvasCTX.strokeStyle = colourInput.value;
  canvasCTX.lineWidth = Number(lineWidthInput.value);
  canvasCTX.lineJoin = 'round';
  canvasCTX.lineCap = 'round';
};

setDefaultSettings();

colourInput.addEventListener('input', changeColorHanler);
lineWidthInput.addEventListener('input', changeLineWidthHanler);
lineShapeInput.addEventListener('change', lineShapeHandler);
downloadEl.addEventListener('click', downloadHanler);
checkboxInput.addEventListener('change', () => {
  userSettings.multicolour = checkboxInput.checked;
});
canvas.addEventListener('mousedown', (e) => {
  userSettings.isDrawing = true;
  userSettings.lastX = e.offsetX;
  userSettings.lastY = e.offsetY;
});
canvas.addEventListener('mousemove', drawHandler); //MouseEvent {isTrusted: true, screenX: 613, screenY: 804, clientX: 613, clientY: 701, …}

canvas.addEventListener('mouseup', () => {
  userSettings.isDrawing = false;
  userSettings.hue = userSettings.currentH[0];
});
canvas.addEventListener('mouseleave', () => {
  userSettings.isDrawing = false;
  userSettings.hue = userSettings.currentH[0];
});
