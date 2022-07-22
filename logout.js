document.getElementById("continue").addEventListener("click",myfunc) ;
function myfunc(event){
    event.preventDefault();
    localStorage.clear("User-data") ;
    localStorage.clear("login-data") ;
    alert("Logout Success-Full")
    window.location.href="home.html"
}