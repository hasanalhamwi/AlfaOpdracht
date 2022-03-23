var counter=1;
        var counter1=1;
        var counter2=1;
        var counter3=1;
        var counter4=1;
        var counter5=1;
     
        var slideIndex = 1;

   showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plus(w) {
  show(counter += w);
} 
 function moretext(a) {
  more1(counter1 += a);
}
 function moretext2(b) {
  more2(counter2 += b);
} 
function moretext3(c) {
  more3(counter3 += c);
}
function moretext4(e) {
  more4(counter4 += e);
} 
function agenda(f) {
  another(counter5 += f);
}         
        

function currentSlide(n) {
  showSlides(slideIndex = n);
}

     
function showSlides(n) {
    
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
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
}

     
function show(w) {
    
            var j;
            var omie =document.getElementsByClassName("onderfoto");
            if (w > omie.length) {counter = 1}    
            if (w < 1) {counter = 1}
            
               for (j = 0; j < omie.length; j++) {
                  omie[j].style.display = "none";
                                                 }
                   omie[counter-1].style.display = "block";
}
     
     
function more1(a) {
    
            var j;
            var leesmeer1 =document.getElementsByClassName("moretext-left1");
            if (a > leesmeer1.length) {counter1 = 1}    
            if (a < 1) {counter1 = 1}
            
               for (j = 0; j < leesmeer1.length; j++) {
                  leesmeer1[j].style.display = "none";
                                                      }
                   leesmeer1[counter1-1].style.display = "block";
}
     
function more2(b) {
            var j;
            var leesmeer1 =document.getElementsByClassName("moretext-left2");
            if (b > leesmeer1.length) {counter2 = 1}    
            if (b < 1) {counter2 = 1}
            
               for (j = 0; j < leesmeer1.length; j++) {
                  leesmeer1[j].style.display = "none";
                                                      }
                   leesmeer1[counter2-1].style.display = "block";
        }
     
function more3(c) {
    
            var j;
            var leesmeer1 =document.getElementsByClassName("moretext-left3");
            if (c > leesmeer1.length) {counter3 = 1}    
            if (c < 1) {counter3 = 1}
            
               for (j = 0; j < leesmeer1.length; j++) {
                  leesmeer1[j].style.display = "none";
                                                      }
                   leesmeer1[counter3-1].style.display = "block";
}

function more4(e) {
    
            var j;
            var leesmeer1 =document.getElementsByClassName("moretext-left4");
            if (e > leesmeer1.length) {counter4 = 1}    
            if (e < 1) {counter4 = 1}
            
               for (j = 0; j < leesmeer1.length; j++) {
                  leesmeer1[j].style.display = "none";
                                                      }
                   leesmeer1[counter4-1].style.display = "block";
}

function another(f) {
    
            var j;
            var leesmeer1 =document.getElementsByClassName("ondermiddel");
            if (f > leesmeer1.length) {counter5 = 1}    
            if (f < 1) {counter5 = 1}
            
               for (j = 0; j < leesmeer1.length; j++) {
                  leesmeer1[j].style.display = "none";
                                                      }
                   leesmeer1[counter5-1].style.display = "block";
}

      

      


      
function myChange1() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di1").style.display="block";
}

function myChange2() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di2").style.display="block";
}

function myChange3() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di3").style.display="block";
}

function myChange4() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di4").style.display="block";
}

function myChange5() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di5").style.display="block";
}

function myChange6() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di6").style.display="block";
}

function myChange7() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="none";
    document.getElementById("di7").style.display="block";
}

function myChange() {
    var slides = document.getElementsByClassName("top-change");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    document.getElementById("sli").style.display="block";
}

var slideIndeex = 0;
showSlidees();

function showSlidees() {
  var i;
  var slides = document.getElementsByClassName("slidauto-1");
  
   for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
      
  }
  slideIndeex++;
  if (slideIndeex > slides.length) {slideIndeex = 1}    
   
  slides[slideIndeex-1].style.display = "block";  
  
  setTimeout(showSlidees, 4000); 
}




var sslideIndex = 0;
sshowSlides();

function sshowSlides() {
  var i;
  var slides = document.getElementsByClassName("slidauto-2");
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  sslideIndex++;
  if (sslideIndex > slides.length) {sslideIndex = 1}    
  
  slides[sslideIndex-1].style.display = "block";  
  
  setTimeout(sshowSlides, 4000); 
}