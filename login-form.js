document.querySelector(".continue").addEventListener("submit",mycall)
function mycall(event){
    event.preventDefault();
    let numberdata=localStorage.getItem("number") || [];
    let obj={
        mobiledata:document.getElementsByClassName("inputmobile");
    }
   if(obj.mobiledata.length>10 || obj.mobiledata.length<10){
    alert("Plz Enter Full Details")
   }
}