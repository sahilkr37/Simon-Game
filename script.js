//Audio
const overaudio = new Audio("gameover.wav")
const s2 = new Audio("s2.wav")






let simonsequence = []
let playersequence = []
let gameover = 0
let level = 1
let click = 0
let notification = document.getElementById("notification")
//Check Button Clicked Sequence
function checksequence() {
    let equal = 1
    for (let i = 0; i < simonsequence.length; i++) {
        if (simonsequence[i] != playersequence[i]) {
            equal = 0
            break;
        }
    }
    if (equal) {
        level = level + 1
    }
    else gameover = 1
}

//Backgorund Changing and Updating playerSequence on click
let buttons = document.querySelectorAll(".btn")

function blink(button) {
    button.addEventListener('click', () => {
        let originalColor = button.style.backgroundColor
        button.style.backgroundColor = "white"

        click += 1
        setTimeout(() => {
            button.style.backgroundColor = originalColor
        }, 150);



        //Adding clicked button to playersequence

        setTimeout(() => {

            playersequence.push(button)
            if (playersequence[playersequence.length - 1] != simonsequence[playersequence.length - 1]) {
                notification.innerHTML = "Game Over, Please Refresh"
                document.body.style.backgroundColor = "red"
                overaudio.play()

                return
            }

            if (click == level) {
                // console.log("main", simonsequence)
                // console.log("player", playersequence)

                checksequence()

                if (gameover == 1) {
                    notification.innerHTML = "Game Over, Please Refresh"
                    document.body.style.backgroundColor = "red"
                    overaudio.play()
                }
                else {
                    notification.innerHTML = `Level ${level}`
                    playersequence = []
                    click = 0
                    startgame()
                }
            }
        }, 300);

    }
    )
}

buttons.forEach(button => {
    button.addEventListener('click', blink(button))
});

// Random box
function randombox() {
    return Math.floor(Math.random() * 4 + 1)
}

//White Blink Randomly
function blinkrandom(button) {
    let originalColor = button.style.backgroundColor
    button.style.backgroundColor = "white"

    setTimeout(() => {
        button.style.backgroundColor = originalColor
    }, 250);
}


function startgame() {
    let rand = randombox()
    let target = document.getElementById(`btn${rand}`)
    blinkrandom(target)
    s2.play()
    simonsequence.push(target)
}
//Game Flow
startgame()
