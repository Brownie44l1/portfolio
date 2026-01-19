// Theme Management - Auto-detection only
function applyTheme(theme) {
  document.documentElement.classList[theme === "dark" ? "add" : "remove"](
    "dark"
  );
}

// Initialize theme from system preference only
if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
}

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    applyTheme(e.matches ? "dark" : "light");
  });

// Configuration
const config = {
  navigation: [
    {
      icon: "home",
      label: "Home",
      href: "/",
      svg: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
    },
    { type: "divider" },
    {
      icon: "twitter",
      label: "Twitter",
      href: "https://x.com/@belmont_browne",
      target: "_blank",
      svg: '<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>',
    },
    {
      icon: "github",
      label: "Github",
      href: "https://github.com/Brownie44l1",
      target: "_blank",
      svg: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
    },
    {
      icon: "resume",
      label: "Resume",
      href: "/resume.pdf",
      target: "_blank",
      svg: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>',
    },
    { type: "divider" },
    {
      type: "cta",
      label: "My Blog",
      mobileLabel: "Blog",
      href: "/blog",
    },
  ],

  projects: [
    {
      title: "Distributed Task Queue",
      image: "assets/image.png",
      alt: "Distributed Task Queue System",
      href: "/projects/task-queue",
      description:
        "Fault-tolerant task processing system with Redis and message queuing",
    },
    {
      title: "Microservices API Gateway",
      image: "assets/image.png",
      alt: "API Gateway Architecture",
      href: "/projects/api-gateway",
      description:
        "High-performance API gateway with rate limiting and load balancing",
    },
    {
      title: "Real-time Analytics Engine",
      image: "assets/image.png",
      alt: "Analytics Processing System",
      href: "/projects/analytics",
      description: "Stream processing pipeline for real-time data analytics",
    },
    {
      title: "Consensus Protocol Implementation",
      image: "assets/image.png",
      alt: "Raft Consensus Algorithm",
      href: "/projects/consensus",
      description:
        "Educational implementation of Raft consensus for distributed systems",
    },
  ],
};

const skills = [
  "Python",
  "Go",
  "Node.js",
  "Java",
  "Rust",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "gRPC",
  "RabbitMQ",
  "Kafka",
  "AWS",
  "Microservices",
  "System Design",
];

const socialLinks = [
  {
    name: "Twitter",
    url: "https://x.com/@belmont_browne",
    icon: '<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>',
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/codewithhonour",
    icon: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>',
  },
  {
    name: "GitHub",
    url: "https://github.com/Brownie44l1",
    icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  },
  {
    name: "Email",
    url: "mailto:apataomotayo0@gmail.com",
    icon: '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  },
];

const techIcons = [
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-7 h-7"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-7 h-7"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="w-7 h-7"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="w-7 h-7"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path></svg>`,
];

// Helpers
const svg = (content, cls = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${content}</svg>`;
const twitterSvg = (content) =>
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17">${content}</svg>`;

// Build Navigation
function buildNav() {
  const nav = document.getElementById("main-nav");
  nav.innerHTML = config.navigation
    .map((item) => {
      if (item.type === "divider")
        return '<div class="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-700 md:mx-2"></div>';
      if (item.type === "cta")
        return `
      <a href="${item.href}" class="btn-primary bg-black dark:bg-white text-white dark:text-black py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm font-semibold ml-2 md:ml-1">
        <span class="hidden md:flex">${item.label}</span><span class="md:hidden">${item.mobileLabel}</span>
      </a>`;

      const svgContent =
        item.icon === "twitter" ? twitterSvg(item.svg) : svg(item.svg);
      return `
      <a href="${item.href}" target="${item.target || "_self"}" ${
        item.download ? "download" : ""
      } class="nav-icon p-[15px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-[15px]">
        ${svgContent}
        <span class="tooltip">${item.label}</span>
      </a>`;
    })
    .join("");
}

// Unified Marquee Function - Proper infinite scroll
function createMarquee(containerId, items, renderItem, duration = 30) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Render items twice for seamless loop
  const itemsHTML = items.map(renderItem).join("");
  container.innerHTML = itemsHTML + itemsHTML;

  // Set animation duration
  container.style.setProperty("--duration", `${duration}s`);
  container.classList.add("animate-marquee");

  // Pause on hover
  container.addEventListener(
    "mouseenter",
    () => (container.style.animationPlayState = "paused")
  );
  container.addEventListener(
    "mouseleave",
    () => (container.style.animationPlayState = "running")
  );
}

// Project Card
function projectCard(project) {
  return `
    <div class="flex px-3 md:px-4 flex-shrink-0 min-w-[320px] md:min-w-[400px]">
      <div class="flex w-full rounded-[20px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative transition-all hover:scale-[1.02] cursor-pointer shadow-[inset_0_3px_0_0_rgba(255,255,255,0.05)]">
        <div class="p-6 md:p-8 rounded-[10px]">
          <img alt="${project.alt}" loading="lazy" width="400" height="400" class="w-full h-[200px] md:h-[250px] object-cover rounded-[10px]" src="${project.image}">
        </div>
        <div class="absolute w-2 h-2 top-3 left-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        <div class="absolute w-2 h-2 bottom-3 left-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        <div class="absolute w-2 h-2 top-3 right-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        <div class="absolute w-2 h-2 bottom-3 right-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
      </div>
    </div>`;
}

// Project Grid Card
function projectGridCard(project) {
  return `
    <a href="${
      project.href
    }" class="w-full rounded-[18px] overflow-hidden border border-zinc-200 dark:border-zinc-800 relative transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
      <div class="px-4 pt-4 pb-3 group">
        <div class="relative w-full h-[180px] md:h-[200px] border border-zinc-200 dark:border-zinc-800 rounded-[16px] overflow-hidden">
          <img alt="${
            project.alt
          }" loading="lazy" width="800" height="600" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="${
    project.image
  }">
        </div>
      </div>
      <div class="px-5 pb-5">
        <h3 class="text-[20px] md:text-[22px] font-semibold mb-2 text-black dark:text-white">${
          project.title
        }</h3>
        <p class="text-zinc-600 dark:text-zinc-400 text-[14px] md:text-[15px] line-clamp-2">${
          project.description
        }</p>
        <button class="btn-secondary mt-4 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center rounded-[12px] px-[20px] py-[10px] md:py-[12px] text-[14px] md:text-[15px] font-medium text-black dark:text-white transition-all group">
          <span class="flex items-center group-hover:pr-2 transition-all">View Project</span>
          ${svg('<path d="m9 18 6-6-6-6"></path>', "ml-2 w-4 h-4")}
        </button>
      </div>
    </a>`;
}

// Build Project Grid
function buildProjectGrid() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML =
    config.projects.map(projectGridCard).join("") +
    `
    <div class="col-span-1 md:col-span-2 w-full flex justify-center">
      <a href="/projects">
        <button class="btn-primary mt-4 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center rounded-[14px] px-[24px] py-[12px] md:py-[14px] text-[14px] md:text-[16px] font-medium text-white dark:text-black transition-all group">
          <span class="flex items-center group-hover:pr-2 transition-all">View All Projects</span>
          ${svg('<path d="m9 18 6-6-6-6"></path>', "ml-2 w-4 h-4")}
        </button>
      </a>
    </div>`;
}

// Social Links
function buildSocial() {
  const container = document.getElementById("social-links");
  container.innerHTML = socialLinks
    .map(
      (link) => `
    <a class="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all" href="${
      link.url
    }" target="_blank" rel="noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 ${
        link.name === "Twitter" ? "512 512" : "24 24"
      }" fill="${
        link.name === "Twitter" ? "currentColor" : "none"
      }" stroke="currentColor" stroke-width="${
        link.name === "Twitter" ? "0" : "2"
      }" stroke-linecap="round" stroke-linejoin="round">${link.icon}</svg>
    </a>`
    )
    .join("");
}

// Contact Form
function handleForm() {
  const form = document.getElementById("contact-form-element");
  const btn = document.getElementById("submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    btn.disabled = true;
    btn.querySelector("span").textContent = "Sending...";

    window.location.href = `mailto:apataomotayo0@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      data.get("name")
    )}&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get(
        "email"
      )}\n\nMessage:\n${data.get("message")}`
    )}`;

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

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  createMarquee("projects-marquee", config.projects, projectCard, 40);
  buildProjectGrid();
  createMarquee(
    "tech-marquee",
    techIcons,
    (icon) => `<div class="flex-shrink-0">${icon}</div>`,
    20
  );
  createMarquee(
    "skills-marquee",
    skills,
    (skill) =>
      `<div class="bg-white rounded-[16px] px-6 py-3 flex items-center hover:scale-105 transition-transform cursor-pointer flex-shrink-0"><h3 class="text-[13px] font-medium text-black whitespace-nowrap">${skill}</h3></div>`,
    35
  );
  buildSocial();
  handleForm();
});
