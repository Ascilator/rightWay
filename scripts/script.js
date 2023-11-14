$(function () {
  $('.mobile_menu').click(function () {
    $('.menu').toggleClass('_active');
    $('body').toggleClass('_lock');
  });

  $('.services_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_prev'),
    nextArrow: $('.slider_next')
  });

  $('.services_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider_count span').text(currentSlide + 1);
  });

  $('.slider_results_body').slick({
    infinite: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.brand_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    dots: true
  });

  const slider = new RangeSlider($('.allax'), {
    fgColour: '#925AFF', // Foreground colour
    bgColour: '#D2C5FC', // Background colour

    // Starting position
    percentage: 20,

    // Events - will run on touch & mouse triggers
    onDown: function (e, percentage) {},
    onMove: function (e, percentage) {},
    onUp: function (e, percentage) {}
  });
});

function animation() {
  const circles = document.querySelectorAll('.animation_img');

  const animateOne = (item, i) => {
    console.log(item);

    const timeoutId = setTimeout(function () {
      item.style.top = `${90 * i}px`;
      item.parentNode.classList.add('finished');
      console.log(1234);
    }, 1000 * (circles.length - 1 - i));
    return timeoutId;
  };

  const ids = [];
  for (let i = circles.length - 1; i >= 0; i--) {
    console.log(i);
    const animId = animateOne(circles[i], i);
    ids.push(animId);
  }
}

animation();
