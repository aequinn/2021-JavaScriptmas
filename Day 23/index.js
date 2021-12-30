// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
document.getElementById('submit-text').addEventListener('click', updateMessage);

function updateMessage(){
  let newMessage = document.getElementById('text-input').value;
  document.getElementById('sign').textContent = newMessage;
}