const meter = document.getElementById("meter");
const date = document.getElementById("date");
const christmas = document.getElementById("christmas");
const loaderEl = document.getElementById("loader");
let today = new Date();
const loadTimer = setInterval(updateLoader, 1000, today);

// Check the day periodically and increment the day to show progress to Christmas
function updateLoader(today){
    if(today.getDate() > 25){//Is it Christmas yet?
            console.log(`too late ${today.getDate()}`);
            loaderEl.style.display = "none";
            christmas.style.display = "block";
            clearInterval(loadTimer)}
        else {//Not christmas yet, update timeer and increment day
            loadFestivity();
            incrementDate();
        }
}
 
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function loadFestivity(){
    date.textContent = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}, ${today.getFullYear()}`;
    meter.value = today.getDate();
}
function incrementDate() {
      today.setDate(today.getDate() +1);
}


// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
