# Pipelines Overview

## ⚡️ Triggers and 🚀 Deployment

| Pipeline | Branch Triggers | Pull Request Triggers | Deployment |
|:--|:--|:--|:--|
| [`ci.yaml`](./ci.yaml) | &bull; `main`<br>&bull; `feat/*`<br>&bull; `fix/*` | `main` | - |
| [`cd.yaml`](./cd.yaml) | &bull; `main`<br>&bull; `production`  | - |  Yes |

## 🐳 Docker Image Lifecycle

| Pipeline | Triggers | Docker | Image Tag | 
|:--|:--|:--|:--|
| `ci.yaml` | `main` branch | Push | `dev` | 
| `ci.yaml` | `v*` tag | Push | `v*` | 
| `cd.yaml` | `main` branch | Pull | `dev` |
| `cd.yaml` | `production` branch | Pull | Version per `package.json` |

## Learnings

_These opinions are my own_

- **Inconsistent Variable Scopes 🥴**
  - Built-In Tasks
		The built-in `Docker@2` task could not understand my service connection name unless I _hardcoded_ ([build #1244](https://dev.azure.com/julie-msft/public-demos/_build/results?buildId=1244&view=results)) it as a string OR put the variable in _global_ scope ([build #1247](https://dev.azure.com/julie-msft/public-demos/_build/results?buildId=1247&view=results)) 🙄  
  - Variable Templates
		When I included `vars-dev` at the global scope, those values were empty. Putting them in the `stage` scope works. 🤷‍♀️

- **Built-In Docker@2 task cannot push?**   
  Well it cannot _just_ push. It wants to do a build and push. Maybe it does work but after much debugging, I find it easier to just use the docker CLI as tagging is much more straightforward, e.g. `myregistry.azurecr.io/myapp:dev` instead of sending bits and pieces and having it not work.

- **Azure Pipelines ignores empty commits** 🙄  
	See example [e4189fb](https://github.com/julie-ng/azure-nodejs-demo/commit/e4189fbe20147d31dddcc9a00fcdb692efe8e6db), which are commonly used to re-trigger pipelines and deployments. As a consequence, you would either need to commit useless code or manually trigger a build in the Azure DevOps UI 