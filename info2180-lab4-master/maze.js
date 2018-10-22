var border = document.getElementById("maze");

var bor = 1;

border.mouseover = function(e) {
  if (e.target !== e.currentTarget) return;
  console.log("You Lose")
}

border.onmouseover = function(e) {
  y = e.offsetY;
  
  if (y <= bor || y >= this.offsetHeight - bor) c = "row"
  else c = "col"

  this.style.cursor = c + "-resize";
}