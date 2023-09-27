/* 
--CREATE DATABASE IF NOT EXIST Hotel;
--USE Hotel;

CREATE TABLE usuarios(
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    contrasena VARCHAR(255),
    nombre VARCHAR(255),
    apellido_p VARCHAR(255),
    apellido_m VARCHAR(255)
);

CREATE TABLE habitaciones(
	id_habitacion INT AUTO_INCREMENT KEY,
    estado BOOLEAN,
    precio FLOAT
);

CREATE TABLE tipo_de_pago(
	id_tipo_de_pago INT AUTO_INCREMENT PRIMARY KEY,
    paypal BOOLEAN,
    efectivo BOOLEAN
);

CREATE TABLE reservaciones(
	id_reservacion INT AUTO_INCREMENT PRIMARY KEY,
	fecha_llegada DATE,
    fecha_salida DATE,
    numero_huespedes INT,
    id_usuario int,
    id_habitacion int,
    id_tipo_de_pago int,
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_habitacion) REFERENCES habitaciones(id_habitacion),
    FOREIGN KEY (id_tipo_de_pago) REFERENCES tipo_de_pago(id_tipo_de_pago)
); */