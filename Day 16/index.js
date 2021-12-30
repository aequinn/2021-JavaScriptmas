const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const suggestedMovie = document.getElementById("suggested-movie")
document.getElementById('movie-form').addEventListener('submit', getRecommendation)

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    }
]

function getRecommendation() {
    event.preventDefault(); //prevent page from reloading on the form submission
    let recommendation = moviesArr.find(movie => movie.genre === genreSelector.value && movie.age === ageSelector.value) //search the array for the both criteria
    suggestedMovie.textContent = recommendation.name; //return the movie
}
// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 