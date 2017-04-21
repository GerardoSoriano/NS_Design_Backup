$(document).ready(function(){
  $('div[class^="header"]>div.button').on("click",function(){
    $('div[class^="menu"]').toggleClass('menu menu-min');
    $('div[class^="header"]').toggleClass('header header-max');
    $('div[class^="content"]').toggleClass('content content-max');
  });
});
