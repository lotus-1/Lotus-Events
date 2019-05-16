BEGIN

DROP TABLE IF EXISTS USERS CASCADE;

CREATE TABLE USERS (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
);

INSERT INTO USERS (name) VALUES
('Sahar'),
('Maha'),
('Mynah');

CREATE TABLE EVENTS (
  id SERIAL PRIMARY KEY,
  USER_id INTEGER,
  event VARCHAR(100) NOT NULL;
);

INSERT INTO EVENTS (event) VALUES
("Sahar's birthday"),
("Meeting with Intel company"),
("First day of holiday");



COMMIT;
