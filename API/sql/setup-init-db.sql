create database `MyDB`;
use MyDB;
create table if not exists `fridge_1` (
    `ItemID` int not null unique AUTO_INCREMENT,
    `ItemName` varchar(255),
    `ExpDate` date,
    `IsBestBefore` boolean default false,
    `Portion` int default 1,
    constraint ItemID primary key (ItemID)
);

INSERT INTO fridge_1 (ItemID, ItemName, ExpDate) VALUES
(1, 'add items', '2023-08-22 00:00:00');

ALTER TABLE fridge_1 AUTO_INCREMENT=2;

INSERT INTO fridge_1 (ItemName, ExpDate) VALUES
('Milk', '2023-08-22 00:00:00'),
('Milk', '2023-08-23 00:00:00'),
('Milk', '2023-08-22 00:00:00'),
('Chicken', '2023-08-22 00:00:00');









