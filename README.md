# ESlint Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/@1f8/eslint-config-react)
[Github](https://github.com/1f8/eslint-react-js)

### Instructions

```bash
# Gatsby
yarn add -D @1f8/eslint-config-react
cp node_modules/@1f8/eslint-config-react/.eslintignore .eslintignore

# React
cp node_modules/@1f8/eslint-config-react/.eslintignore .eslintignore
npx install-peerdeps -D @1f8/eslint-config-react
touch .eslintrc
```

```json
/** .eslintrc */
{
  "extends": ["@1f8/eslint-config-react"]
}
```

### Debug

* If you have any typescript files that isn't being ignored, an error will be thrown if you dont have a typescript linter
