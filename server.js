const connection = require("./config/connection");
const sqlQueries = require("./db/sqlQueries");
const {
  mainPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require("./prompts");

function queryAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

async function init() {
  const { action } = await mainPrompt();

  switch (action) {
    case "View all departments":
      const departments = await queryAsync(sqlQueries.viewAllDepartments);
      console.table(departments);
      break;

    case "View all roles":
      const roles = await queryAsync(sqlQueries.viewAllRoles);
      console.table(roles);
      break;

    case "View all employees":
      const employees = await queryAsync(sqlQueries.viewAllEmployees);
      console.table(employees);
      break;

    case "Add a department":
      const { departmentName } = await addDepartmentPrompt();
      await queryAsync(sqlQueries.addDepartment, [departmentName]);
      console.log("Department added successfully!");
      break;

    case "Add a role":
      const { roleTitle: title, roleSalary: salary, roleDepartment: department_id } = await addRolePrompt();
      await queryAsync(sqlQueries.addRole, [title, salary, department_id]);
      console.log("Role added successfully!");
      break;

      case "Add an employee":
        try {
            const { 
                employeeFirstName: first_name, 
                employeeLastName: last_name, 
                employeeRole: role_id, 
                employeeManager: manager_id 
            } = await addEmployeePrompt();
    
            // Add the new employee to the database
            await queryAsync(sqlQueries.addEmployee, [first_name, last_name, role_id, manager_id]);
    
            console.log("Employee added successfully!");
    
        } catch (error) {
            console.error('Error:', error.message);
        }
        break;


      
    case "Update an employee role":
      const { employee: employee_id, newRole: new_role_id } = await updateEmployeeRolePrompt();
      await queryAsync(sqlQueries.updateEmployeeRole, [new_role_id, employee_id]);
      console.log("Employee role updated successfully!");
      break;

    case "Exit":
      connection.end();
      return;
  }

  await init();

  
}



init();