-- clean tables
DELETE FROM employee;
DELETE FROM company;

-- fill company table
INSERT INTO company VALUES(1, 'Known Mobile Co.');
INSERT INTO company VALUES(2, 'Empty Co.');

-- fill employee table
INSERT INTO employee VALUES(1, 'Dittmar', 'stefanie.dittmar@knownmobile.com', 'Bachem Str. 182, 12744 Berlin', 24000, 1);
INSERT INTO employee VALUES(2, 'Brinkerhoff', 'erwin.brinkerhoff@knownmobile.com', 'Heimat Str. 2, 12724 Berlin', 44000, 1);
INSERT INTO employee VALUES(3, 'Stumpf', 'ariene.stumpf@knownmobile.com', 'Bier Str. 5, 13344 Berlin', 70000.0, 1);