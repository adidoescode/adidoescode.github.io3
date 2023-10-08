
// Moment 4 - Adam Sjögren, adsj2300@student.miun.se

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


function init() {                       // Funktionen för inladdning av hemsidan
    clearBtnEl.disabled = false;       //Sätter på clear knappen direkt då det inte har någon betydelse ifall det går att cleara när det inte finns något i arrayen ändå

    loadStorage();                //Laddar storage ifall man har haft tidigare element i arrayen vid tidigare besök på hemsidan
} 

function checkTaskText() {                   // Kollar igenom text-fältet för att bekräfta att den möter kraven, i detta fallet minst 5 tecken för att kunna läggas till som värde
    let textNodeEl = inputTextEl.value;
    if (textNodeEl.length < 5){            //Kriterie
        messageEl.innerHTML = "Texten måste vara minst 5 bokstäver lång.";
        addToDoBtnEl.disabled = true;         // Disablear knapp ifall stycket inte är långt nog
    }
    else{
        addToDoBtnEl.disabled = false;      //Enablear knapp ifall stycket är minst 5 tecken långt
        messageEl.innerHTML = "";     //Tar bort "Texten måste vara minst 5 bokstäver lång."
    }
}

function addTask(){                                     // Lägger till ett värde i listan.
    let textNodeEl = inputTextEl.value;
    let newTaskEl = document.createElement("article");       // Skapar ett artikel-element som läggs under sektiontaggen i HTML-dokumentet
    let newTaskText = document.createTextNode(textNodeEl);         // Skapar en text node beroende av inputen på hemsidan
    newTaskEl.appendChild(newTaskText);
    taskList.appendChild(newTaskEl);

    inputTextEl.value = "";                // Efter knappen ha tryckts för att lägga till värdet i listan tas det tidigare bort i textfältet...
    addToDoBtnEl.disabled = true;           //... och disablear knappen igen då vi vill ha minst 5 tecken i textrutan.

    taskArr.push(textNodeEl);       //Pushar till array nu istället för senare vilket ni visade på filmen.
    storeTask();
}

function clearTasks(){                        // Tar bort alla element i listan och arrayen.
    while (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild); 
    }
    clearStorage();
}

function storeTask(){                  // Funktion utan några eventListeners, sparar helt enkelt de värdena som läggs till i listan som JSON-sträng.

    let jsonTasks = JSON.stringify(taskArr);   //Detta gör om javascript-värden till JSON strängar.    

    localStorage.setItem("tasks", jsonTasks);
    console.log(taskArr);
}


function loadStorage() {                                // Min funktion för att ladda localStoragen. Logiken bakom den är att loopa igenom arrayen och för varje item som loopen hittar kommer den skapa en ny article, liksom min addTask funktion gjorde. Detta gör den tills loopen gått igenom hela arrayen.
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        taskArr = JSON.parse(storedTasks);     // Gör om JSON-sträng till array
        for (let i = 0; i < taskArr.length; i++) {
            let newTaskEl = document.createElement("article"); 
            let newTaskText = document.createTextNode(taskArr[i]); 
            newTaskEl.appendChild(newTaskText);
            taskList.appendChild(newTaskEl);
        }
    }
}
    //Event listener för att ta bort ett av elementen i arrayen med ett klick
    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "ARTICLE") {             // Tar bara emot article-tag element
            e.target.remove();         // Tar bort elementet

            taskArr = taskArr.filter(task => task !== e.target.textContent); //Använder filter metod, den kollar igenom arrayen för att se vilken som raderas.
           
            storeTask(); // Här uppdateras arrayen med borttaget element.
        }
    });
    




function clearStorage(){
    localStorage.removeItem("tasks");     //Knappen som tar bort all local storage, tar både bort alla items som är synliga på hemsidan plus hela local storage vid nästa rad.
    taskArr = [];
}