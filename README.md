# Canvas painting

This painting project was built using the HTML5 Canvas API.
Canvas painting allows a user to draw coloured lines on a canvas, customize line width, customize line shapes and download the drawn lines as png images.

See in action https://nataliarusu.github.io/canvas-painting/
<hr>

## How to use

1. Click and hold the left mouse button to draw a line.
You can start to draw straight away as default line settings apply as follows:
   - Line colour = '#366edd'
   - Line width = 100
   - Line shape = round
   - Multicolour line = yes


2. You can customize a line by changing
   - Line colour can be changed by clicking the colour box
   - Line width possible values are: number other than 0 and negative
   - Line shape possible values are: round, bevel, miter
   - Multicolour line, if checked, the line will be drawn in multicolour starting from the selected colour using the entire 360 HSL wheel for the selected colour.
  
3. Click the upper right download image to download 
   
<hr>

## How to run
Download and install NodeJS from https://nodejs.org/en/.
The Node.js installer includes the NPM package manager.

From your terminal run

    git clone https://github.com/nataliarusu/canvas-painting.git

Go to the root of the project and run


      npm install

npm will install all project dependencies. These dependencies are defined in package.json. A new node_modules folder will be created and all dependencies needed for this project will be installed.



