const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
		'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
	}
};


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






    // refering

let womendirection=document.querySelector(".women")

womendirection.addEventListener("click",()=>{window.location.href="women.html"})


    // ending refering