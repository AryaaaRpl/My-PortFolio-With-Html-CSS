function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 

ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
  });

  ScrollReveal().reveal('.section__pic-container', { origin: 'top' });
  ScrollReveal().reveal('.section__text, .title', { origin: 'left' });

  ScrollReveal().reveal('.section__text__p2 .experience .details-container', { origin: 'bottom' });
 
const typed = new Typed('.myself', {
  strings: ['GT1XT', 'Animator', 'Designer',],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});