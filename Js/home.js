
document.querySelector(".findcar").addEventListener("click", myevent);
function myevent(event) {
  event.preventDefault();
  window.location.href = "location.html";
}
document.querySelector("#referme").addEventListener("click", myrefer);
function myrefer(event) {
  event.preventDefault();
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.zoomcar";
}

document.querySelector("#promocode").addEventListener("click", mypromo);
function mypromo(event) {
  event.preventDefault();
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.zoomcar";
}

document.querySelector(".mid-small-card").addEventListener("click", mytrip);
function mytrip(event) {
  event.preventDefault();
  window.location.href = "location.html";
}

document.querySelector(".mid-big-card").addEventListener("click", mytrip);
function mytrip(event) {
  event.preventDefault();
  window.location.href = "location.html";
}

document.querySelector("#offers1").addEventListener("click", myoffers1);
function myoffers1(event) {
  event.preventDefault();
  window.location.href = "offers1.html";
}

document.querySelector("#offers2").addEventListener("click", myoffers2);
function myoffers2(event) {
  event.preventDefault();
  window.location.href = "offers2.html";
}

document.querySelector("#offers3").addEventListener("click", myoffers3);
function myoffers3(event) {
  event.preventDefault();
  window.location.href = "offers3.html";
}

document.querySelector("#zms").addEventListener("click", myzms);
function myzms(event) {
  event.preventDefault();
  alert("We are working on this feature");
}

document.querySelector("#host").addEventListener("click", myhost);
function myhost(event) {
  event.preventDefault();
  alert("We are working on this feature");
}

let menu = document.getElementById("menuhu");
menu.addEventListener("click", mymenu);

function mymenu() {
  event.preventDefault();
  window.location.href = "logout.html";
}

let formvalue22 = document.getElementById("aboutus");
formvalue22.addEventListener("change", myfilterf);

function myfilterf() {
  event.preventDefault();
  let Selected = document.querySelector("#aboutus").value;
  if (Selected == "Zoomcar Team") {
    window.location.href = "zoomcar-team.html";
  }
  if (Selected == "Zoomcar Subscription") {
    window.location.href = "zoomcar-team.html";
  }
  if (Selected == "Zoomcar Blog") {
    window.location.href = "zoomcar-team.html";
  }
  if (Selected == "Careers @Zoomcar") {
    window.location.href = "zoomcar-team.html";
  }
}
