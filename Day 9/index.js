const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const decorations = document.querySelectorAll(".decorations")
decorator.addEventListener("click", deckTheHalls)
let isDecked = false;
console.log(house.textContent)
function deckTheHalls() {
  if (isDecked){
    console.log("decked, ")
    for(let i=0; i<decorations.length; i++){
      decorations[i].classList.add("hide");
    }
    house.textContent = "🏡";
    isDecked = false;
  }else{
    for(let i=0; i<decorations.length; i++){
      decorations[i].classList.remove("hide");
    
    }
    house.textContent = "🏠";
    isDecked = true;
  }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
