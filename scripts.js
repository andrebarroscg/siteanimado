let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let intems = container.querySelectorAll('.list .item')
let indication = document.querySelector('.indicators')
let dots = indication.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = intems.length - 1


function setSlider() {
    let intemOld = container.querySelector('.list .item.active')
    intemOld.classList.remove('active')
    

    let dotsOld = indication.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indication.querySelector('.number').innerText = '0' + (active + 1)
}


nextButton.onclick = () => {
        list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    intems[active].classList.add('active')


}

prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    intems[active].classList.add('active')

}