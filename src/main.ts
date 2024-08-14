import gsap from "gsap";

const desktopFeaturesDropdown = document.getElementById(
    "desktop-features-dropdown"
);
const desktopCompanyDropdown = document.getElementById(
    "desktop-company-dropdown"
);

desktopFeaturesDropdown?.addEventListener("click", (e) => {
    e.stopPropagation()
})
desktopCompanyDropdown?.addEventListener("click", (e) => {
    e.stopPropagation()
})

document
    .getElementById("desktop-features-btn")
    ?.addEventListener("click", (e) => {
        if (!desktopFeaturesDropdown) return;
        e.stopPropagation();
        closeDesktopCompanyDropdown()
        if (
            desktopFeaturesDropdown.style.display === "none" ||
            desktopFeaturesDropdown.style.display === ""
        ) {
            openDesktopFeaturesDropdown()
        } else {
            closeDesktopFeaturesDropdown()
        }
    });

document.getElementById("desktop-company-btn")?.addEventListener("click", e => {
    if (!desktopCompanyDropdown) return;
    e.stopPropagation()
    closeDesktopFeaturesDropdown()
    if (
        desktopCompanyDropdown.style.display === "none" ||
        desktopCompanyDropdown.style.display === ""
    ) {
        openDesktopCompanyDropdown()
    } else {
        closeDesktopCompanyDropdown()
    }
});

window.addEventListener("click", () => {
    closeDesktopFeaturesDropdown()
    closeDesktopCompanyDropdown()
})

function openDesktopFeaturesDropdown() {
    if (!desktopFeaturesDropdown) return;
    desktopFeaturesDropdown.style.display = "flex";
    gsap.fromTo(
        desktopFeaturesDropdown,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
}

function closeDesktopFeaturesDropdown() {
    if (!desktopFeaturesDropdown) return;
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
    if (!desktopCompanyDropdown) return;
    desktopCompanyDropdown.style.display = "flex";
    gsap.fromTo(
        desktopCompanyDropdown,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
}

function closeDesktopCompanyDropdown() {
    if (!desktopCompanyDropdown) return;
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