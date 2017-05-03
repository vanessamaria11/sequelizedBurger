-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

CREATE DATABASE Burgers_db;

USE Burgers_db;

CREATE TABLE burgersTable(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(250),
devoured boolean,
date TIMESTAMP,
PRIMARY KEY (id)
);