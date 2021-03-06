CREATE TABLE IF NOT EXISTS company(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS employee(
  id INT PRIMARY KEY AUTO_INCREMENT,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  address VARCHAR(255),
  salary DOUBLE,
  company_id INT,
  FOREIGN KEY (company_id) REFERENCES company(id)
);