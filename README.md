# Landing Page Project

## Table of Contents

***

* [Instructions](#instructions)
* [Index.html](#index)
* [Styles.css](#styles)
* [App.js](#app)

***

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open *`js/app.js`* and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

***

### *Index.html*

*`The index.html`* file is the structure of the document. This file was provided by *`Udacity`* for styling and creating interactivity for site navigation.

***

### *Styles.css*

*`The style.css`* file was kindly provided by *`Udacity`* to style the site. This file was supplemented with styles for the site navigation menu, its active and inactive states.

***

### *App.js*

To create the interactivity of the navigation menu, the  *`App.js`* file was written. The *`function buildNavMenu()`* allows you to create a navigation menu with `'li'` and `'anchor'` elements: 

```
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
 
  ```
To add and remove active states of the navigation menu and highlight the current section of navigation  when scrolling, it can be used the *`function navHighlightByScroll()`*:
```
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
```
 And to change navigation style on scroll the following code can be used:
```
document.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled');
     }
  }); 
```