const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
		'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
	}
};

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



   stolingdata()



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







//   ..................................................
// const xyz = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
// 		'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
// 	}
// };

// fetch('https://unofficial-shein.p.rapidapi.com/products/search?keywords=women%20jacket&language=en&country=US&currency=USD&sort=7&limit=4&page=1', xyz)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));