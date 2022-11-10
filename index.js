const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
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
let slidetest=document.querySelector(".sticktest")
window.addEventListener("scroll",()=>{
    displaydocs.style.display="block"
   let a=window.scrollY;
   if(a>95){
       sliden.style.transition="1s"
       sliden.style.position="sticky";
       sensitive.style.position="sticky";
       slidecard.style.width="100%"
       sliden.style.height="100vh";
       sensitive.style.top="0px";

    // slidetest.style.display="block"
    // slidetest.style.marginBottom="400px"
    
}else{
    sliden.style.height="500px"
    slidecard.style.width="90%"
    slidetest.style.display="none"
    
   }
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

let z=0;
let power=0
let elementneedrotation=document.querySelector(".pineapple")
let deg=0

let hardinterval=setInterval(()=>{
    
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
        elementneedrotation.style.transform = `skew(${deg}deg,${deg}deg)`
       
        displaydocs.style.display="none"
        // elementneedrotation.style.transform = `rotateX(1)`
        // elementneedrotation.style.transform = `rotateY(1)`
        // rotate3d(1, 1, 1, 363deg)
        if(deg<94.9){
        deg=deg+0.5}
        else{
            bounce.style.display="none"
            sensitive.style.position="sticky"
            sensitive.style.width="100%"
            sensitive.style.top="0px";
            sliden.style.height="100vh";
            elementneedrotation.style.transform = `skew(0,0)`
            clearInterval(hardinterval);
            deg++
        }
       
    //     console.log(elementneedrotation)
    }
    // bounce.style.left="90px"
    console.log(k)
},10)



