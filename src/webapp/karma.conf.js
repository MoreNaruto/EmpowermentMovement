module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
    	'./test/**/*_spec.js': [ 'browserify' ],
    	'./js/**/*.js': [ 'browserify' ]
    },
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './js/**/*.js',
      './test/**/*_spec.js'
    ],
    reporters: ['progress'],
    autoWatch: true,
    browserify: {
    	watch: true,
    	debug: true
    },
    singleRun: true
  });
};