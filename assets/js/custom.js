$(document).ready(function () {
  // Main nav selected class switcher
  $(".header-nav .nav-link").click(function () {
    // Remove active class from all menu items
    $(".header-nav .nav-link").removeClass("selected");

    // Add active class to the clicked menu item
    $(this).addClass("selected");
  });

  // News Ticker initialization
  $("#news-ticker-items").vTicker({
    speed: 700,
    pause: 3000,
    showItems: 1,
    mousePause: true,
    height: 0,
    animate: true,
    margin: 0,
    padding: 0,
    startPaused: false,
  });

  // Inspiration Owl Carousel Activation
  $(".inspiration .owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
  });

  // Hero Slider Owl Carousel Activation
  $(".hero-slider-news .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
  });

  // Get the current year

  const currentYear = new Date().getFullYear();

  // Display the current year using jQuery
  $("#currentYear").text(currentYear);

  // Initialize the ScrollTo plugin
  $("#scrollToTopBtn").click(function () {
    $.scrollTo(0, 300); // Scroll to top with a duration of 800 milliseconds
  });
});
