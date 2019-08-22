const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', () => {
    return gulp.src('dist').pipe(clean());
});

gulp.task('compile', gulp.series(['clean']), () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['compile']));
