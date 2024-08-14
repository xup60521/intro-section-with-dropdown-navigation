import gsap from "gsap";
import ArrowUpImg from "/images/icon-arrow-up.svg"
import ArrowDownImg from "/images/icon-arrow-down.svg"

const desktopFeaturesDropdown = document.getElementById(
    "desktop-features-dropdown"
);
const desktopCompanyDropdown = document.getElementById(
    "desktop-company-dropdown"
);
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const page = document.getElementById("page");

const mobileNavFeaturesAccordian = document.getElementById("mobile-nav-features-accordion")
const mobileNavCompanyAccordian = document.getElementById("mobile-nav-company-accordion")


desktopFeaturesDropdown?.addEventListener("click", (e) => {
    e.stopPropagation();
});
desktopCompanyDropdown?.addEventListener("click", (e) => {
    e.stopPropagation();
});
mobileNavMenu?.addEventListener("click", (e) => e.stopPropagation());

document
    .getElementById("desktop-features-btn")
    ?.addEventListener("click", (e) => {
        if (!desktopFeaturesDropdown) return;
        e.stopPropagation();
        closeDesktopCompanyDropdown();
        if (
            desktopFeaturesDropdown.style.display === "none" ||
            desktopFeaturesDropdown.style.display === ""
        ) {
            openDesktopFeaturesDropdown();
        } else {
            closeDesktopFeaturesDropdown();
        }
    });

document
    .getElementById("desktop-company-btn")
    ?.addEventListener("click", (e) => {
        if (!desktopCompanyDropdown) return;
        e.stopPropagation();
        closeDesktopFeaturesDropdown();
        if (
            desktopCompanyDropdown.style.display === "none" ||
            desktopCompanyDropdown.style.display === ""
        ) {
            openDesktopCompanyDropdown();
        } else {
            closeDesktopCompanyDropdown();
        }
    });

document.getElementById("mobile-menu-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!mobileNavMenu ) return;
    openMobileNavMenu();
});

document.getElementById("close-mobile-nav-btn")?.addEventListener("click", () => {
    closeMobileNavMenu()
})


document.getElementById("mobile-nav-features-btn")?.addEventListener("click", () => {
    const arrowImg = document.querySelector("#mobile-nav-features-btn > img") as HTMLImageElement
    if (!mobileNavFeaturesAccordian || !arrowImg) return;
    if (mobileNavFeaturesAccordian.style.height === "1.5rem") {
        arrowImg.src = ArrowUpImg
        gsap.to(mobileNavFeaturesAccordian, {height: "auto", duration: 0.5, ease: "power2.out"})
    } else {
        arrowImg.src = ArrowDownImg
        gsap.to(mobileNavFeaturesAccordian, {height: "1.5rem", duration: 0.5, ease: "power2.out"})

    }
})

document.getElementById("mobile-nav-company-btn")?.addEventListener("click", () => {
    const arrowImg = document.querySelector("#mobile-nav-company-btn > img") as HTMLImageElement
    if (!mobileNavCompanyAccordian || !arrowImg) return;
    if (mobileNavCompanyAccordian.style.height === "1.5rem") {
        arrowImg.src = ArrowUpImg
        gsap.to(mobileNavCompanyAccordian, {height: "auto", duration: 0.5, ease: "power2.out"})
    } else {
        arrowImg.src = ArrowDownImg
        gsap.to(mobileNavCompanyAccordian, {height: "1.5rem", duration: 0.5, ease: "power2.out"})

    }
})

window.addEventListener("click", () => {
    closeDesktopFeaturesDropdown();
    closeDesktopCompanyDropdown();
    closeMobileNavMenu()
});

function openDesktopFeaturesDropdown() {
    const arrowImg = document.querySelector("#desktop-features-btn > img") as HTMLImageElement
    if (!desktopFeaturesDropdown || !arrowImg) return;
    desktopFeaturesDropdown.style.display = "flex";
    arrowImg.src = ArrowDownImg
    gsap.fromTo(
        desktopFeaturesDropdown,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
}

function closeDesktopFeaturesDropdown() {
    const arrowImg = document.querySelector("#desktop-features-btn > img") as HTMLImageElement
    if (!desktopFeaturesDropdown || !arrowImg) return;
    arrowImg.src = ArrowUpImg
    gsap.to(desktopFeaturesDropdown, {
        opacity: 0,
        y: -25,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
            desktopFeaturesDropdown.style.display = "none";
        },
    });
}

function openDesktopCompanyDropdown() {
    const arrowImg = document.querySelector("#desktop-company-btn > img") as HTMLImageElement
    if (!desktopCompanyDropdown || !arrowImg) return;
    desktopCompanyDropdown.style.display = "flex";
    arrowImg.src = "/images/icon-arrow-down.svg"
    gsap.fromTo(
        desktopCompanyDropdown,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
}

function closeDesktopCompanyDropdown() {
    const arrowImg = document.querySelector("#desktop-company-btn > img") as HTMLImageElement
    if (!desktopCompanyDropdown || !arrowImg) return;
    arrowImg.src = "/images/icon-arrow-up.svg"
    gsap.to(desktopCompanyDropdown, {
        opacity: 0,
        y: -25,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
            desktopCompanyDropdown.style.display = "none";
        },
    });
}

function openMobileNavMenu() {
    if (!mobileNavMenu || !page) return;
    mobileNavMenu.style.display = "flex";
    page.style.filter = "brightness(.5)";
    gsap.fromTo(mobileNavMenu, { x: "100%" }, { x: 0, duration: 0.25 });
}
function closeMobileNavMenu() {
    if (!mobileNavMenu || !page) return;
    page.style.filter = "brightness(1)";
    gsap.to(mobileNavMenu, { x: "100%", duration: 0.25 });
}
