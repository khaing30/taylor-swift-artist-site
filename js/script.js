"use strict";

// Home page elements used by the few interactions that require JavaScript.
const header = document.querySelector(".site-header");
const tourPreview = document.querySelector("#tour-preview");
const albumsSection = document.querySelector("#albums");
const bioPreview = document.querySelector("#bio-preview");
const homeLinks = document.querySelectorAll('a[href="#home"]:not(.site-logo):not(.ts-logo)');
const tourLinks = document.querySelectorAll('a[href="#tour-preview"], .mobile-menu__nav a[href="tour.html"]');
const albumLinks = document.querySelectorAll('a[href="#albums"]');
const bioLinks = document.querySelectorAll('.main-nav a[href="#bio-preview"], .mobile-menu__nav a[href="bio.html"]');
const albumsMoreButton = document.querySelector(".home-albums__more-button");
const moreAlbums = document.querySelector("#more-home-albums");
const heroVideoOpen = document.querySelector("[data-video-open]");
const heroVideoModal = document.querySelector("[data-video-modal]");
const heroVideoClose = document.querySelector("[data-video-close]");
const heroVideoFrame = document.querySelector("[data-video-frame]");

// Open and close the accessible hero video dialog.
if (heroVideoOpen && heroVideoModal && heroVideoClose && heroVideoFrame) {
    const openHeroVideo = () => {
        heroVideoFrame.src = heroVideoFrame.dataset.src;
        heroVideoModal.classList.add("is-open");
        heroVideoModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("video-open");
        window.requestAnimationFrame(() => heroVideoClose.focus());
    };

    const closeHeroVideo = () => {
        heroVideoModal.classList.remove("is-open");
        heroVideoModal.setAttribute("aria-hidden", "true");
        heroVideoFrame.removeAttribute("src");
        document.body.classList.remove("video-open");
        heroVideoOpen.focus();
    };

    heroVideoOpen.addEventListener("click", openHeroVideo);
    heroVideoClose.addEventListener("click", closeHeroVideo);
    heroVideoModal.addEventListener("click", (event) => {
        if (event.target === heroVideoModal) {
            closeHeroVideo();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && heroVideoModal.classList.contains("is-open")) {
            closeHeroVideo();
        }
    });
}

// Change the header appearance after the page is scrolled.
if (header) {
    const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 90);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
}

// Highlight the navigation link for the section currently in view.
if (tourPreview && albumsSection && bioPreview) {
    const setCurrentSection = (section) => {
        homeLinks.forEach((link) => {
            if (section === "home") {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        tourLinks.forEach((link) => {
            if (section === "tour") {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        albumLinks.forEach((link) => {
            if (section === "albums") {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        bioLinks.forEach((link) => {
            if (section === "bio") {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const updateCurrentSection = () => {
        const headerHeight = header?.offsetHeight ?? 70;
        const triggerPoint = headerHeight + window.innerHeight * 0.3;

        if (bioPreview.getBoundingClientRect().top <= triggerPoint) {
            setCurrentSection("bio");
        } else if (albumsSection.getBoundingClientRect().top <= triggerPoint) {
            setCurrentSection("albums");
        } else if (tourPreview.getBoundingClientRect().top <= triggerPoint) {
            setCurrentSection("tour");
        } else {
            setCurrentSection("home");
        }
    };

    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);
}

// Reveal or hide the additional album cards.
if (albumsMoreButton && moreAlbums) {
    albumsMoreButton.addEventListener("click", () => {
        const isOpen = albumsMoreButton.getAttribute("aria-expanded") === "true";
        const moreRow = albumsMoreButton.closest(".home-albums__more-row");

        albumsMoreButton.setAttribute("aria-expanded", String(!isOpen));
        albumsMoreButton.setAttribute("aria-label", isOpen ? "Show more albums" : "Show fewer albums");
        moreAlbums.classList.toggle("is-visible", !isOpen);
        moreAlbums.setAttribute("aria-hidden", String(isOpen));

        if (isOpen) {
            moreAlbums.before(moreRow);
            moreAlbums.setAttribute("inert", "");
            albumsMoreButton.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            moreAlbums.removeAttribute("inert");
            moreAlbums.after(moreRow);
        }
    });
}
