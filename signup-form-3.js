document.querySelector("#continue").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
 let otpis=document.getElementById("inputotp").value ;
if(otpis=="1234"){
 alert("Account Succesfully Created")
   window.location.href="login-form.html" 
   return
}
alert("Plz enter correct OTP")
 
   
}
document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="signup-form-2.html"
}