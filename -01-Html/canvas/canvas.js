/*
  -- [BASICS HTML]
  * Canvas like image but without src + alt And with closing tag
  * Canvas can be styled with CSS
  * Canvas default dimensions is (w: 300,h: 150)
  * Canvas default background is transparent
*/

/*
  -- [BASICS JS]
  * you can select the canvas element
  * you get a drawing area using the context 
  * choose the color of drawing using the filStyle @[color OR gradient OR pattern]
  * the default fillStyle is black
  * you can draw in the context using the fillRect @[x, y, w, h]
  * the origin [0, 0] is the top left point with x to the right and y to bottom 
  * you can access the width and height of the canvas using js
*/

let c = document.querySelector("#canvas");
let ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, c.width, c.height);

/*
  -- [Gradients]
  * you can make a gradient variable and use it with fillStyle
    @[x0, y0, x1, y1]
  * you can addColorStop to your gradient
*/

let theGradient = ctx.createLinearGradient(0, 0, 0, 0);
theGradient.addColorStop(0, "red");
theGradient.addColorStop(1, "blue");

ctx.fillStyle = theGradient;
ctx.fillRect();

/*
    -- [patterns]
  * you can use pattern by insert img in the html
  * draw it in the js using the createPattern @[image, (repeat OR no-repeat OR repeat-x)]
*/
let theImage = document.querySelector("#my-image");
let thePattern = ctx.createPatter(theImage, "repeat");

ctx.fillStyle = thePattern;
ctx.fillRect();

/*
  -- [Stroke]
  *  you can draw border rec using the strokeRect, strokeStyle methods
  *  you can control border width using the lineWidth property
  *  you can use gradient or patterns in the stokeStyle
*/

ctx.strokeStyle = "red";
ctx.strokeStyle = theGradient;
ctx.lineWeight = 3;
ctx.strokeRect(20, 20, 100, 100);

/*
  -- [fonts]
  [1] set the font
  [2] adjust the fill style
  [3] create filled text @[string, x, y]
  [4] you can replace the fill with a stroke
*/

ctx.font = "22px Arial";
ctx.fillStyle = "red";
ctx.fillText();

ctx.strokeStyle = "red";
ctx.strokeText();

/*
  -- [Paths]
  start a path using the beginPath
  select the path start position using the moveTo() @[x, y]
  select the path points using lineTo() [x, y]
  draw the path using strike();
  you can:
    adjust the color using strokeStyle
    adjust the lineWidth using lineWeight
    have multiple end points with lineTo()
    you can autoclose the path using closePath()
    you can customize the fill color of the shape using fillStyle and fill
*/

ctx.beginPath();

ctx.moveTo(50, 50);

ctx.lineTo(50, 150);
ctx.lineTo(150, 150);

ctx.closePath();

ctx.strokeStyle = "red";
ctx.lineWeight = 5;
ctx.stroke();

ctx.fillStyle = "green";
ctx.fillStyle();

/*
  -- [Arcs and circle]
  360 deg = 1 circle
  2 radian = 1 circle
  1 radian = Math.PI

  define the center using the arc @[x, y, radius, start angle, end angle, counter clock wise]
    0 start angle is like the hour 3 
    it turn clockwise (false) by default
*/

ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);

/*
  -- [shadows]
  - shadowColor 
  - shadowBlur
  - shadowOffsetX
  - shadowOffsetY
  

*/

ctx.shadowColor = "red";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = "20";
ctx.shadowOffsetY = "-20";
ctx.fillStyle = "green";
ctx.fillRect(50, 50 , 200, 100)

/*
  -- [transform]
  ctx.scale(percent) --> (scale x and y also) 
  ctx.translate(x,y) --> (start from the current position)
*/
ctx.scale(2);
ctx.translate(100, 100);

/*
  -- [save]
  you can save the state of the context using ctx.save()
  you can restore the saved version using the ctx.restore()
*/

ctx.save();
ctx.restore();

/*
  -- text align
  start --> start from the entered position
  end --> end at the entered position
*/

ctx.textAlign = "start"
ctx.textAlign = "center"
ctx.textAlign = "end"
ctx.textAlign = "left"
ctx.textAlign = "right"