/**
 * @fileoverview u.execWhenReadyPoller checking
 * @author Sergey Desyatkov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var parents = require('ast-parents')
var _ = require('lodash');

function upollerErr(node, context, cnt) {
    var e = parents(node);

    if (e.callee.type === 'Identifier') {
        // console.log(e.callee.object.callee.name)   
        var identName = e.callee.name;
        if (/\$|jquery/ig.test(identName)) {

            (function recur(subnode) {
                if (subnode.parent &&
                    subnode.parent.type === 'ExpressionStatement' &&
                    subnode.parent.expression.callee.object &&
                    subnode.parent.expression.callee.object.name === 'u' &&
                    _.last(subnode.parent.expression.arguments).arguments[0]
                    && _.last(subnode.parent.expression.arguments).arguments[0].value.toLowerCase() === 'jquery'
                ) {
                    cnt++;
                    recur(subnode.parent)
                } else if (subnode.parent === null) {
                    if (cnt > 1) {
                        context.report({
                            node: e,
                            message: `--ps 😳  More than one jquery poller for this statement`
                        });
                    } else if (cnt === 0) {
                        context.report({
                            node: e,
                            message: `--ps 😱  Missing poller for Jquery statement`
                        });
                    }
                    return;
                } else {
                    recur(subnode.parent);
                }
            })(e)
        }
    }
}

module.exports = {
    meta: {
        docs: {
            description: "u.execWhenReadyPoller checking",
            category: "Fill me in",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
        var counter = 0;
        return {
            CallExpression: function (innernode) {
                upollerErr(innernode, context, counter);
            }
        };
    }
};