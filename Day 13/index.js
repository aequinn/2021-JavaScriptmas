const btn = document.getElementById("btn")
let food = document.getElementById("food")
let menu = "..."

document.getElementById("dinner-input").addEventListener("submit", generateMenu)

function generateMenu() {
    event.preventDefault();
    let guests = document.getElementById("guests").value
    let isVeg = document.getElementById("vegetarian-input").checked;
    //
    if(isVeg){
        if( guests > 0 && guests < 3){
            menu = "Nut loaf, sweet potatos"
        }else if (guests > 3){
            menu = "Nut loaf, sweet potatos, quiche, mashed potatos, rolls"
        }
    }else{
        if( guests > 0 && guests < 3){
            menu = "Cornish Hen, mashed potatos"    
        }else if (guests > 3){
            menu = "Turkey, ham, mashed potatos, gravy, rolls"
        }
    }
    food.textContent = menu;
}
// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

