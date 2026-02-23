// Smooth scrolling for navigation links
document.querySelectorAll('nav#sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update active state
      document.querySelectorAll('nav#sidebar a').forEach(a => a.style.color = '');
      this.style.color = 'var(--accent)';
      this.style.fontWeight = '600';
    }
  });
});

// Highlight current section in navbar as user scrolls
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav#sidebar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    link.style.fontWeight = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
      link.style.fontWeight = '600';
    }
  });
});

// Initialize: highlight first nav link
if (navLinks.length > 0) {
  navLinks[0].style.color = 'var(--accent)';
  navLinks[0].style.fontWeight = '600';
}
