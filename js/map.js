const thisscene = document.getElementById('map-scene')
const mapvideo = document.getElementById('map-video')
let loopStartAt = 0;
let loopEndAt = 0;

const clickstage1 = document.getElementById('clickstage-1')

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thisscene.classList.contains('hidden') == false) {
            //check what is current stage now
            let currentStation = localStorage.getItem('currentStation')
            // let currentStation = 3
            mapvideo.src = `../assets/VDO คั่นแต่ละเสตจ/stage_jump${currentStation}.mp4`
            
            if(currentStation == 1) {
                loopStartAt = 3.725
                loopEndAt = 5.125
                clickstage1.style.top = 2.5 + '%'
                clickstage1.style.left = 30.4 + '%'
            }
            else if(currentStation == 2) {
                loopStartAt = 3.725
                loopEndAt = 5.325
                clickstage1.style.top = 38 + '%'
                clickstage1.style.left = 27 + '%'
            }
            else if(currentStation == 3) {
                loopStartAt = 3.725
                loopEndAt = 5.325
                clickstage1.style.top = 26 + '%'
                clickstage1.style.left = 48.3 + '%'
            }
            else if(currentStation == 4) {
                loopStartAt = 3.725
                loopEndAt = 5.325
                clickstage1.style.top = 33 + '%'
                clickstage1.style.left = 72.6 + '%'
            }
            else if(currentStation == 5) {
                loopStartAt = 3.725
                loopEndAt = 5.325
                clickstage1.style.top = 64 + '%'
                clickstage1.style.left = 56.7 + '%'
            }
        }
        else {
            console.log('next scene')
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thisscene, observerConfig);

mapvideo.addEventListener('timeupdate', function() {
    if(mapvideo.currentTime >= loopEndAt) {
        mapvideo.currentTime = loopStartAt;
    }
});

const paperscene = document.getElementById('paper-scene')

clickstage1.addEventListener('click',() => { 
    paperscene.classList.remove('hidden')
    console.log('clicked')
})