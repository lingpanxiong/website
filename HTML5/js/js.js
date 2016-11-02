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

		context.lineJoin='round';
		context.lineWidth=3;

		context.strokeStyle;'goldenrod';
		context.strokeRect(50,50,100,100);
		context.strokeRect(75,75,100,100);
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
	contextc.arc(indexcanvas.width/2,indexcanvas.height/2,60,Math.PI*0,Math.PI*2,false);

	contextc.stroke();
	contextc.beginPath();
	contextc.arc(indexcanvas.width/2+50,indexcanvas.height/2+50,60,Math.PI*0,Math.PI*2,false);
	contextc.stroke();

}
)

$(document).ready
(
	function()
	{
		$(".index").mouseover
		(
			function()
			{

				$(".index").css("height":"150%","background-color":"purple");
			}
			
		);

		$(".index").mouseout
		(
			function()
			{
				
				$(".index").css("height","20%");
			}
			
		);

	}
);

$(document).ready
(
	function()
	{
		$(".about").mouseover
		(
			function()
			{

				$(".about").css("height","150%");
			}
			
		);
		$(".about").mouseout
		(
			function()
			{

				$(".about").css("height","20%");
			}
			
		);

	}
);

$(document).ready
(
	function()
	{
		$(".hr").mouseover
		(
			function()
			{

				$(".hr").css("height","150%");
			}
			
		);
		$(".hr").mouseout
		(
			function()
			{

				$(".hr").css("height","20%");
			}
			
		);

	}
);

$(document).ready
(
	function()
	{
		$(".map").mouseover
		(
			function()
			{

				$(".map").css("height","150%");
			}
			
		);
		$(".map").mouseout
		(	
			function()
			{	
				$(".map").css("height","20%");
			}
		
		);

	}
);


