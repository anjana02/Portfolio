function validate() {
    sname = document.getElementById("name").value;
    semail = document.getElementById("email").value;
    ssubj = document.getElementById("subj").value;
    smessg = document.getElementById("messg").value;
    sfeedback = document.getElementById("feedback").value;
    if (sname == "" || semail == "" || ssubj == "" || smessg == "" || sfeedback == "") {
        alert("Fields should not be empty");
        return false;
    }
    else if (!sname.match(/^[A-Za-z]+$/)) {
        alert("Name should contain only characters")
        return false;
    }
    else if (!semail.match(/^\d{10}$/)) {
        alert("email id Not valid")
        return false;
    }
    else if (!ssubj.match(/^\d{6}$/)) {
        alert("Subject is Not valid")
        return false;
    }
    alert("Valid");
    return false;
}
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
  }
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}  
$(window).load(function() {
    $(".loader").fadeOut("slow");
});
$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
         $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: [ "Student", "TeambiO's", "Pentester", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [ "Student", "TeambiO's", "Pentester", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});