import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const kettle = document.getElementById('kettle');
const waterpour = document.getElementById('waterpour');
const coffeepour = document.getElementById('coffeepour');
const pointText = document.getElementById('point');
const switchbtn = document.getElementById('switch-btn');
const background = document.getElementById('background');
const coffeeup = document.getElementById('coffeeup');

let startX = 0;
let startY = 0;
let kettleItrCount = 0
let point = 0
let uprate = 0
let player = 'p1'
let playerpoint = 0.0

let pointUp = setInterval(() => {
    point += uprate
    playerpoint = point
    const pointshow = document.getElementById(`g1${player}point`)
    pointshow.innerHTML = playerpoint.toFixed(2) + ' g'
    pointText.innerHTML = point.toFixed(2) + ' g'
    if(point >= 300) {
        uprate = 0
        pointText.innerHTML = 'Enough!'
        coffeeup.style.animationPlayState = 'paused'
        waterpour.style.display = 'none'
    }
    else {
        waterpour.style.display = 'block'
    }
},0)

kettle.onanimationiteration = () => {
    kettleItrCount += 1
    kettle.style.animationPlayState = 'paused'
    coffeepour.style.animationPlayState = 'paused'
    waterpour.style.animationPlayState = 'paused'
}

kettle.addEventListener('touchstart',(event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    coffeeup.style.animationName = 'coffeeup'
})

kettle.addEventListener('touchmove',(event) => {
    event.preventDefault();
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    kettle.style.left = (((currentX / window.innerWidth) * 100) - 30) + '%'
    kettle.style.top = (((currentY / window.innerHeight) * 100) - 40) + '%'
    waterpour.style.left = (((currentX / window.innerWidth) * 100) - 35) + '%'
    waterpour.style.top = (((currentY / window.innerHeight) * 100) + 7) + '%'
    waterpour.style.height = (((-currentY / window.innerHeight) * 100) + 25) + '%'

    if ((((currentX / window.innerWidth) * 100)) <= 88 && (((currentX / window.innerWidth) * 100)) >= 75 && (((currentY / window.innerHeight) * 100)) <= 30) {
        if (kettleItrCount%2 == 0) {
            console.log(kettleItrCount)
            kettle.style.animationPlayState = 'running'
            waterpour.style.opacity = 100
            coffeepour.style.opacity = 100
            coffeepour.style.animationPlayState = 'running'
            coffeeup.style.animationPlayState = 'running'
            uprate = 0.075

        }
    }
    else {
        if (kettleItrCount%2 != 0) {
            console.log(kettleItrCount)
            kettle.style.animationPlayState = 'running'
            waterpour.style.opacity = 0
            coffeepour.style.opacity = 0
            coffeepour.style.animationPlayState = 'running'
            coffeeup.style.animationPlayState = 'paused'
            uprate = 0
        }
    }

  });

  kettle.addEventListener('touchend',(e) => {
    e.preventDefault()
    if (kettleItrCount%2 != 0) {
        kettle.style.animationPlayState = 'running'
        coffeepour.style.animationPlayState = 'running'
    }
    waterpour.style.opacity = 0
    coffeepour.style.opacity = 0
    coffeeup.style.animationPlayState = 'paused'
    kettle.style.left = 70 + '%'
    kettle.style.top = -25 + '%'
    kettle.style.rotate = -34.94 + 'deg'
    waterpour.style.left = 55.5 + '%'
    waterpour.style.top = 24 + '%'
    uprate = 0
    
})


switchbtn.addEventListener('click',() => {
    if(player == 'p1') {
        player = 'p2'
        kettleItrCount = 0
        point = 0
        coffeeup.style.animationName = 'none'
        background.src = '../assets/element_game1_forcode/bg_game1_signp2.png'
        switchbtn.src = '../assets/element_game1_forcode/button_next.png'
    }
    else if(player == 'p2') {
        sm.NextScene()
    }
})