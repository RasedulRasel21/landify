(function ($) {
    $(".header-menu-bar").on("click", function () {
      $("body").addClass("body-mobile-menu");
    });
    $(".header-mobile-close").on("click", function () {
      $("body").removeClass("body-mobile-menu");
    });
    $(".breadcrumb-nav-mobile h2").on("click", function () {
      $(".breadcrumb-nav-mobile ul").slideToggle();
    });
  })(jQuery);