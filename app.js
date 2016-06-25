"use strict";
var file_module = require('./file_module');
var index_module = require('index_module');
var package_module = require('package_module');
var common = require('wasp-common');
var runtime = require('runtime');
file_module.runMe();
index_module.runMe();
package_module.runMe();
console.log(common.lang.StringUtil.isBlank(''));
console.log(common.lang.StringUtil.isBlank('aaa'));
console.log(runtime.common.lang.StringUtil.isBlank(''));
console.log(runtime.common.lang.StringUtil.isBlank('aaa'));
