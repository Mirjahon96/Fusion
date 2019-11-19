// Scroll to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 20
  ) {
    document.querySelector('.back-to-top').style.display = 'block';
  } else {
    document.querySelector('.back-to-top').style.display = 'none';
  }
}


// Scrollfire
window.addEventListener('scroll', function (e) {
  var nav = document.getElementById('navbar');
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');

  }
});

$(document).ready(function () {
  $(".btn-collapse").click(function () {
    $(".collapse").toggle();
    let wide = document.width
    wide = '700px';
    if ('.collapse'.width >= wide) {
      hide('.collapse')
    }
  });
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass: true,
  responsive: {
    0: {
      nav: false,
      items: 1
    },
    600: {
      nav: false,
      items: 1
    },
    1000: {
      nav: false,
      loop: true,
      items: 3
    }
  }
})

$(document).ready(function () {
  new WOW().init()

})
