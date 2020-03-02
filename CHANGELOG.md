# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/julie-ng/azure-nodejs-dummy/compare/v0.3.0...v0.4.0) (2020-03-02)


### Features

* **pipeline:** use templates ([0d8cfd1](https://github.com/julie-ng/azure-nodejs-dummy/commit/0d8cfd115ec37122c591fa50b7cb67bdfc22ecf8))


### Bug Fixes

* **pipeline:** need to use release tag when deploying ([0b2cd9b](https://github.com/julie-ng/azure-nodejs-dummy/commit/0b2cd9b023cc9b9655a0f8f2a018f0515849f300))

## [0.3.0](https://github.com/julie-ng/azure-nodejs-dummy/compare/v0.2.1...v0.3.0) (2020-02-25)


### Features

* **health:** use snakecase ([43b7a6b](https://github.com/julie-ng/azure-nodejs-dummy/commit/43b7a6bcf44b8b6345c00710066cb6c1c2f81e86))
* **healthcheck:** use standard-healthcheck pkg ([d36c8c2](https://github.com/julie-ng/azure-nodejs-dummy/commit/d36c8c22e53f22fc8b2e9813501bbdd72c47a9b4))
* **pipeline:** use azure-devops variable groups ([954ac50](https://github.com/julie-ng/azure-nodejs-dummy/commit/954ac506d1d82344d21abca766515638c7a8c54b))
* **release:** add npm script to get my project version from package.json ([b12d071](https://github.com/julie-ng/azure-nodejs-dummy/commit/b12d071c784f6d315a67d5146a45ece1b824f50d))
* **release-pipeline:** adjust docker image tags, lock image for release branch ([c4812c5](https://github.com/julie-ng/azure-nodejs-dummy/commit/c4812c5c8d559a5631c9ce000da2663ae224c060))


### Bug Fixes

* **pipeline:** include registry so app service pulls from ACR not Docker Hub ([4e4bf67](https://github.com/julie-ng/azure-nodejs-dummy/commit/4e4bf6708f765ef5bd1f49e83dec33bd1677decc))
* **release-pipeline:** npm script name ([935c098](https://github.com/julie-ng/azure-nodejs-dummy/commit/935c09841d06db985fa4664e9a77357aab79c4ad))

<a name="0.2.1"></a>
## [0.2.1](https://github.com/julie-ng/azure-nodejs-dummy/compare/v0.2.0...v0.2.1) (2019-10-19)


### Bug Fixes

* **pipelines:** use global image tag so deploy job also has value ([4fa42bc](https://github.com/julie-ng/azure-nodejs-dummy/commit/4fa42bc))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/julie-ng/azure-nodejs-dummy/compare/v0.1.0...v0.2.0) (2019-10-19)


### Features

* **pipeline:** add registry namespace, clean up variables ([9f6081f](https://github.com/julie-ng/azure-nodejs-dummy/commit/9f6081f))



<a name="0.1.0"></a>
# 0.1.0 (2019-09-22)


### Bug Fixes

* **pipeline:** image tag for deployment ([04c3f9d](https://github.com/julie-ng/azure-nodejs-dummy/commit/04c3f9d))


### Features

* **handlebars:** add templating, homepage content ([5a79585](https://github.com/julie-ng/azure-nodejs-dummy/commit/5a79585))
* **middleware:** create subdir, force https ([ed13db7](https://github.com/julie-ng/azure-nodejs-dummy/commit/ed13db7))
* **monitoring:** add appication insights ([84c40f5](https://github.com/julie-ng/azure-nodejs-dummy/commit/84c40f5))
* **pipeline:** continue if audit fails ([64d1734](https://github.com/julie-ng/azure-nodejs-dummy/commit/64d1734))
* **pipeline:** improve display names ([77fb213](https://github.com/julie-ng/azure-nodejs-dummy/commit/77fb213))
* **pipeline:** use newer docker tasks ([b3eb65f](https://github.com/julie-ng/azure-nodejs-dummy/commit/b3eb65f))
* **webhook:** add test path ([77718f3](https://github.com/julie-ng/azure-nodejs-dummy/commit/77718f3))
* **webhook:** log payload ([c748b77](https://github.com/julie-ng/azure-nodejs-dummy/commit/c748b77))
