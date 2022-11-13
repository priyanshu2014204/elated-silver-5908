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


//


class User{
    constructor(){
         
    }

async  SignUp(){
    


     

      let API=`https://young-brushlands-83075.herokuapp.com/posts`;

      const response=await fetch(API,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }

      })

      const data=await response.json();
      console.log(data);
        verfiy(data)
        passfun(data)

     }
     }



let user=new User();
user.SignUp();
// let flag=false;
// const LSdata1=JSON.parse(localStorage.getItem("EmailLSnew"))||[];
//  const LSdata2=[]; 
// document.querySelector("#nextsign").addEventListener("click",()=>{
 let email=document.querySelector("#email").value;
//   let emailerror=document.querySelector("#emailerror");
//    let emaildiv=document.querySelector(".userdata");
//    let oldpassdiv=document.querySelector("#oldpass");
//    let newpassdiv=document.querySelector("#createpass")
// if(email===""){
//    emailerror.style.display="block"
// }else{
  
// }
//   })




  document.querySelector("#createacc").addEventListener("click",()=>{
    document.location.href="signup.html"
  })
    let emailLS=[];
  function verfiy(data){
    document.querySelector("#nextsign").addEventListener("click",()=>{

    data.forEach(function(el){
      let flag=false
      console.log(el.Email)

      let email=document.querySelector("#email").value;
      localStorage.setItem("emaildis",JSON.stringify(email));
      let getLSemail=JSON.parse(localStorage.getItem("emaildis"));
      document.querySelector("#emailname1").innerText=getLSemail

      if(email===el.Email){
        flag=true;

      }

       if(flag===true){
        let emaildiv=document.querySelector(".userdata");
        let oldpassdiv=document.querySelector("#oldpass");
        let newpassdiv=document.querySelector("#createpass")
        emaildiv.style.display="none";
        oldpassdiv.style.display="grid"
       }else{
        document.querySelector("#accerror").style.display="block"
       }

    })
  
  
})
}
  
  const deletefun= async(my)=>{
    let API=`https://young-brushlands-83075.herokuapp.com/posts/${my}`;

    const response=await fetch(API,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }

    })
  }
  //deletefun(2);


  const passfun=(data)=>{
      document.querySelector("#login").addEventListener("click",()=>{
        data.forEach(function(el){
            let flag=false;
            let getLSemail=JSON.parse(localStorage.getItem("emaildis"));

            let password=document.querySelector("#oldpassinput").value;

            if(password===el.NewPassword&&getLSemail==el.Email){
                     flag=true;
            }
               console.log(flag)
            if(flag===true){
                document.location.href="index.html"
            }else{
              document.querySelector("#passerror").style.display="block"
            }
        })
      })
  }