var $swiperSelector = $(".slider-1");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 3;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// ==================

$(document).ready(function () {
  $("a").click(function () {
    var largeImage = $(this).attr("data-full");
    $(".selected").removeClass();
    $(this).addClass("selected");
    $(".full img").hide();
    $(".full img").attr("src", largeImage);
    $(".full img").fadeIn();
  });

  $(".full img").on("click", function () {
    var modalImage = $(this).parent().html();
    $.fancybox.open(modalImage);
  });
});

// ==================increment decrement
var number = 1;
document.getElementById("counting").innerText = number;
function increment() {
  number = number + 1;
  document.getElementById("counting").innerText = number;
}
function decremnt() {
  const counting = document.getElementById("counting");

  if (typeof +counting.innerText === "number" && +counting.innerText > 0) {
    number = number - 1;
    counting.innerText = number;
  }
}

// =====================cart =========
var number = 1;
document.getElementById("count").innerText = number;
function increament() {
  number = number + 1;
  document.getElementById("count").innerText = number;
}
function decreamnt() {
  const counting = document.getElementById("count");

  if (typeof +count.innerText === "number" && +count.innerText > 0) {
    number = number - 1;
    count.innerText = number;
  }
}
