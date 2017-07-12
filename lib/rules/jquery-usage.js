/**
 * @fileoverview jQuery-usage
 * @author Nicole Gucovschi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "jQuery-usage",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {

            CallExpression: function (node) {
                /*returns an error if $ is used instead of jQuery*/
                if(node.callee.name === '$'){
                    context.report({
                        node: node,
                        message: '--ps 👻 use jQuery instead of $ sign',
                        fix: function(fixer){
                            /*replaces $ in jQuery*/
                            return fixer.replaceText(node.callee, 'jQuery');
                        }
                    });
                }
            }

        };
    }
};
