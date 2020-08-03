//===
// IMPORTS
//===
const { series, parallel, src, dest, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

//===
// VARIABLES
//===
const SRC_PATH = 'src/';
const DIST_PATH = 'dist/';
const DIST_JS = 'ffnm.min.js';

//===
// TASKS
//===

// JS concat + sourcemaps + babel + min
function js(cb) {
    return src([
        SRC_PATH + 'globals.js',
        SRC_PATH + 'syntax.js',
        SRC_PATH + 'events/click.js',
        SRC_PATH + 'events/scroll.js',
        SRC_PATH + 'events/hover.js',
        SRC_PATH + 'events/visible.js',
        SRC_PATH + 'core.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat(DIST_JS))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(DIST_PATH));
}


//===
// Commands
//===

const build = series(js);

// gulp dev
exports.dev = function () {
    build();
    watch(SRC_PATH + '*.js', js);
}

// gulp
exports.default = build;
