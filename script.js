/**
 * Modern Portfolio Website
 * JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the application
  initApp();
});

/**
 * Initialize the application
 */
function initApp() {
  // Load projects from JSON
  loadProjects();
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Setup animations
  setupAnimations();
  
  // Setup scroll effects
  setupScrollEffects();
}

/**
 * Load projects from JSON file
 */
async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    const data = await response.json();
    
    if (data && data.projects) {
      renderProjects(data.projects);
    }
  } catch (error) {
    console.error('Error loading projects:', error);
    document.getElementById('projects-grid').innerHTML = '<p>Failed to load projects. Please try again later.</p>';
  }
}

/**
 * Render projects to the DOM
 * @param {Array} projects - Array of project objects
 */
function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) {
    console.error('Projects grid element not found');
    return;
  }
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
  // Add each project
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

/**
 * Create a project card element
 * @param {Object} project - Project data
 * @returns {HTMLElement} - Project card element
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = `project-card ${project.status}`;
  
  const statusLabel = project.status === 'live' ? 'Live' : 'In Progress';
  const statusClass = project.status === 'live' ? 'status-live' : 'status-pending';
  
  // Create the link element based on project URL
  const linkSection = project.url 
    ? `<a href="${project.url}" target="_blank" class="project-link">
         View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
         </svg>
       </a>`
    : '';
  
  // Create tags HTML
  const tagsHtml = project.technologies
    .map(tech => `<span class="project-tag">${tech}</span>`)
    .join('');
  
  // Set card HTML
  card.innerHTML = `
    <div class="project-header">
      <h3 class="project-title">${project.name}</h3>
      <span class="project-status ${statusClass}">${statusLabel}</span>
    </div>
    <p class="project-description">${project.description}</p>
    <div class="project-tags">
      ${tagsHtml}
    </div>
    ${linkSection}
  `;
  
  return card;
}

/**
 * Setup mobile navigation
 */
function setupMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (!menuBtn || !navMenu) return;
  
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });
}

/**
 * Setup animations for UI elements
 */
function setupAnimations() {
  // Animate elements when they enter the viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animate class
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Setup scroll effects
 */
function setupScrollEffects() {
  // Parallax effect for shapes
  const shapes = document.querySelectorAll('.shape');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Update header transparency
    const header = document.querySelector('.header');
    if (header) {
      header.style.backgroundColor = scrollY > 50 
        ? 'rgba(5, 8, 18, 0.95)' 
        : 'rgba(5, 8, 18, 0.8)';
    }
    
    // Parallax effect for shapes
    shapes.forEach((shape, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = scrollY * speed;
      shape.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/**
 * Typing animation for hero text
 */
class TypeWriter {
  constructor(el, text, speed = 100) {
    this.el = el;
    this.text = text;
    this.speed = speed;
    this.idx = 0;
    this.type();
  }
  
  type() {
    if (this.idx < this.text.length) {
      this.el.textContent += this.text.charAt(this.idx);
      this.idx++;
      setTimeout(() => this.type(), this.speed);
    }
  }
}

// Initialize typing animation if element exists
document.addEventListener('DOMContentLoaded', () => {
  const typeElement = document.querySelector('.typing-animation');
  if (typeElement) {
    const text = typeElement.getAttribute('data-text');
    if (text) {
      typeElement.textContent = '';
      new TypeWriter(typeElement, text, 80);
    }
  }
});