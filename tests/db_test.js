const tape = require('tape');
const runDBbuild = require('../src/database/db_build');
const getEvent = require('../src/database/dynamic.js');

tape('tape is working', t => {
  t.equals(1, 1, 'one equals one');
  t.end();
});

tape('getEvent returns all users' t => {
runDBbuild((err, res) => {
  const expected = 'Sahar';
  getData((e, data) => {
    console.log(data);
    if (e) return e;
    t.equals(data[0].name, expected, 'Should return Sahar');
    t.end();
  });
});
});
