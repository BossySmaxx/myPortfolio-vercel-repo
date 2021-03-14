function getSlides () {
    if (innerWidth >= 900) {
        // console.log("5 slides");
        return 5;
    } else if (innerWidth >= 700 && innerWidth < 900) {
        // console.log("3 slides");
        return 3;
    } else if (innerWidth >= 450 && innerWidth < 700) {
        // console.log("2 slides");
        return 2; 
    } else if(innerWidth >= 100 && innerWidth < 450) {
        // console.log("1 slides");
        return 1;
    }
}

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
    // console.log(card);
    if (i > 9) {
        i = 0;
    }
    card.style.background = `url('backgrounds/back${i+1}.jpg')`;
    // console.log(i);
});

const slider = new Swiper('.swiper-container', {
    slidesPerView: getSlides(), 
    loop: true, 
    autoplay: {
        delay: 2000
    }
})

// console.log(getSlides());
const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('mousemove', (e) => {
        slideBounds = {
            x: slide.getBoundingClientRect().x, 
            y: slide.getBoundingClientRect().y, 
            width: slide.getBoundingClientRect().width, 
            height: slide.getBoundingClientRect().height, 
            centerX: slide.getBoundingClientRect().width/2, 
            centerY: slide.getBoundingClientRect().height/2, 
        };

        // if (e.clientX < slideBounds.centerX) {
        //     slide.style.transform = `rotateX(-10deg) rotateY(-10deg)`;
        // } else if (e.clientX > slideBounds.centerX) {
        //     slide.style.transform = `rotateX(-10deg) rotateY(10deg)`;
        // } else if (e.clientY < slideBounds.centerY) {
        //     slide.style.transform = `rotateX(10deg) rotateY(-10deg)`;
        // } else if (e.clientY > slideBounds.centerY) {
        //     slide.style.transform = `rotateX(10deg) rotateY(10deg)`;
        // }

        
        if (e.clientX < slideBounds.centerX && e.clientY < slideBounds.centerY) {
            slide.style.transform = `rotateX(-10deg) rotateY(-10deg)`;
        } 
        if (e.clientX > slideBounds.centerX && e.clientY < slideBounds.centerY) {
            slide.style.transform = `rotateX(10deg) rotateY(-10deg)`;
        } 
        if (e.clientX > slideBounds.centerX && e.clientY > slideBounds.centerY) {
            slide.style.transform = `rotateX(10deg) rotateY(10deg)`;
        } 
        if (e.clientX < slideBounds.centerX && e.clientY > slideBounds.centerY) {
            slide.style.transform = `rotateX(-10deg) rotateY(10deg)`;
        } 

    })

    slide.addEventListener('mouseleave', (e) => {
        slide.style.transform = `rotate(0)`;
    })
})