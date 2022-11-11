const options = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
	// 	'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
	// }
    headers: {
		'X-RapidAPI-Key': '8df887ff64msh75058ca573a347fp10b55djsn25b1eaee7cb0',
		'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
	}
};

let logo=document.querySelector(".sign-up");
logo.addEventListener("click",()=>{
    window.location.href="login.html"
    // console.log("1")
})


let search=document.querySelector(".searchbar")

search.addEventListener("mouseover",()=>{
    search.style.borderColor="purple"
})
search.addEventListener("mouseout",()=>{
    search.style.borderColor="black"
})


// 
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


async function stolingdata(){
    let response=await fetch('https://unofficial-shein.p.rapidapi.com/products/list?cat_id=1931&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=6&page=1', options)   
    let trending=await fetch('https://unofficial-shein.p.rapidapi.com/products/search?keywords=women%20jacket&language=en&country=US&currency=USD&sort=7&limit=6&page=1', options)   
    
    let data=await response.json();
   console.log(data)
    append(data.info.products)

    let trend=await trending.json()
    addtrend(trend.info.products)
   }


function append(data){
  let div=document.getElementById("container-1");

  data.forEach(function(el){
    let main_div=document.createElement("div");
    main_div.setAttribute("data-aos", "fade-in")
    main_div.className="aside"
    let img_div=document.createElement("div");
    img_div.className="card-img"
    let img=document.createElement("img");
    img.src=el.goods_img;
    let name=document.createElement("h3");
    let name_div=document.createElement("div")
    name_div.className="rotatehead"
    name.className="productname"
    name.innerText=el.goods_name
    img_div.append(img);
    name_div.append(name)
    main_div.append(name_div,img_div)
    div.append(main_div)

  })


}



//    stolingdata()



   function addtrend(data){
    let div=document.getElementById("container-2");
  
    data.forEach(function(el){
        let main_div=document.createElement("div");
        main_div.setAttribute("data-aos", "fade-in")
        main_div.className="aside"
        let img_div=document.createElement("div");
        img_div.className="card-img"
        let img=document.createElement("img");
        img.src=el.goods_img;
        let name=document.createElement("h3");
        let name_div=document.createElement("div")
        name_div.className="rotatehead"
        name.className="productname"
        name.innerText=el.goods_name
        img_div.append(img);
        name_div.append(name)
        main_div.append(name_div,img_div)
        div.append(main_div)
  
    })
  
  
  }


let slider=document.querySelectorAll('.slidera');

slider.forEach(function(el,index){
    el.style.left=`${index *100}%`
})

console.log(slider)


// let testslid=document.querySelectorAll(".slidtest>img");
// testslid.forEach(function(el,index){
//     el.style.left=`${index *100}%`
// })




// search suggestion carousel sections //



const carousel_1_data = [{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/galvan_dress_cb31d2b319.jpg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/balenciaga_swimwear_a06622c701.jpg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/roberta_roller_rabbit_480eb63ae6.jpg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/pandora_bracelets_1e97a9f038.jpg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/johnny_was_beachwear_812a36ae2c.jpg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/chimi_sunglasses_1629b146e4.jpg",
},
]


const carousel_2_data = [{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/eraldo/17bbf155/fendi-Brown-Monogram-Knitted-Dress.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/saksoff5th/6467d8d2/prada-Black-Foehn-Tee.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/mclabels/359ac9e8/dior-PINK-Other-Materials-Sweater.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/ssense/783db566/givenchy-Black-4g-Bodysuit.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/mytheresa/ab42e645/saint-laurent-black-Silk-Gown.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/cms/chimi_sunglasses_1629b146e4.jpg",
},
]


const carousel_3_data = [{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/ruelala/0b1e6acd/saint-laurent-Black-Opyum-110-Patent-Sandal.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/matchesfashion/c6650bb6/prada-marine-Sandales-en-cuir-matelasse-a-fermeture-velcro.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/ruelala/4213ac81/dior-Black-Walkn-Lurex-Sneaker.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/mytheresa/36060fb5/versace-black-Intrico-Leather-Platform-Ankle-Boots.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/mytheresa/71753e01/givenchy-black-Bottes-Shark-Lock-en-cuir.jpeg",
},
{
  "heading" : "GALVAN LONDON DRESSES",
  "image" : "https://cdna.lystit.com/128/160/tr/photos/ruelala/af64ee39/dior-Pink-Id-Sneaker.jpeg",
},
]

const suggestion = () => {

 //document.getElementsById("navbar").style.overflowY = "hidden";
document.querySelector("body").style.overflowY="hidden"

  content_div();

  //carousel_append(carousel_1_data);

}

let suggestions_div = document.createElement("div");
suggestions_div.className = "suggestions";
suggestions_div.style.width = "75%";

suggestions_div.style.overflowY = "scroll";
suggestions_div.style.overflowX = "hidden";



let download_div = document.createElement("div");
download_div.className = "download_app";
download_div.style.width = "25%";

let img_dLoad = document.createElement("img");
img_dLoad.className = "img_dLoad";
img_dLoad.style.width = "100%";
img_dLoad.style.height = "580px";
img_dLoad.src = "https://img.freepik.com/premium-vector/page-banner-advertising-downloading-app-mobile-phone-smartphone-download-page-mobile-app-3d-perspective-with-blue-circle_399089-3450.jpg";
download_div.append(img_dLoad);

let close_div = document.createElement("img");
close_div.className = "closee";
close_div.style.width = "15px";
close_div.src = "https://cdn-icons-png.flaticon.com/512/61/61155.png";
close_div.style.position = "relative";
close_div.style.top = "-100%";
close_div.style.right = "-95%";
close_div.addEventListener("click", () => {
  search_div.style.width = "0px";
  search_div.style.height = "0px";

})
download_div.append(close_div);


let search_div = document.getElementById("search");



const content_div = () => {

  

  search_div.style.background = "white";
  search_div.style.position = "sticky";
  search_div.style.display = "flex";
  search_div.style.flexDirection = "row";
  search_div.style.width = "99.8%";
  
  search_div.style.height = "580px";

  search_div.append(suggestions_div);
  search_div.append(download_div);
 
}



const carousel_append = (data) => {

  let carousel_1_div = document.createElement("div");
  carousel_1_div.style.display = "flex";
  carousel_1_div.style.width = "95%";
  carousel_1_div.style.margin = "30px"
  carousel_1_div.style.height = "300px";
  carousel_1_div.style.overflowX = "scroll";

  data.forEach((el) => {
    let div = document.createElement("div");
    div.style.width = "500px";
    div.style.border = "1px solid black"
    div.style.marginRight = "20px"

    let text = document.createElement("h4");
    text.innerHTML = el.heading;

    let image = document.createElement("img");
    image.style.width = "220px";
    image.style.height = "70%";
    image.src = el.image;

    div.append(text, image);

    carousel_1_div.append(div);

    suggestions_div.append(carousel_1_div);

  })

}

carousel_append(carousel_1_data);

carousel_append(carousel_2_data);

carousel_append(carousel_3_data);



let count=0

setInterval(
    function(){
        // slider.forEach(function(el){
        //      el.style.transform=`translateX(-${count*100}%)`;
        //             console.log(el.style.transform,count)
        //             count++ 
        // })
        // if(count===3){
        // // 
        // count=0
        // slider.forEach(function(el){
        //             el.style.transform=`translateX(${count*100}%)`;
        //                    console.log(el.style.transform)
        //                    count--
        //        })
        // }
        // console.log(count)
        count++;
        if(count===4){
            count=0
            slider.forEach(function(el,index){
                el.style.left=`${index *100}%`
            })
        //   testslid.forEach(
        //     function(el,index){
        //         el.style.left=`${index *100}%`
        //     }
        //   )
        }
         a()
    },
   6000)

//   ..................................................


function a(){
    slider.forEach(function(el){
                            el.style.transform=`translateX(-${count*100}%)`;
                                //    console.log(el.style.transform)
                       })
    // testslid.forEach(function(el){
    //                         el.style.transform=`translateX(-${count*100}%)`;
    //                             //    console.log(el.style.transform)
    //                    })

}


// ..............................................................................................

// const opt = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
// 		'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=bikini&rows=60&start=0', opt)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const opt = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '441acab5famshf2397ab116fa651p13e3bcjsn5ce7dc9dd46f',
    'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
    }
    };
    
    // fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=bikini&rows=2&start=0', opt)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));




    // ........................................................................................




    let displaydocs=document.querySelector(".navbar");

    // refering

let womendirection=document.querySelector(".women")

womendirection.addEventListener("click",()=>{window.location.href="women.html"})

let mendirection=document.querySelector(".men")
mendirection.addEventListener("click",()=>{window.location.href="men.html"})

    // ending refering



    // test jest




//     let testslid=document.querySelector(".slidtest>img");
//    let i=0
//     let slidimg=["https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg","https://cdna.lystit.com/cms/791d5cce_14ec_4b7a_b6df_6cb35f1abf9c_0e299e3b12.png","https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg"];

    
//     setInterval(()=>{
//         testslid.src=slidimg[i];
//         i++;
//         // window.scrollY++;
//         console.log(window.scrollY)
//         if(i===3){
//             i=0
//         }
//     },3000)

// .slider
let slidecard=document.querySelector(".slidcard");
let sliden=document.querySelector(".slider");
let sensitive=document.querySelector(".pineapple");
let slidetest=document.querySelector(".sticktest");

// let lifesaver=setInterval(function(){
//     displaydocs.style.display="block"
//     let a=Math.ceil(window.scrollY);
//     if(a>95 && a<900){
//         sliden.style.transition="1s"
//         sliden.style.position="sticky";
//         sensitive.style.position="sticky";
//         slidecard.style.width="100%"
//         sliden.style.height="100vh";
//         sensitive.style.top="0px";
 
//      // slidetest.style.display="block"
//      // slidetest.style.marginBottom="400px"
     
//  } else if(a>900){
 
//      console.log("hello",a,a>900)
//     //  sliden.style.height="0px";
//      sensitive.style.position="static";
//      clearTimeout(lifesaver)
//  }
//  else{
//      sliden.style.height="500px"
//      slidecard.style.width="90%"
//      slidetest.style.display="none"
//      console.log(a)
//     }
// },1)

function camio(){
    let camren=setInterval(()=>{
        let a=window.scrollY;
        if(a>95 && a<940){
                   slidecard.style.transition="1s"
            //        sliden.style.position="sticky";
                   sensitive.style.position="sticky";
                   slidecard.style.width="100%"
                   sliden.style.height="100vh";
                   sensitive.style.top="0px";
        }else{
            sliden.style.height="500px"
    sensitive.style.position="static";
            clearTimeout(camren)
        }
    },1)
}



window.addEventListener("scroll",()=>{
   
//     displaydocs.style.display="block"
   let a=Math.ceil(window.scrollY);
   if(a>95 && a<940){
       camio()
   }
//    if(a>95 && a<940){
// //        sliden.style.transition="1s"
// //        sliden.style.position="sticky";
//        sensitive.style.position="sticky";
//        slidecard.style.width="100%"
//        sliden.style.height="100vh";
//        sensitive.style.top="0px";

// //     // slidetest.style.display="block"
// //     // slidetest.style.marginBottom="400px"
// console.log(a)
//    }else{
    // sliden.style.height="500px"
    // sensitive.style.position="static";
//    }
// } else if(a>900){

//     console.log("hello",a,a>900)
//     sliden.style.height="0px";
//     sensitive.style.position="0px";
// }
// else{
//     sliden.style.height="500px"
//     slidecard.style.width="90%"
//     slidetest.style.display="none"
//     console.log(a)
//    }
  
//    if(a>1000){
//    }
//    console.log(a)
})


// typing section and bouncing section
let typed=new Typed(".autocorrect",{
    strings:["ACNE JEANS","UNDERWEAR","HOODIE"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});

let k=0
let bounce=document.querySelector(".bounceball");

let z=20;
let power=0
let elementneedrotation=document.querySelector(".pineapple")
let deg=0
// bounce.style.display="none"
function gamble(){
let hardinterval=setInterval(()=>{
    bounce.style.transform="rotate(360deg)"
    if(k<45){
        k=k+0.5
    bounce.style.top=k+"px"}
    else if(z<580){
        bounce.style.position="relative"
         bounce.style.top="-2px"
        bounce.style.left=z+"px";
        z++
    }else{
        // bounce.style.display = 'block'
    //    let variable=0.17**power
    //     // k=k+0.5
    //     power++
    //     z=z++
    //     bounce.style.position="relative"
    //     // bounce.style.top=k+"px"
        bounce.style.left=z+"px";
        z++
        // elementneedrotation.style.transform = `skew(${deg}deg,${deg}deg)`
       
        // displaydocs.style.display="none"
        elementneedrotation.style.transform = `rotate(${deg}deg)`
        // elementneedrotation.style.transform = `rotateY(1)`
        // rotate3d(1, 1, 1, 363deg)
        if(deg<360.9){
        deg=deg+0.5}
        else{

            // bounce.style.display="none"
            // sensitive.style.position="sticky"
            // sensitive.style.width="100%"
            // sensitive.style.top="0px";
            // sliden.style.height="100vh";
            dropoff()
            elementneedrotation.style.transform = `skew(0,0)`
            clearInterval(hardinterval);
            deg++
        }
       
    //     console.log(elementneedrotation)
    }
    // bounce.style.left="90px"
    console.log(k)
},1)
}

// gamble()
tooper=0
function dropoff(){
   let dropend =setInterval(()=>{
    // if(){}
    // else{}
    if(tooper<500){
    bounce.style.top=tooper+"px";
    tooper++}else{
        dropgear()
        clearTimeout(dropend)
    }
    // else if(tooper===5500){
    //     bounce.style.top=tooper+"px";
    //      tooper--
    // }
    
   },1)
}



mendirection.addEventListener("click",()=>{window.location.href="men.html"})
    // ending refering

    bounce.id="bouncing"



  function dropgear(){
    deg=0;
    
    let dropper=setInterval(()=>{
        if(deg<4){
        elementneedrotation.style.transform = `rotate(${deg}deg)`;
        deg=deg+0.4}
        else{
            bounce.style.left=z+"px";
            z=z+1
        }
        if(z===1600){
            document.querySelector("body").style.backgroundColor="black"
            document.querySelector(".logo").style.color="white"
            sliden.style.backgroundColor="black"
            elementneedrotation.style.transform = `rotate(0deg)`;
            makemeperfect()
            clearTimeout(dropper)
        }
    },1)

  }  



  function makemeperfect(){
    let cond=0
    let evergreen=setInterval(()=>{
        if(cond===2){
            document.querySelector("body").style.backgroundColor="white"
            document.querySelector(".logo").style.color="black"
            sliden.style.backgroundColor="white"
        }
        cond++
      
    },1000)
  }
  let aball=document.querySelector(".bounceparent");
aball.addEventListener("click",gamble)

let againtest=0
  setInterval(()=>{
 aball.style.transform=`rotate(${againtest}deg)`
 againtest++
  },5)