const slider2 = document.querySelector('.slider-container');

// if (innerWidth <= 1000) {
//     slider2.style.top = "100px";
// } else if (innerWidth >= 700 && innerWidth < 1000) {
//     slider2.style.top = "400px";
// } else if (innerWidth >= 400 && innerWidth < 700) {
//     slider2.style.top = "500px";
// } else {
//     slider2.style.top = "600px";
// }

const siteTitle = document.querySelector('.site-title');
const menu = document.querySelector('.menu-wrapper');
const body = document.querySelector('body');
const aboutSec = document.querySelector('.about');

document.querySelector('html').style.overflowX = "hidden";

if (innerWidth >= 1440) {
    siteTitle.style.left = body.getBoundingClientRect().x + "px";
    menu.style.left = body.getBoundingClientRect().width + "px";

    console.log(body.getBoundingClientRect().x);
}

addEventListener('scroll', (e) => {
    // console.log(aboutSec.getBoundingClientRect().y);
    // console.log(siteTitle.getBoundingClientRect().height);
    
    if ( aboutSec.getBoundingClientRect().y <= siteTitle.getBoundingClientRect().height) {
        siteTitle.style.background = "#1C1C1C";
        siteTitle.style.color = "white";
        siteTitle.style.display = "none";

    } else {
        siteTitle.style.display = "block";
        siteTitle.style.background = "transparent";
        siteTitle.style.color = "#1c1c1c";
    }
})

addEventListener('scroll', (e) => {
    // console.log(scrollY);
})


// const sliderTitle = document.querySelectorAll('#myproject .title');
// window.addEventListener('resize', e => {
//     sliderTitle.forEach(title => {
//         if (innerWidth > 1000) {
//             title.style.fontSize = "4em";
//             console.log("4em");
//         } else if (innerWidth <= 1000 ) {
//             console.log("3em");
//             title.style.fontSize = "3em";
//         } else if (innerWidth <= 700) {
//             console.log("1.2em");
//             title.style.fontSize = "1.2em";
//         } else if (innerWidth <= 500) {
//             console.log("1.1em");
//             title.style.fontSize = "1.1em";
//         }
//     })

// });
