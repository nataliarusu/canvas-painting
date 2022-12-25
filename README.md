
### canvas width and height

default canvas size 300 x 150

in html

    <canvas id="one" width="200" height="300"></canvas>

in js

    const canvasOne = document.querySelector('#one');
    canvasOne.width = 400; //note, without px, not a string value
    canvasOne.height = 400;


### canvas context and basics
1. const canvasOne = document.querySelector('#one'); we have referense to HTML element
2. HTMLCanvasElement.getContext() method gets that element's context—the thing onto which the drawing will be rendered. In this case we will draw on 2d (CanvasRenderingContext2D). The HTMLCanvasElement.getContext() method returns a drawing context object on the canvas, or null if the context identifier is not supported.
    
        const canvasOneCTX = canvasOne.getContext('2d');

3. The actual drawing is done using the CanvasRenderingContext2D interface

  
        canvasOneCTX.fillStyle = "rgb(255,227, 196)";
        canvasOneCTX.fillRect(30, 20, 140, 160);//140px*160px


   - x =>x upper-left corner of the rectangle	(from left to right) //30
   - y=>	y upper-left corner of the rectangle	(from top to bottom) //20
   - width => width of the rectangle, in pixels //140	
   - height	The height of the rectangle, in pixels //160


