module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
    	'./test/**/*.spec.js': [ 'browserify' ],
    	'./js/**/*.js': [ 'browserify' ]
    },
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './js/**/*.js',
      './test/**/*.spec.js'
    ],
    autoWatch: true,
    browserify: {
    	watch: true,
    	debug: true
    },
    singleRun: true
  });
};