-- View all departments 
SELECT * FROM departments;

-- view all roles
SELECT roles.id, roles.title, departments.name AS department, roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;

-- view all employees
SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees manager ON employees.manager_id = manager.id;

-- insert departments
INSERT INTO departments (name) VALUES (?);

-- insert roles
INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);

-- insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);

-- update employee role
UPDATE employees SET role_id = ? WHERE id = ?;

