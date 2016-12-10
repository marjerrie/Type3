$(document).ready(function() {
  // Fix outside links.
BRUSHED.listenerMenu = function(){
    $('.linkfix_LogIn a').on('click',function() {           
      window.location.href = "about.html";  // Change This
    }

    $('.linkfix_LogIn a').on('click',function() {           
      window.location.href = "history.html";  // Change This
    }

    $('.linkfix_LogIn a').on('click',function() {           
      window.location.href = "stories.html";  // Change This
    }

    $('.linkfix_LogIn a').on('click',function() {           
      window.location.href = "submit.html";  // Change This
    }

    $('.linkfix_LogIn a').on('click',function() {           
      window.location.href = "join.html";  // Change This
    }
  });*/
  
  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });

  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
      }, 500);
  });


  //change the integers below to match the height of your upper div, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  var headerHeight = $("header.hero").outerHeight();
  var $nav = $("nav.nav");

  $('body').click($nav, function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  
  $(window).scroll(function () {
    console.log("scrollTop: " + $(window).scrollTop());
    console.log("headerHeight: " + headerHeight);

    if ($(window).scrollTop() > headerHeight) {
      $("body").addClass('nav-fixed-top');
      $nav.addClass('nav-fixed-top');
    } else {
      $("body").removeClass('nav-fixed-top');
      $nav.removeClass('nav-fixed-top');
    }
  });





});