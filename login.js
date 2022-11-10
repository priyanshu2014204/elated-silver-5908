
import {topnav}  from  "./component/topnav.js"

let topnave=document.querySelector(".navbar");
topnave.innerHTML=topnav();

// all refering code will get originated from here

document.querySelector(".women").addEventListener("click",()=>{
    window.location.href="women.html"
})




// .................................end(of the refering code)


