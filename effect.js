function random(min, max) {
    return (min + Math.random() * (max-min));
}

const sphere = document.querySelector('.sphere');
const skills = document.querySelectorAll('.sphere span.skill-title');

let sphereWidth = sphere.clientWidth;
let sphereHeight = sphere.clientHeight; 

skills.forEach(skill => {
    skill.style.left = `${random(0, sphereWidth - skill.clientWidth)}px`;
    skill.style.top = `${random(0, sphereHeight - skill.clientHeight)}px`;
});

setInterval(() => {
    overlapResistance();    
}, 1000);

window.addEventListener('resize', overlapResistance);

function overlapResistance() {

    for (let i = 0; i < skills.length; i++) {
        let box1 = {
            x1: skills[i].getBoundingClientRect().x, 
            x2: skills[i].getBoundingClientRect().x + skills[i].getBoundingClientRect().width, 
            y1: skills[i].getBoundingClientRect().y, 
            y2: skills[i].getBoundingClientRect().y + skills[i].getBoundingClientRect().height
        };
        
        for (let j = 0; j < skills.length; j++) {
            if (i == j) {
                
            } else {
                let box2 = {
                    x1: skills[j].getBoundingClientRect().x, 
                    x2: skills[j].getBoundingClientRect().x + skills[j].getBoundingClientRect().width, 
                    y1: skills[j].getBoundingClientRect().y, 
                    y2: skills[j].getBoundingClientRect().y + skills[j].getBoundingClientRect().height
                };
    
                if (box1.x1 >= box2.x1 && box2.x1 <= box1.x2 && box1.x1 <= box2.x2 || box2.x1 >= box1.x1 && box2.x1 <= box1.x2 ) {
                    if (box1.y1 >= box2.y1 && box2.y1 <= box1.y2 && box1.y1 <= box2.y2 || box2.y1 >= box1.y1 && box2.y1 <= box1.y2 ) {
                        skills[j].style.left = `${random(0, sphereWidth - skills[j].clientWidth)}px`;
                        skills[j].style.top = `${random(0, sphereHeight - skills[j].clientHeight)}px`;
                        // skills[j].style.backgroundColor = "red";
                        
                    }
                }
                
            }
            
        }
    }
    
}




// comments useless code but could be used in future------------------------------------------------------------------------------

// function animateBlob() {

//     // overlapResistance();

//     let X = random(-100, 100);
//     let Y = random(-100, 100);
//     let Z = random(-300, 300);
//     let scale = random(0.3, 1.2);

//     skills.forEach(skill => {
//         skill.style.transform = `translateX(${X}px) translateY(${Y}px) translateZ(${Z}px) scale(${scale})`;
//         skill.style.opacity = scale;
    
//         if (X >= 100 || X <= -100) {
//             X *= -1;
//         }
//         if (Y >= 100 || Y <= -100) {
//             Y *= -1;
//         }
//         if (Z >= 100 || Z <= -100) {
//             Z *= -1;
//         }
    
//         if (scale >= 1.3 || scale <= 0.3) {
//             scale *= -1;
//         }
        
        
//         X++;
//         Y++;
//         Z++;
//         scale += 0.1;
//     }) 
// }

// setInterval(animateBlob, 500);
