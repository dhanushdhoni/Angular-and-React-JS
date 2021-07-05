function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;
	let myCoolCode = document.createElement("script");
    myCoolCode.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js");
    document.body.appendChild(myCoolCode);
	
	 document.body.onclick = function(){
	    	code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
      };
    };

compile();
