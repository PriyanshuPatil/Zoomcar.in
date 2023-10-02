document.getElementById("continue").addEventListener("click", myfunc);
function myfunc(event) {
  event.preventDefault();
  localStorage.clear("user_data");
  localStorage.clear("login_data");
  alert("Logout Success-Full");
  window.location.href = "home.html";
}
document.querySelector("#back").addEventListener("click", mybackcall);
function mybackcall() {
  event.preventDefault();
  window.location.href = "home.html";
}
