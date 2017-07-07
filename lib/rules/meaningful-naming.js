/**
 * @fileoverview variable name length
 * @author Nicole Gucovschi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "variable name length",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        return {
            VariableDeclarator: function(node){
                var patt = new RegExp('^.+?\\d$');
                /*returns an error if the variable name end with a digit*/
                if(patt.test(node.id.name)){
                    context.report({
                        node: node,
                        message: '\''+node.id.name+'\'- please do not end a variables name with a digit'
                    });
                }
                /*retuns an error if the variable name length is shorter then 3*/
                if(node.id.name.length < 3){
                    context.report({
                        node: node,
                        message: '\''+node.id.name+'\'- please do not use a variable name shorter then three characters'
                    });
                }
            }
        };
    }
};
