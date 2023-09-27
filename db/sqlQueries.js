const sqlQueries = {};

// View All Departments:
sqlQueries.viewAllDepartments = "SELECT id, name AS department FROM department";

// View All Roles:
sqlQueries.viewAllRoles = `
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    LEFT JOIN department ON role.department_id = department.id;
`;

// View All Employees:
sqlQueries.viewAllEmployees = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
`;

// Add a Department:
sqlQueries.addDepartment = "INSERT INTO department (name) VALUES (?)";

// Add a Role:
sqlQueries.addRole = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";

// Add an Employee:
sqlQueries.addEmployee = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";

// Update an Employee Role:
sqlQueries.updateEmployeeRole = "UPDATE employee SET role_id = ? WHERE first_name = ?";

sqlQueries.getRoles = "SELECT * FROM role";

sqlQueries.getManagers = "SELECT * FROM employee WHERE manager_id IS NULL";


// Export the sqlQueries object:
module.exports = sqlQueries;
