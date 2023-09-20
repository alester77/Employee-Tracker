const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Coke26!!',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db.`)
);

module.exports = db;

const mainMenu = async () => {
  const response = await inquirer.prompt({
    type: 'select',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  });

  switch (response.action) {
    case 'View all departments':
      // Handle viewing all departments
      break;
    case 'View all roles':
      // Handle viewing all roles
      break;
    case 'View all employees':
      // Handle viewing all employees
      break;
    case 'Add a department':
      // Handle adding a department
      break;
    case 'Add a role':
      // Handle adding a role
      break;
    case 'Add an employee':
      // Handle adding an employee
      break;
    case 'Update an employee role':
      // Handle updating an employee role
      break;
    case 'Exit':
      // Handle exit
      process.exit();
      break;
  }
};

mainMenu();