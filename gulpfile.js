const { src, dest, series, watch } = require("gulp");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();

function html() {
  return src("src/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function css() {
  return src("src/blocks/**/**.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest("dist"));
}

function img() {
  return src("src/images/**").pipe(dest("dist/images"));
}

function clear() {
  return del("dist");
}

function serve() {
  sync.init({ server: "./dist" });
  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/blocks/**/**.css", series(clear, css, html, img)).on(
    "change",
    sync.reload
  );
}

exports.build = series(clear, css, html, img);
exports.serve = series(clear, css, html, img, serve);
exports.clear = clear;
