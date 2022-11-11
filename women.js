import { womenNavbar } from "./component/womenNavbar.js";

import {topnav}  from  "./component/topnav.js"
let navbar=document.getElementById("navbar");
navbar.innerHTML=womenNavbar();

let basicnav=document.querySelector(".navbar");

basicnav.innerHTML=topnav()

let logo=document.querySelector(".sign-up");
logo.addEventListener("click",()=>{
    window.location.href="login.html"
    // console.log("1")
})

// extra api key
// 205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65
// 

let searchput=document.querySelector(".searchbar");


const opt = {
	// method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': '441acab5famshf2397ab116fa651p13e3bcjsn5ce7dc9dd46f',
	// 	'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
	// }
    method: 'GET',
headers: {
'X-RapidAPI-Key': '441acab5famshf2397ab116fa651p13e3bcjsn5ce7dc9dd46f',
'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
}
};

function availdata(search){
  let value=searchput.value || "underwear"
    // fetch(`https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${value}&rows=1&start=0`, opt)
    // 	.then(response => response.json())
    // 	.then(response => appendstick(response.response.docs))
    // 	.catch(err => console.error(err));
    console.log(search)
}
availdata("ok")

// fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=hoodie&rows=8&start=0', opt)
// 	.then(response => response.json())
// 	.then(response => appendstick(response.response.docs))
// 	.catch(err => console.error(err));

// fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=hoodie&rows=8&start=0', opt)
// 	.then(response => response.json())
// 	.then(response => appendstick(response.response.docs))
// 	.catch(err => console.error(err));


    function appendstick(data){
let div=document.querySelector(".appenddatawomen");
div.innerHTML=""

data.forEach(function(el){
    let main_div=document.createElement("div")
    let img_div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.thumb_image;
    let str="";
    let demotextarray=el.title.split(" ")
    let productname=demotextarray[0]+" "+demotextarray[1];
    let name_div=document.createElement("p");
    name_div.innerText=productname
    let saleerate="$"+" "+el.sale_price;
    let sale_div=document.createElement("p");
    sale_div.innerText=saleerate;
    sale_div.className="saleme"
    img_div.append(img);
    let button_div=document.createElement("div")
    let button=document.createElement("button");
    button.innerText="Buy now";
    button_div.append(button);
    button_div.className="btn_div"
    button.className="blackbuy"
    main_div.append(img_div,name_div,saleerate,button_div)
    div.append(main_div)
 
})


    }

let skickyscrol=document.querySelector("#Clothing");
let appenddatawomen=document.querySelector(".appenddatawomen");

window.addEventListener("scroll",scroll)
    function scroll(){
        let scrolleddown=window.scrollY;
        if(scrolleddown>143){
          skickyscrol.style.position="fixed";
          skickyscrol.style.top="-10px";
        //   -723px
           appenddatawomen.style.top="0px"
        }else{
            skickyscrol.style.position="static";
            // skickyscrol.style.top="140px";
          appenddatawomen.style.top="-723px"
        }
      console.log(window.scrollY)
    }




searchput.addEventListener("input",bringdata);


function bringdata(){
    setTimeout(()=>{
        availdata(searchput.value)
    },1000)
}