// Agriculture Hub Custom JS

// Navbar active link on page load/click + scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage === 'index.html' && link.getAttribute('href') === '#')) {
      link.classList.add('active');
    }
    
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Close mobile menu
      const navCollapse = document.querySelector('.navbar-collapse');
      if (navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });

  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert('Please fill all fields');
    return false;
  }
  
  if (!email.includes('@')) {
    alert('Please enter valid email');
    return false;
  }
  
  alert('Thank you! Message sent successfully.');
  return true;
}

// Initialize carousel if present
if (document.querySelector('.carousel')) {
  const carousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
    interval: 5000,
    wrap: true
  });
}

// Mobile navbar collapse toggle enhancement
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
  navbarToggler.addEventListener('click', function() {
    const navCollapse = document.querySelector('.navbar-collapse');
    navCollapse.classList.toggle('show');
  });
}
