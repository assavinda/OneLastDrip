import { SceneManagement } from "./SceneManage.js";
const sm = new SceneManagement()

const thisscene = document.getElementById('video-motion-scene');

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
            setTimeout(() => {
                sm.NextScene()
            },200);
        }
        else {
            console.log('next scene')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);
