/* ================= HEADER SCROLL EFFECT ================= */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

/* ================= TABS FOR RESOURCES & VIDEOS ================= */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons & contents
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    // Add active class to clicked tab & corresponding content
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* ================= HERO BUTTONS SMOOTH SCROLL ================= */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = e.target.textContent.includes('Join') ? '#contact' : '#about';
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

/* ================= GSAP ANIMATIONS ================= */
// Hero Animations
gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.2, delay: 0.5 });
gsap.from(".hero-content .btn", { opacity: 0, scale: 0, duration: 1, delay: 1, stagger: 0.2 });

// Animate About Cards on scroll
gsap.utils.toArray('.about .card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Animate Project Cards on scroll
gsap.utils.toArray('.projects .project-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Morphing Logo Animation
gsap.to("#logo circle", {
  duration: 3,
  attr: { r: 45 },
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate Doodles Floating
gsap.utils.toArray('.doodle').forEach(d => {
  gsap.to(d, {
    y: "random(-30,30)",
    x: "random(-30,30)",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

/* ================= PARTICLES.JS BACKGROUND ================= */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00cc77" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00cc77", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

/* ================= FLIPBOOK CARD HOVER ================= */
const flipCards = document.querySelectorAll('.flipbook .flip-card');
flipCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'rotateY(180deg)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg)';
  });
});

/* ================= OPTIONAL: FORM SUBMISSION ================= */
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for contacting CRYN! We will get back to you soon.");
  contactForm.reset();
});
