# azure-nodejs-demo

[![Build Status](https://dev.azure.com/julie-msft/Public%20Demos/_apis/build/status/julie-ng.azure-nodejs-demo?branchName=master)](https://dev.azure.com/julie-msft/Public%20Demos/_build/latest?definitionId=5&branchName=master)

A multipurpose dummy node.js app for cloud architecture demos

[https://nodejs-demo.onazure.io/](https://nodejs-demo.onazure.io/)

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