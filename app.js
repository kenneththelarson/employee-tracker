const inquirer = require('inquirer');

const userPrompts = () => {
    inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Please select an option:',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
    })
    .then((answer) => {
        if (answer.options === 'Quit') {
            return process.exit(22);
        } else if (answer.options === 'View all Departments') {
        } else if (answer.options === "View all roles") {
        } else if (answer.options === "View all employees") {
        } else if (answer.options === "Add a department") {
        } else if (answer.options === "Add a role") {
        } else if (answer.options === "Add an employee") {
        } else if (answer.options === "Update an employee role") {
        }
    })
}

userPrompts();