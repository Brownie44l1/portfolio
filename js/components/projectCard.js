// js/components/projectCard.js - Reusable project card component

class ProjectCard {
  // Helper to create SVG icons
  static svg(content, cls = "") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${content}</svg>`;
  }

  // Marquee-style card for horizontal scrolling
  static renderMarqueeCard(project) {
    return `
      <div class="flex px-3 md:px-4 flex-shrink-0 min-w-[320px] md:min-w-[400px]">
        <a href="/project-detail.html?id=${project.slug}" class="flex w-full rounded-[20px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative transition-all hover:scale-[1.02] cursor-pointer shadow-[inset_0_3px_0_0_rgba(255,255,255,0.05)]">
          <div class="p-6 md:p-8 rounded-[10px]">
            <img alt="${project.title}" loading="lazy" width="400" height="400" class="w-full h-[200px] md:h-[250px] object-cover rounded-[10px]" src="${project.image}">
          </div>
          <div class="absolute w-2 h-2 top-3 left-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute w-2 h-2 bottom-3 left-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute w-2 h-2 top-3 right-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute w-2 h-2 bottom-3 right-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        </a>
      </div>`;
  }

  // Grid-style card for projects page
  static renderGridCard(project) {
    return `
      <a href="/project-detail.html?id=${
        project.slug
      }" class="w-full rounded-[18px] overflow-hidden border border-zinc-200 dark:border-zinc-800 relative transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
        <div class="px-4 pt-4 pb-3 group">
          <div class="relative w-full h-[180px] md:h-[200px] border border-zinc-200 dark:border-zinc-800 rounded-[16px] overflow-hidden">
            <img alt="${
              project.title
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
            ${this.svg('<path d="m9 18 6-6-6-6"></path>', "ml-2 w-4 h-4")}
          </button>
        </div>
      </a>`;
  }

  // Detailed card for project detail page
  static renderDetailCard(project) {
    const technologiesHTML = project.technologies
      .map(
        (tech) =>
          `<span class="bg-[#e1f9dc] dark:bg-[#1a2e1a] text-[#178d00] dark:text-[#4ade80] px-3 py-1 rounded-full text-sm">${tech}</span>`
      )
      .join("");

    const additionalImages = project.images
      .slice(1)
      .map(
        (img) => `
      <div class="rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] dark:border-zinc-800 bg-[#fafafa] dark:bg-zinc-900 cursor-pointer" style="box-shadow:inset 0px 3px 0px 0px rgb(255, 255, 255)">
        <div class="p-6">
          <img alt="${project.title} screenshot" loading="lazy" width="600" height="400" class="rounded-[20px] w-full object-cover" src="${img}">
        </div>
      </div>
    `
      )
      .join("");

    return `
      <div class="flex flex-col gap-4">
        <h1 class="text-[32px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white">${
          project.title
        }</h1>
        <p class="md:text-[18px] text-zinc-600 dark:text-zinc-400">${
          project.subtitle
        }</p>
      </div>

      <div class="gap-6 bg-[#fafafa] dark:bg-zinc-900 p-6 md:p-8 rounded-[20px] border-[1.5px] border-[#f2f2f2] dark:border-zinc-800">
        <div class="prose max-w-none">
          <h3 class="text-[16px] font-bold mb-1 text-black dark:text-white">Description</h3>
          <p class="text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed">${
            project.longDescription
          }</p>
        </div>

        <div class="flex w-full h-[1px] bg-[#E5E5E5] dark:bg-zinc-800 my-[25px]"></div>
        
        <div>
          <h3 class="text-[16px] font-semibold my-2 text-black dark:text-white">Technologies</h3>
          <div class="flex flex-wrap gap-2">${technologiesHTML}</div>
        </div>

        <div class="flex w-full h-[1px] bg-[#E5E5E5] dark:bg-zinc-800 my-[25px]"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          <div>
            <h3 class="text-[16px] font-semibold mb-2 text-black dark:text-white">Date</h3>
            <p class="text-[14px] text-zinc-600 dark:text-zinc-400">${
              project.date
            }</p>
          </div>
          <div>
            <h3 class="text-[16px] font-semibold mb-2 text-black dark:text-white">Type</h3>
            <p class="text-[14px] text-zinc-600 dark:text-zinc-400">${
              project.type
            }</p>
          </div>
          <div>
            <h3 class="text-[16px] font-semibold mb-2 text-black dark:text-white">Client</h3>
            <p class="text-[14px] text-zinc-600 dark:text-zinc-400">${
              project.client
            }</p>
          </div>
        </div>
      </div>

      <div class="w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] dark:border-zinc-800 bg-[#fafafa] dark:bg-zinc-900" style="box-shadow:inset 0px 3px 0px 0px rgba(255, 255, 255, 0.05)">
        <div class="p-8">
          <div class="relative cursor-pointer" style="filter:drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25))">
            <img alt="${
              project.title
            } main image" loading="lazy" width="1200" height="675" class="w-full rounded-[20px] object-cover" src="${
      project.images[0]
    }">
          </div>
        </div>
      </div>

      ${
        additionalImages
          ? `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">${additionalImages}</div>`
          : ""
      }
    `;
  }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectCard;
}
