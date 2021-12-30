const elf = document.getElementById("elf")
const btn = document.getElementById("btn").addEventListener('click', duplicateElf)
const elfEmoji = "🧝";
let elfCount = 1;

function duplicateElf(){
    if(elfCount < 100){
        console.log("multiply")
        elf.textContent += elfEmoji;
        elfCount ++;
    }
    
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
