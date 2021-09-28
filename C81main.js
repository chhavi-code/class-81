canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mouseDown",MyMouseDown);


function MyMouseDown(e)
{
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
 
   console.log("x=,"+mousex + ", y=" + mousey)

   circle(mousex,mousey);
}

function circle(mousex,mousey)
{

    ctx.beginPath();
ctx.strokesStyle=color
ctx.lineWidth=5
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}
