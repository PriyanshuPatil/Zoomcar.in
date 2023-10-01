
document.querySelector("#continue").addEventListener("click",mycall)
let logindata=JSON.parse(localStorage.getItem("login-data")) || [] ;
let customerdata=JSON.parse(localStorage.getItem("User-data")) || [];
let lastele=logindata[logindata.length-1];
 document.getElementById("password").innerText="  "+lastele.mobilenumber;

function mycall(event){
    event.preventDefault();
    let inputpwd=document.getElementById("inputpassword").value;
    customerdata.forEach(function(ele){
      if( inputpwd===ele.passworddata && ele.mobiledata===lastele.mobilenumber){
          alert("Login Succesfull");
          window.location.href="home.html";
        } 
     }) 
}
document.querySelector("#back").addEventListener("click",backfor)
function backfor(){
    event.preventDefault();
    window.location.href="login-form.html"
}