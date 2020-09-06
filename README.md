# ESlint Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/eslint-config-1f8react)

### Instructions

```
yarn add -D @1f8/eslint-config-react
.touch .eslintrc

# if not using Gatsby, you'll need to add peerdeps (probably)
npx install-peerdeps --dev eslint-config-1f8react
```

```
# .eslintrc (Gatsby)
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    '@1f8/eslint-config-react'
  ]
}
```
