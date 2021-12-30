const btn = document.getElementById("btn").addEventListener('click', startTimer)
// const pauseBtn = document.getElementById('pause-btn').addEventListener('click', pauseTimer)
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;
let counterTime = 15;

//time elements
let currentTime;
let endTime;
//   const seconds = Math.floor( (total/1000) % 60 );
//   const minutes = Math.floor( (total/1000/60) % 60 );
//   const hours = Math.floor( (total/(1000*60*60)) % 24 );
//   const days = Math.floor( total/(1000*60*60*24) );
init();
function init() {
    timer.textContent = `${counterTime}:00`
    affirmation.textContent = 'Take a moment to yourself...'
}

function startTimer() {
    if (!timeout) {
        endTime = Date.now()+(counterTime*60000);
        timeout = setInterval(countDown, 100);
  }
}

function pauseTimer(){
    clearInterval(timeout);
    timeout = null;
}

function countDown(){
    currentTime = Date.now();
    let timeDif = endTime - currentTime;
    if(timeDif > 0){
        timer.textContent = `${(Math.floor( (timeDif/1000/60) % 60 )).toString().padStart(2,0)}:${(Math.floor( (timeDif/1000) % 60 )).toString().padStart(2,0)}`
    }else{
        affirmation.textContent = "Time Up, You Got This..."
        pauseTimer();
    }
    
     
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.