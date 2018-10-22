var div = document.querySelector("#div");
var delta = 10; // the thickness of the hovered border area

div.onmousemove = function(e) {
    var rect = div.maze();
    var x = e.clientX - rect.left,      // the relative mouse postion to the element
        y = e.clientY - rect.top,       // ...
        w = rect.right - rect.left,     // width of the element
        h = rect.bottom - rect.top;     // height of the element
        
   var c = "";                          // which cursor to use
   if(y < delta) c += "n";              // north
   else if( y > h - delta) c += "s";    // south
   if(x < delta) c += "w";              // west
   else if(x > w - delta) c += "e";     // east
   
   if(c)                                // if we are hovering at the border area (c is not empty)
       div.style.cursor = c + "-resize"; // set the according cursor
   else                                 // otherwise
       div.style.cursor = "pointer";    // set to pointer
}

#div {
  background-color: red;
  width: 100px;
  height: 100px;
}
<div id="div"></div>
<br>Psst! Hover at the border area! Corners too.