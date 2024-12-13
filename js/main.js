// Nav-Menu

// Toggle dropdown icon functionality
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    const icon = this.querySelector("i");

    // Toggle between up and down icons
    if (icon.classList.contains("fa-angle-down")) {
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Create an intersection observer to detect when the elements enter the viewport
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'activated' class to the element to trigger the animation
        entry.target.classList.add("activated");
        // Once the animation is applied, stop observing the element
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  }
);

// Clients

// Select all the .cs1 elements and dots
const cards = document.querySelectorAll(".cs1");
const dots = document.querySelectorAll(".dot");

// Initialize the current index
let currentIndex = 0;
let interval; // Declare interval globally to clear and restart it

// Function to activate the current card and corresponding dot
function activateCardAndDot(index) {
  // Remove the active class from all cards and dots
  cards.forEach((card) => card.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add the active class to the specified card and dot
  cards[index].classList.add("active");
  dots[index].classList.add("active");
}

// Function to handle automatic transitions
function autoTransition() {
  currentIndex = (currentIndex + 1) % cards.length; // Increment index, looping back
  activateCardAndDot(currentIndex);
}

// Start the automatic transition
function startAutoTransition() {
  interval = setInterval(autoTransition, 3000);
}

// Stop the automatic transition
function stopAutoTransition() {
  clearInterval(interval);
}

// Add click event listeners to dots for manual activation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopAutoTransition(); // Stop the auto-transition when a dot is clicked
    currentIndex = index; // Update the current index
    activateCardAndDot(currentIndex); // Activate the corresponding card and dot
    startAutoTransition(); // Restart the auto-transition from the new index
  });
});

// Initialize the first card and dot as active and start auto-transition
activateCardAndDot(0);
startAutoTransition();

// Footer

// Select the footer-info element
const footerInfo = document.querySelector(".footer-info");

// Select the angle-down icon
const angleIcon = footerInfo.querySelector(".fa-angle-down");

// Select the globe icon
const globeIcon = footerInfo.querySelector(".fa-globe");

// Add click event listener to toggle the angle-down icon
angleIcon.addEventListener("click", () => {
  if (angleIcon.classList.contains("fa-angle-down")) {
    angleIcon.classList.remove("fa-angle-down");
    angleIcon.classList.add("fa-angle-up");
  } else {
    angleIcon.classList.remove("fa-angle-up");
    angleIcon.classList.add("fa-angle-down");
  }
});

// Example: Change the color of the globe icon on hover
globeIcon.addEventListener("mouseenter", () => {
  globeIcon.style.color = "#4F9CF9"; // Set to your preferred color
});

globeIcon.addEventListener("mouseleave", () => {
  globeIcon.style.color = ""; // Reset to default color
});
