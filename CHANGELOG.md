# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.11.2](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.11.1...v0.11.2) (2022-09-22)


### Features

* **devops:** rebuild prod docker image weekly ([21b0fcb](https://github.com/julie-ng/azure-nodejs-demo/commit/21b0fcb64460600832577f335362205850f9ef08))


### Bug Fixes

* **deps:** update ([86bf96d](https://github.com/julie-ng/azure-nodejs-demo/commit/86bf96d5d917f4a10b8630fd79dc9b4823448e3c))

### [0.11.1](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.11.0...v0.11.1) (2022-07-13)


### Bug Fixes

* **css-url:** use package json version without v- ([3b51a28](https://github.com/julie-ng/azure-nodejs-demo/commit/3b51a282b57899d640c91dd6e65195a4e3920500))

## [0.11.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.10.1...v0.11.0) (2022-07-12)


### Features

* adjust title ([e85d635](https://github.com/julie-ng/azure-nodejs-demo/commit/e85d6359bfb2b637aeb505ab8b1257fddb475c5a))

### [0.10.1](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.10.0...v0.10.1) (2022-07-12)


### Bug Fixes

* **pipelines:** add missing app service settings, fix CDN path ([325fcad](https://github.com/julie-ng/azure-nodejs-demo/commit/325fcad513d562a5ac3cec85ada6549be5a335bd))

## [0.10.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.9.0...v0.10.0) (2022-06-28)


### Features

* use node v16 ([8ea8211](https://github.com/julie-ng/azure-nodejs-demo/commit/8ea8211a6a143c67bcdfd22231abb5e423cf2322))
* **dockerfile:** update for node.js container best practices ([58628b0](https://github.com/julie-ng/azure-nodejs-demo/commit/58628b002834518d5e2e9bfa5c19fede9f024dfe))


### Bug Fixes

* **footer:** pipeline results URL ([ec5c5aa](https://github.com/julie-ng/azure-nodejs-demo/commit/ec5c5aab0afdefe94930814915d585e81d3faa22))
* **view:** use NODE_ENV for local dev, not package.json version ([96d2d1d](https://github.com/julie-ng/azure-nodejs-demo/commit/96d2d1d48685d454db697c8ec4d572fb6a2d837f))

## [0.9.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.8.0...v0.9.0) (2022-05-03)


### Features

* **ci:** lint filenames for mixed case ([6b4c105](https://github.com/julie-ng/azure-nodejs-demo/commit/6b4c105a789864e05d7fab0c21d2300559a2e64b))
* **pipelines:** add git sha tags for dev images ([37a3fa1](https://github.com/julie-ng/azure-nodejs-demo/commit/37a3fa1c7ff5675eacd333e91034ab9a83626daa))
* **pipelines:** batch changes to limit pipeline runs ([#6](https://github.com/julie-ng/azure-nodejs-demo/issues/6)) ([58ea5ec](https://github.com/julie-ng/azure-nodejs-demo/commit/58ea5ec92b154cd51ff7e3d102e1602613e24265))
* **pipelines:** refactor, leverage templates ([7b5e4c0](https://github.com/julie-ng/azure-nodejs-demo/commit/7b5e4c0f89db29c11bfc815417f8f9f323a8bebc))
* **pipelines:** remove unneeded conditionals for envs ([58a3f7b](https://github.com/julie-ng/azure-nodejs-demo/commit/58a3f7b4cb5c8aa0d32e0c52a2e2a6e94fd5a20f))
* **pipelines:** rename to dev and production yamls ([29471af](https://github.com/julie-ng/azure-nodejs-demo/commit/29471af18c87e508a255f1b64359572e26350f87))


### Bug Fixes

* **deps:** bump to fix security issues ([52d65e4](https://github.com/julie-ng/azure-nodejs-demo/commit/52d65e49efbee8bffc76326369e9d0e1d1164894))
* package.json & package-lock.json to reduce vulnerabilities ([fe52594](https://github.com/julie-ng/azure-nodejs-demo/commit/fe52594b4b7504f9ebf5da3f7a4671ad852820c8))

## [0.8.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.7.1...v0.8.0) (2021-04-12)


### Features

* **pipeline:** refactored into separate files, templates ([fd23811](https://github.com/julie-ng/azure-nodejs-demo/commit/fd23811e35e946ab600d95c99c61ffb80464f2a3))


### Bug Fixes

* **app-insights:** only load and setup once ([14cac41](https://github.com/julie-ng/azure-nodejs-demo/commit/14cac41314e425c9e3963f872092f98011ca2e72))

### [0.7.1](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.7.0...v0.7.1) (2021-04-09)


### Bug Fixes

* **healthcheck:** bump dep for proper uptime calculation ([441010b](https://github.com/julie-ng/azure-nodejs-demo/commit/441010b7c8af659f6478418e5961fc90aa7a9293))
* package.json & package-lock.json to reduce vulnerabilities ([0125b79](https://github.com/julie-ng/azure-nodejs-demo/commit/0125b7931ab4f786f05fbc0bd184c597cf4fdb4d))

## [0.7.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.6.0...v0.7.0) (2020-09-09)


### Features

* **azure-pipelines:** add snyk container security scan ci build step ([82f8bb4](https://github.com/julie-ng/azure-nodejs-demo/commit/82f8bb49163979acbff8aea8982af317975f9ea1))
* **security:** update node docker base image for vulnerability fixes ([599c961](https://github.com/julie-ng/azure-nodejs-demo/commit/599c961cdcbd417a942e4e46c78095cdc57ea4a2))


### Bug Fixes

* **azure-pipelines:** do not deploy if tests stage fails ([a398ca2](https://github.com/julie-ng/azure-nodejs-demo/commit/a398ca20a667546efb29714e3ea8b90fcac56f98))

## [0.6.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.5.0...v0.6.0) (2020-06-14)


### Features

* rename base branch from master to main ([222689f](https://github.com/julie-ng/azure-nodejs-demo/commit/222689f0afa191abfcbf842247e0267abd5b7189))
* update badge urls after project rename ([5e6f085](https://github.com/julie-ng/azure-nodejs-demo/commit/5e6f0852149b19233080574d50c711f32675b805))

## [0.5.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.4.1...v0.5.0) (2020-05-24)


### Features

* **pipeline:** add purge cdn step after upload ([6a482d9](https://github.com/julie-ng/azure-nodejs-demo/commit/6a482d9a771258ef8abd9ef3821294a824766689))
* **pipeline:** refactor, removing job complexity, simplify setting prod values ([fad72ad](https://github.com/julie-ng/azure-nodejs-demo/commit/fad72adfb0cb948c658a17f759da82f6ea86b413))
* externalize images and sass to own asset pipeline to azure blob storage ([a8e2559](https://github.com/julie-ng/azure-nodejs-demo/commit/a8e2559001d50d2e1d3cd34cef2d37646e8cc38a))
* re-design, add ci badge, app version, logos ([03b23bc](https://github.com/julie-ng/azure-nodejs-demo/commit/03b23bc03ac556ec4acbf38bc515e09f9da1a9eb))
* **azure-pipelines:** adjust audit level ([2576a3f](https://github.com/julie-ng/azure-nodejs-demo/commit/2576a3f2a0d948aa0892c3118f10513b4898c08f))
* **azure-pipelines:** refactor variables, use lock image template ([66e3768](https://github.com/julie-ng/azure-nodejs-demo/commit/66e3768cd2a36f77bb4c6457392ddcdea5613284))
* **healthcheck:** use version 1.0 of standard-healthcheck ([f22d708](https://github.com/julie-ng/azure-nodejs-demo/commit/f22d7086952f4def5b0cc235582a57d60f13cb45))
* **pipeline:** indicate variable comes from library ([4304c84](https://github.com/julie-ng/azure-nodejs-demo/commit/4304c84959dca6376d199e16b7b7b8bef7294e5c))
* **pipeline:** separate prod and dev dependency audit ([106b2f1](https://github.com/julie-ng/azure-nodejs-demo/commit/106b2f12f9d4c7e570a8e34a0a3343482d01c86f))

### [0.4.1](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.4.0...v0.4.1) (2020-03-02)


### Features

* **pipelines:** lock release images in azure container registry ([8c27622](https://github.com/julie-ng/azure-nodejs-demo/commit/8c276223b8a51cb521f809e406ad54b20a8bb486))


### Bug Fixes

* **pipelines:** service connection variable name ([fd52434](https://github.com/julie-ng/azure-nodejs-demo/commit/fd52434a7e43e812ec417d01c55c4beef8031d76))

## [0.4.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.3.0...v0.4.0) (2020-03-02)


### Features

* **pipeline:** use templates ([0d8cfd1](https://github.com/julie-ng/azure-nodejs-demo/commit/0d8cfd115ec37122c591fa50b7cb67bdfc22ecf8))


### Bug Fixes

* **pipeline:** need to use release tag when deploying ([0b2cd9b](https://github.com/julie-ng/azure-nodejs-demo/commit/0b2cd9b023cc9b9655a0f8f2a018f0515849f300))

## [0.3.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.2.1...v0.3.0) (2020-02-25)


### Features

* **health:** use snakecase ([43b7a6b](https://github.com/julie-ng/azure-nodejs-demo/commit/43b7a6bcf44b8b6345c00710066cb6c1c2f81e86))
* **healthcheck:** use standard-healthcheck pkg ([d36c8c2](https://github.com/julie-ng/azure-nodejs-demo/commit/d36c8c22e53f22fc8b2e9813501bbdd72c47a9b4))
* **pipeline:** use azure-devops variable groups ([954ac50](https://github.com/julie-ng/azure-nodejs-demo/commit/954ac506d1d82344d21abca766515638c7a8c54b))
* **release:** add npm script to get my project version from package.json ([b12d071](https://github.com/julie-ng/azure-nodejs-demo/commit/b12d071c784f6d315a67d5146a45ece1b824f50d))
* **release-pipeline:** adjust docker image tags, lock image for release branch ([c4812c5](https://github.com/julie-ng/azure-nodejs-demo/commit/c4812c5c8d559a5631c9ce000da2663ae224c060))


### Bug Fixes

* **pipeline:** include registry so app service pulls from ACR not Docker Hub ([4e4bf67](https://github.com/julie-ng/azure-nodejs-demo/commit/4e4bf6708f765ef5bd1f49e83dec33bd1677decc))
* **release-pipeline:** npm script name ([935c098](https://github.com/julie-ng/azure-nodejs-demo/commit/935c09841d06db985fa4664e9a77357aab79c4ad))

<a name="0.2.1"></a>
## [0.2.1](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.2.0...v0.2.1) (2019-10-19)


### Bug Fixes

* **pipelines:** use global image tag so deploy job also has value ([4fa42bc](https://github.com/julie-ng/azure-nodejs-demo/commit/4fa42bc))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/julie-ng/azure-nodejs-demo/compare/v0.1.0...v0.2.0) (2019-10-19)


### Features

* **pipeline:** add registry namespace, clean up variables ([9f6081f](https://github.com/julie-ng/azure-nodejs-demo/commit/9f6081f))



<a name="0.1.0"></a>
# 0.1.0 (2019-09-22)


### Bug Fixes

* **pipeline:** image tag for deployment ([04c3f9d](https://github.com/julie-ng/azure-nodejs-demo/commit/04c3f9d))


### Features

* **handlebars:** add templating, homepage content ([5a79585](https://github.com/julie-ng/azure-nodejs-demo/commit/5a79585))
* **middleware:** create subdir, force https ([ed13db7](https://github.com/julie-ng/azure-nodejs-demo/commit/ed13db7))
* **monitoring:** add appication insights ([84c40f5](https://github.com/julie-ng/azure-nodejs-demo/commit/84c40f5))
* **pipeline:** continue if audit fails ([64d1734](https://github.com/julie-ng/azure-nodejs-demo/commit/64d1734))
* **pipeline:** improve display names ([77fb213](https://github.com/julie-ng/azure-nodejs-demo/commit/77fb213))
* **pipeline:** use newer docker tasks ([b3eb65f](https://github.com/julie-ng/azure-nodejs-demo/commit/b3eb65f))
* **webhook:** add test path ([77718f3](https://github.com/julie-ng/azure-nodejs-demo/commit/77718f3))
* **webhook:** log payload ([c748b77](https://github.com/julie-ng/azure-nodejs-demo/commit/c748b77))
