# Pipelines Overview

## Triggers and Deployments

| Pipeline | Branch Triggers | Pull Request Triggers | Deployment |
|:--|:--|:--|:--|
| [`ci.yaml`](./ci.yaml) | &bull; `main`<br>&bull; `feat/*`<br>&bull; `fix/*` | `main` | Dev |
| [`cd.yaml`](./cd.yaml) | &bull; `production`  | (none) |  Production |

## Docker Image Lifecycle

Docker Images are only built in the CI pipeline and assumed valid and secure when deploying to production.

| Pipeline | Triggers | Docker | Image Tag | 
|:--|:--|:--|:--|
| `ci.yaml` | `main` branch | Push | `dev` | 
| `ci.yaml` | `v*` tag | Push | `v*` | 
| `cd.yaml` | `main` branch | Pull | `dev` |
| `cd.yaml` | `production` branch | Pull | Version per `package.json` so we can deploy beyond pushing git tags|
