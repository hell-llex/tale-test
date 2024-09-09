const header = document.querySelector('.header');
const iconSearch = document.querySelector('.icon-search');
const headerFix = document.querySelector('.header-fix');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  if (window.scrollY >= 120) {
    headerFix.classList.add('scrolled');
    iconSearch.classList.add('scrolled');
  } else {
    headerFix.classList.remove('scrolled');
    iconSearch.classList.remove('scrolled');
  }
  if (window.scrollY >= 90) {
    iconSearch.classList.add('scrolled');
  } else {
    iconSearch.classList.remove('scrolled');
  }
});

$(document).ready(function () {
  var owl = $('.owl-carousel').owlCarousel({
    nav: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
    onInitialized: checkNavigationButtons,
    onTranslated: checkNavigationButtons,
    onResized: checkNavigationButtons
  });

  function checkNavigationButtons(event) {
    let stage = $('.owl-stage');
    if (stage.length === 0) return;

    let stageWidth = stage.width();
    let containerWidth = $('.owl-carousel').width();
    let stagePosition = stage.position();

    if (stagePosition) {
      let currentIndex = event.item.index;
      let isAtStart = currentIndex === 0;
      let isAtEnd = Math.ceil(stagePosition.left + stageWidth) <= containerWidth;

      $('.carousel__arrow--prev').toggleClass('disabled', isAtStart);
      $('.carousel__arrow--next').toggleClass('disabled', isAtEnd);
    }
  }

  $('.carousel__arrow--next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.carousel__arrow--prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});