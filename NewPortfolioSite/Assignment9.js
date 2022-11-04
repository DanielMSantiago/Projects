/*window.onload = function() {
    let img = new Image;
    img.src = "TankMan.jpg"   

    var canvas = document.getElementById("field");
    var ctx = canvas.getContext('2d');

    
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, 200, 200);
    
}*/
var timerInterval = 100;

var timer = window.setInterval(function() { tankTimer() }, 
                              timerInterval);  
$(document).ready(function(){
    $( ".fire" ).click(function() {
        $(".tank").toggle('explode', {pieces: 200}, 1000) ;
    });
})


function tankTimer()
{
  moveTank($('.tank'));
   
}

function moveTank(obj)
{
    var left = obj.offset().left;
    var top = obj.offset().top;
    var moveDuration = 10;
    $('#position').html('left:' + left  + ' top:' + top);
    
    if ((left <= 250)&&(top<=100))
    {
       obj.animate({ "left": "+=10px" }, moveDuration );
        return;
    }

    if ((left >= 250)&&(top<=250))
    {
       obj.animate({"left": "+=10px" ,"top": "+=10px"}, moveDuration );
        return;
    }
    if ((left >= 50)&&(top>=250))
    {
       obj.animate({ "left": "-=10px" }, moveDuration );
        return;
    }
    if ((left<=250)&&(top>=100))
    {
       obj.animate({"left":"+=10px" ,"top": "-=10px" }, moveDuration );
    
    }  
}