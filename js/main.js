/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variabler
let inputTextEl = document.getElementById("newtodo");
let addToDoBtnEl = document.getElementById("newtodobutton");
let messageEl = document.getElementById("message");
let clearBtnEl = document.getElementById("clearbutton");
let taskList = document.getElementById("todolist");
let taskArr = [];
 
//Händelsehanterare

window.onload = init;

addToDoBtnEl.addEventListener("click", addTask);
inputTextEl.addEventListener("keyup", checkTaskText);
clearBtnEl.addEventListener("click", clearTasks);



//Funktioner


function init() {
    clearBtnEl.disabled = false;

    loadStorage();
}

function checkTaskText() {
    let textNodeEl = inputTextEl.value;
    if (textNodeEl.length < 5){
        messageEl.innerHTML = "Texten måste vara minst 5 bokstäver lång.";
        addToDoBtnEl.disabled = true;
    }
    else{
        addToDoBtnEl.disabled = false;
        messageEl.innerHTML = "";
    }
}

function addTask(){
    let textNodeEl = inputTextEl.value;
    let newTaskEl = document.createElement("article");
    let newTaskText = document.createTextNode(textNodeEl);
    newTaskEl.appendChild(newTaskText);
    taskList.appendChild(newTaskEl);

    inputTextEl.value = "";
    addToDoBtnEl.disabled = true;

    taskArr.push(textNodeEl);
    storeTask();
}

function clearTasks(){
    while (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
}

function storeTask(){

    let jsonTasks = JSON.stringify(taskArr);

    localStorage.setItem("tasks", jsonTasks);
    console.log(taskArr);
}

function loadStorage(){

    let storedTasks = localStorage.getItem("tasks");
    if(storedTasks){
        taskArr = JSON.parse(storedTasks);
        for (let i=0; i<taskArr.length;i++){
            let newTaskEl = document.createElement("article");
            let newTaskText = document.createTextNode(taskArr[i]);
            newTaskEl.appendChild(newTaskText);
            taskList.appendChild(newTaskEl);
        }
    }
}


function clearStorage(){

}