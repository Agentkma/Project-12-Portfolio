$(document).ready ( function () {

  //  ************NAVIGATION /FULL SCREEN MENU

  /* FADE in the nav icon*/
  $('#nav-container').hide().fadeIn(7500);

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

  $('#header-banner').hide().fadeIn(3000);
  $('#tag-line').hide().css("background","black").fadeIn(1500);
  $('#header-name').hide().fadeIn(3500, function (){

      $('#header-learn-more').hide().show("shake", { times: 2 }, {distance: 10},'1000' );
  });





// // **********ABOUT SUMMARY & SKILLS
//  smooth scroll to section when learn-more clicked
$('#header-learn-more').click( function () {

    $('html, body').animate({
    scrollTop: $("#about-summary").offset().top
  }, 1000);


});

// SKILLS SECTION HIDDEN ON LOAD
$('#about-skills').hide();

// WHEN LEARN MORE CLICKED...FADE IN SKILLS SECTION
$('#about-learn-more').click( function () {
    $('#about-summary').toggle('explode');
    $('#about-learn-more').hide();
    $('#about-skills').fadeIn(3000);
});





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


//*****THE GALLERY DE KMA PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#gallery-kma-i').click (function (){
    $('#gallery-kma').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#gallery-kma').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#gallery-kma').css("width","0%");
});

//*****THE KEV APP PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#kev-app-i').click (function (){
    $('#kev-app').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#kev-app').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#kev-app').css("width","0%");
});

//*****THE CUSTOM VIDEO PLAYER PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#custom-video-i').click (function (){
    $('#custom-video').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#custom-video').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#custom-video').css("width","0%");
});

//*****THE CSS TO SASS PROJECT

/* Open FULLSCREEN MENU when someone clicks on the BUTTON element */

$('#css-to-sass-i').click (function (){
    $('#css-to-sass').css("width","100%");
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.closebtn').click(function () {
      $('#css-to-sass').css("width","0%");
});

/*Close when any of the menu items clicked*/

$('.overlay-content a').click(function () {
      $('#css-to-sass').css("width","0%");
});


// **********END DOC READY FUNCTION
});
