// Function to handle scroll behavior
export const scrollFunction = () => {
  const mybutton = document.getElementById("scrollToTop"); // Make sure to add this ID to your HTML button element

  if (!mybutton) {
    console.error("The element with ID 'scrollToTop' was not found.");
    return;
  }

  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.classList.remove("hidden"); // Assuming "hidden" is the class that makes the button invisible
  } else {
    mybutton.classList.add("hidden");
  }
};

// Function to scroll to the top of the document
export const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Initialize scroll behavior
export const initializeScroll = () => {
  window.addEventListener("scroll", scrollFunction);

  const mybutton = document.getElementById("scrollToTop");

  if (!mybutton) {
    console.error("The element with ID 'scrollToTop' was not found.");
    return;
  }

  mybutton.addEventListener("click", topFunction);
};
