const crew = document.getElementById("crew")
const btn = document.getElementById("btn").addEventListener('click', launch)

function launch(){
    console.log("launch")
    crew.classList.add('launch-animation');
}
// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

