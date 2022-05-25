const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');
const file = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Доброго дня! Введите строку!..\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit'){
    bye();
  }
  file.write(data);
});

process.on('SIGINT', function(){
  process.stdout.write('\nВсего доброго');
  process.exit();
});


function bye(){
  stdout.write('Всего доброго!\n');
  exit();
}