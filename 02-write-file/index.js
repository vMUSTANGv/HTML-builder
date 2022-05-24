const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');

stdout.write('Добрый день! Введите строку\n');
stdin.on('data', data => {
  fs.writeFile(path.join(__dirname, 'text.txt'), data, err => {
    if (err) {
      throw err;
    }
    exit();
  });
});
