const input = document.getElementById("input")
const btn = document.getElementById("btn")
document.getElementById("guest-input").addEventListener('submit', addGuest)
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

let guest = generateGuest("test")

    guests.forEach(function(g) {
         guestList.appendChild(generateGuest(g));
    })
// Tasks:

function generateGuest(name){
    let el = document.createElement('li');
    // el.appendChild(document.createElement('div')); add an element for the removal options --add later
    el.textContent = name;
    return el;
}

function addGuest(){
    event.preventDefault()//prevent the page from refreshing the 
    guestList.appendChild(generateGuest(input.value))
}
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


