import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('video-motion-scene');
const next = document.getElementById('motionnext')
const vdo = document.getElementById('vdomotion')

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
          setTimeout(() => {
            vdo.muted = false
          },500)
            setTimeout(() => {
              next.classList.remove('hidden')
            },16000);
            
        }
        else {
            console.log('next scene')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);

next.addEventListener('click',() => {
  sm.NextScene()
})
