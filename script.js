const professions = ["Web Developer", "Software Engineer", "AI Enthusiast", "Frontend Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 80;
const delayBetween = 1000; // wait before deleting

function type() {
  const typingElement = document.getElementById("typing");

  if (!isDeleting && j <= professions[i].length) {
    currentText = professions[i].substring(0, j);
    typingElement.textContent = currentText;
    j++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && j >= 0) {
    currentText = professions[i].substring(0, j);
    typingElement.textContent = currentText;
    j--;
    setTimeout(type, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % professions.length;
    setTimeout(type, delayBetween);
  }
}

type();


//dark and light mode toggle
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});


// === EDUCATION SECTION ===
//Education section timeline animation
const timelineItems = document.querySelectorAll(".timeline-item");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom && itemTop > 0) {
      item.classList.add("show");
    } else {
      item.classList.remove("show"); // 👈 re-hide when scrolled out
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// === EXPERIENCE SECTION ===
const expCards = document.querySelectorAll(".exp-card");

const showExperience = () => {
  const triggerBottom = window.innerHeight * 0.85;

  expCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom && cardTop > 0) {
      card.classList.add("show");
    } else {
      card.classList.remove("show"); // re-hide when out of view
    }
  });
};

window.addEventListener("scroll", showExperience);
showExperience();

// === PROJECTS SECTION ===
// Scroll animation for project cards
const projectCards = document.querySelectorAll(".project-card");

function showProjectsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show"); // re-hide when out of view
    }
  });
}

window.addEventListener("scroll", showProjectsOnScroll);
showProjectsOnScroll();

// === ACHIEVEMENTS SECTION ===
const achievementCards = document.querySelectorAll(".achievement-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
      else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2, // triggers when 20% of the card is visible
  }
);
window.addEventListener("scroll", showProjectsOnScroll);
showProjectsOnScroll();
achievementCards.forEach(card => observer.observe(card));


//=== FOOTER ===
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//=== SPOTLIGHT EFFECT ===
const spotlight = document.createElement("div");
spotlight.classList.add("spotlight");
document.body.appendChild(spotlight);

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, var(--spotlight-color) 0%, transparent 60%)`;
});

