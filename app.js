var slideshow = 0;
slideShow();

function slideShow(){
    var i;
    var slides = document.getElementsByClassName("container");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slidePosition++;
    if(slidePosition > slides.length){slidePosition = 1}
        slides[slidePosition-1].style.display = "block";
        setTimeout(slideshow, 5000);
}