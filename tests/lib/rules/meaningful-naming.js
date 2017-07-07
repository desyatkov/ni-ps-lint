/**
 * @fileoverview variable name length
 * @author Nicole Gucovschi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/meaningful-naming"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("meaningful-naming", rule, {

    valid: [
        "var arr = []",
        "var newObg = {}"
    ],

    invalid: [
        {
            code: "var a1 = []",
            errors: [{
                message: "number in name",
                type: "Me too"
            }]
        },
        {
            code: "var a = []",
            errors: [{
                message: "short variable name",
                type: "Me too"
            }]
        }
    ]
});
