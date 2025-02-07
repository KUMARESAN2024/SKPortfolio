document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("themingSwitcher");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");

    // Set initial theme based on saved preference or system preference
    if (savedTheme) {
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
        themeSwitcher.checked = savedTheme === "dark";
    } else {
        document.body.classList.toggle("dark-mode", prefersDarkMode);
        themeSwitcher.checked = prefersDarkMode;
    }

    // Toggle theme on switch click
    themeSwitcher.addEventListener("change", () => {
        const isDark = themeSwitcher.checked;
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Toggle theme using Shift + D
    document.addEventListener("keydown", (e) => {
        if (e.shiftKey && e.key.toUpperCase() === "D") {
            themeSwitcher.checked = !themeSwitcher.checked;
            document.body.classList.toggle("dark-mode", themeSwitcher.checked);
            localStorage.setItem("theme", themeSwitcher.checked ? "dark" : "light");
        }
    });
});

