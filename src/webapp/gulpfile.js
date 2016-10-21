var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');

var Server = require('karma').Server;

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('babel', function() {
    return gulp.src('./js/*.jsx')
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['lint', 'scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('browserify', function(){

});

gulp.task('eslint', function() {
    return gulp.src('./js/*.jsx')
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                    "jsx": true
                }
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function(run) {
	new Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, run).start();
});

gulp.task('test-cont', function(run) {
	new Server({
		configFile: __dirname + '/karma.conf.js'
	}, run).start();
});

gulp.task('connect', function (){
    connect.server({
        root: './',
        port: '4000'
    })
});

gulp.task('default', ['lint', 'sass', 'babel', 'watch', 'eslint']);