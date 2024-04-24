import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('game-5');
export let targetID = ''

thisscene.addEventListener('click',(e) => {
    targetID = e.target.id
    console.log(targetID)
    if(e.target.classList.contains('signs')) {
        // let toNum = parseInt(targetID.charAt(5))
        ShowPaper()
    }
});

function ShowPaper() {
    const paperscene = document.getElementById('paper-scene')
    paperscene.classList.remove('hidden')
}