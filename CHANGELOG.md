# Changelog

## [1.3.3](https://github.com/ryparker/jest-docblock-runner/compare/v1.3.2...v1.3.3) (2020-11-20)


### Bug Fixes

* **package.json:** upgraded deps and updated workflows ([7624bac](https://github.com/ryparker/jest-docblock-runner/commit/7624bac55474d20521b06e0cbd7241170c7127bf))

## [1.3.2](https://github.com/ryparker/jest-docblock-runner/compare/v1.3.1...v1.3.2) (2020-11-18)


### Bug Fixes

* **package.json:** upgraded all deps ([efe0c07](https://github.com/ryparker/jest-docblock-runner/commit/efe0c073ee485782637331f08524c22adb1a3451))

## [1.3.1](https://github.com/ryparker/jest-docblock-runner/compare/v1.3.0...v1.3.1) (2020-11-12)


### Bug Fixes

* **updated patches for jest: 26.6.3, jest-circus: 26.6.3, @types/jest: 26.0.15:** package patches ([225f032](https://github.com/ryparker/jest-docblock-runner/commit/225f03242f496d2380b3c0f3b78b1e10f8121a13))

# [1.3.0](https://github.com/ryparker/jest-docblock-runner/compare/v1.2.0...v1.3.0) (2020-08-27)


### Features

* **updated to latest jest packages:** also setup a dependency resolution that mem must be above v4 ([1b26d2b](https://github.com/ryparker/jest-docblock-runner/commit/1b26d2be033114d470bc37dcce145a1df9aa2c59))

# [1.2.0](https://github.com/ryparker/jest-docblock-runner/compare/v1.1.0...v1.2.0) (2020-07-30)


### Bug Fixes

* **filter:** filter has been fixed and improved see changelog for details ([5efb220](https://github.com/ryparker/jest-docblock-runner/commit/5efb220a6ab5d7cf117972de85a9c2f9e4104aca))
* **filter-by-pragma:** fix for unexpectidly skipping test names with special regexp characters ([1e9aea2](https://github.com/ryparker/jest-docblock-runner/commit/1e9aea2e2da6136aa3d75a5b31355775784e6563))
* **patches:** added patches to package files ([33cf2b2](https://github.com/ryparker/jest-docblock-runner/commit/33cf2b2a6b3a7bb6320073f4352fdcf14a9bd0f4))
* **postinstall script:** using npx in postinstall script ([2ce8bd4](https://github.com/ryparker/jest-docblock-runner/commit/2ce8bd46a5050e64e1622af15fff0d869157c7d1))
* **reverted to using patch-package as postinstall script:** required in order to build TS files ([6a30a81](https://github.com/ryparker/jest-docblock-runner/commit/6a30a81a865d8d1d792b7c25eac27225a8c3134b))
* **runner:** added condition to run all tests if the filter did not detect any matching tests ([8b4ce96](https://github.com/ryparker/jest-docblock-runner/commit/8b4ce96cb416af8e2c93336fa6da515e584cd57e))
* **runner:** added more undefined checks before processing args ([5cc2620](https://github.com/ryparker/jest-docblock-runner/commit/5cc2620a148dd55ab8290fca7f2f54dce9c43382))
* **runner:** added null/undefined check in _extractArgs to avoid splitting an undefined ([364811f](https://github.com/ryparker/jest-docblock-runner/commit/364811f60365444344a4b718b2eb1a62d8f55ca6))
* **testnamepattern regex:** improved testNamePattern regex ([34e8ce9](https://github.com/ryparker/jest-docblock-runner/commit/34e8ce927340f27f22c9fc6f71c92d027b75ad67))
* **updated postinstall script and readme:** changed postinstall script to use CWD ([fb0793f](https://github.com/ryparker/jest-docblock-runner/commit/fb0793f1dc35ce4bf3b2e4a3176d40992ea66a96))
* bumped package version to 0.2.0. To fix git/GitHub history ([4b056c9](https://github.com/ryparker/jest-docblock-runner/commit/4b056c9706222d3c1890c618730ee6cfd9e457c2))


### Features

* **filter improvements:** test.each support and properly removing all docBlock "\t"s ([1b0f7b6](https://github.com/ryparker/jest-docblock-runner/commit/1b0f7b6ac9dfefcaf5bc058ead65339e98981c48))

## [0.2.9](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.8...v0.2.9) (2020-07-23)


### Bug Fixes

* **reverted to using patch-package as postinstall script:** required in order to build TS files ([6a30a81](https://github.com/ryparker/jest-docblock-runner/commit/6a30a81a865d8d1d792b7c25eac27225a8c3134b))
* **updated postinstall script and readme:** changed postinstall script to use CWD ([fb0793f](https://github.com/ryparker/jest-docblock-runner/commit/fb0793f1dc35ce4bf3b2e4a3176d40992ea66a96))

## [0.2.8](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.7...v0.2.8) (2020-07-23)


### Bug Fixes

* **postinstall script:** using npx in postinstall script ([2ce8bd4](https://github.com/ryparker/jest-docblock-runner/commit/2ce8bd46a5050e64e1622af15fff0d869157c7d1))

## [0.2.7](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.6...v0.2.7) (2020-07-23)


### Bug Fixes

* **patches:** added patches to package files ([33cf2b2](https://github.com/ryparker/jest-docblock-runner/commit/33cf2b2a6b3a7bb6320073f4352fdcf14a9bd0f4))

## [0.2.6](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.5...v0.2.6) (2020-07-23)


### Bug Fixes

* **testnamepattern regex:** improved testNamePattern regex ([34e8ce9](https://github.com/ryparker/jest-docblock-runner/commit/34e8ce927340f27f22c9fc6f71c92d027b75ad67))

## [0.2.5](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.4...v0.2.5) (2020-07-23)


### Bug Fixes

* **filter-by-pragma:** fix for unexpectidly skipping test names with special regexp characters ([1e9aea2](https://github.com/ryparker/jest-docblock-runner/commit/1e9aea2e2da6136aa3d75a5b31355775784e6563))

## [0.2.4](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.3...v0.2.4) (2020-07-22)


### Bug Fixes

* **runner:** added condition to run all tests if the filter did not detect any matching tests ([8b4ce96](https://github.com/ryparker/jest-docblock-runner/commit/8b4ce96cb416af8e2c93336fa6da515e584cd57e))

## [0.2.3](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.2...v0.2.3) (2020-07-22)


### Bug Fixes

* **runner:** added more undefined checks before processing args ([5cc2620](https://github.com/ryparker/jest-docblock-runner/commit/5cc2620a148dd55ab8290fca7f2f54dce9c43382))

## [0.2.2](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.1...v0.2.2) (2020-07-22)


### Bug Fixes

* **runner:** added null/undefined check in _extractArgs to avoid splitting an undefined ([364811f](https://github.com/ryparker/jest-docblock-runner/commit/364811f60365444344a4b718b2eb1a62d8f55ca6))

## [0.2.1](https://github.com/ryparker/jest-docblock-runner/compare/v0.2.0...v0.2.1) (2020-07-22)


### Bug Fixes

* **filter:** filter has been fixed and improved see changelog for details ([5efb220](https://github.com/ryparker/jest-docblock-runner/commit/5efb220a6ab5d7cf117972de85a9c2f9e4104aca))

# [0.2.0](https://github.com/ryparker/jest-docblock-runner/compare/v0.1.2...v0.2.0) (2020-07-22)


### Features

* **filter improvements:** test.each support and properly removing all instances of `\t` in docBlocks ([1b0f7b6](https://github.com/ryparker/jest-docblock-runner/commit/1b0f7b6ac9dfefcaf5bc058ead65339e98981c48))

## [0.1.2](https://github.com/ryparker/jest-docblock-runner/compare/v0.1.1...v0.1.2) (2020-07-21)


### Bug Fixes

* bumped package version to 0.2.0. To fix git/GitHub history ([4b056c9](https://github.com/ryparker/jest-docblock-runner/commit/4b056c9706222d3c1890c618730ee6cfd9e457c2))

# [0.1.0](https://github.com/ryparker/jest-docblock-runner/compare/v0.0.0...v0.1.0) (2020-07-21)


### Bug Fixes

* **ci:** fixed semantic-release branch config issue ([3e9569a](https://github.com/ryparker/jest-docblock-runner/commit/3e9569a642cb64bc72a689bfe8f7b5e7f7cddd62))


### Features

* **working implementation:** added support for pragma detection and test case filter in jest runner ([519372a](https://github.com/ryparker/jest-docblock-runner/commit/519372ad731aaeca020ec4659f56d3205e4540da))

# [0.1.1](https://github.com/ryparker/jest-docblock-runner/compare/v1.0.0...v1.1.0) (2020-07-21)


### Bug Fixes

* **ci:** fixed semantic-release branch config issue ([3e9569a](https://github.com/ryparker/jest-docblock-runner/commit/3e9569a642cb64bc72a689bfe8f7b5e7f7cddd62))


### Features

* **working implementation:** added support for pragma detection and test case filter in jest runner ([519372a](https://github.com/ryparker/jest-docblock-runner/commit/519372ad731aaeca020ec4659f56d3205e4540da))

# 0.1.0 (2020-07-19)


### Bug Fixes

* **ci:** added Github Super Linter CI check ([44da919](https://github.com/ryparker/jest-allure-runner/commit/44da9192c9124bfd50e9d7b729b9b2521f814261))
