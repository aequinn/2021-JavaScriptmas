const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");

btn.addEventListener('click', fix);

function fix() {
  // Task:
  greeting.classList.add("container--christmas");
  greeting.textContent = "🎄 Merry Christmas! ⛄";
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







