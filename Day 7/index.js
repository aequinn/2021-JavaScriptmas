const playBtn = document.getElementById("play-btn").addEventListener('click', play);
const pauseBtn = document.getElementById("pause-btn").addEventListener('click', pause);
const stopBtn = document.getElementById("stop-btn").addEventListener('click', stop);
const audio = new Audio(`bells.mp3`);
let isPaused = false;

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
function play(){
    audio.play();
    isPaused = false;
}

function pause(){
    //pause it
    if(isPaused){
        isPaused = false;
        audio.play();
    }else{
        isPaused = true;
        audio.pause();
    }
}

function stop(){
    //stop is a pause and reset of timer
    audio.pause();
    audio.currentTime = 0;
}
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
