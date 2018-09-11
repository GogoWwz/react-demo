module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        // 允许开发环境使用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //禁止使用var
        'no-var': 2,
        // 强制操作符周围有空格
        'space-infix-ops': 2,
        // 语句块之前的空格(大括号之前有空格)
        'space-before-blocks': [2, "always"],
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': [2, "always"],
        // 逗号之后必须有空格
        'comma-spacing': [2, { "before": false, "after": true }],
        // 对象字面量的键值之间的冒号后只有一个空格
        'key-spacing': [2, {"mode": "strict"}],
        // 约定以驼峰法命名
        "camelcase": [2, {"properties": "always"}]
    }
}   