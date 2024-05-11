const tab = document.querySelector('button')
const nav = document.querySelector('nav')

function tat() {
    nav.classList.toggle('hider')
}
tab.addEventListener('click', tat)