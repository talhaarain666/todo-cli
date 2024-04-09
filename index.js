#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todo?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todo?",
            default: "true"
        }
    ]);
    todo.push(todoQuestions.firstQuestion);
    console.log(todo);
    condition = todoQuestions.secondQuestion;
}
