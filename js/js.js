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
/*左滑动栏*/
$(document).ready
(

function()
{	
	var ans=2;
	$(".lettoggle").click
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

				$(".homelist").css("visibility","visible");
			}
			
		);

		$(".index").mouseout
		(
			function()
			{
				
				$(".homelist").css("visibility","hidden");
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

				$(".aboutlist").css("visibility","visible");
			}
			
		);
		$(".about").mouseout
		(
			function()
			{

				$(".aboutlist").css("visibility","hidden");
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

				$(".hrlist").css("visibility","visible");
			}
			
		);
		$(".hr").mouseout
		(
			function()
			{

				$(".hrlist").css("visibility","hidden");
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

				$(".maplist").css("visibility","visible");
			}
			
		);
		$(".map").mouseout
		(	
			function()
			{	
				$(".maplist").css("visibility","hidden");
			}
		
		);

	}
);
$(document).ready
(	
	function()
	{	var bot=1;
		$(".nbutton").click
		(	
			function()
			{
				bot+=1;
				if(bot==7)
					bot=1;
				$(".img").attr("src","src/pic/"+bot+".jpg");
				

			}
		);

		$(".bbutton").click
		(	
			function()
			{
				bot-=1;
				if(bot==0)
					bot=6;
				$(".img").attr("src","src/pic/"+bot+".jpg");
				
				
			}
		);
		$(document).ready
		(
			function(){
						$(".img").delay(300).attr("src","src/pic/"+bot+".jpg");
						bot+=1;
						}
		);
		
	}

);

/*

*/

