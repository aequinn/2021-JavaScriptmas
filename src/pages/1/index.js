const countdownDisplay = document.getElementById("countdown-display");
const today = new Date();
let christmas;
function renderCountdown() {
  //set christmas date to the next christmas
  if (today.getDate() > 25 && today.getMonth() === 11) {
    christmas = new Date(`12/25/${today.getFullYear() + 1}`);
  } else {
    christmas = new Date(`12/25/${today.getFullYear()}`);
  }

  // - Calculate remaining days.
  var daysLeft = Math.floor(
    (christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  countdownDisplay.textContent = daysLeft;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
