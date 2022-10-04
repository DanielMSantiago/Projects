var t = 1;
var c = document.getElementById("myCanvas");
var R = 100;
var r = 50;

var ctx = c.getContext("2d");


function doDrawing() {
    t = 0;
    // Clear the Canvas
    ctx.clear();
    
    // Create a random color
    var timesRun = 0;
    var color =  '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // Initial x and y
    var x = R+R*Math.cos(0);
    var y = R+R*Math.sin(0);

    // Start the Drawing
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x,y);
      
    //Use the timer to create drawing
    var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 200){
        clearInterval(interval); }
        
    //drawCircle();
    drawSpiro();}
    , 10); 
    
}

let drawSpiro = () => {
    //let r = Math.floor(Math.random() * Math.PI);
    let O = 5 //Math.floor(Math.random());
    for(i = 1; i < 2; i++){
        t += i;
        let x = (c.width/2) + (R+r)*Math.cos(t) - (r+O)*Math.cos(((R+r)/r)*t);
        let y = (c.height/2) + (R+r)*Math.sin(t) - (r+O)*Math.sin(((R+r)/r)*t);
        ctx.lineTo(x,y);
        ctx.stroke();    
    }  
}

CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};

