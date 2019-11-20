// JavaScript Document
$(document).ready(function() {

    // function changeBg() {

        var bgImg = ["https://dummyimage.com/2500x1200/000000/fff.png", "https://dummyimage.com/2500x1200/dedede/fff.png", "https://dummyimage.com/2500x1200/ffffff/000000.png"];
        var bgImg2 = ["https://dummyimage.com/2500x1200/000000/fff.png", "https://dummyimage.com/2500x1200/dedede/fff.png", "https://dummyimage.com/2500x1200/ffffff/000000.png"];


      var counterBg = 0;

      function nextBg() {
        $(".header").css("background-image", "url(" + bgImg[counterBg = ++counterBg % bgImg.length] + ")");

        setTimeout(nextBg, 5000);
      }

      setTimeout(nextBg, 5000);
      $(".header").css("background-image", "url(" + bgImg[0] + ")");
});
