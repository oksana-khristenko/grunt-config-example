module.exports = function(grunt) {
  require('time-grunt')(grunt);

  var path = require('path');

  require('load-grunt-config')(grunt, {
    build: 'grunt/tasks/build.js',
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    }
  });
};