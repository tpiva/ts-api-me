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

gulp.task('copy-migration-config', gulp.series(['clean', 'compile', 'copy-opts']), () => {
    return gulp.src('server/config/config.json')
        .pipe(gulp.dest('dist/server/config'));
});

gulp.task('build', gulp.series(['copy-migration-config']), () => {
    return gulp.src('server/migrations/')
        .pipe(gulp.dest('dist/server/migrations'));
});

gulp.task('default', gulp.series(['build']));
