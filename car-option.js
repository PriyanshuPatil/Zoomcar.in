let userdata=JSON.parse(localStorage.getItem("User-data")) || [] ;

if(userdata.length==0){
document.querySelector("#login").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    window.location.href="login.html"
}
}
else{
    let name=userdata[userdata.length-1].emaildata;
    document.getElementById("login").innerText=name;
     let arr= document.createElement("img") ;
     arr.setAttribute("src","https://www.zoomcar.com/img/icons/icons_user.png") ;
     let parent=document.getElementById("login");
    arr.style.margin="-10px -20px 0px 10px";
    let spain=document.getElementById("spain");
parent.style.display="flex"
    arr.style.margin="-10px -20px 0px 10px";
     parent.append(arr);
document.querySelector("#login").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    window.location.href="logout.html"
}
}

let addtocard=document.getElementById("booknow");
addtocard.addEventListener("click",tobook);
let localcard=JSON.stringify(localStorage.getItem("Book-Card")) || [] ;

function tobook(ele){

}





let objcardata=[
    { name:"Renault Kwid" ,
    Transmission:"Manual",
    Seats:"5 Seats",
    Price:2064 ,
    Types:"SUV",
    Rating:4.5,
    Driven:"6k kms deiven",
    Type:"Petrol" ,
    Dilvery:"home",
    Img:"https://zoomcar-assets.zoomcar.com/photographs/original/6b6934b244bef5a3fdef3976171b05cb3fec155e.JPG?1638530676"
},
{ name:"Ford Aspire" ,
Transmission:"Automatic",
Seats:"7 Seats",
Price:2084 ,
Types:"SUV",
Rating:4.8,
Driven:"25k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/750f58626c1eba845cc9ff8603a601ba15cc934b.jpg?1615958438"
},
{ name:"Tata ALTROZ" ,
Transmission:"Manual",
Seats:"6 Seats",
Price:2530 ,
Types:"Sedan",
Rating:4.9,
Dilvery:"home",
Driven:"25k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/bf11b6a57ae2f1ef5b3f309c2d996fb324c6eb3f.JPG?1624082585"
},
{ name:"Suzuki Ertiga" ,
Transmission:"Manual",
Seats:"7 Seats",
Price:2963 ,
Types:"Sedan",
Rating:4.0,
Driven:"8k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/61931f7466c78d3bcdadc974fece62043819493d.JPG?1648109599"
},
{ name:"Ford Figo Figo Aspire" ,
    Transmission:"Manual",
    Seats:"5 Seats",
    Price:2149 ,
    Types:"Hanchback",
    Rating:4.5,
    Dilvery:"home",
    Driven:"36k kms deiven",
    Type:"Petrol" ,
    Img:"https://zoomcar-assets.zoomcar.com/photographs/original/dfcced83a3fca58d27ffea0b465b25831edf894e.JPG?1636629514"
},

{ name:"Hyundia Santro" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:1964 ,
Types:"Sedan",
Rating:4.7,
Driven:"23k kms deiven",
Type:"Petrol" ,
Dilvery:"home",
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/aac05ee37980c8d94e9657bc8ddea29312b0e6ae.jpg?1620384508"
},


{ name:"Tata Tiago" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:2098 ,
Types:"Sedan",
Rating:5.0,
Dilvery:"home",
Driven:"20k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037"
},
{ name:"Honda Jazz SV" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:2564 ,
Types:"hanchback",
Rating:5.0,
Dilvery:"Airport",
Driven:"51k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/fd92e3998a840b8544df97c446a48c87c662b6d8.JPG?1623643752"
},
{ name:"Mahindra KUV 100" ,
Transmission:"Manual",
Seats:"6 Seats",
Price:1964 ,
Types:"SUV",
Rating:4.0,
Driven:"43k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/7ba5c42f243f8b813b8f1eea44432747c4d632d5.JPG?1623069010"
},
{ name:"Tata Tiago" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:2064 ,
Types:"Hanchback",
Rating:4.8,
Dilvery:"Airport",
Driven:"26k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037"
},

{ name:"Nissan Magnite XE" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:2280 ,
Types:"Sedan",
Rating:4.8,
Driven:"17k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/4ba3ca93ad356598bc48a63d12e802e85c6e96f9.JPG?1626845553"
},
{ name:"Renault Kwid" ,
Transmission:"Manual",
Seats:"6 Seats",
Price:1865 ,
Dilvery:"Airport",
Types:"SUV",
Rating:4.0,
Driven:"23k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/6b6934b244bef5a3fdef3976171b05cb3fec155e.JPG?1638530676"
},
{ name:"Renault Triber" ,
Transmission:"Manual",
Seats:"7 Seats",
Price:2803 ,
Types:"Hanchback",
Rating:4.0,
Dilvery:"Airport",
Driven:"47k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458"
},

{ name:"Maruti Ertiga Hybrid" ,
Transmission:"Manual",
Seats:"7 Seats",
Price:3218 ,
Types:"Sedan",
Dilvery:"Airport",
Rating:4.9,
Driven:"47k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/f73fe4cfc5d52e3da10e51da778cf2cced94d3e8.JPG?1623241867"
},
{ name:"Datsun Go Plus" ,
Transmission:"Automatic",
Seats:"7 Seats",
Price:2284 ,
Types:"SUV",
Rating:4.9,
Driven:"22k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/d4f137a56d1bcbf2a8f976b5029685d095425930.JPG?1623737903"
},
{ name:"Tata Nexon" ,
Transmission:"Automatic",
Seats:"6 Seats",
Price:2866 ,
Types:"Hanchback",
Rating:4.3,
Dilvery:"Airport",
Driven:"10k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/d44ae1d555cfe2dd4b499c3e75f2fcda0504a6de.JPG?1654862797"
},

{ name:"Hyundia  Creta" ,
Transmission:"Automatic",
Seats:"6 Seats",
Price:3565 ,
Types:"Sedan",
Rating:4.0,
Driven:"113k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/f3121bab5e720266c0ef441edfde8a915fd14d10.JPG?1622273072"
},
{ name:"Mahindra TUV 300" ,
Transmission:"Manual",
Seats:"6 Seats",
Price:2665 ,
Types:"SUV",
Rating:4.0,
Driven:"62k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/59fca001231ef0e5665ea4e6e6b2eb2dd3d920dd.png?1584525284"
},
{ name:"Renault Lodgy" ,
Transmission:"Automatic",
Seats:"7 Seats",
Price:2734 ,
Types:"Hanchback",
Rating:4.9,
Driven:"52k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/152bb8c1eb9fa1696e8a25f2244168dbc8ef8f48.JPG?1629088309"
},


{ name:"Maruti Swift" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:1898 ,
Types:"Sedan",
Rating:4.9,
Driven:"948k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/d7ba329c386c0331e896bae1e3285ef7d3f23972.png?1584526043"
},
{ name:"Hyundia Grand i10" ,
Transmission:"Manual",
Seats:"5 Seats",
Price:2131 ,
Types:"Sedan",
Rating:4.0,
Driven:"16k kms deiven",
Type:"Petrol" ,
Img:"https://zoomcar-assets.zoomcar.com/photographs/original/b285a5e8e7016555a5f43a672eb2364ce0059233.JPG?1650373266"
},

]

display(objcardata);
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
baccha2.append(baccha2new)
child2.append(baccha1,baccha2)
 child0.append(child1,child2);
 parent.append(child0) ;


})

}

let targetel=document.getElementById("seat-filter-5");
targetel.addEventListener("click",mycall5);
function mycall5(event){
    event.preventDefault();
    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
    targetel.style.background="green";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

          
        return ele.Seats=="5 Seats" ;
    })
display(ans) ;
}
let targetel2=document.getElementById("seat-filter-6");
targetel2.addEventListener("click",mycall6);
function mycall6(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="green";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Seats=="6 Seats" ;
    })
display(ans) ;
}
let targetel3=document.getElementById("seat-filter-7");
targetel3.addEventListener("click",mycall7);
function mycall7(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="green";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Seats=="7 Seats" ;
    })
display(ans) ;
}


let cartype1=document.getElementById("type-filter-1");
cartype1.addEventListener("click",typefill1);
function typefill1(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="green";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Types=="SUV" ;
    })
display(ans) ;
}

let cartype2=document.getElementById("type-filter-2");
cartype2.addEventListener("click",typefill2);
function typefill2(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="green";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

   document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Types=="Hanchback" ;
    })
display(ans) ;
}

let cartype3=document.getElementById("type-filter-3");
cartype3.addEventListener("click",typefill3);
function typefill3(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="green";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

  document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Types=="Sedan" ;
    })
display(ans) ;
}


let transtype1=document.getElementById("trans-filter-1");
transtype1.addEventListener("click",transfill1);
function transfill1(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="green";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="white"

    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Transmission=="Manual" ;
    })
display(ans) ;
}

let transtype2=document.getElementById("trans-filter-2");
transtype2.addEventListener("click",transfill2);
function transfill2(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="green";
    dilltype1.style.background="white";
    dilltype2.style.background="white"
   

    document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Transmission=="Automatic" ;
    })
display(ans) ;
}


let dilltype1=document.getElementById("delivery-filter-1");
dilltype1.addEventListener("click",dillfill1);
function dillfill1(event){
    event.preventDefault();
   
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="green";
    dilltype2.style.background="white"
   document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Dilvery=="home" ;
    })
display(ans) ;
}

let dilltype2=document.getElementById("delivery-filter-2");
dilltype2.addEventListener("click",dillfill2);
function dillfill2(event){
    event.preventDefault();
    targetel.style.background="white";
    targetel2.style.background="white";
    targetel3.style.background="white";
    cartype1.style.background="white";
    cartype2.style.background="white";
    cartype3.style.background="white";
    transtype1.style.background="white";
    transtype2.style.background="white";
    dilltype1.style.background="white";
    dilltype2.style.background="green"


   document.getElementById("cars-data").innerHTML="";
   let ans = objcardata.filter(function(ele){
        
          
        return ele.Dilvery=="Airport" ;
    })
display(ans) ;
}


