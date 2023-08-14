CREATE DATABASE market_list;

USE market_list;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(255),
    nombre_usuario VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255)
);

CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(255),
    nombre_usuario VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255)
);

//USUARIOS

INSERT INTO clientes (nombre_completo, nombre_usuario, contraseña)
VALUES ("Julian barbieri", "juli_user", "juli_pass");

INSERT INTO clientes (nombre_completo, nombre_usuario, contraseña)
VALUES ("Julian2 barbieri2", "juli_user2", "juli_pass2");