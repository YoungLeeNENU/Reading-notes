'use strict';
var path = require('path');
var gulp = require('gulp');
var debug = require('gulp-debug');
var babel = require('gulp-babel');
var runSequence = require('run-sequence').use(gulp);

// Transpiling
gulp.task('transpiling', function () {
	return gulp.src(path.join(__dirname, 'syntax/es6/*.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(path.join(__dirname, 'syntax/es5/')))
		.pipe(debug({
			title: 'transpiling'
		}));
});

gulp.task('default', ['transpiling']);

gulp.task('watch', function() {
    gulp.watch(['./src/**/*'], ['default']);
});
