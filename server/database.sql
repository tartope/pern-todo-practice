-- makes writing commands more visually pleasing.
--create database called perntodo
CREATE DATABASE perntodo;

--create table schema
CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    --sets max character limit of 255
    description VARCHAR(255)
);