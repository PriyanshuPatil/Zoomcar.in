document.querySelector("#continue").addEventListener("click", mycall);
function mycall(event) {
  event.preventDefault();
  let data = JSON.parse(localStorage.getItem("User-data")) || [];
  let obj = {
    mobiledata: document.getElementById("inputmobile").value,
    emaildata: document.getElementById("inputemail").value,
  };
  data.push(obj);
  localStorage.setItem("User-data", JSON.stringify(data));
  window.location.href = "signup-form-2.html";
}
document.querySelector("#back").addEventListener("click", mybackcall);
function mybackcall() {
  event.preventDefault();
  window.location.href = "login-form.html";
}
