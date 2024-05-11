let b1 = document.querySelectorAll('.sne')[0]
let b2 = document.querySelectorAll('.sne')[1]
let b3 = document.querySelectorAll('.sne')[2]
let img1 = document.getElementsByTagName('img')[1]
let img2 = document.getElementsByTagName('img')[2]
let img3 = document.getElementsByTagName('img')[3]
let what1 = document.getElementsByClassName('what')[0]
let what2 = document.getElementsByClassName('what')[1]
let what3 = document.getElementsByClassName('what')[2]



function first() {
    img1.classList.remove('hide')
    img2.classList.add('hide')
    img3.classList.add('hide')

    what1.classList.remove('hide')
    what2.classList.add('hide')
    what3.classList.add('hide')
}

function second() {
    img1.classList.add('hide')
    img2.classList.remove('hide')
    img3.classList.add('hide')

    what1.classList.add('hide')
    what2.classList.remove('hide')
    what3.classList.add('hide')
}

function third() {
    img1.classList.add('hide')
    img2.classList.add('hide')
    img3.classList.remove('hide')

    what1.classList.add('hide')
    what2.classList.add('hide')
    what3.classList.remove('hide')
}



b1.onclick = first
b2.onclick = second
b3.onclick = third
