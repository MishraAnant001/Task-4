var x = 2000;
let flag4 = true;
let flag5=true;

document.addEventListener('DOMContentLoaded', () => {
  let activeLink = document.getElementById('dashboard-link');
  activeLink.classList.add('active');
});
document.addEventListener('DOMContentLoaded', () => {
  let activeLink = document.getElementById('sidebar');
  activeLink.style.width = "14rem";
});

const menuLinks = document.querySelectorAll('.nav-link-wrapper');

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    menuLinks.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
    let activeLink = document.getElementById('dashboard-link');
    activeLink.classList.remove('active');
    activeLink = event.currentTarget;
  });
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("London").style.display = "block";
});

$(document).ready(function () {
  $("#btn1").addClass(".active");
});

$(window).resize(function () {
  x = $(this).width();
  sizing();

});
// console.log("outside if"+x);

function sizing()
{
  if (x > 800) {
    console.log("inside if " + x);
    const ele1 = document.getElementById("sidebar");
    ele1.style.display = "block";
    ele1.style.width = "14rem";
    var texts = document.getElementsByClassName("t1");
    for (i = 0; i < texts.length; i++) {
      texts[i].classList.remove("dnone");
      texts[i].classList.add("dinline");
    }
    const ele2 = document.getElementById("sidebarimage");
    ele2.classList.remove("dnone");
    ele2.classList.add("d-flex");
  }
  if (x < 800 && x > 400) {
    console.log("inside second if " + x);
    const ele1 = document.getElementById("sidebar");
    ele1.style.display = "block";
    ele1.style.width = "5rem";
    var texts = document.getElementsByClassName("t1");
    for (i = 0; i < texts.length; i++) {
      texts[i].classList.add("dnone");
    }
    const ele2 = document.getElementById("sidebarimage");
    ele2.classList.remove("d-flex");
    ele2.classList.add("dnone");
  }
  if (x < 400) {
    console.log("inside third if " + x);
    const ele1 = document.getElementById("sidebar");
    ele1.style.display = "none";
  }
}


function togglerfunction() {
  // console.log("outside if inside toggler"+x);
  if (x > 800) {
    // console.log("inside if"+x);
    if (flag4 == true) {
      const ele1 = document.getElementById("sidebar");
      ele1.style.width = "5rem";
      var texts = document.getElementsByClassName("t1");
      for (i = 0; i < texts.length; i++) {
        texts[i].classList.add("dnone");
      }
      const ele2 = document.getElementById("sidebarimage");
      ele2.classList.remove("d-flex");
      ele2.classList.add("dnone");
      flag4 = false;
    }
    else {
      const ele1 = document.getElementById("sidebar");
      ele1.style.width = "14rem";
      var texts = document.getElementsByClassName("t1");
      for (i = 0; i < texts.length; i++) {
        texts[i].classList.remove("dnone");
        texts[i].classList.add("dinline");
      }
      const ele2 = document.getElementById("sidebarimage");
      ele2.classList.remove("dnone");
      ele2.classList.add("d-flex");
      flag4 = true;

    }
  }
  else{
    if (flag5 == true) {
      const ele1 = document.getElementById("sidebar");
      ele1.style.display="block";
      ele1.style.width = "5rem";
      var texts = document.getElementsByClassName("t1");
      for (i = 0; i < texts.length; i++) {
        texts[i].classList.add("dnone");
      }
      const ele2 = document.getElementById("sidebarimage");
      ele2.classList.remove("d-flex");
      ele2.classList.add("dnone");
      flag5 = false;
    }
    else {
      const ele1 = document.getElementById("sidebar");
      ele1.style.display="none";
      flag5 = true;

    }
  }
}