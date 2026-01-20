// js/pages/projectDetail.js - Project detail page logic

class ProjectDetailPage {
  constructor(config) {
    this.config = config;
    this.currentProject = null;
  }

  // Load project from URL parameter
  loadProject() {
    const projectSlug = Helpers.getUrlParameter("id");

    if (!projectSlug) {
      console.error("No project ID specified");
      window.location.href = "/projects.html";
      return null;
    }

    const project = Helpers.findProjectBySlug(
      this.config.projects,
      projectSlug
    );

    if (!project) {
      console.error("Project not found:", projectSlug);
      window.location.href = "/projects.html";
      return null;
    }

    this.currentProject = project;
    return project;
  }

  // Render project details
  renderProjectDetails() {
    const container = document.getElementById("project-details");
    if (!container || !this.currentProject) return;

    container.innerHTML = ProjectCard.renderDetailCard(this.currentProject);
  }

  // Render navigation buttons
  renderProjectNavigation() {
    const container = document.getElementById("project-navigation");
    if (!container || !this.currentProject) return;

    const nextProject = Helpers.getAdjacentProject(
      this.config.projects,
      this.currentProject.slug,
      "next"
    );

    const prevProject = Helpers.getAdjacentProject(
      this.config.projects,
      this.currentProject.slug,
      "prev"
    );

    let navigationHTML =
      '<div class="flex flex-col md:flex-row gap-[1.5rem] md:gap-0 justify-between items-center mb-2">';

    // Visit project button (if URL exists)
    if (this.currentProject.url) {
      navigationHTML += `
        <a target="_blank" href="${this.currentProject.url}">
          <button class="bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 px-6 py-3 rounded-[14px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300">
            <span>Visit Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </button>
        </a>`;
    } else {
      navigationHTML += "<div></div>"; // Spacer
    }

    // Next/Previous buttons
    navigationHTML += '<div class="flex gap-4">';

    if (prevProject) {
      navigationHTML += `
        <a href="/project-detail.html?id=${prevProject.slug}">
          <button class="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-6 py-3 rounded-[14px] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span>Previous</span>
          </button>
        </a>`;
    }

    if (nextProject) {
      navigationHTML += `
        <a href="/project-detail.html?id=${nextProject.slug}">
          <button class="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-6 py-3 rounded-[14px] transition-all duration-300">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </a>`;
    }

    navigationHTML += "</div></div>";
    container.innerHTML = navigationHTML;
  }

  // Update page title and meta
  updatePageMeta() {
    if (!this.currentProject) return;

    document.title = `${this.currentProject.title} | ${this.config.site.author}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", this.currentProject.description);
    }
  }

  // Initialize project detail page
  init() {
    // Load project data
    const project = this.loadProject();
    if (!project) return;

    // Initialize navigation
    const nav = new Navigation(this.config);
    nav.init();

    // Initialize footer
    const footer = new Footer(this.config);
    footer.updateSocialLinks();

    // Render project details
    this.renderProjectDetails();

    // Render navigation buttons
    this.renderProjectNavigation();

    // Update page metadata
    this.updatePageMeta();
  }
}

// Auto-initialize on DOMContentLoaded
if (typeof CONFIG !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const projectDetailPage = new ProjectDetailPage(CONFIG);
    projectDetailPage.init();
  });
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectDetailPage;
}
