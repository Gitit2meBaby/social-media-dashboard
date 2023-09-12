const darkModeToggle = document.querySelector('#switch')

darkModeToggle.addEventListener('click', () => {
    darkMode()
})

const body = document.querySelector('.body')
const largeGrid = document.querySelectorAll('.container-large');
const smallGrid = document.querySelectorAll('.container-small');
const whiteElements = document.querySelectorAll('.white')
const deBlueElements = document.querySelectorAll('.de-blue')

function darkMode() {
    body.classList.toggle('very-dark-blue-bg');
    whiteElements.forEach((element) => {
        element.classList.toggle('white-text');
    });

    deBlueElements.forEach((element) => {
        element.classList.toggle('de-blue');
    });

    largeGrid.forEach((container) => {
        container.classList.toggle('dark-desaturated-blue-bg');
    });

    smallGrid.forEach((container) => {
        container.classList.toggle('dark-desaturated-blue-bg');
    });
}
