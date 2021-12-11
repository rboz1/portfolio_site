document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      drag: "true",
      classes: {
        arrows: 'splide__arrows',
        arrow : 'splide__arrow',
        prev  : 'splide__arrow--prev',
        next  : 'splide__arrow--next'
      },
    } );
    splide.mount();
  } );