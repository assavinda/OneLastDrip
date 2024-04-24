import { SceneManagement } from "./SceneManage.js";
import { targetID } from "./game-5.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('paper-scene');
const papers = document.getElementsByClassName('papers')

const paperContents = {
    1:{
        0:[
            `none`,
            `
            เริ่มเดินทางได้ไม่นาน เหล่านักสำรวจก็ได้พบกับ<br>
            แคมป์ร้างแห่งหนึ่งที่เต็มไปด้วยอุปกรณ์ทำกาแฟ<br>
            จึงขอหยุดแวะโชว์สกิลดริปกาแฟกันเสียหน่อย`
        ],
        1:[
            `none`,
            `
            ทว่า... ด้วยผลจากภัยแล้งทำให้แคมป์ร้างแห่งนี้<br>
            กลับมีน้ำหลงเหลืออยู่เพียงจำกัด<br>
            การโชว์ดริปกาแฟครั้งนี้จึงต้องเป๊ะทั้งรสชาติ<br>
            ไปจนถึงการกะปริมาณน้ำไม่ให้สิ้นเปลือง`
        ],
        2:[
            `sign_sta1`,
            `
            เหล่านักสำรวจจงสังเกตป้ายนี้<br>
            เพื่อกะปริมาณกาแฟที่ต้องดริปให้เป๊ะที่สุด`
        ],
        3:[
            `kettle`,
            `
            จากนั้นจงลาก ”กาน้ำ”<br>
            เพื่อเริ่มโชว์ทักษะการดริปกาแฟของตน`
        ],
        4:[
            `none`,
            `
            ผู้ที่ดริปกาแฟใกล้เคียงกับปริมาณที่กำหนดมากที่สุด
            รับ Coffee Token เพิ่มไปเลย 3 เหรียญ
            และผู้แพ้รับ Coffee Token เพิ่ม 1 เหรียญ`
        ]
    },

    2:{
        0:[
            `card`,
            `
            ถึงเวลาเสี่ยงทาย! นักสำรวจทั้งสอง<br>
            จงจั่วการ์ดจากกองไพ่คนละ 1 ใบ<br>
            และรับผลเอฟเฟคจากการ์ดนั้น
            `
        ],
    },

    3:{
        0:[
            `none`,
            `
            ขณะที่เหล่านักเดินทางใกล้จะถึงที่หมาย พวกเขาก็ได้พบกองขยะขนาดมหึมา
            ที่ขวางกั้นเส้นทางของพวกเขาอยู่ 
            `
        ],
        1:[
            `none`,
            `
            เมื่อขยับเข้าไปใกล้ยิ่งขึ้น<br>
            เหล่านักสำรวจก็พากันตกใจ...<br>
            เพราะขยะส่วนใหญ่มาจากการทำกาแฟทั้งสิ้น
            `
        ],
        2:[
            `magnifier`,
            `
            เหล่านักสำรวจจงตามหาขยะจากกาแฟ<br>
            โดยกดเลือกขยะชิ้นที่ต้องการ<br>
            จากนั้นเลือกแว่นขยายตามสีของตน
            `
        ],
        3:[
            `none`,
            `
            ใครที่พบขยะจากการทำกาแฟได้มากที่สุด<br>
            รับ Coffee Token เพิ่มไปเลย 3 เหรียญ<br>
            และผู้แพ้รับ Coffee Token เพิ่ม 1 เหรียญ
            `
        ],
    },

    4:{
        0:[
            `card`,
            `
            ถึงเวลาเสี่ยงทาย! นักสำรวจทั้งสอง<br>
            จงจั่วการ์ดจากกองไพ่คนละ 1 ใบ<br>
            และรับผลเอฟเฟคจากการ์ดนั้น            
            `
        ]
    },

    5:{
        0:[
            `none`,
            `
            ในที่สุด! เหล่านักสำรวจก็ได้พบกับ<br>
            พื้นที่เพาะปลูกแหล่งสุดท้าย<br>
            ที่ยังคงรอดพ้นจากภาวะโลกร้อน                        
            `
        ],
        1:[
            `none`,
            `
            เหล่านักสำรวจที่หวังจะกู้ชีพกาแฟ<br>
            ให้กลับมาสมบูรณ์อีกครั้ง จึงตั้งใจที่จะนำ<br>
            เมล็ดกาแฟมาเพาะพันธุ์เพิ่ม ในพื้นที่ดังกล่าว
                   
            `
        ],
        2:[
            `none`,
            `
            แต่หากพื้นที่แหล่งสุดท้ายไม่ได้ถูกดูแลจาก<br>
            ผู้ใส่ใจต่อกาแฟตัวจริง ก็ไม่อาจคงอยู่ได้<br>
            นักสำรวจจึงต้องพบกับบททดสอบครั้งใหญ่ !                       
            `
        ],
        3:[
            `sign_sta5`,
            `
            เหล่านักสำรวจจงเลือกพื้นที่ที่ต้องการดูแล<br>
            คนละ 1 พื้นที่ และตอบคำถามของบททดสอบที่ได้รับ
            `
        ],
        4:[
            `none`,
            `
            นักสำรวจที่สามารถเอาชนะบททดสอบได้<br>
            จะได้รับ Coffee Token เพิ่มไปเลย 5 เหรียญ<br>
            ส่วนผู้ที่ไม่สามารถเอาชนะบททดสอบนี้ได้<br>
            จะไม่ได้รับ Coffee Token เพิ่มในรอบนี้
            `
        ]
    },

    6:{
        sign1: {
            0:{
                question: [
                    `Question`,
                    `
                    กากกาแฟเหลือทิ้งนั้น<br>
                    ไม่สามารถนำมาใช้รีไซเคิลได้
                    `
                ],
                yes: [
                    `Failed`,
                    `
                    อีกนิดเดียวเท่านั้น ! <br>
                    กากกาแฟนั้นแม้ดูเผิน ๆ อาจเหมือนขยะเหลือทิ้ง <br>
                    แต่แท้จริงแล้วสามารถนำมารีไซเคิล<br>
                    เพื่อลดการสร้างขยะด้วย zero waste ได้ !
                    `
                ],
                no: [
                    `Goodjob!`,
                    `
                    กากกาแฟนั้นสามารถรีไซเคิลสร้างประโยชน์ต่าง ๆ <br>
                    ซึ่งเป็นการลดการสร้างขยะ ช่วยลดโลกร้อนได้<br>
                    เก่งแบบนี้ก็รับ coffee tokenจำนวน 5 เมล็ดไปเลย !
                    `
                ]
            },
            1:{
                question: [
                    `Question`,
                    `
                    กากกาแฟเหลือทิ้งนั้น<br>
                    ไม่สามารถนำมาใช้รีไซเคิลได้
                    `
                ],
                yes: [
                    `Failed`,
                    `
                    อีกนิดเดียวเท่านั้น ! <br>
                    กากกาแฟนั้นแม้ดูเผิน ๆ อาจเหมือนขยะเหลือทิ้ง <br>
                    แต่แท้จริงแล้วสามารถนำมารีไซเคิล<br>
                    เพื่อลดการสร้างขยะด้วย zero waste ได้ !
                    `
                ],
                no: [
                    `Goodjob!`,
                    `
                    กากกาแฟนั้นสามารถรีไซเคิลสร้างประโยชน์ต่าง ๆ <br>
                    ซึ่งเป็นการลดการสร้างขยะ ช่วยลดโลกร้อนได้<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ]
            }
        },
        sign2: {
            0:{
                question: [
                    `Question`,
                    `
                    หลังภาวะโลกร้อนรุนแรงยิ่งขึ้น<br>
                    อุณหภูมิบนโลกก็พุ่งสูงขึ้นอย่างต่อเนื่อง<br>
                    ส่งผลให้กาแฟโรบัสต้าเสี่ยงสูญพันธุ์

                    `
                ],
                yes: [
                    `Failed`,
                    `
                    อีกนิดเดียวเท่านั้น !<br>
                    แท้จริงแล้ว กาแฟที่มีโอกาสสูญพันธุ์คือ อาราบิก้า<br>
                    เนื่องจากไม่ทนต่อการเปลี่ยนแปลงสภาพอากาศ<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `
                    แท้จริงแล้ว กาแฟที่มีโอกาสสูญพันธุ์คือ อาราบิก้า <br>
                    เนื่องจากไม่ทนต่อการเปลี่ยนแปลงสภาพอากาศ<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ]
            },
            1:{
                question: [
                    `Question`,
                    `
                    หลังภาวะโลกร้อนรุนแรงยิ่งขึ้น<br>
                    อุณหภูมิบนโลกก็พุ่งสูงขึ้นอย่างต่อเนื่อง<br>
                    ส่งผลให้กาแฟโรบัสต้าเสี่ยงสูญพันธุ์

                    `
                ],
                yes: [
                    `Failed`,
                    `
                    อีกนิดเดียวเท่านั้น !<br>
                    แท้จริงแล้ว กาแฟที่มีโอกาสสูญพันธุ์คือ อาราบิก้า<br>
                    เนื่องจากไม่ทนต่อการเปลี่ยนแปลงสภาพอากาศ<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `
                    แท้จริงแล้ว กาแฟที่มีโอกาสสูญพันธุ์คือ อาราบิก้า <br>
                    เนื่องจากไม่ทนต่อการเปลี่ยนแปลงสภาพอากาศ<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ]
            }
        },
        sign3: {
            0:{
                question: [
                    `Question`,
                    `
                    การขนส่งกาแฟนั้นสร้างมลพิษทางอากาศในปริมาณน้อย <br>
                    เพราะมีกฎหมายควบคุมปริมาณการส่งออก
                    `
                ],
                yes: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    การขนส่งกาแฟนั้นอาศัยเชื้อเพลิง fossil ในปริมาณมาก <br>
                    ปล่อยก๊าซเรือนกระจกจนโลกร้อน มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `แท้จริงแล้ว การขนส่งกาแฟนั้นอาศัยเชื้อเพลิง fossil ในปริมาณมาก<br>
                    ปล่อยก๊าซเรือนกระจกจนโลกร้อน <br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ]
            },
            1:{
                question: [
                    `Question`,
                    `
                    การขนส่งกาแฟนั้นสร้างมลพิษทางอากาศในปริมาณน้อย <br>
                    เพราะมีกฎหมายควบคุมปริมาณการส่งออก
                    `
                ],
                yes: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    การขนส่งกาแฟนั้นอาศัยเชื้อเพลิง fossil ในปริมาณมาก <br>
                    ปล่อยก๊าซเรือนกระจกจนโลกร้อน มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `แท้จริงแล้ว การขนส่งกาแฟนั้นอาศัยเชื้อเพลิง fossil ในปริมาณมาก<br>
                    ปล่อยก๊าซเรือนกระจกจนโลกร้อน <br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ]
            }
        },
        sign4: {
            0:{
                question: [
                    `Question`,
                    `ภาวะโลกร้อนส่งผลให้คุณภาพ<br>
                    และรสชาติของกาแฟแย่ลง
                    `
                ],
                yes: [
                    `Goodjob!`,
                    `เมื่ออุณหภูมิสูงขึ้น โรคสนิมกาแฟก็เพิ่มสูงขึ้นด้วย<br>
                    ส่งผลให้การควบคุมคุณภาพกาแฟเป็นไปได้ยาก<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ],
                no: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    เมื่ออุณหภูมิสูงขึ้น โรคสนิมกาแฟก็เพิ่มสูงขึ้นด้วย<br>
                    ส่งผลให้การควบคุมคุณภาพกาแฟเป็นไปได้ยาก<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ]
            },
            1:{
                question: [
                    `Question`,
                    `ภาวะโลกร้อนส่งผลให้คุณภาพ<br>
                    และรสชาติของกาแฟแย่ลง
                    `
                ],
                yes: [
                    `Goodjob!`,
                    `เมื่ออุณหภูมิสูงขึ้น โรคสนิมกาแฟก็เพิ่มสูงขึ้นด้วย<br>
                    ส่งผลให้การควบคุมคุณภาพกาแฟเป็นไปได้ยาก<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย !
                    `
                ],
                no: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    เมื่ออุณหภูมิสูงขึ้น โรคสนิมกาแฟก็เพิ่มสูงขึ้นด้วย<br>
                    ส่งผลให้การควบคุมคุณภาพกาแฟเป็นไปได้ยาก<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ]
            }
        },
        sign5: {
            0:{
                question: [
                    `Question`,
                    `โดยเฉลี่ยแล้วกาแฟ 1 แก้วนั้นสร้างขยะมากถึง 3 ชิ้น
                    `
                ],
                yes: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    กาแฟ 1 แก้วนั้น สร้างขยะถึง 5 ชิ้นและอาจมากขึ้นอีก <br>
                    หากเราสั่งจาก delivery หรือนับรวมขยะจากการชงกาแฟภายในร้าน<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `กาแฟ 1 แก้วนั้น สร้างขยะถึง 5 ชิ้นและอาจมากขึ้นอีก<br>
                    หากเราสั่งจาก delivery หรือนับรวมขยะจากการชงกาแฟภายในร้าน<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย
                    `
                ]
            },
            1:{
                question: [
                    `Question`,
                    `โดยเฉลี่ยแล้วกาแฟ 1 แก้วนั้นสร้างขยะมากถึง 3 ชิ้น
                    `
                ],
                yes: [
                    `Failed`,
                    `อีกนิดเดียวเท่านั้น ! <br>
                    กาแฟ 1 แก้วนั้น สร้างขยะถึง 5 ชิ้นและอาจมากขึ้นอีก <br>
                    หากเราสั่งจาก delivery หรือนับรวมขยะจากการชงกาแฟภายในร้าน<br>
                    มาพยายามด้วยกันใหม่ครั้งหน้านะ
                    `
                ],
                no: [
                    `Goodjob!`,
                    `กาแฟ 1 แก้วนั้น สร้างขยะถึง 5 ชิ้นและอาจมากขึ้นอีก<br>
                    หากเราสั่งจาก delivery หรือนับรวมขยะจากการชงกาแฟภายในร้าน<br>
                    เก่งแบบนี้ก็รับ coffee token จำนวน 5 เมล็ดไปเลย
                    `
                ]
            }
        }
    },



} // Contents for each station

const papercontents = document.getElementById('paper-contents');

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
            console.log(targetID)
            sign = document.getElementById(targetID)
            let currentStation = localStorage.getItem('currentStation')
            console.log('currentStation:',currentStation)
            for (let i=0;i<papers.length;i++) {
                setTimeout(() => {
                    const paper = document.getElementById((papers.item(i).id));
                    paper.classList.remove('reset')
                    paper.style.animationPlayState = 'running';
                },500)
            }
            papercontents.classList.remove('hidden')
            papercontents.classList.remove('reset')

            //check game station (currentStation)
            index = 0
            station = currentStation
            setTimeout(() => {
                papercontents.style.animationPlayState = 'running';
            },600)
            if(currentStation%2 != 0) {
                stationtext.innerHTML = `station ${station}`
                innerNext.classList.remove('hidden')
                outerNext.classList.add('hidden')

                if(paperContents[station][index][0] != 'none') {
                    image.classList.remove('hidden')
                    image.src = `../assets/popup_paper/popup_ele_${paperContents[station][index][0]}.png`
                }
                else {
                    image.classList.add('hidden')
                }
                text.innerHTML = paperContents[station][index][1]
            }
            else if(currentStation%2 == 0) {
                if(currentStation >= 6) {
                    stationtext.innerHTML = paperContents[station][targetID][index]['question'][0]
                    text.innerHTML = paperContents[station][targetID][index]['question'][1]
                    innerNext.classList.add('hidden')
                    outerNext.classList.add('hidden')
                    image.classList.add('hidden')

                    yes.classList.remove('hidden')
                    no.classList.remove('hidden')

                    

                    console.log('qa')
                }
                else {
                    stationtext.innerHTML = `station ${station}`
                    innerNext.classList.add('hidden')
                    outerNext.classList.remove('hidden')

                    if(paperContents[station][index][0] != 'none') {
                        image.classList.remove('hidden')
                        image.src = `../assets/popup_paper/popup_ele_${paperContents[station][index][0]}.png`
                    }
                    else {
                        image.classList.add('hidden')
                    }
                    text.innerHTML = paperContents[station][index][1]
                }
            }
        }
        else {
            console.log('close paper')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);
const stationtext = document.getElementById('station-text');
const image = document.getElementById('paper-innerimage');
const text = document.getElementById('paper-innertext');

const innerBack = document.getElementById('paper-innerback');
const innerNext = document.getElementById('paper-innernext');
const innerStart = document.getElementById('paper-innerstart');

const yes = document.getElementById('paper-inneryes');
const no = document.getElementById('paper-innerno');

const outerNext = document.getElementById('paper-outernext');
const innerNext2 = document.getElementById('paper-innernext2');
const p2btn = document.getElementById('paper-p2btn');

let sign = document.getElementById(targetID)

let index = 0
let station = 1

innerNext.addEventListener('click',() => {
    NextScript()
    console.log('index :',index)
    if(index > Object.keys(paperContents[station]).length-2) {
        innerNext.classList.add('hidden')
        innerBack.classList.add('hidden')
        innerStart.classList.remove('hidden')
    }
})

function NextScript() {
    index++;
    if(index <= Object.keys(paperContents[station]).length-1) {
        if(paperContents[station][index][0] != 'none') {
            image.classList.remove('hidden')
            image.src = `../assets/popup_paper/popup_ele_${paperContents[station][index][0]}.png`
        }
        else {
            image.classList.add('hidden')
        }
        text.innerHTML = paperContents[station][index][1]
    }
    innerBack.classList.remove('hidden')
}

innerBack.addEventListener('click',() => {
    PreviousScript()
    console.log('index :',index)
    innerNext.classList.remove('hidden')
    if(index < 1) {
        innerBack.classList.add('hidden')
    }
})

function PreviousScript() {
    index--;
    if(index >= 0) {
        if(paperContents[station][index][0] != 'none') {
            image.classList.remove('hidden')
            image.src = `../assets/popup_paper/popup_ele_${paperContents[station][index][0]}.png`
        }
        else {
            image.classList.add('hidden')
        }
        text.innerHTML = paperContents[station][index][1]
    }
}

innerStart.addEventListener('click',() => {
    sm.NextScene()
    thisscene.classList.add('hidden')
    papercontents.classList.add('reset')
    for (let i=0;i<papers.length;i++) {
        const paper = document.getElementById((papers.item(i).id));
        paper.classList.add('reset')
    }

    innerBack.classList.add('hidden')
    innerNext.classList.remove('hidden')
    innerStart.classList.add('hidden')

    let currentStation = localStorage.getItem('currentStation')
    currentStation = parseInt(currentStation)+1;
    localStorage.setItem('currentStation',currentStation);
})

outerNext.addEventListener('click',() => {
    sm.NextScene()
    thisscene.classList.add('hidden')
    papercontents.classList.add('reset')
    for (let i=0;i<papers.length;i++) {
        const paper = document.getElementById((papers.item(i).id));
        paper.classList.add('reset')
    }

    outerNext.classList.add('hidden')

    let currentStation = localStorage.getItem('currentStation')
    currentStation = parseInt(currentStation)+1;
    localStorage.setItem('currentStation',currentStation);
})

yes.addEventListener('click',() => {
    let ans = 'yes'
    ShowResult(ans)
    
})

no.addEventListener('click',() => {
    let ans = 'no'
    ShowResult(ans)
})

function ShowResult(ans) {
    console.log(paperContents[station][targetID][index][ans])
    stationtext.innerHTML = paperContents[station][targetID][index][ans][0]
    text.innerHTML = paperContents[station][targetID][index][ans][1]
    yes.classList.add('hidden')
    no.classList.add('hidden')

    if(index%2 != 0) {
        innerNext2.classList.remove('hidden')
    }
    else {
        p2btn.classList.remove('hidden')
    }
}

function NextQuestion() {
    index++;
    stationtext.innerHTML = paperContents[station][targetID][index]['question'][0]
    text.innerHTML = paperContents[station][targetID][index]['question'][1]
    innerNext.classList.add('hidden')
    outerNext.classList.add('hidden')
    image.classList.add('hidden')

    innerNext2.classList.add('hidden')
    p2btn.classList.add('hidden')
    yes.classList.remove('hidden')
    no.classList.remove('hidden')
}

let signClicked = []


innerNext2.addEventListener('click',() => {
    thisscene.classList.add('hidden')
    innerNext2.classList.add('hidden')
    sign.style.pointerEvents = 'none'
    console.log(index)
    const shadow = document.getElementById(`${targetID}shadow`)
    shadow.classList.remove('hidden')
    signClicked.push(targetID)
    if(signClicked.length >= 5) {
        setTimeout(() => {
            sm.NextScene()
        },500)
    }
})

p2btn.addEventListener('click',() => {
    NextQuestion()
})