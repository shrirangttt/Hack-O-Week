gsap.from(".logo", {
  opacity: 0,
  y: -20,
  duration: 1
});

gsap.from(".navbar nav a", {
  opacity: 0,
  y: -10,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".hero h1", {
  opacity: 0,
  x: -80,
  duration: 1.2
});

gsap.from(".hero p, .hero button", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 1
});

gsap.from(".menu-card", {
  scrollTrigger: ".menu",
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1
});

document.querySelectorAll(".menu-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});

// ABOUT animations
gsap.from(".about-text h2, .about-text p", {
  scrollTrigger: ".about",
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1
});

gsap.from(".feature-box", {
  scrollTrigger: ".about",
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.8
});

// CONTACT animations
gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
  scrollTrigger: ".contact",
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".contact-details", {
  scrollTrigger: ".contact",
  opacity: 0,
  x: 40,
  duration: 1
});

gsap.from(".special-header h2, .special-header p", {
  scrollTrigger: ".special",
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 1
});

gsap.from(".special-row", {
  scrollTrigger: ".special",
  opacity: 0,
  y: 20,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".contact-text p, .contact-block", {
  scrollTrigger: ".contact",
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 1
});

gsap.from(".contact-form", {
  scrollTrigger: ".contact",
  opacity: 0,
  x: 40,
  duration: 1
});
