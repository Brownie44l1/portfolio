// Auto-detect and apply theme based on system preference
function applyTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Apply theme on load
applyTheme();

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyTheme);

// Configuration Data
const config = {
  navigation: [
    {
      icon: "home",
      label: "Home",
      href: "/",
      target: "_self",
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
      target: "_self",
      svg: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
    },
    {
      icon: "resume",
      label: "Resume",
      href: "/resume.pdf",
      target: "_blank",
      download: true,
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
      title: "Pxxl App",
      image: "assets/image.png",
      alt: "Pxxl App Cloud Deployment Platform",
      href: "/projects/pxxl",
      description:
        "Enterprise cloud deployment platform for instant website and API deployment",
    },
    {
      title: "Olamide's Tour",
      image: "assets/image.png",
      alt: "Olamide's Tour Website",
      href: "/projects/olamide",
      description:
        "Official tour site for Nigerian Musician Olamide featuring schedules and tickets",
    },
    {
      title: "Uncutxtra Awards",
      image: "assets/image.png",
      alt: "UNCUTXTRA Awards Voting",
      href: "/projects/uncutxtra-vote",
      description: "Official voting platform for UNCUTXTRA Award Night 4.0",
    },
    {
      title: "EmojiDB",
      image: "assets/image.png",
      alt: "EmojiDB - Secure Emoji-Based Database",
      href: "/projects/emojidb",
      description:
        "Lightweight database that encrypts data and encodes it into emojis",
    },
  ],
};

// Skills data
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Golang",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Python",
  "PHP",
  "jQuery",
  "Git",
  "GitHub",
  "TailwindCSS",
  "Bootstrap",
  "MongoDB",
  "ExpressJS",
];

// Social links data
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

// Tech Stack Icons
const techIcons = [
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-[1.8rem] h-[1.8rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path>
    </svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="w-[1.8rem] h-[1.8rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.035 96.633c-1.044 0-1.379.522-1.044 1.566.334.522 1.044.522 1.566.522h11.267c1.044 0 1.38-.522 1.044-1.566-.334-.522-1.044-.522-1.566-.522h-11.267zm-5.744 6.266c-1.044 0-1.566.334-1.044 1.566.522.522 1.044 1.044 1.566 1.044h15.704c1.044 0 1.044-.522 1.044-1.566 0-.522-.522-1.044-1.566-1.044H20.291zm-7.31 6.09c-.523 0-1.045.522-.523 1.566.522.523 1.044.523 1.566.523h19.497c1.044 0 1.38-.523.522-1.567-.522-.522-1.044-.522-1.566-.522H12.98zm104.165-50.792c-14.66 0-26.45 5.22-34.282 14.138-6.788 7.832-10.746 18.275-11.79 30.064v1.044c0 .334 0 1.044.334 1.566.334.522.522 1.044 1.044 1.044h17.408c1.044 0 1.566-.522 1.566-1.566v-.522-.522c.522-5.744 2.61-10.746 5.744-14.66 3.654-4.176 8.876-6.266 15.664-6.266 6.266 0 11.267 1.566 14.66 5.22 3.133 3.133 4.698 7.832 4.698 13.094 0 3.654-.522 6.788-2.088 9.92-1.044 2.61-3.132 5.221-5.744 7.31l-12.834 10.224c-5.221 4.176-9.398 8.876-12.31 14.66-2.61 5.744-4.176 12.532-4.176 20.364v2.61c0 1.044.522 1.566 1.566 1.566h17.408c1.044 0 1.566-.522 1.566-1.566v-2.61c0-5.221.522-9.398 2.088-12.531 1.044-3.133 3.654-6.267 6.788-8.876l12.31-9.92c5.221-4.176 9.398-9.398 12.31-15.143 3.133-5.744 4.699-12.532 4.699-20.364 0-6.788-1.044-12.532-3.654-18.276-2.61-5.744-6.267-10.224-10.746-14.138-4.698-3.654-9.92-6.788-15.665-8.354-5.743-1.566-12.31-2.61-18.575-2.61zm-7.31 112.055c-2.61 0-5.221.522-6.788 2.088-2.088 1.567-3.132 3.655-3.132 6.788 0 2.61 1.044 5.221 3.132 6.788 1.567 1.566 4.177 2.61 6.788 2.61 2.61 0 5.22-1.044 6.787-2.61 2.088-1.567 3.133-4.178 3.133-6.788 0-3.133-1.045-5.22-3.133-6.788-1.566-1.566-4.176-2.088-6.787-2.088zm83.278-106.833c-11.79 0-22.753 2.088-31.671 6.788-8.875 4.176-16.186 10.746-21.93 18.275-5.743 7.832-9.92 16.708-12.531 26.972-2.61 10.224-4.176 20.886-4.176 32.676 0 10.746 1.566 21.408 4.176 31.15 2.61 9.92 6.788 18.797 12.531 26.628 5.744 7.832 13.055 14.138 21.93 18.798 8.918 4.699 19.881 6.787 31.671 6.787 11.79 0 22.754-2.088 31.672-6.787 8.875-4.66 16.186-10.966 21.93-18.798 5.743-7.831 9.92-16.708 12.531-26.628 2.61-9.92 4.176-20.404 4.176-31.15 0-11.79-1.566-22.452-4.176-32.676-2.61-10.224-6.788-19.14-12.531-26.972-5.744-7.529-13.055-14.099-21.93-18.275-8.918-4.7-19.882-6.788-31.672-6.788zm0 17.93c7.31 0 13.577 1.566 19.143 5.22 5.22 3.133 9.92 7.832 13.053 13.576 3.133 5.744 5.744 12.01 7.31 19.32 1.566 6.788 2.61 14.66 2.61 22.23 0 7.309-.522 14.138-2.088 20.404-1.566 6.788-3.655 12.532-6.788 17.753-3.133 5.221-6.788 9.398-11.79 12.531-4.699 3.133-10.224 4.699-16.708 4.699-6.266 0-11.79-1.566-16.708-4.699-4.699-3.133-8.876-7.31-11.79-12.531-3.132-5.221-5.743-11.487-7.31-17.753-1.566-6.788-2.087-13.617-2.087-20.404 0-7.57 1.044-15.442 2.61-22.23 1.565-7.31 4.176-13.576 7.309-19.32 3.133-5.744 7.31-10.443 12.531-13.576 5.744-3.654 12.01-5.22 19.32-5.22h.522z"></path>
    </svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-[1.8rem] h-[1.8rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
    </svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="w-[1.8rem] h-[1.8rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
    </svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-[1.8rem] h-[1.8rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
    </svg>`,
  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-[1.2rem] h-[1.2rem]" xmlns="http://www.w3.org/2000/svg">
        <path d="M435.7 136.1c-37.4-50.2-101.5-83.3-173.7-83.3-117.5 0-213.3 95.8-213.3 213.3s95.8 213.3 213.3 213.3c72.2 0 136.3-33.1 173.7-83.3H376c-29.4 30.1-70.3 48.8-114 48.8-90.1 0-163.3-73.2-163.3-163.3S171.9 118.3 262 118.3c43.7 0 84.6 18.7 114 48.8h59.7z"></path>
    </svg>`,
];

const buildTechMarquee = () => {
  const marqueeContainer = document.getElementById("tech-marquee");

  function createIconSet() {
    const wrapper = document.createElement("div");
    wrapper.className =
      "flex gap-3 text-zinc-400/75 dark:text-zinc-500/75 items-center flex-shrink-0"; // Changed opacity to 40%
    wrapper.innerHTML = techIcons.join("");
    return wrapper;
  }

  // Add two sets for seamless infinite loop
  marqueeContainer.appendChild(createIconSet());
  marqueeContainer.appendChild(createIconSet());

  let position = 0;
  const speed = 0.8;
  let animationId;

  const iconSetWidth = marqueeContainer.firstElementChild.offsetWidth;

  function animate() {
    position -= speed;

    // Reset position for infinite loop
    if (Math.abs(position) >= iconSetWidth) {
      position = 0;
    }

    // Apply transform to each child for smooth animation
    Array.from(marqueeContainer.children).forEach((child) => {
      child.style.transform = `translateX(${position}px)`;
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Clean up on page unload
  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(animationId);
  });
};

// Helper Functions
const createSVG = (svg, className = "") => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" class="${className}" aria-hidden="true">${svg}</svg>`;
};

const createTwitterSVG = (svg) => {
  return `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" 
            height="17" width="17" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
};

// Component Builders
// Component Builders
const buildNavigation = () => {
  const nav = document.getElementById("main-nav");
  let html = "";

  config.navigation.forEach((item) => {
    if (item.type === "divider") {
      html +=
        '<div class="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-700 md:mx-2"></div>';
    } else if (item.type === "cta") {
      html += `
                <a href="${item.href}" 
                   class="bg-black dark:bg-white text-white font-semibold dark:text-black py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-2 md:ml-1">
                    <span class="hidden md:flex">${item.label}</span>
                    <span class="md:hidden">${item.mobileLabel}</span>
                </a>
            `;
    } else {
      const svgContent =
        item.icon === "twitter"
          ? createTwitterSVG(item.svg)
          : createSVG(item.svg);
      const downloadAttr = item.download ? "download" : "";

      html += `
                <div class="flex items-center">
                    <a href="${item.href}" 
                       target="${item.target}" 
                       ${downloadAttr}
                       class="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 dark:hover:bg-zinc-800/20 rounded-[15px]">
                        ${svgContent}
                        <span class="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            ${item.label}
                        </span>
                    </a>
                </div>
            `;
    }
  });

  nav.innerHTML = html;
};

const createProjectCard = (project, isMarquee = false) => {
  return `
        <div class="flex ${isMarquee ? "px-3 md:px-4 flex-shrink-0" : ""}">
            <div class="flex ${
              isMarquee ? "min-w-[320px] md:min-w-[400px]" : ""
            } w-full rounded-[20px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative transition-all hover:scale-[1.02] cursor-pointer"
                style="box-shadow: rgb(255 255 255 / 0.05) 0px 3px 0px 0px inset;">
                <div class="p-6 md:p-8 rounded-[10px]">
                    <div class="relative">
                        <img alt="${
                          project.alt
                        }" draggable="false" loading="lazy" width="400" height="400" 
                             class="w-full h-[200px] md:h-[250px] object-cover rounded-[10px]" src="${
                               project.image
                             }">
                    </div>
                </div>
                ${[
                  "top-3 left-3",
                  "bottom-3 left-3",
                  "top-3 right-3",
                  "bottom-3 right-3",
                ]
                  .map(
                    (pos) =>
                      `<div class="absolute w-2 h-2 ${pos} rounded-full bg-zinc-300 dark:bg-zinc-700"></div>`
                  )
                  .join("")}
            </div>
        </div>
    `;
};

const createProjectGridCard = (project) => {
  return `
        <a href="${
          project.href
        }" class="w-full rounded-[18px] overflow-hidden border border-zinc-200 dark:border-zinc-800 relative transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
            <div class="px-4 pt-4 pb-3 group">
                <div class="relative w-full h-[180px] md:h-[200px] border border-zinc-200 dark:border-zinc-800 rounded-[16px] overflow-hidden">
                    <img alt="${
                      project.alt
                    }" loading="lazy" width="800" height="600" 
                         class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                         src="${project.image}">
                </div>
            </div>
            <div class="px-5 pb-5">
                <h3 class="text-[20px] md:text-[22px] font-semibold mb-2 text-black dark:text-white">${
                  project.title
                }</h3>
                <p class="text-zinc-600 dark:text-zinc-400 text-[14px] md:text-[15px] line-clamp-2">${
                  project.description
                }</p>
                <button class="mt-4 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center rounded-[12px] px-[20px] py-[10px] md:py-[12px] text-[14px] md:text-[15px] font-medium text-black dark:text-white transition-all duration-300 group">
                    <span class="flex items-center group-hover:pr-2 transition-all duration-300">View Project</span>
                    ${createSVG(
                      '<path d="m9 18 6-6-6-6"></path>',
                      "ml-2 w-4 h-4"
                    )}
                </button>
            </div>
        </a>
    `;
};

const buildProjectsMarquee = () => {
  const marquee = document.getElementById("projects-marquee");
  const projectsHTML = config.projects
    .map((p) => createProjectCard(p, true))
    .join("");

  // Duplicate for seamless loop
  marquee.innerHTML = projectsHTML + projectsHTML;
};

const buildProjectGrid = () => {
  const grid = document.getElementById("project-grid");
  const projectsHTML = config.projects
    .map((p) => createProjectGridCard(p))
    .join("");

  grid.innerHTML = `
        ${projectsHTML}
        <div class="col-span-1 md:col-span-2 w-full flex justify-center">
            <a href="/projects">
                <button class="mt-4 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center rounded-[14px] px-[24px] py-[12px] md:py-[14px] text-[14px] md:text-[16px] font-medium text-white dark:text-black transition-all duration-300 group">
                    <span class="flex items-center group-hover:pr-2 transition-all duration-300">View All Projects</span>
                    ${createSVG(
                      '<path d="m9 18 6-6-6-6"></path>',
                      "ml-2 w-4 h-4"
                    )}
                </button>
            </a>
        </div>
    `;
};

const buildSkillsMarquee = () => {
  const marqueeContainer = document.getElementById("skills-marquee");

  function createSkillSet() {
    const wrapper = document.createElement("div");
    wrapper.className = "flex gap-5 flex-shrink-0";

    skills.forEach((skill) => {
      const skillCard = document.createElement("div");
      skillCard.className =
        "bg-white dark:bg-zinc-900 rounded-[16px] px-6 py-3 flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer";
      skillCard.innerHTML = `<h3 class="text-[13px] font-medium text-black dark:text-white whitespace-nowrap">${skill}</h3>`;
      wrapper.appendChild(skillCard);
    });

    return wrapper;
  }

  // Add two sets for seamless loop
  const set1 = createSkillSet();
  const set2 = createSkillSet();

  set1.classList.add("skills-marquee-animation");
  set2.classList.add("skills-marquee-animation");

  marqueeContainer.appendChild(set1);
  marqueeContainer.appendChild(set2);
};

const buildSocialLinks = () => {
  const container = document.getElementById("social-links");

  const linksHTML = socialLinks
    .map(
      (link) => `
        <a 
            class="text-zinc-600 dark:text-zinc-400 cursor-pointer hover:text-black dark:hover:text-white transition-all" 
            href="${link.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${link.name}"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 ${link.name === "Twitter" ? "512 512" : "24 24"}" 
                fill="${link.name === "Twitter" ? "currentColor" : "none"}" 
                stroke="currentColor" 
                stroke-width="${link.name === "Twitter" ? "0" : "2"}" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
                ${link.icon}
            </svg>
        </a>
    `
    )
    .join("");

  container.innerHTML = linksHTML;
};

const handleContactForm = () => {
  const form = document.getElementById("contact-form-element");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Log the form data (you can replace this with your actual form handling logic)
    console.log("Form submitted:", data);

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    form.reset();

    // Here you would typically send the data to your backend/email service
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  });
};

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  buildNavigation();
  buildProjectsMarquee();
  buildProjectGrid();
  buildTechMarquee();
  buildSkillsMarquee();
  buildSocialLinks();
  handleContactForm();
});

document.addEventListener("DOMContentLoaded", buildTechMarquee);
