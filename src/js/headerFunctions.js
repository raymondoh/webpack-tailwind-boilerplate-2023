// headerNavigation.js

// Function 1
const setActiveLink = (navId) => {
  const links = document.querySelectorAll(`${navId} a`);
  let currentRoute = window.location.pathname.split("/").pop();

  let bestMatch = null;

  links.forEach((link) => {
    const route = link.getAttribute("href").split("/").pop();

    if (route === currentRoute) {
      if (bestMatch) {
        bestMatch.classList.remove("active"); // Remove active class from previous best match
      }
      bestMatch = link;
    }
  });

  if (bestMatch) {
    bestMatch.classList.add("active"); // Add active class to the best match

    // Check if the best match has a parent link
    let parentLinkContainer = bestMatch.closest(".group"); // Find closest parent with class "group"

    if (parentLinkContainer) {
      let parentLink = parentLinkContainer.querySelector(
        'a[aria-haspopup="true"]',
      );
      if (parentLink) {
        parentLink.classList.add("active"); // Add active class to parent link
      }
    }
  }
};

// Function 2
const handleDesktopSubMenuAccessibility = () => {
  const desktopNav = document.getElementById("desktop-nav");
  const subMenus = desktopNav.querySelectorAll("li.relative");

  subMenus.forEach((subMenu) => {
    const anchor = subMenu.querySelector('a[aria-haspopup="true"]');
    const subMenuList = subMenu.querySelector("ul");
    const subMenuItems = subMenuList.querySelectorAll("li a"); // Assuming 'a' tags within li

    anchor.addEventListener("focus", () => {
      subMenuList.classList.remove("hidden");
      anchor.setAttribute("aria-expanded", "true");
    });

    if (subMenuItems.length > 0) {
      // When focus leaves the last item in the submenu, hide the submenu
      subMenuItems[subMenuItems.length - 1].addEventListener("blur", () => {
        subMenuList.classList.add("hidden");
        anchor.setAttribute("aria-expanded", "false");
      });
    }
  });
};

// Function 3
const handleMobileSubMenuAccessibility = () => {
  const mobileNav = document.getElementById("mobile-nav");
  const subMenus = mobileNav.querySelectorAll("li.relative");

  subMenus.forEach((subMenu) => {
    const subMenuToggle = subMenu.querySelector(".submenu-toggle");

    if (subMenuToggle) {
      subMenuToggle.addEventListener("click", toggleSubMenu);
      subMenuToggle.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleSubMenu(event);
        }
      });

      // function toggleSubMenu(event) {
      //   console.log("Toggling submenu...");
      //   event.preventDefault();
      //   const subMenuList = subMenu.querySelector("ul");
      //   const arrowDown = subMenu.querySelector(".arrow-down");
      //   const arrowUp = subMenu.querySelector(".arrow-up");
      //   console.log(subMenuList, arrowDown, arrowUp);

      //   if (subMenuList.classList.contains("hidden")) {
      //     // Show submenu
      //     console.log("Showing submenu");
      //     subMenuList.classList.remove("hidden");
      //     subMenu.classList.add("submenu-mobile-open");
      //     // Switch to arrow up
      //     arrowDown.classList.add("hidden");
      //     arrowUp.classList.remove("hidden");
      //     // Update ARIA attributes
      //     subMenuToggle.setAttribute("aria-expanded", "true");
      //   } else {
      //     // Hide submenu
      //     console.log("Hiding submenu");
      //     subMenuList.classList.add("hidden");
      //     subMenu.classList.remove("submenu-mobile-open");
      //     // Switch to arrow down
      //     arrowDown.classList.remove("hidden");
      //     arrowUp.classList.add("hidden");
      //     // Update ARIA attributes
      //     subMenuToggle.setAttribute("aria-expanded", "false");
      //   }
      // }
      // function toggleSubMenu(event) {
      //   console.log("Toggling submenu...");
      //   event.preventDefault();
      //   const subMenuList = subMenu.querySelector("ul");
      //   const arrowDown = subMenu.querySelector(".arrow-down");
      //   const arrowUp = subMenu.querySelector(".arrow-up");
      //   console.log(subMenuList, arrowDown, arrowUp);

      //   if (subMenuList.classList.contains("submenu-hidden")) {
      //     // Show submenu
      //     console.log("Showing submenu");
      //     subMenuList.classList.remove("submenu-hidden");
      //     subMenu.classList.add("submenu-mobile-open");
      //     // Switch to arrow up
      //     arrowDown.classList.add("submenu-hidden");
      //     arrowUp.classList.remove("submenu-hidden");
      //     // Update ARIA attributes
      //     subMenuToggle.setAttribute("aria-expanded", "true");
      //   } else {
      //     // Hide submenu
      //     console.log("Hiding submenu");
      //     subMenuList.classList.add("submenu-hidden");
      //     subMenu.classList.remove("submenu-mobile-open");
      //     // Switch to arrow down
      //     arrowDown.classList.remove("submenu-hidden");
      //     arrowUp.classList.add("submenu-hidden");
      //     // Update ARIA attributes
      //     subMenuToggle.setAttribute("aria-expanded", "false");
      //   }
      // }

      function toggleSubMenu(event) {
        event.preventDefault();
        const subMenuList = subMenu.querySelector("ul");
        const arrowDown = subMenu.querySelector(".arrow-down");
        const arrowUp = subMenu.querySelector(".arrow-up");

        const isHidden = subMenuList.classList.contains("submenu-hidden");

        subMenuList.classList.toggle("submenu-hidden", !isHidden);
        subMenu.classList.toggle("submenu-mobile-open", !isHidden);

        arrowDown.classList.toggle("submenu-hidden", !isHidden);
        arrowUp.classList.toggle("submenu-hidden", isHidden);

        subMenuToggle.setAttribute(
          "aria-expanded",
          !isHidden ? "true" : "false",
        );
      }
    }
  });
};

// Function 4
const mobileMenuToggle = () => {
  const hamburgerButton = document.querySelector("#menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileNavUL = mobileNav ? mobileNav.querySelector("ul") : null;

  if (hamburgerButton && mobileNavUL) {
    hamburgerButton.addEventListener("click", () => {
      hamburgerButton.classList.toggle("open");
      if (mobileNavUL.classList.contains("hidden")) {
        mobileNavUL.classList.remove("hidden");
        mobileNavUL.classList.add("slide-down");
      } else {
        mobileNavUL.classList.add("hidden");
      }
    });
  }
};

// Function 5
const handleNavigation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("[data-route]");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const route = e.target.getAttribute("data-route");
        const targetSection = document.getElementById(route);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
};

export {
  setActiveLink,
  handleDesktopSubMenuAccessibility,
  handleMobileSubMenuAccessibility,
  mobileMenuToggle,
  handleNavigation,
};
