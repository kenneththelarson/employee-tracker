const connection = require('./db/database');
const inquirer = require('inquirer');
const cTable = require('console.table');

connection.connect((err) => {
  if (err) throw err;
  console.log(`
    ================
       Welcome to
    EMPLOYEE TRACKER
    ================
    `);
    userPrompts();
});

const userPrompts = () => {
  inquirer.prompt({
    type: 'list',
    name: 'options',
    message: 'Please select an option:',
    choices: [
      'View all Departments',
      'View all Roles',
      'View all Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update an Employee Role',
      'Exit'
    ],
  })
    .then((answer) => {
      if (answer.options === 'Exit') {
        connection.end();
      } else if (answer.options === 'View all Departments') {
        viewDepartments();
      } else if (answer.options === "View all roles") {
        viewRoles();
      } else if (answer.options === "View all employees") {
        viewEmployees();
      } else if (answer.options === "Add a department") {
        addDepartment();
      } else if (answer.options === "Add a role") {
        addRole();
      } else if (answer.options === "Add an employee") {
        addEmployee();
      } else if (answer.options === "Update an employee role") {
        updateRole();
      }
    });
};

function viewDepartments() {
  const query = `SELECT id, name AS department FROM department`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    userPrompts();
  });
};

function viewRoles() {
  const query = 'SELECT * FROM `roles`';
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    console.table('Roles', rows);
    userPrompts();
  });
};

function viewEmployees() {
  const query = `SELECT * FROM employee`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    userPrompts();
  });
};

function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'department',
    message: 'Which department do you want to add?'
  })
    .then(function (res) {
      const department = res.department;
      const query = `INSERT INTO department (name) VALUES ('${department}')`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        userPrompts();
      });
    });
};

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'role',
      message: 'Which job title do you want to add?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this job title?',
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'What is the department ID for this position?'
    }
  ])
    .then(function (res) {
      const role = res.role;
      const salary = res.salary;
      const departmentId = res.departmentId;
      const query = `INSERT INTO roles (title, salary, department_id) VALUES ('${role}', '${salary}', '${departmentId}')`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        userPrompts();
      });
    });
};

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?",
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?"
    },
    {
      type: 'input',
      name: 'roleId',
      message: "What is the employee's role ID?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the employee manager's ID?"
    }
  ])
    .then(function (res) {
      const firstName = res.firstName;
      const lastName = res.lastName;
      const roleId = res.roleId;
      const managerId = res.managerId;
      const query = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ('${firstName}', '${lastName}', '${roleId}', '${managerId}')`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(firstName + " " + lastName + " has been added.");
        userPrompts();
      });
    });
};

function updateRole() {
  let employeeSelect = '';
  let newRole = 0;
  connection.query('SELECT * FROM employee', function (error, res) {
    let allEmployees = res.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));
  inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Which employee would you like to update?',
      choices: allEmployees,
    }
  ])
    .then(function (answer) {
      employeeSelect = answer.employee;
      connection.query('SELECT * FROM roles', function (error, res) {
        let allRoles = res.map((role) => ({
          name: role.title,
          value: role.id
        }));
      inquirer.prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Select which role this employee has:',
          choices: allRoles
        }
      ])
        .then(function (answer) {
          newRole = answer.role;
          connection.query('UPDATE employee SET ? WHERE ?',
            [
              {
                role_id: newRole
              },
              {
                id: employeeSelect
              }
            ],
          function (err, res) {
              if (err) throw err;
              console.log("Employee's role has been updated.");
              userPrompts();
            }
          );
        });
      });
    });
  });
};