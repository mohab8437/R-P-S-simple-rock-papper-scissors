let comchoice = document.getElementById("comchoice");

let userchoicelabel = document.getElementById("userchoice");

let result = document.getElementById("result");

let userchoice = "";

function rock(){
    userchoice = "rock";
    userchoicelabel.textContent = userchoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)





    if(randomNumber === 1){
        comchoice.textContent = "rock";
    }else if(randomNumber === 2){
        comchoice.textContent = "paper";
    }else if(randomNumber === 3){
        comchoice.textContent = "scissors";
    }

    if(comchoice.textContent === userchoicelabel.textContent){
        result.textContent = "Draw"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have lost"
    }
};



function paper(){
    userchoice = "paper";
    userchoicelabel.textContent = userchoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)





    if(randomNumber === 1){
        comchoice.textContent = "rock";
    }else if(randomNumber === 2){
        comchoice.textContent = "paper";
    }else if(randomNumber === 3){
        comchoice.textContent = "scissors";
    }

    if(comchoice.textContent === userchoicelabel.textContent){
        result.textContent = "Draw"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have lost"
    }

};



function scissors(){
    userchoice = "scissors";
    userchoicelabel.textContent = userchoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)





    if(randomNumber === 1){
        comchoice.textContent = "rock";
    }else if(randomNumber === 2){
        comchoice.textContent = "paper";
    }else if(randomNumber === 3){
        comchoice.textContent = "scissors";
    }

    if(comchoice.textContent === userchoicelabel.textContent){
        result.textContent = "Draw"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "rock" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have lost"
    }else if(comchoice.textContent === "paper" && userchoicelabel.textContent === "scissors"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "rock"){
        result.textContent = "You have won"
    }else if(comchoice.textContent === "scissors" && userchoicelabel.textContent === "paper"){
        result.textContent = "You have lost"
    }

};




