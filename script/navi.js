// We select the menu div from DOM along with Navlist(ul)
const menu = document.querySelector(".menu-icon");
// const links = document.querySelector(".nav-links");
const mobileNav = document.querySelector("ul");


$(function() {
  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>` tag.
  // Example: 
  // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);    

  }
  $('[data-scroll]').on('click', scrollToSection);
});


// We attach an eventListener on menu so it will listen to whenever we click on menu
menu.addEventListener("click", function () {
  // We toggle the open class on click which makes our navList visible
  // If the class is there it will remove it else will add it on click
  mobileNav.classList.toggle("open"); 
});
document.querySelectorAll('.nav-links').forEach(item => {
  item.addEventListener('click', function () {
    mobileNav.classList.toggle("open");
  });
}); 













  

// loadScript('https://kit.fontawesome.com/97f2aedd83.js');
