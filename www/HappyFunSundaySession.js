var exec = require('cordova/exec');
exports.echo = function(arg0, success, error) {
  exec(success, error, 'HappyFunSundaySession', 'echo', [arg0]);
};

module.exports.adds = function (arg0, success, error) {
    exec(success, error, 'HappyFunSundaySession', 'adds', [arg0, arg1]);
};

exports.echojs = function(arg0, success, error) {
  if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
    success(arg0);
  } else {
    error('Empty message!');
  }
};