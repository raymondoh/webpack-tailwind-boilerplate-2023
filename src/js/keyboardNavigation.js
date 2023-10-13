// Function to handle keyboard navigation
const handleKeyboardNavigation = (event) => {
  const key = event.key;
  let focusableElements = document.querySelectorAll(
    'a, button, input, [tabindex]:not([tabindex="-1"])',
  );
  focusableElements = Array.prototype.slice.call(focusableElements);
  const currentFocus = document.activeElement;

  const currentIndex = focusableElements.indexOf(currentFocus);
  let nextIndex = 0;

  if (key === "Tab") {
    // Prevent default tabbing behavior to control it ourselves
    event.preventDefault();

    if (event.shiftKey) {
      // Move backward
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = focusableElements.length - 1;
      }
    } else {
      // Move forward
      nextIndex = (currentIndex + 1) % focusableElements.length;
    }

    focusableElements[nextIndex].focus();
  }
};

// Attach event listener for keyboard events
document.addEventListener("keydown", handleKeyboardNavigation);

// Export the function for use in other files
export { handleKeyboardNavigation };
