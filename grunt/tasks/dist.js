module.exports = function(grunt) {
  grunt.registerTask('dist', [
    'clean:dist',
    'copy:htmlDist',
    'htmlmin:dist',
    'postcss:dist',
    'svgmin:dist',
    'jshint:all',
    'jscs:all',
    'browserify:dist',
    'uglify:dist',
    'copy:imagesDist'
  ]);
};