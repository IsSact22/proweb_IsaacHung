$(document).ready(function () {
 
  //window scroll

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })
  //smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);

  })






  //window scroll

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop')

    } else {
      $('#back-to-top').removeClass('scrollTop');

    }
  })


  $('.parent-container').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
      // opciones de galeria
      enabled: true
    }
  });



});
