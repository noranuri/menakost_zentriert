//
// main.js
//

//
//  JQUERY
// jquery  toggle menu button
// src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"

$(document).ready(function() {
  $(".button").click(function() {
    $(" div.topnav").slideToggle("slow", function() {
      // Animation complete.
    });
  });
});

// < !--script for dropdown menu-- >

// Click on icon to toggle between adding and removing the "responsive" class to topnav
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// dropdown - submenu
// toggle between hiding and showing the dropdown content

// Click to show dropdown submenu1
// über mich / kontakt
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

//Click to show dropdown submenu2
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// read-more buttons

// read more button 1
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "mehr lesen";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "weniger lesen";
    moreText.style.display = "inline";
  }
}

// read more button 2
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "mehr lesen";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "weniger lesen";
    moreText.style.display = "inline";
  }
}

// read more button 3
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "mehr lesen";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "weniger lesen";
    moreText.style.display = "inline";
  }
}
