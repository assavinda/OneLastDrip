import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const startbtn = document.getElementById('start-btn');

let currentScene = 0;
localStorage.setItem('currentScene',currentScene);

let currentStation = 1
localStorage.setItem('currentStation',currentStation);

startbtn.addEventListener('click',() => {
    console.log('start')
    sm.NextScene()
})