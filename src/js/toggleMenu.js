toggleMenu.js;
export const toggleMenu = () => {
  console.log("tab");
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuToggle.classList.toggle("open");
  });
};
