import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import fileinclude from 'gulp-file-include';
import { deleteAsync } from 'del';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import gcmq from 'gulp-group-css-media-queries';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const server = browserSync.create();


import path from './gulp/pathConfig.js';
import webpackConfig from './gulp/webpackConfig.js';

const isDev = !process.argv.includes('--prod');

function style() {
    return gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(path.build.css));
}

function image() {
    return gulp.src(path.src.images)
        .pipe(gulp.dest(path.build.images));
}

function html() {
    return gulp.src(path.src.html)
        .pipe(fileinclude())
        .pipe(gulp.dest(path.build.html))
        .pipe(server.stream());
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
}

function js() {
    return gulp.src(path.src.js)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.build.js))
        .pipe(server.stream());
}

function serv(done) {
    server.init({
        host: 'localhost',
        port: 3000,
        tunnel: false,
        server: path.build.html,
    });
    done();
}

function clean() {
    return deleteAsync(path.clean);
}

function watch() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.images], image);
    gulp.watch([path.watch.css], style).on('change', server.reload);
}

export { clean, html, js, image, style };

const dev =
    isDev ?
        gulp.series(html, js, style, image, fonts, serv, watch) :
        gulp.series(clean, html, js, style, image, fonts)

export default dev;
