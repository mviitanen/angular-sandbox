var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: "www",
        port: 8888
    });
});

gulp.task('default', ['connect']);