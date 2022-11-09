$(function () {
  $("a[href*='#']").on("click", function (e) {
    const anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
  //первый слайд
  /* $('.acc-head').on('click', function (e) {
    e.preventDefault();
    $(this).next('.acc-body').slideToggle('.faq__accordeon');
    $(this).toggleClass('acc-head_active');
  }); */
  //второй слайд
  $('.acc-head').on('click', function () {
    $(this).toggleClass('acc-head_active').next().slideToggle();
    $('.acc-head').not(this).removeClass('acc-head_active').next().slideUp();
  });
  $('#accordeon .acc-head:first').click();
});
