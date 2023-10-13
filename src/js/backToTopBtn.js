// Function to toggle 'Back to Top' button visibility
export const toggleBackToTopBtn = () => {
  const backToTopBtn = document.getElementById("backToTop");
  console.log("Something happened");
  if (backToTopBtn) {
    if (document.documentElement.scrollTop > 300) {
      // Show button after scrolling 300px
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  }
};

// Function to scroll back to the top
export const scrollToTop = () => {
  console.log("Function Called");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Initialize 'Back to Top' button behavior
export const initializeBackToTopBtn = () => {
  // Add scroll event listener
  window.addEventListener("scroll", toggleBackToTopBtn);

  document.addEventListener("DOMContentLoaded", () => {
    console.log("Something happened");
    const backToTopBtn = document.getElementById("backToTop");
    console.log("Something happened");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", scrollToTop);
    }
  });
};
