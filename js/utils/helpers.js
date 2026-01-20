// js/utils/helpers.js - Helper functions

const Helpers = {
  // Get URL parameter
  getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  // Find project by slug
  findProjectBySlug(projects, slug) {
    return projects.find((p) => p.slug === slug);
  },

  // Get featured projects
  getFeaturedProjects(projects) {
    return projects.filter((p) => p.featured);
  },

  // Truncate text
  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  },

  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Format date
  formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },

  // Smooth scroll to element
  scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Get next/previous project
  getAdjacentProject(projects, currentSlug, direction = "next") {
    const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) return null;

    if (direction === "next") {
      return projects[(currentIndex + 1) % projects.length];
    } else {
      return projects[(currentIndex - 1 + projects.length) % projects.length];
    }
  },
};

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = Helpers;
}
