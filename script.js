$(document).ready ( function () {

  //  ************NAVIGATION /FULL SCREEN MENU

  /* FADE in the nav icon*/
  $('#nav-container').hide().fadeIn(5500);

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

  $('#header-banner').hide().fadeIn(1000);
  $('#tag-line').hide().css("background","black").fadeIn(3500);
  $('#header-name').hide().fadeIn(5500);



// **********ABOUT SUMMARY EFFECT
  $('#about-summary').hide().slideDown(5500);



// **********PROJECT LEARN MORE & VIEW
  $('.learn-view').hide();
  //
  $('.projects-each').hover(
      //mouse in
      function () {
          $('.learn-view', this).fadeIn(2500);},

      //mouse out
      function () {
          $('.learn-view', this).hide();}
  );


//************PROJECT OVERLAYS


//*****THE CODE REV PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#code-review-i').click (function (){
    $('#code-review').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#code-review').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#code-review').css("width","0%");
});


//*****THE CORGI SVG PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#corgi-svg-i').click (function (){
    $('#corgi-svg').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#corgi-svg').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#corgi-svg').css("width","0%");
});





// **********END DOC READY FUNCTION
});
