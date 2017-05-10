$(document).ready ( function () {

  //  ************NAVIGATION /FULL SCREEN MENU

  /* FADE in the nav icon*/
  $('#nav-container').hide().fadeIn(1500);

  /* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

  $('#nav-container').click (function (){
      $('#myNav').css("width","100%");
  });

  /* Close when someone clicks on the "x" symbol inside the overlay */
  $('.closebtn').click(function () {
        $('#myNav').css("width","0%");
  });

  /*Close when any of the menu items clicked*/

  $('.overlay-content a').click(function () {
        $('#myNav').css("width","0%");
  });




// *************HEADER EFFECTS

  $('#tag-line').hide().css("background","black").fadeIn(3500);
  $('#header-name').hide().fadeIn(5500);



// **********ABOUT SUMMARY EFFECT
  $('#about-summary').hide().slideDown(5500);

});
