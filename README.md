# eslint-plugin-ni-ps-lint

[![Greenkeeper badge](https://badges.greenkeeper.io/desyatkov/ni-ps-lint.svg)](https://greenkeeper.io/)

custom rules for PS team

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ni-ps-lint`:

```
$ npm install eslint-plugin-ni-ps-lint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ni-ps-lint` globally.

## Usage

Add `ni-ps-lint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ni-ps-lint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ni-ps-lint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





