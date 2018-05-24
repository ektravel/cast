CREATE DATABASE friends_db;
USE friends_db;
CREATE TABLE characters_table (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50),
coolness_points INTEGER,
attitudes VARCHAR(50)
);

USE friends_db;
INSERT INTO characters_table (id, name, coolness_points, attitudes)
VALUES  (1, "Ross Geller", 15, "anxious"),
		(null, "Joey Tribbiani", 45, "care-free"),
        (null, "Chandler Bing", 35, "uptight"),
        (null, "Phoebe Buffay", 75, "care-free");