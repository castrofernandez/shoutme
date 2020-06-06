module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': 'google',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {
        'indent': ['error', 4],
        'max-len': ['error', { 'code': 120 }],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'always', { 'singleValue': false }],
        'require-jsdoc': 0,
        'operator-linebreak': ['error', 'before'],
        'arrow-body-style': ['error', 'as-needed'],
    },
};
