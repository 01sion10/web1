$(document).ready(function() {
  $(".nav>li").mouseenter(function() {
    $(this).find(".sub").stop().slideDown();
  });
  $(".nav>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
  });
});
