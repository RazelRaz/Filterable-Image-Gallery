const filterTab_buttons = document.querySelectorAll('#filterTab_buttons button');
const filterTab_cards = document.querySelectorAll('#filterTab_cards .card');

const filterCards = (e) => {
    document.querySelector('#filterTab_buttons .active').classList.remove('active')
    e.target.classList.add('active')

    filterTab_cards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === 'all'){
            return card.classList.replace('hide', 'show');
        }
        card.classList.add('hide');
    })

}

filterTab_buttons.forEach(button => button.addEventListener('click', filterCards));



