CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT,
    setor ENUM('variedades', 'pet', 'farmácia') NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    price DECIMAL(3,3) NOT NULL,
    texto TEXT NOT NULL,
    marca TINYTEXT NOT NULL,
    PRIMARY KEY(id) 
) DEFAULT CHARSET = utf8;

CREATE TABLE comprador(
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE anunciantes(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    cpf INT NOT NULL,
    telefone NUMERIC,
    PRIMARY KEY(id)
);

CREATE TABLE área_produtos(
	id INT NOT NULL AUTO_INCREMENT,
    id_anunciantes INT,
    setor ENUM('variedades', 'pet', 'farmácia') NOT NULL,
    id_produtos INT
);

desc comprador;