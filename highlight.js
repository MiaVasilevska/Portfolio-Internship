  document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
