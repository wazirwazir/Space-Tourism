let b1 = document.querySelector('.s1')
let b2 = document.querySelector('.s2')
let b3 = document.querySelector('.s3')
let b4 = document.querySelector('.s4')
let img1 = document.getElementsByTagName('img')[1]
let img2 = document.getElementsByTagName('img')[2]
let img3 = document.getElementsByTagName('img')[3]
let img4 = document.getElementsByTagName('img')[4]
let crew1 = document.getElementsByClassName('crew')[0]
let crew2 = document.getElementsByClassName('crew')[1]
let crew3 = document.getElementsByClassName('crew')[2]
let crew4 = document.getElementsByClassName('crew')[3]


function first() {
    img1.classList.remove('hide')
    img2.classList.add('hide')
    img3.classList.add('hide')
    img4.classList.add('hide')

    crew1.classList.remove('hide')
    crew2.classList.add('hide')
    crew3.classList.add('hide')
    crew4.classList.add('hide')
}

function second() {
    img1.classList.add('hide')
    img2.classList.remove('hide')
    img3.classList.add('hide')
    img4.classList.add('hide')

    crew1.classList.add('hide')
    crew2.classList.remove('hide')
    crew3.classList.add('hide')
    crew4.classList.add('hide')
}

function third() {
    img1.classList.add('hide')
    img2.classList.add('hide')
    img3.classList.remove('hide')
    img4.classList.add('hide')

    crew1.classList.add('hide')
    crew2.classList.add('hide')
    crew3.classList.remove('hide')
    crew4.classList.add('hide')
}

function fourth() {
    img1.classList.add('hide')
    img2.classList.add('hide')
    img3.classList.add('hide')
    img4.classList.remove('hide')

    crew1.classList.add('hide')
    crew2.classList.add('hide')
    crew3.classList.add('hide')
    crew4.classList.remove('hide')
}

b1.onclick = first
b2.onclick = second
b3.onclick = third
b4.onclick = fourth