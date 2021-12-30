const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    var today = new Date().getDate();
    
    //playing with Javascript dates
    // var now = Date.now();
    // console.log(`Day ${today.getDay()}`);
    // var options = { weekday: 'long'};
    // console.log(new Intl.DateTimeFormat('en-US', options).format(today));
    
    // console.log(`Date ${today.getDate()}`);
    
    // console.log(`Year ${today.getFullYear()}`);
    // console.log(`Month ${today.getMonth()}`);
 
    // - Calculate remaining days.
    var daysLeft = christmas - today;
    // - Display remaining days in countdownDisplay.
    if(daysLeft > 0){
        countdownDisplay.textContent = daysLeft
    }else{
        countdownDisplay.textContent = 365+daysLeft
    }
    
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.