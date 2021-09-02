
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
}


function displayTasks() {
    //might need array as parameter? need to think about it
    //prints out all tasks with corresponding numbers (index + 1)
}


function deleteTask(task) {
    //accepts only positive integers, from 1 to 0 + taskList.length()
    //removes task at index - 1 of the number user inputs
    //removes selected task from the list
}


//displays instruction prompts and returns the number they've selected
//requires validation: 
    //--must be 1, 2, 3, or 5
function userResponseNumber() {
    responseNumber = input.question(instructionPrompt);
    while (responseNumber < 0 || responseNumber > 5 || responseNumber == 4) {
        responseNumber = input.question("Oops! Invalid choice. Please select 1, 2, 3, or 5. Enter 0 to quit.");
    }
    return responseNumber;
}


function sortNumber(number) {
    if (number == 1) {
        userTask = input.question("Enter your task item here: ");
        addTask(userTask);
    } else {
        return "nothing to see here";
    }
}


//greets users at start of program.
function welcomeToProgram() {
    console.log(welcomeMessage);
}


function runProgram() {
    welcomeToProgram();
    let number = userResponseNumber();
    while((Number(number !== 0))) {
        sortNumber(number);
    }

}


runProgram();