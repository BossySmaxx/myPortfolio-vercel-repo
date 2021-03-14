const cursor = document.querySelector('.cursor');
const elements = document.querySelectorAll('button, a, .cta, .img, span.skill-title');

window.addEventListener('mousemove',(e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

elements.forEach(ele => {
    ele.addEventListener('mouseenter', (e) => {
        if (ele.classList.value === 'cta') {
            cursor.style.transform = "scale(8)";
        } else if (ele.classList.value === 'open') {
            cursor.style.transform = "scale(3)";
        } else {
            cursor.style.transform = "scale(5)";
        }


        cursor.style.border = "0.5px solid #1C1C1C";
        cursor.style.backgroundColor = "transparent";
        cursor.style.backdropFilter = "grayscale(1)";
    })
    
    ele.addEventListener('mouseleave', (e) => {
        cursor.style.transform = "scale(1.0)";
        cursor.style.backgroundColor = "#1C1C1C";
    })
})

const darkMode = document.querySelector('#toggle-mode');
const dontDark =  document.querySelectorAll('img, .card, .card img');

darkMode.addEventListener('change', (e) => {
    if (darkMode.checked == true) {
        document.querySelector('html').style.filter = "invert(1)";
        dontDark.forEach(img => {
            img.style.filter = "invert(1)";
        })
    } else {
        document.querySelector('html').style.filter = "invert(0)";
        dontDark.forEach(img => {
            img.style.filter = "invert(0)";
        })
    }
    // console.log(darkMode.checked);
})