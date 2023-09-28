-- Active: 1695829698391@@127.0.0.1@3306@mind_game

USE mind_game;

CREATE TABLE
    tables(
        id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
        create_time DATETIME COMMENT 'Create Time',
        filename VARCHAR(255) COMMENT "TABLE PICTURE'S FILE NAME"
    );

CREATE TABLE
    characters(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
        create_time DATETIME COMMENT 'Create Time',
        filename VARCHAR(255) NOT NULL COMMENT "CHARACTER PICTURE'S FILE NAME",
        name VARCHAR(255) NOT NULL COMMENT "NAME OF THE CHARACTER",
        folder_name VARCHAR(255) NOT NULL COMMENT "Folder name where the picture was saved"
    );

CREATE TABLE
    save_history(
        id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        folder_name VARCHAR(255) NOT NULL,
        src VARCHAR(255) NOT NULL,
        position_x INT NOT NULL,
        position_y INT NOT NULL
    );

CREATE TABLE save_table( filename VARCHAR(255) );