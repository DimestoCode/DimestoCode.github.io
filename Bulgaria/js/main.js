
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(document).ready(function(){
  $('.reviews-slider').slick({
  	prevArrow: '<div class="col-md-1 arrow-left text-right d-none d-md-block"><i class="fas fa-chevron-left img"></i></div>',
  	nextArrow: '<div class="col-md-1 arrow-right text-right d-none d-md-block"><i class="fas fa-chevron-right img"></i></div>',
  	dots: true
  });
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


