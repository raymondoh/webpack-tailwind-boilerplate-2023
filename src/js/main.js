// Import your main SCSS file
import "../scss/main.scss";

//import { toggleMenu } from "./toggleMenu.js";
//import { handleSubMenuAccessibility } from "./submenuFocusManager";
//import { setActiveLink } from "./activeLink";
//import { handleNavigation } from "./handleNavigation";
import {
  setActiveLink,
  handleSubMenuAccessibility,
  mobileMenuToggle,
  handleNavigation,
} from "./headerFunctions";

import { initializeScroll } from "./scrollToTop";

handleNavigation;
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink("#desktop-nav");
  setActiveLink("#mobile-nav");
  handleSubMenuAccessibility();
  mobileMenuToggle();
  handleNavigation();
  //toggleMenu();
  //handleSubMenuAccessibility();
  //setActiveLink();
  //handleNavigation();
  initializeScroll();
});
