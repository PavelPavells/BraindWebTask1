let slideIndex = 1;
function currentSlide(index) {
    showSlides(slideIndex = index);
}
function showSlides(index) {
    const slides = document.getElementsByClassName("banner-section_banner");
    const square = document.getElementsByClassName("banner-section_slider_button");
    if(index > slides.length) {
        slideIndex = 1;
    }
    if(index < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < square.length; i++) {
        square[i].className = square[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    square[slideIndex - 1].className += " active";
}
showSlides(slideIndex);