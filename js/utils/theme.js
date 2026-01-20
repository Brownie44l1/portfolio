// js/utils/theme.js - Theme management utility

class ThemeManager {
  constructor() {
    this.darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  }

  // Apply theme to the document
  applyTheme(theme) {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
  }

  // Get current system theme
  getSystemTheme() {
    return this.darkModeMediaQuery.matches ? "dark" : "light";
  }

  // Initialize theme from system preference
  init() {
    const systemTheme = this.getSystemTheme();
    this.applyTheme(systemTheme);

    // Listen for system theme changes
    this.darkModeMediaQuery.addEventListener("change", (e) => {
      this.applyTheme(e.matches ? "dark" : "light");
    });
  }
}

// Create singleton instance
const themeManager = new ThemeManager();

// Auto-initialize on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => themeManager.init());
} else {
  themeManager.init();
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ThemeManager;
}
