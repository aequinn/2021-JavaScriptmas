const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

items.forEach(item => {
    let el = document.createElement('div')
    el.classList.add("checklist-item")
    let input = document.createElement('input')
    input.setAttribute('type', "checkbox")
    input.setAttribute('id', item)
    let label = document.createElement('label');
    label.setAttribute("for", item)
    label.textContent = item
    
    el.appendChild(input)
    el.appendChild(label)
   
    checklist.append(el);
})



// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

