import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('game-3');
const area = document.getElementById('trash-area')

const trashes = [
    `coffee_can`,
    `coffee_filter`,
    `coffee_filter_funnel`,
    `coffee_grounds`,
    `coffee_lid`,
    `coffee_plastic_bag`,
    `coffee_pods`,
    `coffee_straw`,
    `cupsleeve`,
    `glass`,
    `green_straw`,
    `orange_straw`,
    `papercup`,
    `papertrash`,
    `plastic_lid`,
    `pods_lid`,
    `tissue`,
    `tube_bag`
]

const next = document.getElementById('g3next')
const prevent = document.getElementById('prevent')

next.addEventListener('click',() => {
    sm.NextScene()
})

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
            setTimeout(() => {
                prevent.classList.remove('hidden')
                next.classList.remove('hidden')
            },10000)
            const redline = document.getElementById('redline')
            redline.style.animationPlayState = 'running'

        }
        else {
            console.log('next scene')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);


let trashIndex = 0

trashes.forEach((Item) => {
    trashIndex++;
    area.innerHTML += 
    `
    <div id="tb-${trashIndex}" class="sm-elements trashcontents">
        <div class="trashbox">
            <div id="magnifier-${trashIndex}" class="sm-elements magnifier-div hidden" style="z-index: 10;">
                <img id="red-${trashIndex}" class="redmag magnifier" src="../assets/element_game3_forcode/element_ส่วนข้างบน/ele_magnifier_red.png">
                <img id="blue-${trashIndex}" class="bluemag magnifier" src="../assets/element_game3_forcode/element_ส่วนข้างบน/ele_magnifier_blue.png">
            </div>
            <div style="object-fit: contain; width: 100%; display: flex; justify-content: center;">
                <img id="g3-${trashIndex}" class="sm-elements trashes" src="../assets/element_game3_forcode/ele_${Item}.png">
            </div>
        </div>
    <div>
    `
})

let toNum = 0

let p1point = 0
let p2point = 0
const p1text = document.getElementById('g3p1point')
const p2text = document.getElementById('g3p2point')

area.addEventListener('click',(e) => {
    let target  = e.target
    let targetID = target.id

    if(target.classList.contains('trashes')) {
        if(targetID.length < 4) {
            toNum = parseInt(targetID.charAt(3))
        }
        else if(targetID.length >= 4) {
            toNum = parseInt(targetID.charAt(3)+targetID.charAt(4))
        }
        console.log(`magnifier-${toNum}`)
        let magnifierdiv = document.getElementById(`magnifier-${toNum}`)
        magnifierdiv.classList.remove('hidden')

        const trashImage = document.getElementById(targetID)
        trashImage.src = `../assets/element_game3_forcode/ele_${trashes[toNum-1]}__shadow.png`
    }
    else if(target.classList.contains('magnifier')) {
        console.log(targetID)
        console.log(toNum)
        if(target.classList.contains('redmag')) {
            p1point++;
            if(targetID.length < 5) {
                toNum = parseInt(targetID.charAt(4))
            }
            else if(targetID.length >= 5) {
                toNum = parseInt(targetID.charAt(4)+targetID.charAt(5))
            }
            let bigMag = document.getElementById(`red-${toNum}`)
            let smallMag = document.getElementById(`blue-${toNum}`)

            bigMag.style.animationName = 'mags-b'
            smallMag.style.animationName = 'mags-sm'
            bigMag.style.animationPlayState = 'running'
            smallMag.style.animationPlayState = 'running'
        }
        else if(target.classList.contains('bluemag')) {
            p2point++;
            if(targetID.length < 5) {
                toNum = parseInt(targetID.charAt(5))
            }
            else if(targetID.length >= 5) {
                toNum = parseInt(targetID.charAt(5)+targetID.charAt(6))
            }
            let bigMag = document.getElementById(`blue-${toNum}`)
            let smallMag = document.getElementById(`red-${toNum}`)

            bigMag.style.animationName = 'mags-b'
            smallMag.style.animationName = 'mags-sm'
            bigMag.style.animationPlayState = 'running'
            smallMag.style.animationPlayState = 'running'
        }
        console.log('p1',p1point,'p2',p2point)
        p1text.innerHTML = `+ ${String(p1point)}`
        p2text.innerHTML = `+ ${String(p2point)}`
    }
})

