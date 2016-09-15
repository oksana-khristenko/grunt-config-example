var getImageFiles = function(dest) {
  return {
    cwd: 'app/assets/img',
    src: ['**/*'],
    dest: dest + '/assets/img',
    expand: true
  };
};

var getHtmlFiles = function(dest) {
  return {
    cwd: 'app',
    src: ['**/*.html'],
    dest: dest,
    expand: true
  };
};

var getSvgFiles = function(dest) {
  return {
    cwd: 'app/assets/svg',
    src: ['**/*.svg', '!sprites/*.svg'],
    dest: dest + '/assets/svg',
    expand: true
  };
};

module.exports = {
  imagesBuild: getImageFiles('public'),
  imagesDist: getImageFiles('dist'),
  htmlBuild: getHtmlFiles('public'),
  htmlDist: getHtmlFiles('dist'),
  svgBuild: getSvgFiles('public')
};