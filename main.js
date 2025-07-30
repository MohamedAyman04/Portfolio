const certificates = document.querySelectorAll("#certificate-slider img");
const dotsContainer = document.getElementById("certificate-dots");

let currentIndex = 0;
let slideInterval;

function showCertificate(index) {
  certificates.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    dotsContainer.children[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextCertificate() {
  let nextIndex = (currentIndex + 1) % certificates.length;
  showCertificate(nextIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(nextCertificate, 4000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Create dots dynamically based on images count
function createDots() {
  certificates.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => {
      stopAutoSlide();
      showCertificate(i);
      startAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
}

// Init slider
if (certificates.length && dotsContainer) {
  createDots();
  showCertificate(0);
  startAutoSlide();
}
