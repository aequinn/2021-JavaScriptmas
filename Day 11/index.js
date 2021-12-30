const previous = document.getElementById("previous").addEventListener('click', () => { changeSlide(-1); })
const next = document.getElementById("next").addEventListener('click', () => { changeSlide(1); })
const img = document.getElementById("img")
const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0
  
function changeSlide(direction){
    console.log(direction)
    
    // if(direction === 1){
    //     img.classList.add("animate-gallery--right")
    // }else{
    //     img.classList.add("animate-gallery--left")
    // }
    
        imgNum = imgNum + direction;
        if(imgNum > imgs.length-1) {
            imgNum = 0;
        }
        if (imgNum === -1){
            imgNum = imgs.length-1;
        }
        
        console.log(imgNum)
        img.classList.remove("animate-gallery--right")
        img.classList.remove("animate-gallery-left")
        img.src = imgs[imgNum].src
        img.alt = imgs[imgNum].alt
    
}
// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.