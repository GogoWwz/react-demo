module.exports = {
    defaultServerity: "warning",
    rules: {
        // 禁止使用important
        "declaration-no-important": true,
        // 选择器后的大括号前必须有一个空格
        "block-opening-brace-space-before": "always",
        // url需要加引号
        "function-url-quotes": "always",
        // 禁止空块
        "block-no-empty": true,
        // 取消小于1的小数的前导0
        "number-leading-zero": "never",
        // 禁止小数后的尾随0
        "number-no-trailing-zeros": true,
        // 函数逗号之后必须跟空格
        "function-comma-space-after": "always",
        // 函数逗号前不能加空格
        "function-comma-space-before": "never",
        // 声明的冒号后必须跟空格
        "declaration-colon-space-after": "always",
        // 声明的冒号前禁止空格
        "declaration-colon-space-before": "never",
        // 规定css类名格式(此处为短横线命名法，例如：.m-title)
        "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"
    }
}