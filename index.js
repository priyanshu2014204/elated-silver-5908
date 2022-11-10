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
    let response=await fetch('#https://unofficial-shein.p.rapidapi.com/products/list?cat_id=1931&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=6&page=1', options)   
    let trending=await fetch('#https://unofficial-shein.p.rapidapi.com/products/search?keywords=women%20jacket&language=en&country=US&currency=USD&sort=7&limit=6&page=1', options)   
    
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




//   ..................................................
