// js/pages/projects.js - Projects page logic

class ProjectsPage {
  constructor(config) {
    this.config = config;
  }

  // Build complete project grid
  buildProjectGrid() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;

    const projectsHTML = this.config.projects
      .map((project) => ProjectCard.renderGridCard(project))
      .join("");

    grid.innerHTML = projectsHTML;
  }

  // Initialize projects page
  init() {
    // Initialize navigation
    const nav = new Navigation(this.config);
    nav.init();

    // Initialize footer
    const footer = new Footer(this.config);
    footer.updateSocialLinks();

    // Build project grid
    this.buildProjectGrid();

    // Initialize tech marquee with infinite scroll
    createMarquee(
      "tech-marquee",
      this.config.techIcons,
      (icon) => `<div class="flex-shrink-0">${icon}</div>`,
      20
    );
  }
}

// Auto-initialize on DOMContentLoaded
if (typeof CONFIG !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const projectsPage = new ProjectsPage(CONFIG);
    projectsPage.init();
  });
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectsPage;
}
