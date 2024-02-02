$(function () {
  $('.mobile_menu').click(function () {
    $('.menu').toggleClass('_active');
    $('body').toggleClass('_lock');
  });

  $('._load_more_1').click(function () {
    $(this).parent().siblings('.header_wrapper').toggleClass('_active');
  });

  $('.topic').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $(`#_${$(this).attr('id')}`).offset().top }, 1000);
    e.preventDefault();
  });

  $('.show_more').click(function () {
    $(this).siblings('.add_con').slideToggle();
  });

  if (document.body.clientWidth < 600) {
    $('.slider_purple').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });

    $('.benefits_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });

    $('.brands_slider_small').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });

    $('._cdp_tags').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });

    $('.resuts_of_work').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });

    $('._slider_ben').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });
  } else {
    $('.brand_slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: true
    });
  }

  $('._case_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    variableWidth: true,
    prevArrow: $('.arrows_slider>.prev'),
    nextArrow: $('.arrows_slider>.next'),
    responsive: [
      {
        breakpoint: 850,
        settings: {
          variableWidth: false
        }
      }
    ]
  });

  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.team_prev'),
    nextArrow: $('.team_next'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      }
    ]
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
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    dots: true,
    appendDots: $('.slider_results_dots'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  const slider = new RangeSlider($('.allax'), {
    fgColour: '#925AFF', // Foreground colour
    bgColour: '#D2C5FC', // Background colour

    // Starting position
    percentage: 20,

    // Events - will run on touch & mouse triggers
    onDown: function (e, percentage) {},
    onMove: function (e, percentage) {
      const people = Math.ceil(percentage * 100000 * 0.01);
      const priceForOne = 1;
      let priceOfProducts = 0;
      document.querySelectorAll('._product').forEach(el => {
        const price = el.getAttribute('price');
        const value = el.querySelector('input').checked;
        if (value) {
          priceOfProducts += Number(price);
        }
      });

      const summ = Math.ceil(people * priceForOne + Number(priceOfProducts));
      $('#price').html(summ + '<span> руб./мес</span>');
    },
    onUp: function (e, percentage) {}
  });

  const slider2 = new RangeSlider($('.allax2'), {
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

function gallery() {
  document.querySelectorAll('.slider_item_gallery').forEach(el => {
    el.addEventListener('click', function () {
      console.log(this);
      document.querySelector('.gallery_container').classList.add('_active');
      document.querySelector('.gallery_container').innerHTML = this.cloneNode().outerHTML;
    });
  });

  document.querySelector('.gallery_container').addEventListener('click', function () {
    this.classList.remove('_active');
    document.querySelector('.gallery_container').innerHTML = '';
  });
}

$('.open_add_block').click(function () {
  $(this).siblings('.block_more').slideToggle();
});

gallery();

//  $('.problem_item').click(function () {
//    $('.cheap_container')
//      .not($('.cheap_container').eq($(this).index()))
//      .hide();
//    $('.problem_item')
//      .not($('.cheap_container').eq($(this).index()))
//      .removeClass('_active');

//    $('.problem_item').eq($(this).index()).addClass('_active');
//    $('.cheap_container').eq($(this).index()).fadeIn();
//  });

$('.tab_interactive_body').not($('.tab_interactive_body').eq(0)).hide();

$('.tab_header_item').click(function () {
  if (document.body.clientWidth > 600) {
    $('.brand_slider').slick('refresh');
  }
  $('.tab_interactive_body')
    .not($('.tab_interactive_body').eq($(this).index()))
    .hide();
  $('.tab_header_item')
    .not($('.tab_interactive_body').eq($(this).index()))
    .removeClass('_active');

  $('.tab_header_item').eq($(this).index()).addClass('_active');
  $('.tab_interactive_body').eq($(this).index()).fadeIn();
});
