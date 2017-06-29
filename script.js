$(document).ready(function(){

//checks if element it is called on is visible (only checks horizontally
(function($) {
  var $window = $(window);
  
  $.fn.isVisible = function(){
    var $this = $(this),
      Left = $this.offset().left,
      visibleWidth = $window .width();

    return Left < visibleWidth;  
  }
})(jQuery);

(function($){
  var list = $('.portfolio-items'),
      showVisibleItems = function(){
      list.children('.item:not(.falldown)').each(function(el, i){
          var $this = $(this);
          if($this.isVisible()){
            $this.addClass('falldown');
          }
        });
      };
  
  //initially show all visible items before any scroll starts
  showVisibleItems();
  
  //then on scroll check for visible items and show them
  list.scroll(function(){
    showVisibleItems();
  });
  
  //image hover pan effect
  list.on('mousemove','img', function(ev){
      var $this = $(this),
          posX = ev.pageX, 
          posY = ev.pageY,
          data = $this.data('cache');
    //cache necessary variables
        if(!data){
          data = {};
          data.marginTop = - parseInt($this.css('top')),
          data.marginLeft = - parseInt($this.css('left')),
          data.parent = $this.parent('.view'),
          $this.data('cache', data); 
        }

    var originX = data.parent.offset().left,
        originY =  data.parent.offset().top;
    
       //move image
       $this.css({
          'left': -( posX - originX ) / data.marginLeft,
          'top' : -( posY - originY ) / data.marginTop
       }); 
  });
  
  
  list.on('mouseleave','.item', function(e){
    $(this).find('img').css({
      'left': '0', 
      'top' : '0'
    });
  });
  
})(jQuery);

$("#about").on('click',function(){
  //alert("hello");
  $('.showonClick:not("#about-wrapper")').hide();
  $(".contact-wrapper").hide();
  $(".about-wrapper").show();
})

$("#experience").on('click',function(){
  $('.showonClick:not("#exp-wrapper")').hide();
   $(".contact-wrapper").hide();
  $(".exp-wrapper").show();
})

$("#more").on('click',function(){
  $('.showonClick:not("#more-wrapper")').hide();
   $(".contact-wrapper").hide();
  $(".more-wrapper").show();
})


$("#contact").on('click',function(){
  $(".contact-wrapper").show();
  
   $(".contact-wrapper").hide();
})

$("#projects").on('click',function(){
  $('.showonClick:not("#project-wrapper")').hide();
  $(".contact-wrapper").hide();
  $(".project-wrapper").show();
})

$("#thank").on('click',function(){
  $('.showonClick:not("#contact-wrapper")').hide();
  
  $(".contact-wrapper").show();
})

$(".well").mouseover(function(){
  $(this).toggleClass('flipped');
})

$('.f1_container').click(function() {
    $(this).toggleClass('active');
});

})