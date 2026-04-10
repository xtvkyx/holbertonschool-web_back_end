process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
