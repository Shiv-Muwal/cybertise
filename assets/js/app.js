const menulist = document.querySelector(".menulist");
const menuicon = document.querySelector(".menuicon");
const navLink = document.querySelectorAll(".nav_links");
navLink.forEach(a => a.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
    menuicon.classList.toggle("show");
}))
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
window.onload = function() {
    setTimeout(function() {
      var loader = document.querySelector('.preloader-container');
      loader.classList.add("active_new");
    }, 4000); 
    const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.animation = ' expandWidth 10s forwards, fadeOut 5s forwards'; 
      }, index * 200); 
    });
  };