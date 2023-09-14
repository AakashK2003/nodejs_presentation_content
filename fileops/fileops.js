const fs = require('fs');

// Reading a file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});