CREATE TABLE `users` (
	`id` int NOT NULL,
	`name_person` varchar NOT NULL,
	`address` varchar NOT NULL,
	`phone` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
	id_product int NOT NULL,
	name varchar NOT NULL,
	price int NOT NULL,
	stock int NOT NULL,
	PRIMARY KEY (id_product)
);

CREATE TABLE files (
	id_file int NOT NULL,
	date_ DATE NOT NULL,
	id_person int NOT NULL,
	PRIMARY KEY (id_file)
);

CREATE TABLE details_file (
	id int NOT NULL,
	id_file int NOT NULL,
	id_product int NOT NULL,
	value_product int NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE files ADD CONSTRAINT files_fk0 FOREIGN KEY (id_person) REFERENCES users(id);

ALTER TABLE details_file ADD CONSTRAINT details_file_fk0 FOREIGN KEY (id_file) REFERENCES files(id_file);

ALTER TABLE details_file ADD CONSTRAINT details_file_fk1 FOREIGN KEY (id_product) REFERENCES products(id_product);

ALTER TABLE details_file ADD CONSTRAINT details_file_fk2 FOREIGN KEY (value_product) REFERENCES products(price);





