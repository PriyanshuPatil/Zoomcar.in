let localcard=JSON.parse(localStorage.getItem("Book-Card")) || [] ;  
display(localcard);
function display(el){
let parent=document.getElementById("cars-data") ;
el.forEach(function(ele){
    let child0=document.createElement("div");
child0.setAttribute("id","carone")
let  child1=document.createElement("div");
  child1.setAttribute("id","cartwo") ;
let joke1=document.createElement("div");
joke1.setAttribute("id","forcarimg");
let joke1img=document.createElement("img");
joke1img.setAttribute("src",ele.Img) ;
let joke2=document.createElement("div");
joke2.setAttribute("id","forcardata");
let joke2baccha1=document.createElement("h2");
joke2baccha1.setAttribute("id","carname")
joke2baccha1.innerText=ele.name;
let joke2baccha2=document.createElement("div");
joke2baccha2.setAttribute("id","cardetails")
let joke3baccha1=document.createElement("div");
joke3baccha1.innerText=ele.Transmission;
let joke3baccha2=document.createElement("div");
joke3baccha2.innerText="   *  "+ele.Type;
let joke3baccha3=document.createElement("div");
joke3baccha3.innerText="   *  "+ele.Seats;
let joke4baccha2=document.createElement("div");
joke4baccha2.setAttribute("id","ratingdetails")
let joke5baccha1=document.createElement("div");
let joke5baccha1img=document.createElement("img");
joke5baccha1img.setAttribute("src","data:image/png;base64,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") ;
joke5baccha1.append(joke5baccha1img);
let joke5baccha2=document.createElement("div");
joke5baccha2.innerText=ele.Rating;
let joke5baccha3=document.createElement("div");
joke5baccha3.innerText="   *  "+ele.Driven;
joke4baccha2.append(joke5baccha1,joke5baccha2,joke5baccha3)
joke2baccha2.append(joke3baccha1,joke3baccha2,joke3baccha3)
joke2.append(joke2baccha1,joke2baccha2,joke4baccha2)
joke1.append(joke1img)
child1.append(joke1,joke2)
let  child2=document.createElement("div") ;
  child2.setAttribute("id","carthree") ;
  let baccha1=document.createElement("h3");
  baccha1.innerText="₹"+" "+ele.Price ;
  let baccha2=document.createElement("div");
  let baccha2new=document.createElement("div");
  baccha2new.innerText="BOOK NOW";
baccha2new.setAttribute("id","booknow");
baccha2new.addEventListener("click",function(){
    tobook(ele);
});
baccha2.append(baccha2new)
child2.append(baccha1,baccha2)
 child0.append(child1,child2);
 parent.append(child0) ;


})

}

document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="car-option.html"
}
let totalis=0;
for(let i=0;i<localcard.length;i++){
    totalis=totalis+localcard[i].Price
}
let total= document.getElementById("total") ;
total.innerText=totalis; 

 document.getElementById("apply").addEventListener("click",myapply)
 function myapply(){
     event.preventDefault();
    let promo=document.getElementById("inputpromo").value;
    if(promo=="ZOOMAPP"){
        total.innerText=(totalis*50)/100; 
        alert("Coupon Successfully Applied")
}else{
    alert("Invalid Coupon"+"\n"+"plz use ZOOMAPP")
}

 }

 document.querySelector("#continue").addEventListener("click",mybook)
function mybook(event){
    event.preventDefault();
 window.location.href="confirm-form.html" 
}





