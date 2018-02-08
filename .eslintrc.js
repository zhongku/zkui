module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  globals: {'expect': true, 'it': true, 'describe': true, 'ga': true, 'window': true, 'document': true, 'alert': true, 'api': true, 'apiready': true},
  env: {
    browser: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
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
    'eol-last': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
