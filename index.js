const colourInput = document.querySelector('#color-input');
const lineWidthInput = document.querySelector('#line-width');
const canvas = document.querySelector('#draw');
const downloadEl = document.querySelector('.download');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasCTX = canvas.getContext('2d');
/**initialize first time*/
//give user to choose
canvasCTX.strokeStyle = '#d73c3c';
canvasCTX.lineWidth = 10;
canvasCTX.lineJoin = 'round';
canvasCTX.lineCap = 'round';
//give user to choose

const userMouse={
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    hue:0
}


const downloadHanler = ()=>{
    downloadEl.download = 'canvas.png';
    downloadEl.href = canvas.toDataURL();   
  }

const changeColorHanler = (e)=>{
    canvasCTX.strokeStyle = e.target.value;
}
const changeLineWidthHanler=(e)=>{
    canvasCTX.lineWidth = Number(e.target.value);
}

const drawHandler = (e)=>{
    if(!userMouse.isDrawing) return;
    //canvasCTX.strokeStyle=`hsl(${userMouse.hue} 100% 50%)`;//colourful
    //we will see the effect only when we call ctx.stroke()
    canvasCTX.beginPath();
    canvasCTX.moveTo(userMouse.lastX, userMouse.lastY);//start
    canvasCTX.lineTo(e.offsetX, e.offsetY);//stop
    canvasCTX.stroke();
    userMouse.lastX = e.offsetX;
    userMouse.lastY = e.offsetY;
    /*userMouse.hue++;
    if(userMouse.hue>=360){
        userMouse.hue=0;
    }*/
}


colourInput.addEventListener('input', changeColorHanler);
lineWidthInput.addEventListener('input', changeLineWidthHanler);
canvas.addEventListener('mousedown', (e)=>{
    userMouse.isDrawing = true;
    userMouse.lastX = e.offsetX;
    userMouse.lastY = e.offsetY;
} );
canvas.addEventListener('mousemove', drawHandler);//MouseEvent {isTrusted: true, screenX: 613, screenY: 804, clientX: 613, clientY: 701, …}

canvas.addEventListener('mouseup', ()=> userMouse.isDrawing=false);
canvas.addEventListener('mouseleave', ()=> userMouse.isDrawing=false);




downloadEl.addEventListener('click', downloadHanler);