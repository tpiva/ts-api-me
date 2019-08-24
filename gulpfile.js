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

gulp.task('copy-opts', () => {
    return gulp.src('./tests/unit/config/mocha.opts')
        .pipe(gulp.dest('dist/tests/unit/config'))
        .pipe(gulp.dest('dist/tests/integration/config'));
});

gulp.task('copy-migration-config-file', () => {
    return gulp.src('./server/config/config.json')
        .pipe(gulp.dest('./dist/server/config/'));
});

gulp.task('copy-migration-config-dir', () => {
    return gulp.src('server/migrations/*')
        .pipe(gulp.dest('dist/server/migrations/'));
});

gulp.task('build', gulp.series(
    ['compile', 'clean', 'compile', 'copy-opts', 'copy-migration-config-file', 'copy-migration-config-dir'])
);

gulp.task('default', gulp.series(['build']));
