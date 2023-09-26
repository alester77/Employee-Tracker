const sqlQueries = {};

// View All Departments:
sqlQueries.viewAllDepartments = "SELECT id, name AS department FROM departments";

// View All Roles:
sqlQueries.viewAllRoles = `
    SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id;
`;

// View All Employees:
sqlQueries.viewAllEmployees = `
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employees.role_id = roles.id
    LEFT JOIN department ON roles.department_id = departments.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
`;

// Add a Department:
sqlQueries.addDepartment = "INSERT INTO department (name) VALUES (?)";

// Add a Role:
sqlQueries.addRole = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";

// Add an Employee:
sqlQueries.addEmployee = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";

// Update an Employee Role:
sqlQueries.updateEmployeeRole = "UPDATE employee SET role_id = ? WHERE id = ?";

// Export the sqlQueries object:
module.exports = sqlQueries;
