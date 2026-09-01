// JavaScript is used only for the controls that cannot be handled by HTML and CSS alone.
const eraOrder = [
    "debut",
    "fearless",
    "speak-now",
    "red",
    "era-1989",
    "reputation",
    "lover",
    "folklore",
    "evermore",
    "midnights",
    "ttpd"
];

const cycleLogo = document.querySelector("#era-cycle");
const posterGrid = document.querySelector(".poster-grid");
const eraRadios = eraOrder.map((id) => document.getElementById(id));
const listenLink = document.querySelector("[data-era-link]");
const eraLogos = [...document.querySelectorAll(".era-logo img")];
const albumByEra = {
    debut: "debut",
    fearless: "fearless",
    "speak-now": "speak-now",
    red: "red",
    "era-1989": "1989",
    reputation: "reputation",
    lover: "lover",
    folklore: "folklore",
    evermore: "evermore",
    midnights: "midnights",
    ttpd: "ttpd"
};
let cycleIndex = 0;
let changingFromLogo = false;

// Keep the listening destination synchronized with the selected era.
const updateListenLink = (eraId) => {
    if (!listenLink) return;
    listenLink.href = `album.html?album=${albumByEra[eraId]}#listen`;
    listenLink.setAttribute("aria-label", `Listen to the ${eraId.replace("era-", "")} era album`);
};

// Show the exact logo for the active era without relying on CSS selector support.
const updateEraLogo = (eraId) => {
    const logoName = eraId === "era-1989" ? "1989" : eraId;
    eraLogos.forEach((logo) => logo.classList.toggle("is-active", logo.classList.contains(`logo-${logoName}`)));
};

cycleLogo.addEventListener("click", (event) => {
    event.preventDefault();
    changingFromLogo = true;
    eraRadios[cycleIndex].checked = true;
    eraRadios[cycleIndex].dispatchEvent(new Event("change", { bubbles: true }));
    cycleIndex = (cycleIndex + 1) % eraRadios.length;
    changingFromLogo = false;
    posterGrid.scrollIntoView({ behavior: "smooth", block: "center" });
});

eraRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        updateListenLink(radio.id);
        updateEraLogo(radio.id);
        if (!changingFromLogo) {
            cycleIndex = 0;
        }
    });
});

const initialEra = eraRadios.find((radio) => radio.checked)?.id || "debut";
updateListenLink(initialEra);
updateEraLogo(initialEra);
