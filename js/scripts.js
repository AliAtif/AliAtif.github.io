const scroll = new SmoothScroll('a[href*="#"]');
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});