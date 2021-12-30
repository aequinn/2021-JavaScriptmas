const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)
greetingDisplay.addEventListener('animationend', resetAnimation)//add an event listener for when the amination ends so it can be reset

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        code: "en"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        code: "es"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        code: "uk"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        code: "cy"
    }
]

function translate(){
    var lang = languageSelector.value;
    greetingDisplay.style.animationPlayState = 'running';//reset animation to ruuning
 
    greetingsArr.forEach(
        entry => {
            if(entry.language === lang){ 
                greetingDisplay.textContent = entry.greeting;
                greetingDisplay.setAttribute("lang", entry.code);//set lang attribute on the element for screen readers to read it in the proper language
                greetingDisplay.classList.add("text-transition")//add transition class back
                
                }
            })
            
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
}
function resetAnimation(){
     greetingDisplay.style.animationPlayState = 'paused';//pause the animation at the end to reset
     greetingDisplay.classList.remove("text-transition")//seem to need to remove the class
}
// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
