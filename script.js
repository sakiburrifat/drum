var button = document.querySelectorAll("button").length;
for ( i = 0; i <= button; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", handelclick);
}
function handelclick(){

var buttonValue = this.innerHTML;
console.log(buttonValue);
    switch (buttonValue) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/nk.mp3");
audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
audio.play();
            break;
    
        default: console.log(buttonValue)
            break;
    }
}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
//console.log(this.style.color="red")