const cards = document.querySelectorAll('.card');
const toggleBrand = document.querySelector('.expand');
const expandImg = document.querySelector('.expand__img');
const expandText = document.querySelector('.expand__text');
function swapBrands() {
    cards.forEach((card) => {
        if (card.classList.contains('card__swap')) {
            card.classList.toggle('card__hidden');
        }
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (card.classList.contains('card__swap-768')) {
                card.classList.toggle('card__hidden-768');
            }
        }
    });

    if (expandText.innerHTML === 'Показать все') {
        expandText.innerHTML = 'Скрыть';
        expandImg.src = './images/expand-up.png';
    } else {
        expandText.innerHTML = 'Показать все';
        expandImg.src = './images/expand.png';
    }
}

let swiper;
const initSwiper = () => {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',

        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
        if (window.innerWidth <= 320) {
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

toggleBrand.addEventListener('click', swapBrands);
