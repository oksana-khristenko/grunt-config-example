'use strict';

var getFolders = require('../helpers/folders').getFolders;

function getSpriteFiles(sprites) {
  var obj = {};

  for (let sprite of sprites) {
    obj[`public/assets/svg/${sprite}.svg`] = [`app/assets/svg/sprites/${sprite}/*.svg`];
  }

  return obj;
};

module.exports = {
  build: {
    options: {
      prefix : 'icon-',
      includedemo: false,
      inheritviewbox: true
    },
    files: getSpriteFiles(
      getFolders('app/assets/svg/sprites')
    )
  }
};