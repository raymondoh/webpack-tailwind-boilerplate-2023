export const handleNavigation = () => {
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
