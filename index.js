#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Kindly enter your First Number'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Kindly enter your Second Number'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Kindly enter your Operator',
        choices: ['add', 'subtract', 'divide', 'multiply']
    }
]);
if (answer.operator === 'add') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === 'subtract') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === 'divide') {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operator === 'multiply') {
    console.log(answer.num1 * answer.num2);
}
else {
}
