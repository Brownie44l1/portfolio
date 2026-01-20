// js/components/marquee.js - Reusable marquee component with infinite scroll

// Unified Marquee Function - Proper infinite scroll
function createMarquee(containerId, items, renderItem, duration = 30) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Marquee container "${containerId}" not found`);
    return;
  }

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

// Legacy class-based Marquee for backwards compatibility
class Marquee {
  constructor(containerId, items, renderFunction, duration = 30) {
    this.containerId = containerId;
    this.items = items;
    this.renderFunction = renderFunction;
    this.duration = duration;
  }

  // Initialize the marquee
  init() {
    createMarquee(
      this.containerId,
      this.items,
      this.renderFunction,
      this.duration
    );
  }

  // Update items and re-render
  update(newItems) {
    this.items = newItems;
    this.init();
  }

  // Static factory methods for common marquee types
  static createProjectMarquee(containerId, projects, duration = 40) {
    const renderCard = (project) => {
      if (typeof ProjectCard !== "undefined") {
        return ProjectCard.renderMarqueeCard(project);
      }
      // Fallback rendering
      return `
        <div class="flex px-3 md:px-4 flex-shrink-0 min-w-[320px] md:min-w-[400px]">
          <div class="flex w-full rounded-[20px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <div class="p-6 md:p-8">
              <img alt="${project.title}" width="400" height="400" class="w-full h-[200px] md:h-[250px] object-cover rounded-[10px]" src="${project.image}">
            </div>
          </div>
        </div>`;
    };

    createMarquee(containerId, projects, renderCard, duration);
  }

  static createTechMarquee(containerId, techIcons, duration = 20) {
    const renderIcon = (icon) => `<div class="flex-shrink-0">${icon}</div>`;
    createMarquee(containerId, techIcons, renderIcon, duration);
  }

  static createSkillsMarquee(containerId, skills, duration = 35) {
    const renderSkill = (skill) => `
      <div class="bg-white rounded-[16px] px-6 py-3 flex items-center hover:scale-105 transition-transform cursor-pointer flex-shrink-0">
        <h3 class="text-[13px] font-medium text-black whitespace-nowrap">${skill}</h3>
      </div>`;

    createMarquee(containerId, skills, renderSkill, duration);
  }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = Marquee;
}
