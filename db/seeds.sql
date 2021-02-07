INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Bill', 'Farmer', 1),
    ('Mel', 'Blanc', 2),
    ('Billy', 'West', 2),
    ('Johnny', 'Depp', 3),
    ('Winona', 'Ryder', 4),
    ('Jim', 'Carrey', 4),
    ('Sean', 'Astin', 5),
    ('Tom', 'Cruise', 6),
    ('Brian', 'Cox', 7),
    ('Harrison', 'Ford', 7);