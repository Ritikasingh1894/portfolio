// WELCOME SCREEN
const welcomeScreen = document.getElementById("welcomeScreen");
const knowMeBtn = document.getElementById("knowMeBtn");
const portfolioContent = document.getElementById("portfolioContent");

knowMeBtn.addEventListener("click", function () {
    welcomeScreen.style.display = "none";

    portfolioContent.classList.remove("portfolio-hidden");
    portfolioContent.classList.add("portfolio-visible");

    window.scrollTo({ top: 0, behavior: "auto" });
});

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("ritikaPortfolioTheme");

if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
} else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

themeToggle.addEventListener("click", function () {
    const darkMode = document.body.classList.toggle("dark-mode");

    localStorage.setItem("ritikaPortfolioTheme", darkMode ? "dark" : "light");
    themeToggle.textContent = darkMode ? "☀️" : "🌙";
    themeToggle.setAttribute(
        "aria-label",
        darkMode ? "Switch to light mode" : "Switch to dark mode"
    );
});

// BACK TO TOP BUTTON
const backToTop = document.createElement("button");

backToTop.className = "back-to-top";
backToTop.id = "backToTop";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// CURRENT YEAR
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}