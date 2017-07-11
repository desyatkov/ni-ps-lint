/**
 * @fileoverview custom rules for PS team
 * @author Sergey Desyatkov
 */
'use strict';

var requireIndex = require('requireindex');

// import all rules in lib/rules
module.exports = {
    'env': {
        'browser': true,
        'es6': false,
        'jquery': true
    },
    globals: {
        'u': true
    },

    rules: {
        'indent': [ 'error', 4 ],
        'yoda': 'error',
        'no-new-func': 'error',
        'max-nested-callbacks': ['error', 3],
        'eqeqeq': ['error', 'always'],
        'camelcase': ['error', { 'properties': 'always' }],
        'no-self-compare': 'error',
        'no-new-object': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always' ],
        'complexity': ['error', 2],
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-mixed-operators': ['error', {
            'groups': [
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            'allowSamePrecedence': true
            }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }]
    }
};

module.exports.rules = requireIndex(__dirname + '/rules');

module.exports.configs = {
  recommended: {
    rules: {
      'ni-ps-lint/cdn-url': 2,
      'ni-ps-lint/ie8-support': 2,
      'ni-ps-lint/jquery-usage': 2,
      'ni-ps-lint/meaningful-naming': 2,
      'ni-ps-lint/parameter-length': 2,
      'ni-ps-lint/poller-exist': 2
    }
  }
};