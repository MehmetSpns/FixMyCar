// 1) Contactform alert
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Bericht verzonden! (fictief)");
});

// 2) Scroll-progress bar
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const scrollPercent = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);
  document.getElementById("progress-bar").style.width = (scrollPercent * 100) + "%";
});

// 3) Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(r => observer.observe(r));

// 4) Testimonials carousel
let idx = 0;
const slides = document.querySelectorAll(".slide");
const updateCarousel = () => {
  const offset = -idx * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
};
document.querySelector(".prev").onclick = () => {
  idx = (idx + slides.length - 1) % slides.length;
  updateCarousel();
};
document.querySelector(".next").onclick = () => {
  idx = (idx + 1) % slides.length;
  updateCarousel();
};

// 5) FAQ accordion
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
});

// 6) Back-to-top button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
