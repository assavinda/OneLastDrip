import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('howtoplay-scene');
const vdo = document.getElementById('vdomotion')

const howtoscript = {
    board: `นำ coffee tokens ทั้งหมดวางลงบนกระดานกองกลาง`,
    token: `ผู้เล่นจะได้รับ  coffee tokens เริ่มต้น คนละ 10 เมล็ด <br>โดยตัวเลขข้างหลังจะแทนจำนวนเมล็ดกาแฟของเหรียญนั้น`,
    coffeebag: `เมื่อได้รับ coffee tokens มาแล้ว<br>ผู้เล่นจะต้องนำมาเก็บรักษาในถุง coffee bag ของตน`,
    cupsleevecard: `สับการ์ดและวางไว้ข้างกระดาน<br>เมื่อถึงตาที่ต้องจั่วการ์ด ให้ผู้เล่นจั่วการ์ดคนละ  1 ใบ<br>และแสดงผลลัพธ์ของการ์ดที่ตนได้รับ ก่อนนำการ์ดออกจากเกม`,
    cupsleevecard_two: `หากจั่วได้การ์ดทำดีจะได้รับ coffee tokens เพิ่มตามจำนวน<br>แต่หากได้รับการ์ดภัยร้าย ผู้เล่นจะต้องคืน  coffee tokens<br>ของตนเข้าสู่กองกลางตามจำนวน`,
    P1_P2: `ผู้เล่นคนที่ 1 จะแทนด้วย P1’s และมีประจำตัวคือชมพู<br>ส่วนผู้เล่นคนที่ 2 จะแทนด้วย P2’s และมีประจำตัวคือสีฟ้า`,
    win_lose: `ผู้เล่นที่สามารถรวบรวม coffee tokens มาเก็บรักษาไว้กับตน<br>ได้มากที่สุดภายใน 5 ด่าน จะเป็นผู้ชนะไป`
}

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
            const container = document.getElementById('container')
            container.style.overflow = 'scroll'
            vdo.muted = true
            vdo.paused
        }
        else {
            container.style.overflow = 'hidden'
            console.log('next scene')
            console.log('turn off scroll')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);

const image = document.getElementById('howto-image')
const text = document.getElementById('howto-text')
let index = 0;

const startbtn = document.getElementById('howto-start')
startbtn.addEventListener('click',() => {
    container.scrollTo(0,0)
    sm.NextScene();
})

const right = document.getElementById('howto-right')
const left = document.getElementById('howto-left')

right.addEventListener('click',() => {
    if(index >= (Object.keys(howtoscript).length-2)) {
        right.style.opacity = 0.5
        index = Object.keys(howtoscript).length-1
        if(startbtn.classList.contains('dontstart') == false) {
            startbtn.classList.remove('hidden')
        }
    }
    else {
        left.style.opacity = 1
        index++;
    }
    image.src = `../assets/howtoplay_ele/howtoplay_ele_${Object.keys(howtoscript)[index]}.png`
    text.innerHTML = howtoscript[Object.keys(howtoscript)[index]]
    console.log('next script')
    console.log(index,Object.keys(howtoscript).length-1)
})
left.addEventListener('click',() => {
    if(index <= 1) {
        left.style.opacity = 0.5
        index = 0
    }
    else {
        right.style.opacity = 1
        index--;
    }
    image.src = `../assets/howtoplay_ele/howtoplay_ele_${Object.keys(howtoscript)[index]}.png`
    text.innerHTML = howtoscript[Object.keys(howtoscript)[index]]
    console.log('previous script')
    console.log(index,Object.keys(howtoscript).length-1)
})
