-- Populating the departments table
INSERT INTO department (name) VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Marketing');

-- Populating the roles table
INSERT INTO role (title, salary, department_id) VALUES 
('Sales Executive', 60000, 1),
('Software Engineer', 75000, 2),
('Financial Analyst', 65000, 3),
('Marketing Specialist', 55000, 4);

-- Populating the employees table
-- Note: This assumes the manager_id is optional and can be NULL
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Harry', 'Potter', 1, NULL),
('Rhea', 'Sunshine', 2, 1),
('Marleau', 'Pup', 2, 1),
('Sunny', 'Lovelace', 3, 1);