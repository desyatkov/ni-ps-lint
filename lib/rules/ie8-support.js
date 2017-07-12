/**
 * @fileoverview ie8-support
 * @author Sergey Desyatkov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "ie8-support",
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
            MemberExpression: function (node) {
                var propertyName = [
                    'indexOf',
                    'map',
                    'trim',
                    'fetch',
                    'promise',
                    'forEach',
                    'keys',
                    'from',
                    'reduce',
                    'findIndex',
                    'some',
                    'sort',
                    'every',
                    'reverse'
                ];
                var existProperty = propertyName.indexOf(node.property.name) > -1;
                if (existProperty) {
                    context.report({
                        node: node,
                        message: `--ps 👻  ${node.property.name} is not supported in IE 8`
                    })
                }
            },
            Property: function (node) {
                if (node.key.raw === undefined) {
                    context.report(node.key, '--ps 👻  Key-name without quotes is not supported in IE8');
                }
            }
        };
    }
};