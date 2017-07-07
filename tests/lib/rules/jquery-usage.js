/**
 * @fileoverview jQuery-usage
 * @author Nicole Gucovschi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jquery-usage"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("jquery-usage", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "$('div')",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
