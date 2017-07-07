/**
 * @fileoverview execWhenReady exit
 * @author Sergey Desyatkov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "execWhenReady exit",
            category: "Fill me in",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
        return {
            Program: function (node) {

                var execCount = (function () {
                    var e = getUseStrictDirectives(node.body);
                    var uexecWhenReadyPoller = 0;
                    e.forEach(function (item) {
                        if (item.expression.callee !== undefined && item.expression.callee.property.name === 'execWhenReadyPoller') {
                            uexecWhenReadyPoller++;
                        }
                    });
                    return uexecWhenReadyPoller;
                })();

                if (execCount === 0) {
                    context.report({
                        node: node,
                        message: 'missing u.execWhenReadyPoller wrapper'
                    });
                }
            }
        };
    }
};