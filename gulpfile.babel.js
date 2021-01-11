const { src, dest, series, watch } = require('gulp');
const cp = require("child_process");
const gutil = require("gulp-util");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const cssnext = require("postcss-cssnext");
const BrowserSync = require("browser-sync");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf");
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const inject = require("gulp-inject");
const cssnano = require("cssnano");

const browserSync = BrowserSync.create();
const hugoBin = `./bin/hugo.${process.platform === "win32" ? "exe" : process.platform}`;
const defaultArgs = ["-d", "../dist", "-s", "site"];

if (process.env.DEBUG) {
  defaultArgs.unshift("--debug");
}

function hugo(cb) {
  buildSite(cb)
}

function hugoPreview(cb) { 
  buildSite(cb, ["--buildDrafts", "--buildFuture"])
}

function build(cb) {
  return series(css, js, hugo)(cb);
}

function buildPreview(cb) {
  return series(css, js, hugoPreview)(cb);
}

function css() {
  return src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      cssnext(),
      cssnano(),
    ]))
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
}

function js(cb) {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
}

function svg() {
  const svgs = src("site/static/img/icons-*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(dest("site/layouts/partials/"));
}

function server() {
  build();
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch("./src/js/**/*.js", js);
  watch("./src/css/**/*.css", css);
  watch("./site/static/img/icons-*.svg", svg);
  watch("./site/**/*", hugo);
}

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

exports.hugo = hugo;
exports.start = server;
exports.build = build;
exports.webpack = js;
exports.preview = buildPreview;
