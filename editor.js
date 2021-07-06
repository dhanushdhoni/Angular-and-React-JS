function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var Ascr = "<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js'></script>";
	var Rscr = '<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script><script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script><script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>';
	
	var newIframe = document.createElement('iframe');
	newIframe.setAttribute('id','iframe');
	newIframe.setAttribute('class','panel');
	newIframe.width = '200';newIframe.height = '200';
	newIframe.src = 'about:blank'; 
	document.body.appendChild(newIframe);
	
	newIframe.contentWindow.document.open('text/html', 'replace');
	newIframe.contentWindow.document.write(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>"+);
	newIframe.contentWindow.document.close();
    }
function remove(){
 var frame = document.getElementById("iframe");
 frame.parentNode.removeChild(frame);
 remove();
}

$(document).ready(function(){

  // Publish output from HTMl, CSS, and JS textareas in the iframe below

  // Pressing the Tab key inserts 2 spaces instead of shifting focus
  $("textarea").keydown(function(event){
    if(event.keyCode === 9){
      var start = this.selectionStart;
      var end = this.selectionEnd;
      var $this = $(this);
      var value = $this.val();
      $this.val(value.substring(0, start)+"  "+value.substring(end));
      this.selectionStart = this.selectionEnd = start+1;
      event.preventDefault();
    }
  });

  // Store contents of textarea in sessionStorage
  $("textarea").keydown(function(){
      sessionStorage[$(this).attr("id")] = $(this).val();
  });
  $("#html").html(sessionStorage["html"]);
  $("#css").html(sessionStorage["css"]);
  $("#js").html(sessionStorage["js"]);
  function init() {
    if (sessionStorage["html"]) {
        $("#html").val(sessionStorage["html"]);
      }
    if (sessionStorage["css"]) {
        $("#css").val(sessionStorage["css"]);
      }  
    if (sessionStorage["js"]) {
        $("#js").val(sessionStorage["js"]);
      }
  };

  // Clear textareas with button
  $(".clearLink").click(clearAll);

  function clearAll(){
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
    sessionStorage.clear();
  }

});

$(document).ready(function(){
  $('#hideshow').on('click', function(event) {        
     $('.content').toggle('show');
  });
});



