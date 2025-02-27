var gulp = require('gulp');
var mjml = require('gulp-mjml');
var clean = require('gulp-clean');
var mjmlEngine = require('mjml');

// Create a task to delete dist folder
gulp.task('clean', () => {
    return gulp.src('./dist', { "allowEmpty": true })
        .pipe(clean());
});

// Create a task to compile Mjml to HTML
gulp.task('mjml', function () {
    return gulp.src('./src/**.mjml')
        .pipe(mjml(mjmlEngine, { minify: true }))
        .pipe(gulp.dest('./dist'))
});

// Create a task to build Mjml to HTML
gulp.task('build', gulp.series('clean',
    gulp.parallel('mjml'),
));

// Create a watch task to watch for changes to Mjml and HTML files
gulp.task('watch', gulp.parallel('build', () => {
    gulp.watch('./src/**.mjml', gulp.series('mjml'));
}));

// Default Task
gulp.task('default', gulp.parallel('build', 'watch'));