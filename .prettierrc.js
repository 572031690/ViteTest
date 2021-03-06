module.exports = {
    // 一行最多 100 字符
    printWidth: 160,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 末尾不需要逗号
    trailingComma: "none", // 函数最后不需要逗号
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // 箭头函数，只有一个参数的时候，不需要括号
    arrowParens: "avoid",
    parser: 'typescript'
}