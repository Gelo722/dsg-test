
const sliderSwiper = new Swiper('.slider .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: '.slider .swiper-button-next', // Кнопка "Следующий"
        prevEl: '.slider .swiper-button-prev', // Кнопка "Предыдущий"
    },

});


const popularSwiper = new Swiper('.popular .swiper', {
    loop: true,
    observer: true,
    observerParents: true,
    slidesPerView: 1.1,
    slideToClickedSlide: true,
    direction: 'horizontal',
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3, 
        },
        1280: {
            slidesPerView: 3.4,
        },
        1440: {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: '.popular .swiper-button-next', // Кнопка "Следующий"
        prevEl: '.popular .swiper-button-prev', // Кнопка "Предыдущий"
    },
});

