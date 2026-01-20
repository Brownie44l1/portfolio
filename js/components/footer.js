// js/components/footer.js - Reusable footer component

class Footer {
  constructor(config) {
    this.config = config;
  }

  // Render social link
  renderSocialLink(link) {
    return `
      <a class="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all" 
         href="${link.url}" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="${link.name}">
        <svg width="20" height="20" 
             viewBox="0 0 ${link.name === "Twitter" ? "512 512" : "24 24"}" 
             fill="${link.name === "Twitter" ? "currentColor" : "none"}" 
             stroke="currentColor" 
             stroke-width="${link.name === "Twitter" ? "0" : "2"}" 
             stroke-linecap="round" 
             stroke-linejoin="round">
          ${link.icon}
        </svg>
      </a>`;
  }

  // Render social links container
  renderSocialLinks() {
    return this.config.socialLinks
      .map((link) => this.renderSocialLink(link))
      .join("");
  }

  // Render complete footer
  render(customText = null) {
    const copyrightText =
      customText ||
      `Copyright © ${new Date().getFullYear()} ${this.config.site.author}`;

    return `
      <div class="w-full py-[30px] md:py-[40px] flex flex-col items-center gap-[16px] border-t border-zinc-200 dark:border-zinc-800">
        <p class="text-[13px] md:text-[14px] text-center text-zinc-600 dark:text-zinc-400">
          ${copyrightText}
        </p>
        <div id="social-links" class="flex gap-6 py-1">
          ${this.renderSocialLinks()}
        </div>
      </div>`;
  }

  // Initialize footer on the page
  init(containerId = "footer-container") {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.render();
    } else {
      // If specific container doesn't exist, try to append to body
      console.warn(`Footer container "${containerId}" not found`);
    }
  }

  // Update social links only (if footer already exists)
  updateSocialLinks(containerId = "social-links") {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.renderSocialLinks();
    }
  }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = Footer;
}
