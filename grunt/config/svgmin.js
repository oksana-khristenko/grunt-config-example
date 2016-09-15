module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['**/*.svg', '!app/svg/sprites/**/*.svg'],
      dest: 'dist/'
    }]
  }
};