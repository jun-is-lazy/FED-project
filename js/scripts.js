// SG random number generator 
function SGrandom() {
var x = document.getElementsByClassName("SG");
x[0].innerHTML = Math.random().toFixed(6) + " | ";
x[1].innerHTML = ((Math.random() * 1) + 1).toFixed(6);
}

// detect scroll position 
window.addEventListener("scroll", pageLocation);

function pageLocation() {
  var elmnt = document.documentElement;
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById("cool").innerHTML = "Where is me?" + "<br />Horizontally: " + x.toFixed(3) + "px<br />Vertically: " + y.toFixed(3) + "px"; //show page location
}


// initiate scroll animations 
window.onscroll = function() {hidepageNav(), highlight(), inverse(), reverse(), q2l1(), q2l2(), q3()};

// hide pageNav until user scrolls past header 
function hidepageNav() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("pageNav").className = "visible";
  } else {
    document.getElementById("pageNav").className = "hidden";
  }
}

/* show animations when scrolled to respectove positions */
function highlight() {
    if (document.body.scrollTop > 1040 || document.documentElement.scrollTop > 1040) {
      document.getElementById("abtMe").className = "highlight";
    } else {
        document.getElementById("abtMe").className = "hidden";
    }
}

function inverse() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
      document.getElementById("inverse").className = "inverse";
    } else {
        document.getElementById("inverse").className = "hidden";
    }
}

function reverse() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    document.getElementById("reverse").className = "reverse";
  } else {
      document.getElementById("reverse").className = "hidden";
  }
}

function q2l1() {
    if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
      document.getElementById("q2l1").className = "inverse";
    } else {
        document.getElementById("q2l1").className = "hidden";
    }
}

function q2l2() {
    if (document.body.scrollTop > 810 || document.documentElement.scrollTop > 810) {
      document.getElementById("q2l2").className = "inverse";
    } else {
        document.getElementById("q2l2").className = "hidden";
    }
}

function q3() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      document.getElementById("q3").className = "purple";
    } else {
        document.getElementById("q3").className = "hidden";
    }
}

// random quotes
var rquote = [
    `“Even if we know each other, understanding each other is another matter.”`,
    `“If all you’re good for is breathing in and out, then even an AC unit is more useful than you.”`,
    `“A lone warrior surviving hundreds of battles, when it comes to losing, I’m the strongest.”`,
    `“It doesn’t matter if we’re wrong…because every time we go wrong, we’ll continue to look for the right answer.”`,
    `“It is better to be hated for what you are, than to be loved for what you are not.”`,
    `“When you pick the only option you have to choose from, can you really call that your own decision?”`,
    `“I’m not highly aware. I’m highly self-aware.”`,
    `“There are people who ruin the atmosphere just by existing, you know.” `,
    `“So long as a problem doesn’t cause problems, it can’t be called a problem.”`,
    `“Who cares if we don't see the sun shine ever again? I want you more than any blue sky. The weather can go crazy.”`,
    `“Dear God, if you exist, please don't take anything more, and don't give anything more”`,
    `“...there are still more things that love can do...”`
]
function randomQuote() {
    document.getElementById("rquote").innerHTML = rquote[Math.floor(Math.random()*rquote.length)];
}

// preloader!! 
var x;

function preloader() {
  x = setTimeout(showPage, 3000);
}

function showPage() { //removes preloader
document.getElementById("preloader").style.display = "none";
}

function example() {
  var x = document.getElementsByClassName("example"); //if using "getElementsByClassName", it is needed to initiate all of them using a loop as there are multiple classes in a page
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
}

//lightbox 
function openModal1() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal2() {
  document.getElementById("aModal").style.display = "block";
}

function closeModal2() {
  document.getElementById("aModal").style.display = "none";
}

var slideIndexx = 1;
showSlides2(slideIndexx);

function plusSlidess(n1) {
  showSlides2(slideIndexx += n1);
}

function currentSlides(n1) {
  showSlides2(slideIndexx = n1);
}

function showSlides2(n1) {
  var i;
  var slides = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("demoo");
  var captionText = document.getElementById("captionn");
  if (n1 > slides.length) {slideIndex = 1}
  if (n1 < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndexx-1].style.display = "block";
  dots[slideIndexx-1].className += "active";
  captionText.innerHTML = dots[slideIndexx-1].alt;
}