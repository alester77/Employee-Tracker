const inquirer = require('inquirer');

function mainPrompt() {
  return inquirer.prompt([
    {
      type: 'list',
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
    }
  ]);
}

function addDepartmentPrompt() {
  return inquirer.prompt({
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the new department:',
      validate: input => input ? true : 'Department name cannot be empty.'
  });
}

function addRolePrompt(departments) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'roleTitle',
      message: 'Enter the title of the new role:',
      validate: input => input ? true : 'Role title cannot be empty.'
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'Enter the salary of the new role:',
      validate: input => input ? true : 'Role salary cannot be empty.'
    },
    {
      type: 'list',
      name: 'roleDepartment',
      message: 'Select the department of the new role:',
      choices: departments
    }
  ]);
}

function addEmployeePrompt(roles, managers) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employeeFirstName',
      message: 'Enter the first name of the new employee:',
      validate: input => input ? true : 'Employee first name cannot be empty.'
    },
    {
      type: 'input',
      name: 'employeeLastName',
      message: 'Enter the last name of the new employee:',
      validate: input => input ? true : 'Employee last name cannot be empty.'
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Select the role of the new employee:',
      choices: roles
    },
    {
      type: 'list',
      name: 'employeeManager',
      message: 'Select the manager of the new employee:',
      choices: [...managers, 'None']
    }
  ]);
}

function updateEmployeeRolePrompt(employees, roles) {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Select the employee to update:',
      choices: employees
    },
    {
      type: 'list',
      name: 'newRole',
      message: 'Select the new role of the employee:',
      choices: roles
    }
  ]);
}


//export prompts
module.exports = {
  mainPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt
};