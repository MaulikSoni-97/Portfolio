
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

//   function loadScript(url)
// {    
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     // script.type = 'text/javascript';
//     script.crossOrigin = "anonymous"
//     script.src = url;
//     head.appendChild(script);
// }

// loadScript('https://kit.fontawesome.com/97f2aedd83.js');

