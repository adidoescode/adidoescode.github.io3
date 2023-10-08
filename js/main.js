/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variables
let inputTextEl = document.getElementById("newtodo");
let addToDoBtnEl = document.getElementById("newtodobutton");
let messageEl = document.getElementById("message");
let clearBtnEl = document.getElementById("clearbutton");
let i;

//Event listeners

window.onload = init;

inputTextEl.addEventListener("keydown", checkTaskText);
addToDoBtnEl.addEventListener("click", addTask);
clearBtnEl.addEventListener("click", clearTasks);

//Functions


function init(){
    console.log("Initierar...");
}

addToDoBtnEl.disabled = true;
function addTask(){
    //Add task
}

function clearTasks(){
    //Remove tasks
}


function checkTaskText(){
    let textCharacters = inputTextEl.value;
    if (textCharacters.length <= 5){
        messageEl.innerHTML = "Texten måste vara minst 5 bokstäver lång.";
    }
    else{
        addToDoBtnEl.disabled = false;
        messageEl.innerHTML = "";
    }
}

function storeTask(){
    // Store the input
}

function clearStorage(){
    // Clear all tasks
}