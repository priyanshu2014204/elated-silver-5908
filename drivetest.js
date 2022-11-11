import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



  let scrolltimeline=document.querySelector(".scroltime");
 console.log(scrolltimeline)
  let scrolltagline=new ScrollTimeline({
    source:document.scrollingElement,
    orientation:"block",
    scrollOffsets:[CSS.percent(0),CSS.percent(100)]
  });;

  scrolltagline.animate(
    {
    transform:["scaleX(0)","scale(1)"],
    },
    {
      duration:1,
      timeline:scrolltagline,
    }
  );