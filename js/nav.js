"use strict";

// Controls the shared mobile navigation on every page.
(() => {
    const header = document.querySelector(".site-header, .navbar");
    const button = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");
    if (!header || !button || !menu) return;

    const links = [...menu.querySelectorAll("a")];
    // Close the menu and optionally return keyboard focus to its button.
    const close = (returnFocus = false) => {
        header.classList.remove("menu-open");
        button.classList.remove("is-active");
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", button.dataset.openLabel || "Open menu");
        menu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
        if (returnFocus) button.focus();
    };

    // Open the menu and move keyboard focus to its first link.
    const open = () => {
        header.classList.add("menu-open");
        button.classList.add("is-active");
        menu.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", button.dataset.closeLabel || "Close menu");
        menu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
        requestAnimationFrame(() => links[0]?.focus());
    };

    button.addEventListener("click", () =>
        button.getAttribute("aria-expanded") === "true" ? close(true) : open()
    );
    links.forEach((link) => link.addEventListener("click", () => close()));
    menu.addEventListener("click", (event) => {
        if (event.target === menu) close(true);
    });
    addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("is-open")) close(true);
    });
    addEventListener("resize", () => {
        if (innerWidth > 900) close();
    });
})();
