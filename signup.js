import {topnav}  from  "./component/topnav.js"

let topnave=document.querySelector(".navbar");
topnave.innerHTML=topnav();

// all refering code will get originated from here

document.querySelector(".women").addEventListener("click",()=>{
    window.location.href="women.html"
})

import { footer } from "./component/footer.js";
let Footer=document.getElementById("footer");
Footer.innerHTML=footer()

let div=document.querySelector("#move")
let imgtag=document.createElement("img");

let images=[`https://static.lystit.com/static/n/img/sign-up/value-proposition-full-min.12502ad2e109c860f1eeceea2a988ddf.png`,
`https://static.lystit.com/static/n/img/sign-up/value-proposition-full-min.12502ad2e109c860f1eeceea2a988ddf.png`]

imgtag.src=images[0];

div.append(imgtag)
 let i=0
setInterval(function(){
 if(i==images.length){
    i=0
 }
imgtag.src=images[i];
div.append(imgtag);
i++;

},30000);


class User{
    constructor(){
         
    }

async  SignUp(e,np){
    


        this.Email=e;
        this.NewPassword=np;

      let API=`https://young-brushlands-83075.herokuapp.com/posts`;

      const response=await fetch(API,{
          method:"POST",
          body:JSON.stringify(this),
          headers:{
            "Content-Type":"application/json"
          }

      })

      const data=await response.json();
      console.log(data);



     }
     }



let user=new User();

document.querySelector("#signup1").addEventListener("click",()=>{
    let email=document.querySelector("#email").value;

    let newpass=document.querySelector("#newpass").value;
     
    user.SignUp(email,newpass);
    console.log(user)
      
    //document.location.href="index.html";

})
