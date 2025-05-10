let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 4000);

// Suggestion dropdown (basic mockup)
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", () => {
  if (searchBox.value.length > 2) {
    console.log("Show suggestions for:", searchBox.value);
  }
});


document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
});

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}, 5000);



index++;
if (index > slides.length) index = 1;
slides[index - 1].style.display = "block";
setTimeout(showSlides, 4000); // Change image every 4 seconds

function logout() {
  alert("you hava been logged out successfully!");
  window.location.href ="index.html";
}




