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
const home = document.querySelector(".home")
const operation = document.getElementById("operation");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const confirm = document.querySelector(".confrimButton");
const next = document.querySelector(".nextButton");
const questionNumber = document.querySelector(".questionNumber");

let current = 0;
let score = 0;
let correctAnswer;
let pattern;
let choice;
let choicePattern;
let totalQuestion = 0;
let choosenAnswer

let plusQuestions = false;
let minusQuestions = false;
let mixedQuestions = false;

let wrongAns1;
let wrongAns2;
let wrongAns3;
let wrongAns4;

let wrongImg1;
let wrongImg2;
let wrongImg3;
let wrongImg4;

let wrongPattern1
let wrongPattern2
let wrongPattern3
let wrongPattern4

ans1.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans2.style.backgroundImage = "none"
        ans3.style.backgroundImage = "none"
        ans4.style.backgroundImage = "none"
        ans1.style.backgroundImage = "url('./img/selecttile.png')"
        ans1.style.backgroundSize = "contain"
        ans1.style.backgroundRepeat = "no-repeat"
        choice = wrongAns1
        choicePattern = wrongPattern1
    }
})
ans2.addEventListener("click", () => {
    if(choosenAnswer == false){
    ans1.style.backgroundImage = "none"
    ans3.style.backgroundImage = "none"
    ans4.style.backgroundImage = "none"
    ans2.style.backgroundImage = "url('./img/selecttile.png')"
    ans2.style.backgroundSize = "contain"
    ans2.style.backgroundRepeat = "no-repeat"
    choice = wrongAns2
    choicePattern = wrongPattern2
    }
})
ans3.addEventListener("click", () => {
    if(choosenAnswer == false){
    ans1.style.backgroundImage = "none"
    ans2.style.backgroundImage = "none"
    ans4.style.backgroundImage = "none"
    ans3.style.backgroundImage = "url('./img/selecttile.png')"
    ans3.style.backgroundSize = "contain"
    ans3.style.backgroundRepeat = "no-repeat"
    choice = wrongAns3
    choicePattern = wrongPattern3
    }
})
ans4.addEventListener("click", () => {
    if(choosenAnswer == false){
    ans1.style.backgroundImage = "none"
    ans2.style.backgroundImage = "none"
    ans3.style.backgroundImage = "none"
    ans4.style.backgroundImage = "url('./img/selecttile.png')"
    ans4.style.backgroundSize = "contain"
    ans4.style.backgroundRepeat = "no-repeat"
    choice = wrongAns4
    choicePattern = wrongPattern4
    }
})
confirm.addEventListener("click", () => {
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
            confirm.innerHTML = `<img class="btn" src="./img/confrim.png">`
            Question()
          }, 1000);
    })

function Question(){
    let pass = totalQuestion /2;
    if(current == totalQuestion){
        console.log(score)
        final.classList.remove("hide")
        plus.classList.add("hide")
        if(score == totalQuestion){
            medal.innerHTML = `<img class = "imgBig" src = "./img/Excellent.png">`
            words1.innerHTML = "Your score:"
            words2.innerHTML = score + " / " + totalQuestion
        }
        else if(score >= pass){
            medal.innerHTML = `<img class = "imgBig" src = "./img/Well Done.png">`
            words1.innerHTML = "Your score:"
            words2.innerHTML = score + " / " + totalQuestion
        }
        else if(score < pass){
            medal.innerHTML = `<img class = "imgMedium" src = "./img/You Tried.png">`
            words1.innerHTML = "Try again!"
            words2.innerHTML = "Take you time to calculate the answer."
        }
        return
    }
    current += 1;

    questionNumber.innerHTML = current + " / " + totalQuestion;

    let firstNum; 
    let secondNum;
    pattern = Math.floor(Math.random() * 3)
    let firstImg;
    let secondImg;
    let sign;

    if(plusQuestions == true){
        firstNum = Math.floor(Math.random() * 6)
        secondNum = Math.floor(Math.random() * 5)
    }
    else if(minusQuestions == true){
        firstNum = Math.floor(Math.random() * 10)
        secondNum = Math.floor(Math.random() * 10)
    }
    else if(mixedQuestions == true){
        sign = Math.random() > 0.5 ? 1 : 2
        if(sign == 1){
            firstNum = Math.floor(Math.random() * 6)
            secondNum = Math.floor(Math.random() * 5)
        }
        if(sign == 2){
            firstNum = Math.floor(Math.random() * 10)
            secondNum = Math.floor(Math.random() * 10)
        }
    }
    console.log("first",firstNum, pattern)
    console.log("second",secondNum, pattern)
    
    if(firstNum == 0){
        firstImg = "./img/Mahjong Tile 29.png";
    }
    if(secondNum == 0){
        secondImg = "./img/Mahjong Tile 29.png";
    }

    if(pattern == 0){
        //tong
        if(firstNum == 1){
            firstImg = "./img/Mahjong Tile 1.png";
        }
        if(secondNum == 1){
            secondImg = "./img/Mahjong Tile 1.png";
        }
        if(firstNum == 2){
            firstImg = "./img/Mahjong Tile 2.png";
        }
        if(secondNum == 2){
            secondImg = "./img/Mahjong Tile 2.png";
        }
        if(firstNum == 3){
            firstImg = "./img/Mahjong Tile 3.png";
        }
        if(secondNum == 3){
            secondImg = "./img/Mahjong Tile 3.png";
        }
        if(firstNum == 4){
            firstImg = "./img/Mahjong Tile 4.png";
        }
        if(secondNum == 4){
            secondImg = "./img/Mahjong Tile 4.png";
        }
        if(firstNum == 5){
            firstImg = "./img/Mahjong Tile 5.png";
        }
        if(secondNum == 5){
            secondImg = "./img/Mahjong Tile 5.png";
        }
        if(firstNum == 6){
            firstImg = "./img/Mahjong Tile 6.png";
        }
        if(secondNum == 6){
            secondImg = "./img/Mahjong Tile 6.png";
        }
        if(firstNum == 7){
            firstImg = "./img/Mahjong Tile 7.png";
        }
        if(secondNum == 7){
            secondImg = "./img/Mahjong Tile 7.png";
        }
        if(firstNum == 8){
            firstImg = "./img/Mahjong Tile 8.png";
        }
        if(secondNum == 8){
            secondImg = "./img/Mahjong Tile 8.png";
        }
        if(firstNum == 9){
            firstImg = "./img/Mahjong Tile 9.png";
        }
        if(secondNum == 9){
            secondImg = "./img/Mahjong Tile 9.png";
        }
    }
    if(pattern == 1)
    {
        //wan
        if(firstNum == 1){
            firstImg = "./img/Mahjong Tile 10.png";
        }
        if(secondNum == 1){
            secondImg = "./img/Mahjong Tile 10.png";
        }
        if(firstNum == 2){
            firstImg = "./img/Mahjong Tile 11.png";
        }
        if(secondNum == 2){
            secondImg = "./img/Mahjong Tile 11.png";
        }
        if(firstNum == 3){
            firstImg = "./img/Mahjong Tile 12.png";
        }
        if(secondNum == 3){
            secondImg = "./img/Mahjong Tile 12.png";
        }
        if(firstNum == 4){
            firstImg = "./img/Mahjong Tile 13.png";
        }
        if(secondNum == 4){
            secondImg = "./img/Mahjong Tile 13.png";
        }
        if(firstNum == 5){
            firstImg = "./img/Mahjong Tile 14.png";
        }
        if(secondNum == 5){
            secondImg = "./img/Mahjong Tile 14.png";
        }
        if(firstNum == 6){
            firstImg = "./img/Mahjong Tile 15.png";
        }
        if(secondNum == 6){
            secondImg = "./img/Mahjong Tile 15.png";
        }
        if(firstNum == 7){
            firstImg = "./img/Mahjong Tile 16.png";
        }
        if(secondNum == 7){
            secondImg = "./img/Mahjong Tile 16.png";
        }
        if(firstNum == 8){
            firstImg = "./img/Mahjong Tile 17.png";
        }
        if(secondNum == 8){
            secondImg = "./img/Mahjong Tile 17.png";
        }
        if(firstNum == 9){
            firstImg = "./img/Mahjong Tile 18.png";
        }
        if(secondNum == 9){
            secondImg = "./img/Mahjong Tile 18.png";
        }
    }
    if(pattern == 2){
        //shou
        if(firstNum == 1){
            firstImg = "./img/Mahjong Tile 19.png";
        }
        if(secondNum == 1){
            secondImg = "./img/Mahjong Tile 19.png";
        }
        if(firstNum == 2){
            firstImg = "./img/Mahjong Tile 20.png";
        }
        if(secondNum == 2){
            secondImg = "./img/Mahjong Tile 20.png";
        }
        if(firstNum == 3){
            firstImg = "./img/Mahjong Tile 21.png";
        }
        if(secondNum == 3){
            secondImg = "./img/Mahjong Tile 21.png";
        }
        if(firstNum == 4){
            firstImg = "./img/Mahjong Tile 22.png";
        }
        if(secondNum == 4){
            secondImg = "./img/Mahjong Tile 22.png";
        }
        if(firstNum == 5){
            firstImg = "./img/Mahjong Tile 23.png";
        }
        if(secondNum == 5){
            secondImg = "./img/Mahjong Tile 23.png";
        }
        if(firstNum == 6){
            firstImg = "./img/Mahjong Tile 24.png";
        }
        if(secondNum == 6){
            secondImg = "./img/Mahjong Tile 24.png";
        }
        if(firstNum == 7){
            firstImg = "./img/Mahjong Tile 25.png";
        }
        if(secondNum == 7){
            secondImg = "./img/Mahjong Tile 25.png";
        }
        if(firstNum == 8){
            firstImg = "./img/Mahjong Tile 26.png";
        }
        if(secondNum == 8){
            secondImg = "./img/Mahjong Tile 26.png";
        }
        if(firstNum == 9){
            firstImg = "./img/Mahjong Tile 27.png";
        }
        if(secondNum == 9){
            secondImg = "./img/Mahjong Tile 27.png";
        }
    }
    if(plusQuestions == true){
        correctAnswer = firstNum + secondNum;
        operation.innerHTML = `
    <img src="${firstImg}"/>
    <img src="./img/+.png"/>
    <img src="${secondImg}"/>`
    }
    else if(minusQuestions == true){
        correctAnswer = firstNum - secondNum;
        operation.innerHTML = `
        <img src="${firstImg}"/>
        <img src="./img/-.png"/>
        <img src="${secondImg}"/>`
        if(correctAnswer < 0){
            console.log("swap")
            correctAnswer = secondNum - firstNum;
            operation.innerHTML = `
            <img src="${secondImg}"/>
            <img src="./img/-.png"/>
            <img src="${firstImg}"/>`
        }
    }
    else if(mixedQuestions == true){
        if(sign == 1){
            correctAnswer = firstNum + secondNum;
        operation.innerHTML = `
    <img src="${firstImg}"/>
    <img src="./img/+.png"/>
    <img src="${secondImg}"/>`
    }
        if(sign == 2){
            correctAnswer = firstNum - secondNum;
            operation.innerHTML = `
        <img src="${firstImg}"/>
        <img src="./img/-.png"/>
        <img src="${secondImg}"/>`
        }
        if(correctAnswer < 0){
            correctAnswer = secondNum - firstNum;
            operation.innerHTML = `
            <img src="${secondImg}"/>
            <img src="./img/-.png"/>
            <img src="${firstImg}"/>`
        }
    }

    wrongAns1 = Math.floor(Math.random() * 10);
    wrongPattern1 = Math.floor(Math.random() * 3);
    wrongAns2 = Math.floor(Math.random() * 10);
    wrongPattern2 = Math.floor(Math.random() * 3);
    wrongAns3 = Math.floor(Math.random() * 10);
    wrongPattern3 = Math.floor(Math.random() * 3);
    wrongAns4 = Math.floor(Math.random() * 10);
    wrongPattern4 = Math.floor(Math.random() * 3);
    
    let correctImg;
    if(wrongAns1 == wrongAns2 && wrongPattern1 == wrongPattern2){
        wrongAns1 = Math.floor(Math.random() * 10);
        wrongAns2 = Math.floor(Math.random() * 10);
    }
    if(wrongAns1 == wrongAns3 && wrongPattern1 == wrongPattern3){
        wrongAns1 = Math.floor(Math.random() * 10);
        wrongAns3 = Math.floor(Math.random() * 10);
    }
    if(wrongAns1 == wrongAns4 && wrongPattern1 == wrongPattern4){
        wrongAns1 = Math.floor(Math.random() * 10);
        wrongAns4 = Math.floor(Math.random() * 10);
    }
    if(wrongAns2 == wrongAns3 && wrongPattern2 == wrongPattern3){
        wrongAns2 = Math.floor(Math.random() * 10);
        wrongAns3 = Math.floor(Math.random() * 10);
    }
    if(wrongAns2 == wrongAns4 && wrongPattern2 == wrongPattern4){
        wrongAns2 = Math.floor(Math.random() * 10);
        wrongAns4 = Math.floor(Math.random() * 10);
    }
    if(wrongAns3 == wrongAns4 && wrongPattern3 == wrongPattern4){
        wrongAns3 = Math.floor(Math.random() * 10);
        wrongAns4 = Math.floor(Math.random() * 10);
    }
    
    if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
        wrongAns1 = Math.floor(Math.random() * 10);
    }
    if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
        wrongAns2 = Math.floor(Math.random() * 10);
    }
    if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
        wrongAns3 = Math.floor(Math.random() * 10);
    }
    if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
        wrongAns4 = Math.floor(Math.random() * 10);
    }

    if(wrongAns1 == 0 || wrongAns2 == 0 || wrongAns3 == 0 || wrongAns4 == 0){
        if(wrongAns1 == wrongAns2){
            wrongAns1 = Math.floor(Math.random() * 10);
            wrongAns2 = Math.floor(Math.random() * 10);
        }
        if(wrongAns1 == wrongAns3){
            wrongAns1 = Math.floor(Math.random() * 10);
            wrongAns3 = Math.floor(Math.random() * 10);
        }
        if(wrongAns1 == wrongAns4){
            wrongAns1 = Math.floor(Math.random() * 10);
            wrongAns4 = Math.floor(Math.random() * 10);
        }
        if(wrongAns2 == wrongAns3){
            wrongAns2 = Math.floor(Math.random() * 10);
            wrongAns3 = Math.floor(Math.random() * 10);
        }
        if(wrongAns2 == wrongAns4){
            wrongAns2 = Math.floor(Math.random() * 10);
            wrongAns4 = Math.floor(Math.random() * 10);
        }
        if(wrongAns3 == wrongAns4){
            wrongAns1 = Math.floor(Math.random() * 10);
            wrongAns2 = Math.floor(Math.random() * 10);
        }
        if(wrongAns1 == correctAnswer){
            wrongAns1 = Math.floor(Math.random() * 10);
        }
        if(wrongAns2 == correctAnswer){
            wrongAns2 = Math.floor(Math.random() * 10);
        }
        if(wrongAns3 == correctAnswer){
            wrongAns3 = Math.floor(Math.random() * 10);
        }
        if(wrongAns4 == correctAnswer){
            wrongAns4 = Math.floor(Math.random() * 10);
        }
    }
    

        if(correctAnswer == 0){
            correctImg = "./img/Mahjong Tile 29.png";
        }
        if(wrongAns1 == 0){
            wrongImg1 = "./img/Mahjong Tile 29.png";
        }
        if(wrongAns2 == 0){
            wrongImg2 = "./img/Mahjong Tile 29.png";
        }
        if(wrongAns3 == 0){
            wrongImg3 = "./img/Mahjong Tile 29.png";
        }
        if(wrongAns4 == 0){
            wrongImg4 = "./img/Mahjong Tile 29.png";
        }

    if(wrongPattern4 == 0){
        //tong
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern3 == 0){
        //tong
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern1 == 0){
        //tong
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern2 == 0){
        //tong
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 9.png";
        }
    }
    if(pattern == 0)
    {
        //tong
        if(correctAnswer == 1){
            correctImg = "./img/Mahjong Tile 1.png";
        }
        if(correctAnswer == 2){
            correctImg = "./img/Mahjong Tile 2.png";
        }
        if(correctAnswer == 3){
            correctImg = "./img/Mahjong Tile 3.png";
        }
        if(correctAnswer == 4){
            correctImg = "./img/Mahjong Tile 4.png";
        }
        if(correctAnswer == 5){
            correctImg = "./img/Mahjong Tile 5.png";
        }
        if(correctAnswer == 6){
            correctImg = "./img/Mahjong Tile 6.png";
        }
        if(correctAnswer == 7){
            correctImg = "./img/Mahjong Tile 7.png";
        }
        if( correctAnswer == 8){
            correctImg = "./img/Mahjong Tile 8.png";
        }
        if( correctAnswer == 9){
            correctImg = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern2 == 1)
    {
        //wan
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern3 == 1)
    {
        //wan
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern4 == 1)
    {
        //wan
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 18.png";
        }
    }
    if(pattern == 1)
    {
        //wan
        if(correctAnswer == 1){
            correctImg = "./img/Mahjong Tile 10.png";
        }
        if(correctAnswer == 2){
            correctImg = "./img/Mahjong Tile 11.png";
        }
        if(correctAnswer == 3){
            correctImg = "./img/Mahjong Tile 12.png";
        }
        if(correctAnswer == 4){
            correctImg = "./img/Mahjong Tile 13.png";
        }
        if(correctAnswer == 5){
            correctImg = "./img/Mahjong Tile 14.png";
        }
        if(correctAnswer == 6){
            correctImg = "./img/Mahjong Tile 15.png";
        }
        if(correctAnswer == 7){
            correctImg = "./img/Mahjong Tile 16.png";
        }
        if( correctAnswer == 8){
            correctImg = "./img/Mahjong Tile 17.png";
        }
        if( correctAnswer == 9){
            correctImg = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern1 == 1)
    {
        //wan
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 18.png";
        }
    }
    if(pattern == 2){
        //shou
        if( correctAnswer == 1){
            correctImg = "./img/Mahjong Tile 19.png";
        }
        if( correctAnswer == 2){
            correctImg = "./img/Mahjong Tile 20.png";
        }
        if( correctAnswer == 3){
            correctImg = "./img/Mahjong Tile 21.png";
        }
        if( correctAnswer == 4){
            correctImg = "./img/Mahjong Tile 22.png";
        }
        if( correctAnswer == 5){
            correctImg = "./img/Mahjong Tile 23.png";
        }
        if( correctAnswer == 6){
            correctImg = "./img/Mahjong Tile 24.png";
        }
        if( correctAnswer == 7){
            correctImg = "./img/Mahjong Tile 25.png";
        }
        if( correctAnswer == 8){
            correctImg = "./img/Mahjong Tile 26.png";
        }
        if( correctAnswer == 9){
            correctImg = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern1 == 2){
        //shou
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern2 == 2){
        //shou
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern3 == 2){
        //shou
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern4 == 2){
        //shou
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 27.png";
        }
    }
    console.log(wrongPattern1, wrongAns1)
    console.log(wrongPattern2, wrongAns2)
    console.log(wrongPattern3, wrongAns3)
    console.log(wrongPattern4, wrongAns4)


    ans1.innerHTML = `<img src="${wrongImg1}"/>`
    ans2.innerHTML = `<img src="${wrongImg2}"/>`
    ans3.innerHTML = `<img src="${wrongImg3}"/>`
    ans4.innerHTML = `<img src="${wrongImg4}"/>`
    
    let correctAnswerIndex = Math.floor(Math.random() * 4)+1;
    let correctAnswerId = "btn" + correctAnswerIndex;
    document.getElementById(correctAnswerId).innerHTML = `<img src="${correctImg}"/>`
    if(correctAnswerIndex == 1){
        wrongAns1 = correctAnswer;
        wrongPattern1 = pattern;
        wrongImg1 = correctImg;
    }
    if(correctAnswerIndex == 2){
        wrongAns2 = correctAnswer;
        wrongPattern2 = pattern;
        wrongImg2 = correctImg;
    }
    if(correctAnswerIndex == 3){
        wrongAns3 = correctAnswer;
        wrongPattern3 = pattern;
        wrongImg3 = correctImg;
    }
    if(correctAnswerIndex == 4){
        wrongAns4 = correctAnswer;
        wrongPattern4 = pattern;
        wrongImg4 = correctImg;
    }
}

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    select.classList.remove("hide")
})
plusButton.addEventListener("click", () => {
    select.classList.add("hide")
    plus.classList.remove("hide")
    totalQuestion = 5;
    plusQuestions = true;
    began()
})
minusButton.addEventListener("click", () => {
    select.classList.add("hide")
    plus.classList.remove("hide")
    totalQuestion = 10;
    minusQuestions = true;
    began()
})
mixedButton.addEventListener("click", () => {
    select.classList.add("hide")
    plus.classList.remove("hide")
    totalQuestion = 20;
    mixedQuestions = true;
    began()
})
home.addEventListener("click", () => {
    start.classList.remove("hide")
    final.classList.add("hide")
    plusQuestions = false;
    minusQuestions = false;
    mixedQuestions = false;
})
playAgain.addEventListener("click", () => {
    plus.classList.remove("hide")
    final.classList.add("hide")
    began()
})
function began(){
    current = 0;
    score = 0;
    choosenAnswer = false
    Question();
}