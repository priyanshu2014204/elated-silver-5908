import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.getElementById('parallax').animate(
    { transform: ['translateY(0)', 'translateY(100px)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(0, 'px'),
              new CSSUnitValue(200, 'px')
          ]
      })
    });