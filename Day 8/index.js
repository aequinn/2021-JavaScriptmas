const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('bells.mp3');
const bell = document.getElementById("bell");
bell.style
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function play() {
    audio.play()
    bell.classList.add("animate")
    bell.style.animationPlayState = 'running';
    
}
 
 function pause() {
    audio.pause()
    bell.style.animationPlayState = "paused";
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    bell.classList.remove('animate');
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.