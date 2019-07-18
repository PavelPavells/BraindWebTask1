let slideWelcomeIndex = 1;
function currentWelcomeSlide(index) {
    showWelcomeSlides(slideWelcomeIndex = index);
}
function showWelcomeSlides(index) {
    const slides = document.getElementsByClassName("banner-section_banner");
    const square = document.getElementsByClassName("banner-section_slider_button");
    if(index > slides.length) {
        slideWelcomeIndex = 1;
    }
    if(index < 1) {
        slideWelcomeIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < square.length; i++) {
        square[i].className = square[i].className.replace(" active", "");
    }
    slides[slideWelcomeIndex - 1].style.display = "block";
    square[slideWelcomeIndex - 1].className += " active";
}
showWelcomeSlides(slideWelcomeIndex);