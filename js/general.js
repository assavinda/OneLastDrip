
const menuscene = document.getElementById('toggle-menu')

const togglebtn = document.getElementById('logo-to-menu')
togglebtn.addEventListener('click',() => {
    console.log('go menu')
    menuscene.classList.remove('hidden')
})

const closemenu = document.getElementById('close-btn')
closemenu.addEventListener('click',() => {
    console.log('leave menu')
    menuscene.classList.add('hidden')
})

const gohome = document.getElementById('homepage-btn')
gohome.addEventListener('click',() => {
    window.location.reload()
})

const howto = document.getElementById('howtoplay-btn')
const htpscene = document.getElementById('howtoplay-scene')
const closehtp = document.getElementById('close-htp')
howto.addEventListener('click',() => {
    console.log('how to play')
    const howtostart = document.getElementById('howto-start')
    howtostart.classList.add('hidden')
    howtostart.classList.add('dontstart')
    menuscene.classList.add('hidden')
    htpscene.classList.remove('hidden')
    closehtp.classList.remove('hidden')
})

closehtp.addEventListener('click',() => {
    htpscene.classList.add('hidden')
    closehtp.classList.add('hidden')
    menuscene.classList.remove('hidden')
})

const motionscene = document.getElementById('video-motion-scene')
const closemotion = document.getElementById('close-motion')
const motion = document.getElementById('motion-story-btn')
motion.addEventListener('click',() => {
    htpscene.classList.add('hidden')
    motionscene.classList.remove('hidden')
    const motionnext = document.getElementById('motionnext')
    motionnext.classList.add('dontstart')
    motionnext.classList.add('hidden')
    closemotion.classList.remove('hidden')
    menuscene.classList.add('hidden')
})

closemotion.addEventListener('click',() => {
    motionscene.classList.add('hidden')
    closemotion.classList.add('hidden')
    menuscene.classList.remove('hidden')
})