export const handleSubMenuAccessibility = () => {
  let timeout;

  const desktopNav = document.getElementById("desktop-nav");
  const mobileNav = document.getElementById("mobile-nav");

  [desktopNav, mobileNav].forEach((nav) => {
    if (nav) {
      const subMenus = nav.querySelectorAll("li.relative");

      subMenus.forEach((subMenu) => {
        const anchor = subMenu.querySelector('a[aria-haspopup="true"]');
        const subMenuList = subMenu.querySelector("ul");
        const subMenuItems = subMenuList.querySelectorAll("li");

        anchor.addEventListener("focus", () => {
          clearTimeout(timeout); // Clear any existing timeout
          subMenuList.classList.remove("hidden");
          anchor.setAttribute("aria-expanded", "true");
        });

        // Show submenu on mouseenter
        subMenu.addEventListener("mouseenter", () => {
          clearTimeout(timeout); // Clear any existing timeout
          subMenuList.classList.remove("hidden");
          anchor.setAttribute("aria-expanded", "true");
        });

        // Hide submenu on mouseleave with delay
        subMenu.addEventListener("mouseleave", () => {
          timeout = setTimeout(() => {
            subMenuList.classList.add("hidden");
            anchor.setAttribute("aria-expanded", "false");
          }, 300); // 300ms delay
        });

        // Clear the timeout if mouse enters the submenu list
        subMenuList.addEventListener("mouseenter", () => {
          clearTimeout(timeout);
        });

        if (subMenuItems.length > 0) {
          subMenuItems[subMenuItems.length - 1].addEventListener(
            "focusout",
            () => {
              subMenuList.classList.add("hidden");
              anchor.setAttribute("aria-expanded", "false");
            },
          );
        }
      });
    }
  });
};
