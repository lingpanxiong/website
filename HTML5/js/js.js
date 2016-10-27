$(document).ready
(

function()
{
	$(".hide").click
	(
		function()
		{
			$(".bimage").hide();
		}
	);

}

);

$(document).ready
(

function()
{
	$(".show").click
	(
		function()
		{
			$(".bimage").show();
		}
	);

});

$(document).ready
(

function()
{
	$(".slidedown").click
	(
		function()
		{
			$(".bimage").slideDown('slow');
		}
	);

});

$(document).ready
(

function()
{
	$(".slideup").click
	(
		function()
		{
			$(".bimage").slideUp('slow');
		}
	);

});

$(document).ready
(

function()
{	
	var ans=2;
	$(".ltoggle").click
	(
		function()
		{
			if (ans%2==0) 
				{
					$(this).parent().animate({width:'5%'},"fast");
					ans+=1;
					$(this).prev().hide();

				}
			else
				{
					$(this).parent().animate({width:'20%'},"fast");
					ans+=1;
					$(this).prev().show();
				}
			

		}
	);

});

$(document).ready
(
	function()
	{

		var canvas=document.getElementById('divjs').children[0],
			context=canvas.getContext('2d');
			gradient=context.createLinearGradient(0,0,canvas.width,0);

		gradient.addColorStop(0,'blue');
		gradient.addColorStop(0.25,'white');
		gradient.addColorStop(0.5,'purple');
		gradient.addColorStop(0.75,'red');
		gradient.addColorStop(1,'yellow');

		context.lineJoin='round';
		context.lineWidth=5;

		context.strokeStyle;'goldenrod';
		context.fillStyle='white';
		context.rect(0,0,canvas.width,canvas.height);

		context.strokeRect(50,50,100,100);
		context.fillRect(49,49,99,99);

	}

);

$(document).ready
(
function()
{

	var indexcanvas=document.getElementById('index').children[0];
	contextc=indexcanvas.getContext('2d');
	contextc.moveTo(200,200);

	contextc.beginPath();
	contextc.arc(indexcanvas.width/2,indexcanvas.height/2,100,Math.PI*0,Math.PI*2,false);

	contextc.stroke();
	contextc.beginPath();
	contextc.arc(indexcanvas.width/2+50,indexcanvas.height/2+50,100,Math.PI*0,Math.PI*2,false);
	
	contextc.stroke();

}

)
