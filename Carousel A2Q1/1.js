   
var pageIndex = 1;
show(pageIndex);

function plus(n) {
  show(pageIndex += n);
}

function current(n) {
  show(pageIndex = n);
}

function show(n) {   
    document.getElementById("nxt").style.display="block";
    document.getElementById("prv").style.display="block"; 
  var i;
  var slides = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {pageIndex = 1}    
  if (n < 1) {pageIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[pageIndex-1].style.display = "block";  
  dots[pageIndex-1].className += " active";
  if(pageIndex==3)document.getElementById("nxt").style.display="none";
  if(pageIndex==1)document.getElementById("prv").style.display="none";

}
