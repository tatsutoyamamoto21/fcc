create database database;

create table if not exits fridge_1 (
    ItemID int not null unique,
    ItemName varchar(255),
    ExpData date,
    constraint ItemID primary key (ItemID)
);

ALTER TABLE fridge_1 AUTO_INCREMENT=1;

INSERT INTO fidge_1 (ItemName, ExpData) VALUES
('Milk', '2023-08-22 00:00:00'),
('Milk', '2023-08-23 00:00:00'),
('Milk', '2023-08-22 00:00:00'),
('Chicken', '2023-08-22 00:00:00');









