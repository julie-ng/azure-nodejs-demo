# Opinionated CI/CD Pipelines

The pipelines in this repository follow opinionated best practices. They are documented here for reference and easier debugging. 

## File Structure

The main pipelines sit in this `azure-pipelines` directory and use subfolders for templating.

```
├── README.md
├── production.yaml
├── dev.yaml
├── jobs
│   ├── app-service.yaml
│   ├── asset-pipeline.yaml
│   ├── docker.yaml
│   └── tests.yaml
├── steps
│   └── debug-vars.yaml
└── vars
    ├── dev.yaml
    ├── global.yaml
    └── prod.yaml
```

## Templates and Variables

### Local Templates 

The jobs and steps are intended for local use only and thus do not require `parameters:` definitions at each job scope. Therefore any varable referenced in a job, e.g. `variables.isProduction` can be found at a higher scope. 

### Global Variables

Due to the sheer amount of variables set, the conditionals and global defaults are set in `vars/global.yaml`.

```yaml
# Global scope
trigger:
  - main
variables:
  - template: vars/global.yaml
```

### Environment Specific Variables

_**Note**: this is no longer used since switching to environment specific pipelines, but kept here for reference._

Some parameters, e.g. app name are dependent on the deployment target environment. Using conditionals at `stages:` scope, the defaults are overwritten.

```yaml
- stage: StageName
  variables:
  - ${{ if eq(variables.isMain, 'True') }}:
    - template: vars/dev.yaml
  - ${{ if eq(variables.isProduction, 'True') }}:
    - template: vars/prod.yaml
```

_Important: Environment specific variables must be set in a non-root, e.g. downstream scope._

## Triggers and Deployments

Please also see [Docker Images](#docker-images) section, which describes the git tag trigger.

| Pipeline | Branch Triggers | Pull Request Triggers | Deployment |
|:--|:--|:--|:--|
| [`dev.yaml`](./dev.yaml) | &bull; `main`<br>&bull; `feat/*`<br>&bull; `fix/*` | `main` | Dev |
| [`production.yaml`](./production.yaml) | &bull; `production`  | (none) |  Production |

### Zero Trust Principle

Pull Requests only runs tests and does not build any images. The YAML pedanticly excludes forks, pull requests and scheduled runs. In this manner only `git merge` events, which requires human intervention will trigger deployments. This is configured using branch production configurations.

See [`vars/global.yaml`](./vars/global.yaml) for details:

```yaml
# Excerpt
variables:
  isFork:       ${{ eq(variables['System.PullRequest.IsFork'], 'True') }}
  isPR:         ${{ eq(variables['Build.Reason'], 'PullRequest') }}
  isScheduled:  ${{ eq(variables['Build.Reason'], 'Schedule') }}
  isTrustedCI:  ${{ and( eq(variables.isFork,'False'), eq(variables.isPR,'False'), eq(variables.isScheduled,'False') ) }}
```

# Docker Images 

### Tag Definitions

- **Image Tag**  
  Refers to version of particular image, e.g. `0.1.0` or `latest`

- **Docker Tag**  
  Refers to full image name that includes private registry hostname, for example:  
  `nodejsdemo.azurecr.io/azure-nodejs-demo:0.1.0`

### Build Triggers & Tags

- Docker Images are only built in the `dev.yaml` CI pipeline.
- Production-ready images are [locked](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-image-lock) (Azure Container Registry specific feature) and thus immutable.

| Triggers | Image Tag | Immutable |
|:--|:--|:--|
| `main` branch | `dev-$(git rev-parse --short HEAD)` | - |
| `v*` tag | e.g. `0.1.0` | True |

### Deployment

Deployment pipeline only deploys existing images, which have passed previous stages and are thus assumed valid and secure.

| Branch | Image Tag | 
|:--|:--|
| `main` | `dev` |
| `production` | Version per `package.json` |
