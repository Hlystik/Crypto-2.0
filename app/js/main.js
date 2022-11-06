$(function () {
    /* $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
          $('#accordeon .acc-head').on('click', f_acc);
      });
       
      function f_acc(){
      //скрываем все кроме того, что должны открыть
        //$('#accordeon .acc-body').not($(this).next()).slideUp(500);
        //$('.acc-head').removeClass('acc-head_active');
      // открываем или скрываем блок под заголовком, по которому кликнули
          $(this).next().slideToggle(500);
          $(this).toggleClass('acc-head_active');
      } */
      $('.acc-head').on('click', function () {
        $(this).toggleClass('acc-head_active').next().slideToggle();
        $('.acc-head').not(this).removeClass('acc-head_active').next().slideUp();
          });
          $('#accordeon .acc-head:first').click();
});