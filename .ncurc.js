// * https://www.npmjs.com/package/npm-check-updates#configuration-files

module.exports = {
  reject: [
    // ? Pin the CJS version of strip-ansi
    'strip-ansi',
    // ? Pin the non-broken version of glob
    'glob',
    // ? Pin the CJS version of execa
    'execa'
  ]
};
