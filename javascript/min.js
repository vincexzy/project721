$(".nav li:nth-child(1)").click(function () {
  $(".nav li").css("background-color","#dd41db");
  $(this).css("background-color","#eee");
});
$(".nav li:nth-child(2)").click(function () {
  $(".nav li").css("background-color","#dd41db");
  $(this).css("background-color","#eee");
});
$(".nav li:nth-child(3)").click(function () {
  $(".nav li").css("background-color","#dd41db");
  $(this).css("background-color","#eee");
});


$(window).scroll(function () {
  $(".header").css("position","fixed");
});

$("button").click(function () {
  console.log($(window).scrollTop());
  console.log($(window).height());
  $("html").animate({
    scrollTop:0
  },800);

});
$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
       if ($(window).scrollTop() > 500)
           $("button").fadeIn();
       else
            $("button").fadeOut();
   });
   // $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*
