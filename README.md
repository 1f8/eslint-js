# ESlint Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/@1f8/eslint-config-react)
[Github](https://github.com/1f8/eslint-react-js)

### Instructions

```
yarn add -D @1f8/eslint-config-react
touch .eslintrc
cp node_modules/@1f8/eslint-config-react/.eslintignore .eslintignore
cp node_modules/@1f8/eslint-config-react/gatsby.eslintrc.js .eslintrc.js

# if not using Gatsby, you'll need to add peerdeps (probably)
npx install-peerdeps --dev eslint-config-1f8react
```

### Debug

* If you have any typescript files that isn't being ignored, an error will be thrown if you dont have a typescript linter
