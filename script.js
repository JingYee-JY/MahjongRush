const startButton = document.querySelector(".startGame");
const start = document.querySelector(".start");
const select = document.querySelector(".selection");
const plusButton = document.querySelector(".plusGame");
const minusButton = document.querySelector(".minusGame");
const mixedButton = document.querySelector(".mixedGame");
const plus = document.querySelector(".plus");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const operation = document.getElementById("operation");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const questionNumber = document.querySelector(".questionNumber");

let current = 0;
let score = 0;
let correctAnswer;
let totalQuestion = 0;

let wrongAns1;
let wrongAns2;
let wrongAns3;
let wrongAns4;

ans1.addEventListener("click", () => {
    if(wrongAns1 == correctAnswer){
        score += 1;
        correct.classList.remove("hide")
    }
    else{
        wrong.classList.remove("hide")
    }
    let delay = setTimeout(() => {
        Question()
        correct.classList.add("hide")
        wrong.classList.add("hide")
      }, 1000);
})
ans2.addEventListener("click", () => {
    if(wrongAns2 == correctAnswer){
        score += 1;
        correct.classList.remove("hide")
    }
    else{
        wrong.classList.remove("hide")
    }
    let delay = setTimeout(() => {
        Question()
        correct.classList.add("hide")
        wrong.classList.add("hide")
      }, 1000);
})
ans3.addEventListener("click", () => {
    if(wrongAns3 == correctAnswer){
        score += 1;
        correct.classList.remove("hide")
    }
    else{
        wrong.classList.remove("hide")
    }
    let delay = setTimeout(() => {
        Question()
        correct.classList.add("hide")
        wrong.classList.add("hide")
      }, 1000);
})
ans4.addEventListener("click", () => {
    if(wrongAns4 == correctAnswer){
        score += 1;
        correct.classList.remove("hide")
    }
    else{
        wrong.classList.remove("hide")
    }
    let delay = setTimeout(() => {
        Question()
        correct.classList.add("hide")
        wrong.classList.add("hide")
      }, 1000);
})

function Question(){
    if(current == totalQuestion){
        console.log("finish")
        return
    }
    current += 1;
    questionNumber.innerHTML = "Question " + current + " / " + totalQuestion;
    let firstNum = Math.floor(Math.random() * 5)
    let secondNum = Math.floor(Math.random() * 4)
    let pattern = Math.floor(Math.random() * 3)
    let firstImg;
    let secondImg;
    if(pattern == 0){
        //tong
        if(firstNum == 0){
            firstImg = "./img/Mahjong Tile 29.png";
        }
        if(secondNum == 0){
            secondImg = "./img/Mahjong Tile 29.png";
        }
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
    }
    if(pattern == 1)
    {
        //wan
        if(firstNum == 0){
            firstImg = "./img/Mahjong Tile 29.png";
        }
        if(secondNum == 0){
            secondImg = "./img/Mahjong Tile 29.png";
        }
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
    }
    if(pattern == 2){
        //shou
        if(firstNum == 0){
            firstImg = "./img/Mahjong Tile 29.png";
        }
        if(secondNum == 0){
            secondImg = "./img/Mahjong Tile 29.png";
        }
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
    }
    operation.innerHTML = `
    <img src="${firstImg}"/>
    <img src="./img/+.png"/>
    <img src="${secondImg}"/>`

    wrongAns1 = Math.floor(Math.random() * 9);
    let wrongPattern1 = Math.floor(Math.random() * 3);
    wrongAns2 = Math.floor(Math.random() * 9);
    let wrongPattern2 = Math.floor(Math.random() * 3);
    wrongAns3 = Math.floor(Math.random() * 9);
    let wrongPattern3 = Math.floor(Math.random() * 3);
    wrongAns4 = Math.floor(Math.random() * 9);
    let wrongPattern4 = Math.floor(Math.random() * 3);
    correctAnswer = firstNum + secondNum;
    let correctImg;
    let wrongImg1;
    let wrongImg2;
    let wrongImg3;
    let wrongImg4;

    if(wrongAns1 == wrongAns2){
        wrongAns1 = Math.floor(Math.random() * 9);
        wrongAns2 = Math.floor(Math.random() * 9);
    }
    if(wrongAns1 == wrongAns3){
        wrongAns1 = Math.floor(Math.random() * 9);
        wrongAns3 = Math.floor(Math.random() * 9);
    }
    if(wrongAns1 == wrongAns4){
        wrongAns1 = Math.floor(Math.random() * 9);
        wrongPattern4 = Math.floor(Math.random() * 3);
    }
    if(wrongAns2 == wrongAns3){
        wrongAns2 = Math.floor(Math.random() * 9);
        wrongAns3 = Math.floor(Math.random() * 9);
    }
    if(wrongAns2 == wrongAns4){
        wrongAns2 = Math.floor(Math.random() * 9);
        wrongPattern4 = Math.floor(Math.random() * 3);
    }
    if(wrongAns3 == wrongAns4){
        wrongAns3 = Math.floor(Math.random() * 9);
        wrongPattern4 = Math.floor(Math.random() * 3);
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
        wrongAns1 = correctAnswer
    }
    if(correctAnswerIndex == 2){
        wrongAns2 = correctAnswer
    }
    if(correctAnswerIndex == 3){
        wrongAns3 = correctAnswer
    }
    if(correctAnswerIndex == 4){
        wrongAns4 = correctAnswer
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
    current = 0;
    Question();
})