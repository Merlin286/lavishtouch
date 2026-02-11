function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}

//Typewriter effect with partial erasing
const typeElement = document.getElementById("typeText");
const text = typeElement.textContent;

let index = 1;
let isDeleting = false;

function typeWriter() {
    let speed = 150;

    // ALWAYS render first
    typeElement.textContent = text.substring(0, index);

    if (isDeleting) {
        speed = 80;
        if (index > 1) index--;
    } else {
        if (index < text.length) index++;
    }

    // FULL text visible
    if (index === text.length && !isDeleting) {
        setTimeout(() => isDeleting = true, 1500);
    }

    // Only first letter remains
    if (index === 1 && isDeleting) {
        isDeleting = false;
    }

    setTimeout(typeWriter, speed);
}

typeWriter();


/* Bubble Animation */
// Create MANY floating bubbles randomly across banner
const banner = document.querySelector(".banner-section");

for (let i = 0; i < 18; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Random size between 25px and 120px
    let size = Math.floor(Math.random() * 95) + 25;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Random left position across full width
    bubble.style.left = Math.random() * 100 + "%";

    // Different animation speeds
    bubble.style.animationDuration = (8 + Math.random() * 12) + "s";

    // Add the bubble to banner
    banner.appendChild(bubble);
}


/* Testimonial */
const cards = document.querySelectorAll(".testimonial-card");

cards.forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  setTimeout(() => {
    card.style.transition = "0.6s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 250);
});







