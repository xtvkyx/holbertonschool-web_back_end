import fs from 'fs/promises';

export function readDatabase(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((l) => l);
      const students = lines.slice(1);

      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      return fields;
    })
    .catch(() => {
      return Promise.reject(new Error('Cannot load the database')); // 🔥 THIS FIXES CHECK 1
    });
}
