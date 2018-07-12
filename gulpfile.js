'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var clean = require('gulp-clean');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('clean', function() {
    return gulp.src('./css/main.css', {read: false})
        .pipe(clean());
});

gulp.task('concatCSS', ['sass', 'clean'], function() {
    return gulp.src('./css/**/*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('./css'));
});

