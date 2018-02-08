// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {

    // 0或'off'：关闭规则。
    // 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）。
    // 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
    // 可以使用中文网站来来查看 https://eslint.cn/docs/rules/eqeqeq
    // 对应英文网站            https://eslint.org/docs/rules/eqeqeq


    // 以下规则是允许的

    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 强制在逗号周围使用空格
    'comma-spacing': 0,
    'space-infix-ops': 0,
    'eol-last': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 可以使用tabs
    'no-tabs': 0,
    'no-multiple-empty-lines': 0,
    'indent': 0,
    'space-before-function-paren': 0,
     // 要求或禁止语句块之前的空格
    'space-before-blocks': 0,
    // 强制关键字周围空格的一致性
    'keyword-spacing': 0,
    // 可以使用空格
    'no-trailing-spaces': 0,
    // 禁止出现多个空格
    'no-multi-spaces': 0,
    // 禁止在注释前有空格
    'spaced-comment': 0,
    // 禁止或强制在单行代码块中使用空格
    'block-spacing': 0,
    'quotes': 0,
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs':0,
    // 要求禁止块内填充
    'padded-blocks': 0,
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing' :0,
    'no-useless-return':0,

    // 以下规则是禁止的

    // 要求使用 === 和 !== (eqeqeq)  否则错误
    'eqeqeq': 2,
    // 要求或禁止使用分号代替 ASI (semi)
    'semi': 2,
    'no-labels': 0,
    'space-unary-ops': [0, { "words": true, "nonwords": false }]
  }
}