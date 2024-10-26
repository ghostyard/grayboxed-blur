$.fn.extend({
    qcss: function(css) {
       return $(this).queue(function(next) {
          $(this).css(css);
          next();
       });
    }
 });

$('#headermove').click(function() {
    $('#bg').css('background-position', '20%');
    $('.innertxt').fadeOut();
    window.setTimeout(function(){
        jQuery('.parent').toggleClass("active");
    }, 0);
    window.setTimeout(function(){
        jQuery('.circle').toggleClass("expand");
    }, 500);
  });

