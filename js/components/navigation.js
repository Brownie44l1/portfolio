// js/components/navigation.js - Reusable navigation component

class Navigation {
  constructor(config) {
    this.config = config;
  }

  // Helper to create SVG icons
  svg(content, cls = "") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${content}</svg>`;
  }

  twitterSvg(content) {
    return `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17">${content}</svg>`;
  }

  // Render a single navigation item
  renderItem(item) {
    if (item.type === "divider") {
      return '<div class="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-700 md:mx-2"></div>';
    }

    if (item.type === "cta") {
      return `
        <a href="${item.href}" class="btn-primary bg-black dark:bg-white text-white dark:text-black py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm font-semibold ml-2 md:ml-1">
          <span class="hidden md:flex">${item.label}</span>
          <span class="md:hidden">${item.mobileLabel}</span>
        </a>`;
    }

    const svgContent =
      item.icon === "twitter" ? this.twitterSvg(item.svg) : this.svg(item.svg);

    return `
      <a href="${item.href}" 
         target="${item.target || "_self"}" 
         ${item.download ? "download" : ""} 
         class="nav-icon p-[15px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-[15px]">
        ${svgContent}
        <span class="tooltip">${item.label}</span>
      </a>`;
  }

  // Render the complete navigation
  render() {
    return this.config.navigation.map((item) => this.renderItem(item)).join("");
  }

  // Initialize navigation on the page
  init(containerId = "main-nav") {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.render();
    }
  }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = Navigation;
}
