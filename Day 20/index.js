const inputs = document.querySelectorAll(".controls input");
// Get the root element
const r = document.querySelector(':root');

inputs.forEach(input => {
 input.addEventListener('change', () => {
   setColor(input.id, input.value)})
})

function setColor(element, color){
 r.style.setProperty(`--${element}`, color)
 
}
// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.