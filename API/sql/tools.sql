drop database `MyDB`;
use MyDB;
select * from fridge_1;
select * from fridge_1 order by ExpDate;
INSERT INTO fridge_1 (ItemName, ExpDate, IsBestBefore, Portion) VALUES ('add items', '2023-08-22 00:00:00', 0, 1);