const startButton = document.querySelector(".startGame");
const start = document.querySelector(".start");
const select = document.querySelector(".selection");
const plusButton = document.querySelector(".plusGame");
const minusButton = document.querySelector(".minusGame");
const mixedButton = document.querySelector(".mixedGame");
const plus = document.querySelector(".game");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const final = document.querySelector(".final");
const medal = document.querySelector(".medal")
const words1 = document.querySelector(".words1")
const words2 = document.querySelector(".words2")
const playAgain = document.querySelector(".playAgain")
const operation = document.getElementById("operation");
const ans1 = document.querySelector(".btn1");
const ans2 = document.querySelector(".btn2");
const ans3 = document.querySelector(".btn3");
const ans4 = document.querySelector(".btn4");
const next = document.querySelector(".nextButton");
const questionNumber = document.querySelector(".questionNumber");
const homeButton = document.querySelector(".home")

const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let tongTile = [
    "./img/Mahjong Tile 1.png",
    "./img/Mahjong Tile 2.png",
    "./img/Mahjong Tile 3.png",
    "./img/Mahjong Tile 4.png",
    "./img/Mahjong Tile 5.png",
    "./img/Mahjong Tile 6.png",
    "./img/Mahjong Tile 7.png",
    "./img/Mahjong Tile 8.png",
    "./img/Mahjong Tile 9.png"];

let wanTile = [
    "./img/Mahjong Tile 10.png",
    "./img/Mahjong Tile 11.png",
    "./img/Mahjong Tile 12.png",
    "./img/Mahjong Tile 13.png",
    "./img/Mahjong Tile 14.png",
    "./img/Mahjong Tile 15.png",
    "./img/Mahjong Tile 16.png",
    "./img/Mahjong Tile 17.png",
    "./img/Mahjong Tile 18.png"];

let shouTile = [
    "./img/Mahjong Tile 19.png",
    "./img/Mahjong Tile 20.png",
    "./img/Mahjong Tile 21.png",
    "./img/Mahjong Tile 22.png",
    "./img/Mahjong Tile 23.png",
    "./img/Mahjong Tile 24.png",
    "./img/Mahjong Tile 25.png",
    "./img/Mahjong Tile 26.png",
    "./img/Mahjong Tile 27.png"];

var number1; 
var number2;
var image1;
var image2;

let current = 0;
let score = 0;
let correctAnswer;
let correctBtn;
let pattern;
let totalQuestion = 0;
let choosenAnswer

let plusQuestions = false;
let minusQuestions = false;
let mixedQuestions = false;

for(let x=1; x<5; x++){
    let btnClass = "btn" + x
    let btn = document.querySelector(`.${btnClass}`)

    btn.addEventListener("click", () => {
        let data = btn.getAttribute("data")
    if(choosenAnswer == false){
        playClickSound()
        let overlay = document.createElement("img");
        let newOverlay = null;
        if(data == correctAnswer){
            score += 1; 
            overlay.src = "./img/Correct.png"
            overlay.classList.add("overlay")
            btn.appendChild(overlay);
            choosenAnswer = true
        }
        if(data != correctAnswer){
            overlay.src = "./img/wrong.png"
            overlay.classList.add("overlay")
            btn.appendChild(overlay);
            choosenAnswer = true
            
            newOverlay = document.createElement("img");
            newOverlay.src = "./img/Correct.png"
            newOverlay.classList.add("overlay")
            correctBtn.appendChild(newOverlay);
        }
        let delay = setTimeout(() => {
            btn.removeChild(overlay)
            if(newOverlay != null){
                correctBtn.removeChild(newOverlay);
            }
            choosenAnswer = false
            Question()
          }, 2500);
    }
    })
}

/*confirm.addEventListener("click", () => {
    if(choice == null  && choicePattern == null){
        return
    }
    if(choice == correctAnswer  && choicePattern == pattern){
        score += 1;
        ans1.style.backgroundImage = "none"
        ans2.style.backgroundImage = "none"
        ans3.style.backgroundImage = "none"
        ans4.style.backgroundImage = "none"
        if(choice == wrongAns1  && choicePattern == wrongPattern1){
            ans1.innerHTML=`
            <img src="${wrongImg1}"></div>
            <img class="overlay" src="./img/Correct.png">`
        }
        if(choice == wrongAns2 && choicePattern == wrongPattern2){
            ans2.innerHTML=`
            <img src="${wrongImg2}"></div>
            <img class="overlay" src="./img/Correct.png">`
        }
        if(choice == wrongAns3 && choicePattern == wrongPattern3){
            ans3.innerHTML=`
            <img src="${wrongImg3}"></div>
            <img class="overlay" src="./img/Correct.png">`

        }
        if(choice == wrongAns4 && choicePattern == wrongPattern4){
            ans4.innerHTML=`
            <img src="${wrongImg4}"></div>
            <img class="overlay" src="./img/Correct.png">`
        }
    }
        else{
            console.log("wrong")
            ans1.style.backgroundImage = "none"
            ans2.style.backgroundImage = "none"
            ans3.style.backgroundImage = "none"
            ans4.style.backgroundImage = "none"
            if(choice == wrongAns1 && choicePattern == wrongPattern1){
                ans1.innerHTML=`
                <img src="${wrongImg1}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns2 && choicePattern == wrongPattern2){
                ans2.innerHTML=`
                <img src="${wrongImg2}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns3 && choicePattern == wrongPattern3){
                ans3.innerHTML=`
                <img src="${wrongImg3}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns4 && choicePattern == wrongPattern4){
                ans4.innerHTML=`
                <img src="${wrongImg4}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(correctAnswer == wrongAns1 && pattern == wrongPattern1){
                ans1.innerHTML=`
                <img src="${wrongImg1}"></div>
                <img class="overlay" src="./img/Correct.png">`
            }
            if(correctAnswer == wrongAns2 && pattern == wrongPattern2){
                ans2.innerHTML=`
                <img src="${wrongImg2}"></div>
                <img class="overlay" src="./img/Correct.png">`
            }
            if(correctAnswer == wrongAns3 && pattern == wrongPattern3){
                ans3.innerHTML=`
                <img src="${wrongImg3}"></div>
                <img class="overlay" src="./img/Correct.png">`
            }
            if(correctAnswer == wrongAns4 && pattern == wrongPattern4){
                ans4.innerHTML=`
                <img src="${wrongImg4}"></div>
                <img class="overlay" src="./img/Correct.png">`
            }
        }
        choosenAnswer = true
        confirm.innerHTML = ""
        let delay = setTimeout(() => {
            choosenAnswer = false;
            choice = choicePattern = null
            ans1.style.backgroundImage = "none"
            ans2.style.backgroundImage = "none"
            ans3.style.backgroundImage = "none"
            ans4.style.backgroundImage = "none"
            Question()
          }, 2500);
    })*/

function Question(){
    let pass = totalQuestion /2;
    if(current == totalQuestion){
        console.log(score)
        final.classList.remove("hide")
        plus.classList.add("hide")
        if(score == totalQuestion){
            clap.currentTime = 0
            clap.play()
            medal.innerHTML = `<img class = "imgBig" src = "./img/Excellent.png">`
            words1.innerHTML = "Your score"
            words2.innerHTML = score + " / " + totalQuestion
        }
        else if(score >= pass){
            completed.currentTime = 0
            completed.play()
            medal.innerHTML = `<img class = "imgBig" src = "./img/Well Done.png">`
            words1.innerHTML = "Your score"
            words2.innerHTML = score + " / " + totalQuestion
        }
        else if(score < pass){
            lose.currentTime = 0
            lose.play()
            medal.innerHTML = `<img class = "imgMedium" src = "./img/You Tried.png">`
            words1.innerHTML = "Try again!"
            words2.innerHTML = "Take you time to calculate the answer."
        }
        return
    }
    current += 1;

    questionNumber.innerHTML = current + " / " + totalQuestion;

    pattern = Math.floor(Math.random() * 3)

    let sign;
    let tempoArray =[]

    if(plusQuestions == true){
        window.number1 = Math.floor(Math.random() * 5) + 1
        window.number2 = Math.floor(Math.random() * 4) + 1
        correctAnswer = window.number1 + window.number2;
    }
    else if(minusQuestions == true){
        window.number1 = Math.floor(Math.random() * 9) + 1
        window.number2 = Math.floor(Math.random() * 8) + 1
        for(let x=0; x<10; x++){
            correctAnswer = window.number1 - window.number2;
            if(correctAnswer == 0){
                window.number1 = Math.floor(Math.random() * 9) + 1
            }
        }
    }
    else if(mixedQuestions == true){
        sign = Math.random() > 0.5 ? 1 : 2
        if(sign == 1){
            window.number1 = Math.floor(Math.random() * 5) + 1
            window.number2 = Math.floor(Math.random() * 4) + 1
            correctAnswer = window.number1 + window.number2;
        }
        if(sign == 2){
            window.number1 = Math.floor(Math.random() * 9) + 1
            window.number2 = Math.floor(Math.random() * 8) + 1
            for(let x=0; x<10; x++){
                correctAnswer = window.number1 - window.number2;
                if(correctAnswer == 0){
                    window.number1 = Math.floor(Math.random() * 9) + 1
                }
            }
        }
    }

    for(let x = 1; x < 3; x++){
        let currentNumber = "number" + x
        currentNumber = window[currentNumber] - 1

        console.log(currentNumber)
        if(pattern == 0){
            if(x == 1){
                image1 = tongTile[currentNumber]
            }
            if(x == 2){
                image2 = tongTile[currentNumber]
            }
        }
        if(pattern == 1){
            if(x == 1){
                image1 = wanTile[currentNumber]
            }
            if(x == 2){
                image2 = wanTile[currentNumber]
            }
        }if(pattern == 2){
            if(x == 1){
                image1 = shouTile[currentNumber]
            }
            if(x == 2){
                image2 = shouTile[currentNumber]
            }
        }
    }
    console.log(window.number1, window.number2)
    console.log(image1, image2)
    
    for(let x = 1; x < 10; x++){
        tempoArray.push(x)
    }

    if(plusQuestions == true){
        operation.innerHTML = `
    <img src="${image1}"/>
    <img src="./img/+.png"/>
    <img src="${image2}"/>`
    }
    else if(minusQuestions == true){
        operation.innerHTML = `
        <img src="${image1}"/>
        <img src="./img/-.png"/>
        <img src="${image2}"/>`
        if(correctAnswer < 0){
            console.log("swap")
            correctAnswer = window.number2 - window.number1;
            operation.innerHTML = `
            <img src="${image2}"/>
            <img src="./img/-.png"/>
            <img src="${image1}"/>`
        }
    }
    else if(mixedQuestions == true){
        if(sign == 1){
        operation.innerHTML = `
            <img src="${image1}"/>
            <img src="./img/+.png"/>
            <img src="${image2}"/>`
    }
        if(sign == 2){
            operation.innerHTML = `
                <img src="${image1}"/>
                <img src="./img/-.png"/>
                <img src="${image2}"/>`
        }
        if(correctAnswer < 0){
            correctAnswer = window.number2 - window.number1;
            operation.innerHTML = `
            <img src="${image2}"/>
            <img src="./img/-.png"/>
            <img src="${image1}"/>`
        }
    }
    tempoArray.splice((correctAnswer - 1), 1)
    console.log(tempoArray)
    
    for(let j=1; j < 5; j++){
        let currentClass = "btn" + j
        let currentButton = document.querySelector(`.${currentClass}`)

        let currentImageClass = "image" + j
        let currentImage = document.querySelector(`.${currentImageClass}`)

        let randomPattern = Math.floor(Math.random() * 3);
        let randomNumber = Math.floor(Math.random() * tempoArray.length);

        let number = tempoArray[randomNumber]

        currentButton.setAttribute("data", number)

        tempoArray.splice(randomNumber, 1)
        console.log(tempoArray)
        number -=1

        if(randomPattern == 0){
            currentImage.src = tongTile[number]
        }
        if(randomPattern == 1){
            currentImage.src = wanTile[number]
        }
        if(randomPattern == 2){
            currentImage.src = shouTile[number]
        }
    }

    let correctAnswerIndex = Math.floor(Math.random() * 4)+1;
    let correctAnswerId = "btn" + correctAnswerIndex;
    correctBtn = document.querySelector(`.${correctAnswerId}`)
    let correctImageId = "image" + correctAnswerIndex;
    let correctImage = document.querySelector(`.${correctImageId}`)

    console.log(correctAnswer - 1)
    console.log(pattern)
    if(pattern == 0){
        correctImage.src = tongTile[(correctAnswer - 1)]
        correctBtn.setAttribute("data", correctAnswer)
    }
    if(pattern == 1){
        correctImage.src = wanTile[(correctAnswer - 1)]
        correctBtn.setAttribute("data", correctAnswer)
    }
    if(pattern == 2){
        correctImage.src = shouTile[(correctAnswer - 1)]
        correctBtn.setAttribute("data", correctAnswer)
    }
}

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      start.classList.add("hide")
      select.classList.remove("hide")
    }, 200);
})
plusButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        select.classList.add("hide")
        plus.classList.remove("hide")
        plusQuestions = true;
        began()
    }, 200);
})
minusButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        select.classList.add("hide")
        plus.classList.remove("hide")
        minusQuestions = true;
        began()
    }, 200);
})
mixedButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        select.classList.add("hide")
        plus.classList.remove("hide")
        mixedQuestions = true;
        began()
    }, 200);
})
playAgain.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.remove("hide")
        final.classList.add("hide")
        plusQuestions = false;
        minusQuestions = false;
        mixedQuestions = false;
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

function began(){
    current = 0;
    score = 0;
    totalQuestion = 10
    choosenAnswer = false
    Question();
}

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });