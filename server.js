const connection = require("./config/connection");
const sqlQueries = require("./db/sqlQueries");
const {
  mainPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require("./prompts");

async function init() {
  const { action } = await mainPrompt();


  // 'View all departments',
  switch (action) {
    case "View all departments":
      connection.query(sqlQueries.viewAllDepartments, (err, res) => {
        if (err) throw err;
        console.table(res);
      });
      break;

    // 'View all roles',
    case "View all roles":
      connection.query(sqlQueries.viewAllRoles, (err, res) => {
        if (err) throw err;
        console.table(res);
      });
      break;

    // 'View all employees',
    case "View all employees":
      connection.query(sqlQueries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
      });
      break;

    // 'Add a department',
    case "Add a department":
      const { departmentName } = await addDepartmentPrompt();
      connection.query(sqlQueries.addDepartment, departmentName, (err, res) => {
        if (err) throw err;
        console.log("Department added successfully!");
      });

    // 'Add a role',
    case "Add a role":
      const { title, salary, department_id } = await addRolePrompt(departments);
      connection.query(
        sqlQueries.addRole,
        [title, salary, department_id],
        (err, res) => {
          if (err) throw err;
          console.log("Role added successfully!");
        }
      );
      break;

    // 'Add an employee',
    case "Add an employee":
      const { first_name, last_name, role_id, manager_id } =
        await addEmployeePrompt();
      connection.query(
        sqlQueries.addEmployee,
        [first_name, last_name, role_id, manager_id],
        (err, res) => {
          if (err) throw err;
          console.log("Employee added successfully!");
        }
      );
      break;

    // 'Update an employee role',
    case "Update an employee role":
      const { employee_id, new_role_id } = await updateEmployeeRolePrompt();
      connection.query(
        sqlQueries.updateEmployeeRole,
        [new_role_id, employee_id],
        (err, res) => {
          if (err) throw err;
          console.log("Employee role updated successfully!");
        }
      );
      break;
    // 'Exit'

    //end of switch statement
    case "Exit":
      inProgress = false;
      connection.end();
      return;
  }
  await init();
}

init();
