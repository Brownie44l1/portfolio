// js/pages/home.js - Homepage-specific logic

class HomePage {
  constructor(config) {
    this.config = config;
  }

  // Build project grid for homepage
  buildProjectGrid() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;

    const featuredProjects = this.config.projects
      .filter((p) => p.featured)
      .slice(0, 4);

    const projectsHTML = featuredProjects
      .map((project) => ProjectCard.renderGridCard(project))
      .join("");

    const viewAllButton = `
      <div class="col-span-1 md:col-span-2 w-full flex justify-center">
        <a href="/projects.html">
          <button class="btn-primary mt-4 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center rounded-[14px] px-[24px] py-[12px] md:py-[14px] text-[14px] md:text-[16px] font-medium text-white dark:text-black transition-all group">
            <span class="flex items-center group-hover:pr-2 transition-all">View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </a>
      </div>`;

    grid.innerHTML = projectsHTML + viewAllButton;
  }

  // Handle contact form submission
  handleContactForm() {
    const form = document.getElementById("contact-form-element");
    const btn = document.getElementById("submit-btn");

    if (!form || !btn) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);

      btn.disabled = true;
      btn.querySelector("span").textContent = "Sending...";

      const mailtoLink = `mailto:${
        this.config.site.email
      }?subject=Portfolio Contact from ${encodeURIComponent(
        data.get("name")
      )}&body=${encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get(
          "email"
        )}\n\nMessage:\n${data.get("message")}`
      )}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        alert(
          "Opening your email client. Please send the email to complete your message."
        );
        form.reset();
        btn.disabled = false;
        btn.querySelector("span").textContent = "Send Message";
      }, 500);
    });
  }

  // Render work experience
  renderWorkExperience() {
    const container = document.querySelector(".work-experience-container");
    if (!container) return;

    const experienceHTML = this.config.workExperience
      .map(
        (exp) => `
      <div class="flex flex-col md:flex-row gap-[15px] md:gap-0 md:items-center md:justify-between">
        <div class="text-zinc-500 dark:text-zinc-500 font-medium text-[13px]">${exp.period}</div>
        <div class="flex items-center gap-2">
          <div class="text-[16px] text-black md:text-zinc-600 dark:text-zinc-400 font-medium">${exp.role}</div>
          <div class="flex items-center gap-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md">
            <span>${exp.company}</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    container.innerHTML = experienceHTML;
  }

  // Initialize homepage
  init() {
    // Initialize navigation
    const nav = new Navigation(this.config);
    nav.init();

    // Initialize footer
    const footer = new Footer(this.config);
    footer.updateSocialLinks();

    // Build project grid
    this.buildProjectGrid();

    // Initialize marquees with infinite scroll
    createMarquee(
      "projects-marquee",
      this.config.projects,
      (project) => ProjectCard.renderMarqueeCard(project),
      40
    );

    createMarquee(
      "tech-marquee",
      this.config.techIcons,
      (icon) => `<div class="flex-shrink-0">${icon}</div>`,
      20
    );

    createMarquee(
      "skills-marquee",
      this.config.skills,
      (skill) =>
        `<div class="bg-white dark:bg-zinc-800 rounded-[16px] px-6 py-3 flex items-center hover:scale-105 transition-transform cursor-pointer flex-shrink-0"><h3 class="text-[13px] font-medium text-black dark:text-white whitespace-nowrap">${skill}</h3></div>`,
      35
    );

    // Handle contact form
    this.handleContactForm();

    // Render work experience if container exists
    this.renderWorkExperience();
  }
}

// Auto-initialize on DOMContentLoaded
if (typeof CONFIG !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const homePage = new HomePage(CONFIG);
    homePage.init();
  });
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = HomePage;
}
