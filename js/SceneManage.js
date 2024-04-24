export class SceneManagement {

    constructor() {
        this.scenesOrder = [
            'homepage',
            'video-motion-scene',
            'howtoplay-scene',
            'map-scene',
            'game-1',
            'map-scene',
            'map-scene',
            'game-3',
            'map-scene',
            'map-scene',
            'game-5',
            'end-scene'
        ]
    }

    async NextScene() {
        let currentScene = localStorage.getItem('currentScene');
        const thisscene = document.getElementById(this.scenesOrder[currentScene]);
        thisscene.classList.add('hidden');

        currentScene++;
        const nextscene = document.getElementById(this.scenesOrder[currentScene]);
        nextscene.classList.remove('hidden');
        localStorage.setItem('currentScene',currentScene);

        console.log(currentScene)
    }
}