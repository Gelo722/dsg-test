
const sliderSwiper = new Swiper('.slider .swiper', {
    // Опции Swiper
    // modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true, // Зацикливание слайдов
    slidesPerView: 1, // Количество слайдов, отображаемых одновременно
    spaceBetween: 0,
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: '.slider .swiper-button-next', // Кнопка "Следующий"
        prevEl: '.slider .swiper-button-prev', // Кнопка "Предыдущий"
    },

    // pagination: {
    //     el: '.swiper-pagination', // Элемент пагинации (если нужен)
    //     clickable: true, // Возможность кликать по точкам пагинации
    // },
    // Другие опции, которые вы можете настроить
    // autoplay: {
    //     delay: 3000, // Автоматическая смена слайдов через 3 секунды
    //     disableOnInteraction: false, // Не отключать автопроигрывание при взаимодействии
    // },
});


const popularSwiper = new Swiper('.popular .swiper', {
    loop: true,
    observer: true,
    observerParents: true,
    // centeredSlides: false,
    slidesPerView: 1.1,
    slideToClickedSlide: true,
    direction: 'horizontal',
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        640: {
            slidesPerView: 2,
            //   spaceBetween: 20
        },
        1024: {
            slidesPerView: 3, 
            //   spaceBetween: 10
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

