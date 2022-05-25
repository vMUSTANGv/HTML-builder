const fs = require('fs');
const path = require('path');


const stream = fs.createReadStream(path.join(__dirname, 'text.txt'));
stream.on('data', function (item) {
  console.log(item.toString());
});
// console.log(stream);
