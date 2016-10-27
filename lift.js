function add(a,a1)
{
var a,a1,num;
num=a+a1;
document.write("a+a1=");
document.write(num);
//alert("finished!");
}
window.onload=function(){
	var mycanvas=document.getElementById('canvas1');
	var context=mycanvas.getContext('2d');
	gradient=context.createRadialGradient(mycanvas.width/2,mycanvas.height,10,mycanvas.width/2,0,100);
	
	gradient.addColorStop(0,	'blue');
	gradient.addColorStop(0.25,	'white');
	gradient.addColorStop(0.5,	'purple');
	gradient.addColorStop(0.75,	'red');
	gradient.addColorStop(1,	'black');
	context.fillStyle=gradient;
	context.rect(0,0,mycanvas.width,mycanvas.height);
	context.fill();
}
