function canvas() 
{
var canvas = document.getElementById('canvasdiv');
var nex = canvas.getContext('2d');
nex.fillStyle='blue';
nex.fillRect(0,0,80,100);
//nex.globalAlpha='0.2';
}
function circle()
{
	var canvas1 = document.getElementById('canvasdiv');
	var nex1 = canvas1.getContext('2d');
	nex1.beginPath();
	nex1.arc(canvas1.width/3,canvas1.height/2,40,0*Math.PI,2*Math.PI,false);
	nex1.clearRect(0,0,canvas1.width,canvas1.height);
	nex1.save();
	nex1.arc(canvas1.width/2,canvas1.height/3,40,0*Math.PI,2*Math.PI,false);
	nex1.strokeStyle = "blue";
	nex1.stroke();
}