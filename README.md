# azure-nodejs-demo

[![Build Status](https://dev.azure.com/julie-msft/Public%20Demos/_apis/build/status/julie-ng.azure-nodejs-demo?branchName=master)](https://dev.azure.com/julie-msft/Public%20Demos/_build/latest?definitionId=5&branchName=master)

Containerized Node.js Demo App for Azure incl. CI/CD pipeline

## CI/CD Triggers

| Environment | git branch | URL |
|:--|:--|:--|
| Dev | `master` | [nodejs-demo-dev.onazure.io](https://nodejs-demo-dev.onazure.io/) |
| Production | `release` | [nodejs-demo.onazure.io](https://nodejs-demo.onazure.io/) |

## Preview

![Preview: v0.5.0](./assets/images/preview-v0.5.0.png)

## Endpoints

| Method | Path | Description |
|:--|:--|:--|
| GET | `/` | root |
| GET | `/health` | health check endpoint |
| POST | `/webhooks/test` | accepts JSON and logs output |

## Features

### Azure 

- [Azure DevOps Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/)
- [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) Integration as middleware [&rarr;](https://github.com/julie-ng/azure-nodejs-demo/blob/master/app/middleware/monitor.js)


### Node.js

- [Handlebars Templates](http://handlebarsjs.com/)
- Force https middleware
- Webhook Path