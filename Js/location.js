let formvalue = document.getElementById("form");
formvalue.addEventListener("change", myf);

function myf() {
  event.preventDefault();
  let Selected = document.querySelector("#form").value;
  let putselected = document.querySelector("#mylocation");
  putselected.value = Selected;
}

document.getElementById("continue").addEventListener("click", myfunc);
function myfunc(event) {
  event.preventDefault();
  let putselected = document.querySelector("#mylocation").value;
  if (putselected == "") {
    alert("Plz Enter Location");
  } else {
    window.location.href = "car-option.html";
  }
}
