const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then(data => {
      const lines = data.split('\n').filter(line => line);
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach(line => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
