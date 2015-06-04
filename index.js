var growl = require('growl');
var reduce = require('lodash/collection/reduce');

module.exports = {
  reporter: function (errs) {
    'use strict';

    if (!errs || !errs.length) { return; }

    var str;

    if (errs.length > 1) {

      var totalFiles = Object.keys(reduce(errs, function (acc, err) {
        acc[err.file] = true;
        return acc;
      }, {})).length;

      str = '' + errs.length + ' errors across ' + totalFiles + ' files.';

    } else {

      var file = errs[0].file;
      var err = errs[0].error;
      str = file + '(' + err.line + ':' + err.character + '): ' + err.reason;

    }

    growl(str, {
      name: 'JSHint',
      title: 'JSHint',
      sticky: false,
    });
  }

};