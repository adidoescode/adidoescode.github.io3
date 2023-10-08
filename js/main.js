/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variables
let inputTextEl = document.getElementById("newtodo");
let addToDoBtnEl = document.getElementById("newtodobutton");
let messageEl = document.getElementById("message");
let clearBtnEl = document.getElementById("clearbutton");
let taskList = document.getElementById("todolist");
let i;
 
//Event listeners

window.onload = init;

addToDoBtnEl.addEventListener("click", addTask);
inputTextEl.addEventListener("keydown", checkTaskText);
clearBtnEl.addEventListener("click", clearTasks);



//Functions


function init(){
    addToDoBtnEl.disabled = true;
    clearBtnEl.disabled = false;
}

function addTask(){
    let newTaskEl = document.createElement("article");
    let newTaskText = document.createTextNode(inputTextEl.value);
    newTaskEl.appendChild(newTaskText);
    taskList.appendChild(newTaskEl);
}

function clearTasks(){
    while (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
}


function checkTaskText() {
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