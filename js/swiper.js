let swiper;
const initSwiper = () => {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',

        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true, 
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};

const destroySwiper = () => {
    if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
};

const handleResize = () => {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');

    if (cardsContainer && cards.length > 0) {
        if (window.innerWidth <= 767) {
            if (!swiper) {
                cardsContainer.classList.add('swiper-wrapper');
                cards.forEach((card) => {
                    card.classList.add('swiper-slide');
                });
                initSwiper();
            }
        } else {
            if (swiper) {
                destroySwiper();
                cardsContainer.classList.remove('swiper-wrapper');
                cards.forEach((card) => {
                    card.classList.remove('swiper-slide');
                });
            }
        }
    }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

export default swiper;
