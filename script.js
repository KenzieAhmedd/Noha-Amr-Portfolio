// ---- Floating orbs background ----
const orbContainer = document.getElementById("orbs");
for (let i = 0; i < 6; i++) {
  const orb = document.createElement("div");
  orb.className = "orb";
  orb.style.width = `${80 + Math.random() * 120}px`;
  orb.style.height = orb.style.width;
  orb.style.background = `radial-gradient(circle at center, rgba(80,178,255,0.8), transparent)`;
  orb.style.top = `${Math.random() * 100}%`;
  orb.style.left = `${Math.random() * 100}%`;
  orb.style.animationDelay = `${Math.random() * 10}s`;
  orbContainer.appendChild(orb);
}

// ---- Reveal Animation ----
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
reveals.forEach((r) => observer.observe(r));

// ---- Contact form ----
const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.textContent = "✅ Message sent successfully!";
  form.reset();
  setTimeout(() => (feedback.textContent = ""), 4000);
});

// ---- Light/Dark Mode ----
const modeBtn = document.getElementById("modeToggle");
const currentMode = localStorage.getItem("theme");
if (currentMode === "light") document.body.classList.add("light");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  modeBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
