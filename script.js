// Fungsi untuk Slide Show
let slideIndex = [1, 1]; // Indeks slide untuk setiap slider
let slideCount = [4, 5]; // Jumlah slide untuk setiap slider

showSlides(1, 0); // Tampilkan slide pertama untuk slider pertama
showSlides(1, 1); // Tampilkan slide pertama untuk slider kedua

function plusSlides(n, sliderIndex) {
    showSlides(slideIndex[sliderIndex] += n, sliderIndex);
}

function showSlides(n, sliderIndex) {
    let slides = document.getElementsByClassName("slides");
    let sliders = document.getElementsByClassName("slideshow-container");
    if (n > slideCount[sliderIndex]) { slideIndex[sliderIndex] = 1 }
    if (n < 1) { slideIndex[sliderIndex] = slideCount[sliderIndex] }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    let startIndex = 0;
    for (let i = 0; i < sliderIndex; i++) {
        startIndex += slideCount[i];
    }
    slides[startIndex + slideIndex[sliderIndex] - 1].style.display = "block";
}

// Fungsi untuk memutar lagu
document.querySelector('.play-button').addEventListener('click', function() {
    const audio = document.getElementById('valentine-song');
    if (audio.paused) {
        audio.play();
        this.textContent = '🎵 Jeda Lagu Cinta 🎵';
    } else {
        audio.pause();
        this.textContent = '🎵 Putar Lagu Cinta 🎵';
    }
});