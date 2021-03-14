const projTitle = document.querySelector('.slider-container h1');
const menuWrapper = document.querySelector('.menu-wrapper');
const links = document.querySelectorAll('.menu-wrapper a');


// console.log(menuWrapper.childNodes[1]);

addEventListener('scroll', (e) => {
    let node = projTitle.childNodes[1];
    // console.log(aboutSec.getBoundingClientRect().y);
    // console.log(projTitle.getBoundingClientRect().y);
    if (projTitle.getBoundingClientRect().y <= 600) {
        projTitle.classList.add('active');
        // console.log(node);
        node.classList.add('active');
        
        menuWrapper.style.background = "#1c1c1c";
        links.forEach(element => {
            element.style.color = "#fff";
        });

    } else {
        projTitle.classList.remove('active');
        node.classList.remove('active');
        menuWrapper.style.background = "none";
        links.forEach(element => {
            element.style.color = "#000";
        });
    }
})