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

function addRolePrompt(department) {
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
      validate: input => {
        if(!input) {
          return 'Role salary cannot be empty.';
        }
        const number = parseFloat(input);
        if(isNaN(number)) {
          return 'Role salary must be a valid number.';
        }
        return true;
      },
      filter: input => parseFloat(input) // Convert the input string to a float
    },
    {
      type: 'list',
      name: 'roleDepartment',
      message: 'Select the department of the new role:',
      choices: department.map(dept => ({ name: dept.name, value: dept.id }))
    }
  ]);
}

function addEmployeePrompt(role, managers) {
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
      choices: role.map(role => ({ name: role.title, value: role.id }))
    },
    {
      type: 'list',
      name: 'employeeManager',
      message: 'Select the manager of the new employee:',
      choices: [...managers, 'None']
    }
  ]);
}

function updateEmployeeRolePrompt(employees, role) {
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
      choices: role.map(role => ({ name: role.title, value: role.id }))
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