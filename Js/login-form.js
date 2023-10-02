document.querySelector("#continue").addEventListener("click", mycall);
let logindata = JSON.parse(localStorage.getItem("login-data")) || [];
function mycall(event) {
  event.preventDefault();
  let customerdata = JSON.parse(localStorage.getItem("User-data")) || [];
  let obj = {
    mobilenumber: document.getElementById("inputmobile").value,
  };
  logindata.push(obj);
  localStorage.setItem("login-data", JSON.stringify(logindata));

  if (obj.mobilenumber.length > 10 || obj.mobilenumber.length < 10) {
    alert("Plz Enter Correct Mobile Number");
    return;
  }
  let ans = false;
  customerdata.forEach(function (ele) {
    if (obj.mobilenumber === ele.mobiledata) {
      console.log(obj.mobilenumber === ele.mobiledata);
      window.location.href = "pwd-form.html";
      ans = true;
    }
  });

  if (ans == false) {
    alert("plz create account");
    window.location.href = "signup-form-1.html";
  }
}

document.querySelector("#back").addEventListener("click", mybackcall);
function mybackcall() {
  event.preventDefault();
  window.location.href = "home.html";
}
