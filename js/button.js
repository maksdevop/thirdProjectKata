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
        expandImg.src = './images/expand-up.svg';
    } else {
        expandText.innerHTML = 'Показать все';
        expandImg.src = './images/expand.svg';
    }
}

toggleBrand.addEventListener('click', swapBrands);

export default button;
