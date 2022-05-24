const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, data) => {
  if(err) throw err;
  
  for (let item of data){
    fs.stat(path.join(__dirname, 'secret-folder', item), (err, stats) => {
      if (err) {
        throw err;
      } else if (stats.isFile()) {console.log(`${path.parse(item).name} - ${path.extname(item)} - ${stats.size}`);} 
    });
  }
});