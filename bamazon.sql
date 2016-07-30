CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE product (
	id INT NOT NULL ATUO_INCREMENT,
	productName VARCHAR (50) NOT NULL,
	departmentName VARCHAR (100) NOT NULL,
	price INTEGER,
	stockQuantity INTEGER

)

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Red Dirtbike", "outdoor sports", 300, 200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Blue Dirtbike", "outdoor sports", 300, 150);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("frisbee", "outdoor sports", 15, 1500);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("jumprope", "outdoor sports", 20, 1500);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("stickball set", "outdoor sports", 30, 200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("frisbee", "outdoor sports", 15, 1500);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("laptop computer", "technology", 2000, 400);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("brown endtable", "furniture", 200, 350);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("blue computer table", "furniture", 150, 2000);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("bottle of JD", "yack", 30, 15000);







