function playvid () {
	// body...
	myvideo.play();
}
//video pause
function pausevid () {
	// body...
	myvideo.pause();
}
/**/
/*获取焦点*/
function onfocusf (x)
{
	document.getElementById(x).style.background="pink";

}
/*失去焦点*/
function onblurf (x)
{

	document.getElementById(x).style.background="white";
}
/*radiovaluecheck-functionname radiocheck-div Id "1"-checked */
function radiovaluecheck(x)  
{
	var radiocheckobj=$(radio).checked();
	if("1"==radiocheckobj)
	{
		$(radiocheck).attr("checked",false);
		$(radiocheck).checked("0");
	}
	else
	{
		$(radiocheck).checked("1");
	}
}