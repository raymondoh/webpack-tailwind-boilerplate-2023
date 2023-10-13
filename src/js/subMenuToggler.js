const toggleSubmenu = (desktopMenuId, submenuId) => {
  const desktopMenu = document.getElementById(desktopMenuId);
  const submenu = document.getElementById(submenuId);

  if (desktopMenu && submenu) {
    desktopMenu.addEventListener("click", (event) => {
      const clickedOnIcon = event.target.closest(".icon-class");
      if (clickedOnIcon) {
        event.preventDefault();
        event.stopPropagation();
      }
      submenu.classList.toggle("hidden");
    });

    const submenuLinks = submenu.querySelectorAll("a");

    submenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        submenu.classList.add("hidden");
      });
    });
  } else {
    console.log("Either the menu or the submenu is not available.");
  }
};

export { toggleSubmenu };
