// Import your main SCSS file
import "../scss/main.scss";

// Import required functions from your various modules
import { initializeAllEvents } from "./menuAndHeaderBehaviour"; // Adjust the path as needed
import { initializeScroll } from "./scrollToTop";

// Initialize the application or any other code you may have
const initializeApp = () => {
  // Initialize all header and menu related events
  initializeAllEvents();

  // Initialize scroll-to-top functionality
  initializeScroll();

  // Add any other initialization code you might have here
};

// Run the initialize function after the document is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);
