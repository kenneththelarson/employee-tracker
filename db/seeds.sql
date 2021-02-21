INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Human Resources'),
    ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Software Engineer', 120000, 2),
    ('Lawyer', 190000, 4),
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Accountant', 125000, 3),
    ('Customer Service Team Lead', 80000, 6),
    ('HR Team Lead', 140000, 15),
    ('Quality Assurance', 110000, 2);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
    ('Bill', 'Farmer', 1, 1),
    ('Mel', 'Blanc', 2, NULL),
    ('Billy', 'West', 3, 6),
    ('Sean', 'Astin', 4, NULL),
    ('Nic', 'Cage', 5, 2),
    ('Scarlett', 'Johanson', 6, 5),
    ('Rob', 'Downey', 7, 4),
    ('George', 'Clooney', 8, 3),
    ('Timothy', 'Oliphant', 9, 6),
    ('Anthony', 'Hopkins', 1 , 5),
    ('Mark', 'Walberg', 2, 4),
    ('Johnny', 'Depp', 3, 3),
    ('William', 'Macy', 4, 2),
    ('Winona', 'Ryder', 5, NULL),
    ('Daniel', 'Radcliffe', 6, 1),
    ('Ian', 'Mckellan', 7, 6),
    ('Neil', 'Harris',8, 4),
    ('Tom', 'Hanks', 9, 1);