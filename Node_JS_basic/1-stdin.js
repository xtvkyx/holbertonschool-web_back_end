process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.trim()}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
