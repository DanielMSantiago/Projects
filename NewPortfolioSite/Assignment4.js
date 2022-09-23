

//Global variables for entries
var radius = 0;
var n = 0;
var p = new Array();
var y = new Array();
var v = new Array();
var Volume = new Array();
var Height = new Array();


//Function to store formula for volume of cone
let calculateVC = (radius, height) => {
	return Math.floor(((Math.PI * radius * radius * height) / 3));
}

/*Calculate the volume of a cone where their is a height min and max. Used */
let calculate = () => {
    radius = Number($('#radius').val());
    var heightMin = Number($('#heightMin').val());
    var heightMax = Number($('#heightMax').val());
  
    var hm = 0;
 	var i = 0;
  
    for(hm = heightMin; hm <= heightMax; hm++){
  	    Height[i] = hm;
        y[i] = calculateVC(radius, hm);
        Volume[i] = [y[i]];
        v[i] = [hm, y[i]];
        i++;
    }
    n = i-1;
}

let displayVals = () => {
    var s = "";
    s = "V = (" + Math.PI + ")" +  radius + "<sup>2</sup>" + "h/3s" +"<br>"; 
    
    for(var i = 0; i<=n; i++){
    	s += "Volume = " + Volume[i] + ", Height = " + Height[i] + "<br>" ;  		
    }
  
    output.innerHTML = s;
};

let plotPoints = () => {
	
        calculate();
        chart = new Highcharts.Chart({
                 chart: {
                     renderTo: 'container',
                     type: 'line',
                     marginRight: 120,
                     marginBottom: 25
                 },
                 title: {
                     text: 'Volume of a Cone',
                     x: -20 //center
                 },
                 xAxis: {
                     title: {
                         text: 'Volume'
                     }
                 },
                 yAxis: {
                     title: {
                         text: 'Height'
                     }   
                 }, 
            
            plotOptions: {
                     scatter: {
                         marker: {
                             radius: 6,
                             states: {
                                 hover: {
                                     enabled: true,
                                     lineColor: 'rgb(100,100,100)'
                                 }
                             }
                         },
                         states: {
                             hover: {
                                 marker: {
                                     enabled: false
                                 }
                             }
                         }
                     }
                 },
            
            series: [{
                     name: 'Volume',
                     color: 'rgba(223, 83, 83, .5)',
                     data: v
            }]                
        })      
     }

$('#calculate').click(function() {
	calculate();
    displayVals();
});

$('#plot').click(function() {
	calculate();
  plotPoints();
  
  
});
