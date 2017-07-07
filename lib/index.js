/**
 * @fileoverview custom rules for PS team
 * @author Sergey Desyatkov
 */
"use strict";

var requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    rules: {
      'ni-ps-lint/cdn-url': 2,
      'ni-ps-lint/ie8-support': 2,
      'ni-ps-lint/jquery-usage': 2,
      'ni-ps-lint/meaningful-naming': 2,
      'ni-ps-lint/parameter-length': 2
    }
  }
};