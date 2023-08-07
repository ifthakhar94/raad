$(document).ready(function () {
  // Owl Carousel Activation
  $(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
  });

  // Get the current year

  const currentYear = new Date().getFullYear();

  // Display the current year using jQuery
  $("#currentYear").text(currentYear);
});
