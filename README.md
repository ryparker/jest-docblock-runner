# jest-docblock-runner

![Lint-Build-Test-Publish](https://github.com/ryparker/jest-allure-runner/workflows/Lint-Build-Test-Publish/badge.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Run Jest tests by docBlock pragmas like those used in [jest-circus-allure-environment](https://github.com/ryparker/jest-circus-allure-environment)

__**Note**: This is currently under development.__

## TODO:

- [ ] Get [this Jest PR](https://github.com/facebook/jest/pull/10294) merged or work with the Jest team to implement another solution that resolves [this issue](https://github.com/facebook/jest/issues/10288).
- [ ] Add code coverage and more tests.
- [ ] Add documentation to [Jest-Circus-Allure-Environment](https://github.com/ryparker/jest-circus-allure-environment).

## Quick start

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
