
const input = require('readline-sync');

      

let welcomeMessage = "Hello! Welcome to your to-do list!\n\n";
let instructionPrompt = "If you'd like to add a task, enter 1.\nIf you'd like to delete a task, enter 2.\nIf you'd like to view the task-list, enter 3.\nIf you'd like to exit, enter 0.\nIf you need a reminder of these options, enter 5 at anytime.\n";
let noDisplayErrorMsg = "Oops! There's nothing here yet. If you'd like to add a task, please enter 1.";

let userTask;           //task given to program by user
let taskList = [];



//starting the program, will eventually add everything to runProgram() function

let userResponse = input.prompt(instructionPrompt);






function addTask(task) {
    taskList.push(task);
    displayTasks();
}


function displayTasks() {
    let displayedList;
    let num;
    let listItem;
    for (let i = 0; i < taskList.length; i++) {
        num = i + 1;
    }
    for (let j = 0; j < taskList.length; j++) {
        listItem = num + ") " + taskList[j];
    }
    console.log(displayedList += listItem);

}


function deleteTask() {
    displayTasks(taskList);
    taskToDelete = Number(input.question("Please enter the number of the list-item you'd like to delete."));
    indexToDelete = taskToDelete - 1;
    taskList.splice(indexToDelete, 1);


    //accepts only positive integers, from 1 to 0 + taskList.length()
    //removes task at index - 1 of the number user inputs
    //removes selected task from the list
}


//displays instruction prompts and returns the number they've selected
//requires validation: 
    //--must be 1, 2, 3, or 5
function userResponseNumber() {
    responseNumber = Number(input.question(instructionPrompt));
    while (responseNumber < 0 || responseNumber > 5 || responseNumber === 4) {
        responseNumber = input.question("Oops! Invalid choice. Please select 1, 2, 3, or 5. Enter 0 to quit.");
    }
    return responseNumber;
}


function sortNumber(number) {
    if (number == 1) {
        userTask = input.question("Enter your task item here: ");
        addTask(userTask);
    } else if (number === 2) {
        deleteTask();
    } else {
        return "no";
    }

}


//greets users at start of program.
function welcomeToProgram() {
    console.log(welcomeMessage);
}




function runProgram() {
}



welcomeToProgram();
let number = Number(userResponseNumber());
while (number !== 0) {
    sortNumber(number);
    if (number === 0) {
        break;
    } else {
        number = Number(userResponseNumber());
        sortNumber(number);
    }

}