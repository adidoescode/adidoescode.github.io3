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

inputTextEl.addEventListener("");
addToDoBtnEl.addEventListener("click", addTask, false);
clearBtnEl.addEventListener("click", clearTasks, false);

//Functions
function addTask(){
    //Add task
}

function clearTasks(){
    //Remove tasks
}

function checkTaskText(){
    //Check if the task length is under 5 characters
}

function storeTask(){
    // Store the input
}

function clearStorage(){
    // Clear all tasks
}