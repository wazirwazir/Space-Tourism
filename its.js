const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')
const aboutwrap = document.getElementById('aboutwrap')
const moonb = document.getElementById('moonb')
const marsb = document.getElementById('marsb')
const europab = document.getElementById('europab')
const titanb = document.getElementById('titanb')
const moonimage = document.getElementById('moonimage')
const marsimage = document.getElementById('marsimage')
const europaimage = document.getElementById('europaimage')
const titanimage = document.getElementById('titanimage')

function mooner() {
    moon.classList.remove('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    moonimage.classList.remove('hide')
    marsimage.classList.add('hide')
    europaimage.classList.add('hide')
    titanimage.classList.add('hide')
    
}

function marser() {
    mars.classList.remove('hide')
    moon.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    marsimage.classList.remove('hide')
    moonimage.classList.add('hide')
    europaimage.classList.add('hide')
    titanimage.classList.add('hide')
    
}

function europaer() {
    europa.classList.remove('hide')
    mars.classList.add('hide')
    moon.classList.add('hide')
    titan.classList.add('hide')

    europaimage.classList.remove('hide')
    marsimage.classList.add('hide')
    moonimage.classList.add('hide')
    titanimage.classList.add('hide')
}

function titaner() {
    titan.classList.remove('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')
    moon.classList.add('hide')

    titanimage.classList.remove('hide')
    marsimage.classList.add('hide')
    europaimage.classList.add('hide')
    moonimage.classList.add('hide')
}

moonb.onclick = mooner
marsb.onclick = marser
europab.onclick = europaer
titanb.onclick = titaner

const tab = document.querySelector('button')
const nav = document.querySelector('nav')

function tat() {
    nav.classList.toggle('hider')
}
tab.addEventListener('click', tat)