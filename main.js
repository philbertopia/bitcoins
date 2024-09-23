let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    // Reset slide index if out of bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Show the current slide
    slides[slideIndex].style.display = "block";  
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}


