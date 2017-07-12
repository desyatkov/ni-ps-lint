/**
 * @fileoverview not allowed to use one character in func params names
 * @author Idan Brand
 */
"use strict";

const R = require('ramda');

module.exports = {
    meta: {
        docs: {
            description: "not allowed to use one character in func params names",
            category: "Fill me in",
            recommended: true
        },
        fixable: null, // or "code" or "whitespace"
        schema: [

        ]
    },

    create: function (context) {
        return {

            FunctionDeclaration: function (node) {
                const paramLength = x => {
                    if (x.name.length < 2) {
                        context.report({
                            node: x,
                            message: `--ps 🙀 not allow one character param name '${ x.name }'`
                        });
                    }
                };

                R.forEach(paramLength, node.params);

            }
        };
    }
};