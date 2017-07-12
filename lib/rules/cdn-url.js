/**
 * @fileoverview cdnUrl
 * @author Nicole Gucovschi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "cdnUrl",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code", // or "code" or "whitespace"
        schema: [
            // fill schema
        ]
    },

    create: function (context) {
        /*matches strings that contains the boost url path*/
        var boostPath = /(http(s)?:)?\/\/boost-assets-production.s3-website-us-east-1.amazonaws.com(\/)?/;
        var cdnPath = '//d15o9qq6jqrrp9.cloudfront.net/';

        /* replaces the boost file structure in the cdn path*/
        function replacePath(nodeToFix) {
            return nodeToFix.replace(boostPath, cdnPath);
        }

        return {
            CallExpression: function (node) {
                var args = node.arguments;
                args.forEach(function (arg) {
                    /*shows an error if a function parameter matches the boost path*/
                    if (boostPath.test(arg.value)) {
                        context.report({
                            node: node,
                            message: '--ps 👻  use CDN url for assets',
                            //replaces the paths
                            fix: function (fixer) {
                                return fixer.replaceText(arg, '\'' + replacePath(arg.value) + '\'');
                            }
                        });
                    }
                });
            },
            VariableDeclarator: function (node) {
                /*shows an error if a variable value matches the boost path*/
                if (node.init && boostPath.test(node.init.value)) {
                    context.report({
                        node: node,
                        message: '--ps 👻  use CDN url for assets',
                        //replaces the paths
                        fix: function (fixer) {
                            return fixer.replaceText(node.init, '\'' + replacePath(node.init.value) + '\'');
                        }

                    });
                }
            }
        };
    }
};