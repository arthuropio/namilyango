const deen = prompt("what's your name?");
alert("Hello " + deen);

const likesCats = confirm("Do you like computer games?")
if (likesCats) {
    alert("Ok, try this game called flappy bird!!!")
} else {
    alert("Ok. thank you for your time sir. have a nice day!!!")
}
alert("Please enjoy the game!!!  Tip:  stay alert")

//pseudocode also known as fake code//

//const words = [
  //  "javascript",
    //"monkey",
    //"amazing",
    //"pancake"
//];


//const word = words[Math.floor(math.random() * words.length)];


//const answerArray = [];
//for (const i = 0; i < word.length; i++) {
  //  answerArray[1] = "_";
//}
//const remainingLetters = word.length



//flappy bird game.............

const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
const jumping = 0;
const counter = 0;


hole.addEventListener("animationiteration", () => {
    const random = -((Math.random() * 300) + 150);
     hole.style.top = random + "px";
     counter++
})

setInterval(function () {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue ("top"))
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop); 
    if ((characterTop > 480) || ((blockLeft < 50) && (blockLeft > -20) && ((cTop < holeTop) ||
    (cTop > holeTop + 120)))) {
        alert("Game Over. Score:" + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;

    }
        
            
    
}, 10);

function jump() {
    jumping = 1;
    const jumpCount = 0;
    const jumpInterval = setInterval(function () {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6)&&(jumpCount < 15)) {
            character.style.top = (characterTop - 5 ) + "px";
            
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10)
        

}

//window.addEventListener("mousedown", function () {
  //  jump = true;
    
    //if (gameStarted) {
      //  gameStarted = true;
        //window.requestAnimationFrame(animate);
    //}
//});

//window.addEventListener("mouseup", function () {
  //  jump = false;
    
    
//})
