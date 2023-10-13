// Function to toggle mobile services submenu
export const toggleX = () => {
  const mobileServicesMenu = document.getElementById("mobile-services-menu");
  const mobileServicesSubmenu = document.getElementById(
    "mobile-services-submenu",
  );

  if (!mobileServicesMenu || !mobileServicesSubmenu) {
    console.error("One of the mobile submenu elements could not be found.");
    if (!mobileServicesMenu) {
      console.error("Element with ID 'mobile-services-menu' not found.");
    }
    if (!mobileServicesSubmenu) {
      console.error("Element with ID 'mobile-services-submenu' not found.");
    }
    return;
  }

  mobileServicesMenu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    mobileServicesSubmenu.classList.toggle("hidden");
  });
};
