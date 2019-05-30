BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS comments CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
CREATE TABLE events (
  id_events SERIAL PRIMARY KEY,
  events VARCHAR(1000) NOT NULL,
  event_date DATE NOT NULL

);
CREATE TABLE comments (
  id_comments SERIAL PRIMARY KEY,
  comment VARCHAR(1000) NOT NULL,
  id INTEGER REFERENCES users(id),
  id_events INTEGER REFERENCES events(id_events)

);


INSERT INTO users (name) VALUES ('Sahar');
INSERT INTO users (name) VALUES ('Maha');
INSERT INTO users (name) VALUES ('Mynah');

INSERT INTO events (events, event_date) VALUES('Sahar birthday', '4.6.2019');
INSERT INTO events (events, event_date) VALUES('Meeting with Intel company', '27.5.2019');
INSERT INTO events (events, event_date) VALUES('First day of holiday', '30.5.2019');

INSERT INTO comments (comment) VALUES('We have a party at Sahar home at 17:00');
INSERT INTO comments (comment) VALUES('The meeting will be held in Lotus at 12:00');
INSERT INTO comments (comment) VALUES('Enjoy your holiday week, see you in 7 of June');


COMMIT;
