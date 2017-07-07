/**
 * @fileoverview not allowed to use one character in func params names
 * @author Sergey Desyatkov
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/parameter-length"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("parameter-length", rule, {

    valid: [
        "function myFunc(firstParam, secondParam){return a + b};"
    ],

    invalid: [
        {
            code: "function myFunc(a, b){return a + b};",
            errors: [{
                message: "short params name",
                type: "Me too"
            }]
        }
    ]
});
