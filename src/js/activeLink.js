// export const setActiveLink = () => {
//   const links = document.querySelectorAll("#desktop-nav a, #mobile-nav a");
//   let currentRoute = window.location.pathname.split("/").pop();

//   // Handle home page case
//   if (currentRoute === "" || currentRoute === "/") {
//     currentRoute = "/";
//   }

//   links.forEach((link) => {
//     const route = link.getAttribute("href");

//     if (route === currentRoute) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// };
// Function 1

// Function 1
const setActiveLink = () => {
  const links = document.querySelectorAll("#desktop-nav a, #mobile-nav a");
  let currentPath = window.location.pathname;

  // Reset active state for all links
  links.forEach((link) => {
    link.classList.remove("active");
  });

  // Find the best match and set it as active
  let bestMatch = null;

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (
      currentPath.startsWith(href) &&
      (!bestMatch || href.length > bestMatch.getAttribute("href").length)
    ) {
      bestMatch = link;
    }
  });

  if (bestMatch) {
    bestMatch.classList.add("active");
  }
};
