
let fs = require('fs');

exports.read = (cb) => {
  fs.readFile(__dirname+'/book.txt', 'utf-8', (err, result) => {
      if (err) return cb(err);
      console.log("result",result);
      cb(null, result);
  }) 
}