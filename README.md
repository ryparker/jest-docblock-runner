# jest-docblock-runner

![Lint-Build-Test-Publish](https://github.com/ryparker/jest-allure-runner/workflows/Lint-Build-Test-Publish/badge.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Run Jest tests by docBlock pragmas like those used in [jest-circus-allure-environment](https://github.com/ryparker/jest-circus-allure-environment)

**🚧 This is currently under development. 🚧**

## ➕ Jest patches

This project is contingent on [code changes to be approved and merged](https://github.com/facebook/jest/pull/10294) into the Jest project. For now I've implemented a workaround that applies [patches](./patches) to the Jest dependencies using [patch-package](https://github.com/ds300/patch-package). This should happen automatically after installing the dependencies with `yarn install` /`npm install`.

If for some reason the patches were not applied automatically you can apply them by running:
```shell
yarn run postinstall
```

## 🚀 Quick start

1. Add dependency to project

```shell
yarn add --dev jest-docblock-runner
```

2. Update Jest configuration:

__See Jest documentation for more information.__

```js
// Jest.config.js

{
  ...
  "runner": "jest-docblock-runner"
}
```

3. Add DocBlocks with pragmas to your tests

```js
// example.test.js
test('bank records update, when I withdraw $100 USD', () => {
  /**
   * @severity critical
   */

  ...
})
```

4. Run only the marked tests

```shell
yarn run jest --severity=critical
```

__Note: This will accept comma separated values and/or multiple flags.__

## TODO:

- [ ] Get [this Jest PR](https://github.com/facebook/jest/pull/10294) merged or work with the Jest team to implement another solution that resolves [this issue](https://github.com/facebook/jest/issues/10288).
- [ ] Reach 100% code coverage.
- [ ] Add documentation to [Jest-Circus-Allure-Environment](https://github.com/ryparker/jest-circus-allure-environment).