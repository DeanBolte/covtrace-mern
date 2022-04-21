const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const fs   = require('fs');
const zip = require('gulp-zip');
const log = require('fancy-log');
var exec = require('child_process').exec;

const paths = {
  eb_extend: "../.ebextensions",
  build_extend: "../prod-build/.ebextensions",
  prod_build: '../prod-build',
  server_file_name: 'server.bundle.js',
  react_src: '../react-covtrace/build/**/*',
  react_dist: '../prod-build/react-covtrace/build',
  zipped_file_name: 'react-covtrace.zip'
};

function clean()  {
  log('removing the old files in the directory')
  return del('../prod-build/**', {force:true});
}

function createProdBuildFolder() {
  return createFolder(paths.prod_build);
}

function createEbExtensionsFolder() {
  return createFolder(paths.build_extend);
}

function createFolder(dir) {
  log(`Creating the folder if not exist  ${dir}`)
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    log('📁  folder created:', dir);
  }

  return Promise.resolve('the value is ignored');
}

function buildReactCodeTask(cb) {
  log('building React code into the directory')
  return exec('cd ../react-covtrace && npm run build', function (err, stdout, stderr) {
    log(stdout);
    log(stderr);
    cb(err);
  })
}

function copyReactCodeTask() {
  log('copying React code into the directory')
  return src(`${paths.react_src}`)
        .pipe(dest(`${paths.react_dist}`));
}

function copyNodeJSCodeTask() {
  log('building and copying server code into the directory')
  return src(['package.json', 'server.js'])
        .pipe(dest(`${paths.prod_build}`))
}

function addEbExtensions() {
  log('adding eb configs into the directory')
  return src([`${paths.eb_extend}/00_change_npm_permissions.config`])
        .pipe(dest(`${paths.build_extend}`))
}

function zippingTask() {
  log('zipping the code ')
  return src(`${paths.prod_build}/**`)
      .pipe(zip(`${paths.zipped_file_name}`))
      .pipe(dest(`${paths.prod_build}`))
}

exports.default = series(
  clean,
  createProdBuildFolder,
  buildReactCodeTask,
  parallel(copyReactCodeTask, copyNodeJSCodeTask),
  zippingTask
);