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
  USER_id INTEGER FOREIGN KEY,
  event VARCHAR(100) NOT NULL;
);

INSERT INTO EVENTS (event) VALUES
("Sahar's birthday"),
("Meeting with Intel company"),
("First day of holiday");
);

CREATE TABLE EVENTS_DATE (
  id SERIAL PRIMARY KEY,
  EVENTS_id INTEGER FOREIGN KEY,
  date_event DATE NOT NULL;
);

INSERT INTO EVENTS_DATE (date_event) VALUES
("4.6.2019"),
("27.5.2019"),
("30.5.2019");
);

CREATE TABLE COMMENTS (
  id SERIAL PRIMARY KEY,
  EVENTS_id INTEGER FOREIGN KEY,
  comment VARCHAR(1000) NOT NULL;
);

INSERT INTO COMMENTS (comment) VALUES
("We have a party at Sahar's home at 17:00"),
("The meeting will be held in Lotus at 12:00"),
("Enjoy your holiday week, see you in 7 of June");
);

CREATE TABLE CONNECTIONS (
  USER_id INTEGER FOREIGN KEY,
  EVENTS_id INTEGER FOREIGN KEY;
);

COMMIT;
