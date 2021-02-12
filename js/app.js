/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavMenu() {
    for (const section of sections) {
      const anchor = document.createElement('a');
      const list = document.createElement('li');
      list.className = 'menu__link';
      list.dataset.nav = section.id;
      anchor.textContent = section.dataset.nav;
      anchor.href = '#' + section.id;
      navbar.appendChild(list);
      list.appendChild(anchor);
    }
  }

// Add class 'active' to section when near top of viewport & Scroll to anchor ID using scrollTO event

function navHighlightByScroll() {
  document.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
    if (scroll > sectionTop && scroll <= sectionTop + sectionHeight) {
      document.querySelector('a[href*=' + sectionId + ']').classList.add('active__link');
    } else {
      document.querySelector('a[href*=' + sectionId + ']').classList.remove('active__link');
      }
    });
  });
}

// Change navigation style on scroll

document.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled');
     }
  });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu & Scroll to section on link click

buildNavMenu();

// Set sections as active

navHighlightByScroll();
