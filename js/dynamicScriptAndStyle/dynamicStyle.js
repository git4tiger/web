function loadStyle(url){
	var link=document.createElement("link");
	link.rel='stylesheet';;
	link.type='text/css';
	link.href=url;
	var head=document.getElementsByTagName("head")[0];
	head.appendChild(link);
}

function loadStyleString(css){
	var style=document.createElement("style");
	style.type='text/css';
	
	try
	{
		style.appendChild(document.createTextNode(css));
	}
	catch (ex)
	{
		script.styleSheet.cssText=css;
	}
	var head=document.getElementsByTagName("head")[0];
	head.appendChild(style);
}