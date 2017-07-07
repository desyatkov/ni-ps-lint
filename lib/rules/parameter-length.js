/**
 * @fileoverview not allowed to use one character in func params names
 * @author Idan Brand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "not allowed to use one character in func params names",
            category: "Fill me in",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {

            FunctionDeclaration: function (node) {
                var isOK = node.params.reduce(function (acc, item) {
                    return item.name.length < 2;
                }, false);
                if (isOK) {
                    context.report({
                        node: node,
                        message: 'not allowed one character names for fumc params'
                    });
                }
            }
        };
    }
};
