module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    rules: {
        'default-case': 'off',
        'dot-notation': 'off',
        'lines-between-class-members': 'off',
        'no-console': 'off',
        'no-restricted-globals': 'off', // отключено из-за бага https://github.com/eslint/typescript-eslint-parser/issues/414
        'prefer-destructuring': 'off',
        'spaced-comment': 'off',

        indent: ['error', 4, { SwitchCase: 1 }],
        'no-trailing-spaces': ['error', {
            skipBlankLines: true,
            ignoreComments: true,
        }],
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: true,
        }],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },
            ObjectPattern: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },
            ImportDeclaration: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },
            ExportDeclaration: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },
        }],

    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'class-methods-use-this': 'off',
                indent: 'off',

                'vue/html-indent': ['error', 4, {
                    attribute: 2,
                }],
                'vue/script-indent': ['error', 4, {
                    baseIndent: 1,
                    switchCase: 1,
                }],
                'vue/max-attributes-per-line': [1, {
                    singleline: 3,
                    multiline: {
                        max: 1,
                        allowFirstLine: true,
                    },
                }],
            },
        },
    ],
};
