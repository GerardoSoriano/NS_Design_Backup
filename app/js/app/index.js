$(document).ready(function(){
  $('div[class*="content"]>div.header>div.button').on("click",function(){
    $('div[class^="menu"]').toggleClass("menu menu-min");
    $('div[class*="content"]').toggleClass("content content-max");
  });
});
