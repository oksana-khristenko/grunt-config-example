module.exports = {
  getFolders
};

function getFolders(path) {
  var fs = require('fs'),
      folders = [];

  fs.readdirSync(path).forEach(item => {
    if (fs.lstatSync(`${path}/${item}`).isDirectory()) {
      folders.push(item);
    }
  });

  return folders;
};