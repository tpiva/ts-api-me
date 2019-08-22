const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('copy-opts', gulp.series(['clean', 'compile']), () => {
    return gulp.src('tests/unit/config/mocha.opts')
        .pipe(gulp.dest('dist/tests/unit/config'))
        .pipe(gulp.dest('dist/tests/integration/config'));
});

gulp.task('default', gulp.series(['copy-opts']));
