const express = require('express');
const fs = require('fs').promises;

const app = express();
const database = process.argv[2];

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line);
      const students = lines.slice(1);

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;

      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      return output.trim();
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(database);
    res.send(`This is the list of our students\n${data}`);
  } catch {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
