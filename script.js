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
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 0
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
    onChanged: checkNavigationButtons
  });

  function checkNavigationButtons(event) {
    var totalItems = event.item.count;
    var itemsPerPage = event.page.size;
    var currentIndex = event.item.index;

    if (currentIndex === 0) {
      $('.carousel__arrow--prev').addClass('disabled');
    } else {
      $('.carousel__arrow--prev').removeClass('disabled');
    }

    if (currentIndex + itemsPerPage >= totalItems) {
      $('.carousel__arrow--next').addClass('disabled');
    } else {
      $('.carousel__arrow--next').removeClass('disabled');
    }
  }

  $('.carousel__arrow--next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.carousel__arrow--prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});