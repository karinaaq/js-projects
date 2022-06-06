const closedMonkey = document.querySelector('.closed');
const openMonkey = document.querySelector('.open');

// Se agrega el evento
closedMonkey.addEventListener('click', () => {
    if (openMonkey.classList.contains('open')){
        openMonkey.classList.add('active');
        closedMonkey.classList.remove('active');
    }
});

openMonkey.addEventListener('click', () => {
    if (closedMonkey.classList.contains('closed')){
        closedMonkey.classList.add('active');
        openMonkey.classList.remove('active');
    }

});