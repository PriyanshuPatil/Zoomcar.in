document.querySelector("#continue").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("User-data")) ||[];
    let name=document.getElementById("inputname").value;
    let password=document.getElementById("inputpassword").value;
    data[data.length-1]["namedata"]=name;
    data[data.length-1]["passworddata"]=password;
localStorage.setItem("User-data",JSON.stringify(data));
if(name=="" || password==""){
    alert("plz fill full details")
    return;
}
window.location.href="signup-form-3.html"
}
document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="signup-form-1.html"
}