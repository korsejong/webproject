//example image script
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

//main function script
function runCode()
	{
		var content = document.getElementById('sourceCode').value;
		var iframe = document.getElementById('targetCode');
		iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
		iframe.document.open();
		iframe.document.write(content);
		iframe.document.close();
		return false;
	}

function refreshCode()
{
  var content = document.getElementById('sourceCode');
  var iframe = document.getElementById('targetCode');
  content.value = "<html>\n  <head>\n    <title>Hello</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n    <p>Write HTML, CSS or JavaScript code here and click 'Run Code'.</p>\n  </body>\n</html>"
  iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
  iframe.document.open();
  iframe.document.write('');
  iframe.document.close();
}

function saveTextAsFile() {
  var textToWrite = document.getElementById('sourceCode').value;
  var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  var fileNameToSaveAs = "code.html";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

var control = document.getElementById("inputfile");
     control.addEventListener("change", function(event){
         var reader = new FileReader();
         reader.onload = function(event){
             var contents = event.target.result;
               document.getElementById('sourceCode').value = contents;
         };
         reader.onerror = function(event){
             console.error("File could not be read! Code " + event.target.error.code);
         };
         console.log("Filename: " + control.files[0].name);
         reader.readAsText(control.files[0]);
     }, false);

var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
   textareas[i].onkeydown = function(e){
       if(e.keyCode==9 || e.which==9){
           e.preventDefault();
           var s = this.selectionStart;
           this.value = this.value.substring(0,this.selectionStart) + " " + this.value.substring(this.selectionEnd);
           this.selectionEnd = s+1;
       }
   }
}

//resizing divs
var divs = ["introduce","example","main","contact"];
for(var i=0 ; i<4; i++){
  var divId = document.getElementById(divs[i]);
  divId.style.height = screen.height - 55;
  divId.style.top = (screen.height-55)*i;
}
