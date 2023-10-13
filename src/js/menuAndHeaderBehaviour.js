import { toggleSubmenu } from "./subMenuToggler";

const toggleMenuAndStyles = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.getElementById("navbar");
  const body = document.body;
  const hamburgerMenu = document.getElementById("hamburger");

  if (mobileMenu && header && hamburgerMenu) {
    mobileMenu.classList.toggle("hidden");
    header.classList.toggle("bg-gray-800");
    hamburgerMenu.classList.toggle("open");
    body.style.overflow = mobileMenu.classList.contains("hidden")
      ? "auto"
      : "hidden";
  } else {
    console.error("One or more elements could not be found.");
  }
};

// const shrinkHeader = () => {
//   const header = document.getElementById("navbar");
//   const headerWrapper = document.querySelector("header");
//   const mobileMenu = document.getElementById("mobile-menu");

//   if (header && headerWrapper && mobileMenu) {
//     if (window.scrollY > 3) {
//       headerWrapper.classList.replace("h-24", "h-16");
//       header.classList.replace("h-full", "h-16");
//       mobileMenu.style.top = "64px";
//     } else {
//       headerWrapper.classList.replace("h-16", "h-24");
//       header.classList.replace("h-16", "h-full");
//       mobileMenu.style.top = "80px";
//     }
//   } else {
//     console.error("One or more elements could not be found.");
//   }
// };

// const shrinkHeader = () => {
//   const header = document.getElementById("navbar");
//   const headerWrapper = document.querySelector("header");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const underline = document.querySelector(".group span"); // Assuming there's only one

//   if (header && headerWrapper && mobileMenu && underline) {
//     if (window.scrollY > 3) {
//       headerWrapper.classList.replace("h-24", "h-16");
//       header.classList.replace("h-full", "h-16");
//       mobileMenu.style.top = "64px";
//       underline.classList.remove("-bottom-9");
//       underline.classList.add("-bottom-5"); // Adjust this value as needed
//     } else {
//       headerWrapper.classList.replace("h-16", "h-24");
//       header.classList.replace("h-16", "h-full");
//       mobileMenu.style.top = "80px";
//       underline.classList.remove("-bottom-5");
//       underline.classList.add("-bottom-9"); // Reset to original
//     }
//   } else {
//     console.error("One or more elements could not be found.");
//   }
// };

// const toggleMobileSubmenu = () => {
//   const mobileServicesMenu = document.getElementById("mobile-services-menu");

//   if (mobileServicesMenu) {
//     mobileServicesMenu.addEventListener("click", function () {
//       const mobileServicesSubmenu = document.getElementById(
//         "mobile-services-submenu",
//       );

//       if (mobileServicesSubmenu) {
//         // Toggle hidden class
//         mobileServicesSubmenu.classList.toggle("hidden");
//       } else {
//         console.error("Submenu not found.");
//       }
//     });
//   } else {
//     console.error("Mobile services menu not found.");
//   }
// };

const initializeSubmenus = () => {
  // For desktop
  toggleSubmenu("desktop-services-menu", "desktop-services-submenu");

  // Initialize mobile submenu
  toggleSubmenu("mobile-services-menu", "mobile-services-submenu");
  //toggleMobileSubmenu("mobile-services-menu", "mobile-services-submenu");
};

const initializeAllEvents = () => {
  const menuToggleBtn = document.getElementById("hamburger");

  if (menuToggleBtn) {
    console.log("menuToggleBtn is successfully selected:", menuToggleBtn);
    menuToggleBtn.addEventListener("click", toggleMenuAndStyles);
    menuToggleBtn.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        toggleMenuAndStyles();
      }
    });
  } else {
    console.error(
      "menuToggleBtn is null. Check if the id is correct and the element exists in the DOM.",
    );
  }

  const navLinks = document.querySelectorAll(".nav-link");

  if (navLinks.length > 0) {
    navLinks.forEach((link) => {
      link.addEventListener("click", toggleMenuAndStyles);
    });
  } else {
    console.error("Nav links could not be found.");
  }

  //window.addEventListener("scroll", shrinkHeader);
};

document.addEventListener("DOMContentLoaded", () => {
  initializeAllEvents();
  initializeSubmenus();
});

export { toggleMenuAndStyles, initializeAllEvents };
