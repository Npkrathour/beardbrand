$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000, // Time between slides in milliseconds
  autoplaySpeed: 1000, // Speed of transition between slides in milliseconds
  smartSpeed: 1000, // Speed of transitions when triggered by navigation or pagination in milliseconds
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1440: {
      items: 4,
    },
    1600: {
      items: 5,
    },
  },
});
