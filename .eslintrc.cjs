/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    '@antfu',
  ],
  overrides: [
    {
      files: ['*.cjs', '*.mjs', '*.js', '*.ts', '*.vue'],
      rules: {
        'no-console': ['off'],
      },
    },
  ],
}
