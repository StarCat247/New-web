// ================================
// Static Data (Services, Projects, Testimonials)
// ================================
const servicesData = [
    {
        id: 1,
        serviceName: "Technology Consulting",
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
               </svg>`,
        shortDescription: "Strategic technology guidance to accelerate your digital transformation journey.",
        longDescription: "Our expert consultants analyze your current technology stack and provide comprehensive roadmaps for digital transformation, helping you make informed decisions about technology investments."
    },
    {
        id: 2,
        serviceName: "Product Development",
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" stroke-width="2"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" stroke-width="2"/>
               </svg>`,
        shortDescription: "End-to-end product development from concept to market-ready solutions.",
        longDescription: "We build scalable, user-centric products using cutting-edge technologies and agile methodologies, ensuring rapid time-to-market and exceptional user experiences."
    },
    {
        id: 3,
        serviceName: "Digital Solutions",
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" stroke-width="2" fill="currentColor"/>
               </svg>`,
        shortDescription: "Custom digital solutions tailored to your specific business needs.",
        longDescription: "From web applications to mobile apps and enterprise systems, we create powerful digital solutions that streamline operations and drive business growth."
    },
    {
        id: 4,
        serviceName: "Innovation Strategy",
        icon:  `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
               </svg>`,
        shortDescription: "Strategic innovation frameworks to keep you ahead of the competition.",
        longDescription: "We help organizations develop innovation strategies, implement emerging technologies, and create cultures of continuous improvement and technological advancement."
    }
];

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform Redesign",
        image: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=project-ecommerce",
        description: "Complete redesign and development of a modern e-commerce platform with enhanced user experience and mobile optimization.",
        dateCompleted: "2024-01-15",
        projectUrl: "#"
    },
    {
        id: 2,
        title: "Healthcare Management System",
        image: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=project-healthcare",
        description: "Comprehensive healthcare management system with patient portal, appointment scheduling, and telemedicine capabilities.",
        dateCompleted: "2023-11-20",
        projectUrl: "#"
    },
    {
        id: 3,
        title: "Financial Analytics Dashboard",
        image: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=project-analytics",
        description: "Real-time financial analytics dashboard with advanced reporting and data visualization for investment firms.",
        dateCompleted: "2023-09-10",
        projectUrl: "#"
    },
    {
        id: 4,
        title: "AI-Powered Chatbot",
        image: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=project-chatbot",
        description: "Intelligent chatbot solution with natural language processing for customer service automation.",
        dateCompleted: "2023-12-05",
        projectUrl: "#"
    },
    {
        id: 5,
        title: "Supply Chain Optimization",
        image: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=project-supply",
        description: "End-to-end supply chain management system with IoT integration and predictive analytics.",
        dateCompleted: "2024-02-28",
        projectUrl: "#"
    },
    {
        id: 6,
        title: "Mobile Learning Platform",
        image: "images/moblie learning.png",
        description: "Interactive mobile learning platform with gamification and progress tracking for educational institutions.",
        dateCompleted: "2023-10-15",
        projectUrl: "#"
    }
];

const testimonialsData = [
    {
        id: 1,
        clientName: "Sarah Johnson",
        clientPhoto: "images/Sarah Johnson.png",
        quote: "Star Technologies transformed our entire digital infrastructure. Their expertise and dedication to our project was exceptional. We saw a 300% increase in efficiency within the first quarter.",
        clientCompany: "InnovateCorp",
        rating: 5
    },
    {
        id: 2,
        clientName: "Michael Chen",
        clientPhoto: "https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=client-michael",
        quote: "Working with Star Techologies was a game-changer for our startup. They delivered a world-class product that exceeded our expectations and helped us secure Series A funding.",
        clientCompany: "StartupXYZ",
        rating: 5
    },
    {
        id: 3,
        clientName: "Emily Rodriguez",
        clientPhoto: "images/Emily Rodriguez.png",
        quote: "The team at Star Technologies is incredibly talented and professional. They understood our vision perfectly and brought it to life with cutting-edge technology solutions.",
        clientCompany: "TechVentures",
        rating: 5
    }
];

// ================================
// DOM Elements
// ================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submitText = document.getElementById('submitText');

// Defensive checks if IDs not present (prevent errors)
function el(id) { return document.getElementById(id); }

// ================================
// Navigation functionality
// ================================
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
  });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.offsetTop - headerHeight - 8;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  }
}

// Add click listeners to in-page links (prevent default anchor jump)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          scrollToSection(targetId);
      }
  });
});

// ================================
// Contact form functionality (safe guard if element missing)
// ================================
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (submitText) submitText.textContent = 'Sending...';
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 900));

      if (successMessage) successMessage.classList.remove('hidden');
      contactForm.reset();

      if (submitText) submitText.textContent = 'Send Message';
      if (submitBtn) submitBtn.disabled = false;

      setTimeout(() => {
          if (successMessage) successMessage.classList.add('hidden');
      }, 3000);
  });
}

// ================================
// Header scrolled class toggle
// ================================
function handleHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 100);
}
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('load', handleHeaderScroll);

// ================================
// Load dynamic content (keeps your original data)
// ================================
function loadServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  if (!servicesGrid) return;
  servicesGrid.innerHTML = ''; // clear placeholders
  servicesData.forEach((service, index) => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.style.animationDelay = `${index * 0.08}s`;

      serviceCard.innerHTML = `
          <div class="service-icon">${service.icon}</div>
          <h3 class="service-title">${service.serviceName}</h3>
          <p class="service-description">${service.shortDescription}</p>
          ${service.longDescription ? `<p class="service-description" style="font-size:.9rem; opacity:.75">${service.longDescription}</p>` : ''}
          <div class="service-link">Learn More →</div>
      `;
      servicesGrid.appendChild(serviceCard);
  });
}

function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  projectsData.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.style.animationDelay = `${index * 0.08}s`;

      const date = project.dateCompleted ? new Date(project.dateCompleted).toLocaleDateString() : '';

      projectCard.innerHTML = `
          <div class="project-image"><img src="${project.image}" alt="${project.title}"></div>
          <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-footer">
                  <div class="project-date">${date}</div>
                  <a href="${project.projectUrl}" class="project-link">View Project →</a>
              </div>
          </div>
      `;
      projectsGrid.appendChild(projectCard);
  });
}

function loadTestimonials() {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (!testimonialsGrid) return;
  testimonialsGrid.innerHTML = '';
  testimonialsData.forEach((testimonial, index) => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'testimonial-card';
      testimonialCard.style.animationDelay = `${index * 0.08}s`;

      const stars = Array.from({ length: 5 }, (_, i) =>
          `<span class="star ${i < testimonial.rating ? '' : 'empty'}">★</span>`
      ).join('');

      const avatarContent = testimonial.clientPhoto
          ? `<img src="${testimonial.clientPhoto}" alt="${testimonial.clientName}">`
          : `<div class="avatar-initial">${testimonial.clientName.charAt(0)}</div>`;

      testimonialCard.innerHTML = `
          <div class="testimonial-rating">${stars}</div>
          <blockquote class="testimonial-quote">"${testimonial.quote}"</blockquote>
          <div class="testimonial-author">
              <div class="author-avatar">${avatarContent}</div>
              <div>
                  <div class="author-name">${testimonial.clientName}</div>
                  <div class="author-company">${testimonial.clientCompany}</div>
              </div>
          </div>
      `;
      testimonialsGrid.appendChild(testimonialCard);
  });
}

// ================================
// Intersection Observer for reveals
// ================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target); // reveal once
      }
  });
}, observerOptions);

// Helper: observe a list of selector strings
function observeSelectors(selectors) {
  selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
          observer.observe(el);
      });
  });
}

// ================================
// Active nav highlighting on scroll
// ================================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = 120; // header offset
      if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + section.clientHeight - offset) {
          current = section.getAttribute('id');
      }
  });
  navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href === `#${current}`) link.classList.add('active');
  });
}
window.addEventListener('scroll', updateActiveNavLink);

// ================================
// Image preloading for performance
// ================================
function preloadImages() {
  const imageUrls = [
      ...projectsData.map(p => p.image),
      ...testimonialsData.filter(t => t.clientPhoto).map(t => t.clientPhoto)
  ];
  imageUrls.forEach(url => { const img = new Image(); img.src = url; });
}

// ================================
// Typing effect for hero description
// ================================
function typeWriter(element, text, speed = 40, cb) {
  if (!element) return;
  element.textContent = '';
  let i = 0;
  function typing() {
      if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typing, speed);
      } else if (typeof cb === 'function') {
          cb();
      }
  }
  typing();
}

// ================================
// Loading placeholder + init
// ================================
function showLoadingState(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:160px;color:var(--color-accent-neon-green);">
          <div style="text-align:center;">
              <div style="font-size:1.6rem;margin-bottom:8px;">⏳</div>
              <div>Loading...</div>
          </div>
      </div>
  `;
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Ensure content placeholders are visible as loading
  showLoadingState('servicesGrid');
  showLoadingState('projectsGrid');
  showLoadingState('testimonialsGrid');

  // Load content with small stagger
  setTimeout(() => { loadServices(); observeSelectors(['.service-card']); }, 250);
  setTimeout(() => { loadProjects(); observeSelectors(['.project-card']); }, 500);
  setTimeout(() => { loadTestimonials(); observeSelectors(['.testimonial-card']); }, 800);

  // Observe some static sections for reveal
  observeSelectors(['.about-content', '.about-image', '.contact-form-container', '.contact-info']);

  // Preload heavy images
  preloadImages();

  // Typing effect (uses hero-description text already in HTML)
  const tagline = document.querySelector(".hero-description");
  if (tagline) {
      const original = tagline.textContent.trim();
      typeWriter(tagline, original, 36);
  }
});


const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme
if (currentTheme === "light") {
  document.documentElement.classList.add("light-mode");
  themeToggle.textContent = "☀️";
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");

  if (document.documentElement.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});



