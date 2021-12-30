const btn = document.getElementById("btn").addEventListener('click', getDessert)
const foodHolder = document.getElementById('foodHolder');
function getDessert(){
    
    
    fetch('https://foodish-api.herokuapp.com/api/images/dessert').then(function(response){
        return response.json();
    }).then(function(data){
        let imgEl = document.createElement('img')
        imgEl.setAttribute('src', data.image);
        
         while (foodHolder.firstChild) {
            foodHolder.removeChild(foodHolder.firstChild);
        }
        foodHolder.appendChild(imgEl)
        
    })
    
}
/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

