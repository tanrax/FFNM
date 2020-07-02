//===
// IMPORTS
//===
const { series, parallel, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

//===
// VARIABLES
//===
const SRC_PATH = 'src/';
const DIST_PATH = 'dist/';
const DIST_JS = 'ffnm.min.js';
const SRC_JS_VENDORS = [
    './node_modules/ramda/dist/ramda.min.js'
];


//===
// TASKS
//===

// JS concat + sourcemaps + babel + min
function js(cb) {
    return src(SRC_JS_VENDORS.concat([SRC_PATH + 'core.js']))
        .pipe(sourcemaps.init())
        .pipe(concat(DIST_JS))
        .pipe(babel({
            presets: ['@babel/env']
        }))
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
