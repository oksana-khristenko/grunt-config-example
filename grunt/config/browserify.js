module.exports = {
  options: {
    transform: ['hbsfy']
  },
  build: {
    src: 'app/assets/js/main.js',
    dest: 'public/assets/js/main.js',
    options: {
      browserifyOptions: {
        debug: true
      }
    }
  },
  dist: {
    src: 'app/assets/js/main.js',
    dest: 'dist/assets/js/main.js'
  }
};