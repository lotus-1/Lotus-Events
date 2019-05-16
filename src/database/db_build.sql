BEGIN

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
);

INSERT INTO users (name) VALUES
('Sahar'),
('Maha'),
('Mynah');

DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  users_id INTEGER FOREIGN KEY,
  event text(1000) NOT NULL;
  event_date DATE NOT NULL;
);

INSERT INTO events (event) VALUES
("Sahar's birthday in 4.6.2019"),
("Meeting with Intel company in 27.5.2019"),
("First day of holiday in 30.5.2019");
);

DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  events_id INTEGER FOREIGN KEY,
  users_id INTEGER FOREIGN KEY,
  comment text(1000) NOT NULL;
);

INSERT INTO comments (comment) VALUES
("We have a party at Sahar's home at 17:00"),
("The meeting will be held in Lotus at 12:00"),
("Enjoy your holiday week, see you in 7 of June");
);

DROP TABLE IF EXISTS connections CASCADE;

CREATE TABLE connections (
  users_id INTEGER FOREIGN KEY,
  events_id INTEGER FOREIGN KEY;
);

COMMIT;
