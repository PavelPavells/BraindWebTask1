let slideAktionenIndex = 1;
function currentAktionenSlide(index) {
    showAktionenSlides(slideAktionenIndex = index);
}
function showAktionenSlides(index) {
    const slides = document.getElementsByClassName("aktionen-section_content_item");
    const rhombus = document.getElementsByClassName("aktionen-pagination-section_link");
    if(index > slides.length) {
        slideIndex = 1;
    }
    if(index < 1) {
        slideAktionenIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < rhombus.length; i++) {
        rhombus[i].className = rhombus[i].className.replace(" active", "");
    }
    slides[slideAktionenIndex - 1].style.display = "block";
    rhombus[slideAktionenIndex - 1].className += " active";
}
showAktionenSlides(slideAktionenIndex);