### exercice 1


CREATE DATABASE publics;

CREATE TABLE items(
 items_id SERIAL PRIMARY KEY,
 name VARCHAR (50) ,
 prix MONEY (50)
)


CREATE TABLE customers(
 customers_id SERIAL PRIMARY KEY,
 Prenom VARCHAR (60) ,
 Nom VARCHAR (50)
)
insert into items(items_id, name,prix) values('1','brice','300'),('2','alice savadogo','700'),('3','Fan','90')

insert into customers(customers_id,Prenom, Nom) values('1','rach','mohamed'),('2','ali','roma'),('3','jean','francois'),('4','fatas','red'),('5','blue','gla')


SELECT * FROM items ORDER BY prix ASC;


SELECT * FROM items where prix >= 100 ORDER BY prix DESC;

SELECT Nom,Prenom FROM customers ORDER BY Prenom ASC FETCH FIRST 3 ROWS ONLY;


SELECT Nom FROM customers ORDER BY Nom DESC;




