module.exports = {
  build: {
    options: {
      prefix : 'icon-',
      includedemo: false,
      inheritviewbox: true
    },
    files: {
      'public/assets/svg/sample.svg': ['app/assets/svg/sprites/**/*.svg']
    }
  }
};