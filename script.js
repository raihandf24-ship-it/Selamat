// Efek ketik
const text = "Selamat ulang tahun sayangku 💙\nSemoga semua keinginanmu tercapai\nDan hidupmu selalu bahagia bersama orang-orang tercinta.\nAku bersyukur memilikimu selalu di sisiku.";
const typedTextElement = document.getElementById("typed-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
if (typedTextElement) typeEffect();

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
if (slides.length) {
  slides[0].classList.add("active");
  setInterval(showSlides, 3000);
}

// Love jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💙";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animation = "floatUp 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 600);

// Animasi love
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(100vh) scale(0.8); opacity: 1; }
  100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
}`;
document.head.appendChild(style);

// Musik autoplay fix
const bgMusic = document.getElementById("bg-music");
if (bgMusic) {
  document.body.addEventListener("click", () => {
    bgMusic.play();
  });
}
