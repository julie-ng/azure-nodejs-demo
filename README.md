# azure-nodejs-demo

[![Build Status](https://dev.azure.com/julie-msft/public-demos/_apis/build/status/azure-nodejs-demo?branchName=main)](https://dev.azure.com/julie-msft/public-demos/_build/latest?definitionId=5&branchName=main)

Containerized Node.js Demo App for Azure App Service. 

| Environment | git branch | Website URL | CDN Endpoint |
|:--|:--|:--|:--|
| Development | `main` | [nodejs-demo-dev.onazure.io](https://nodejs-demo-dev.onazure.io/) | [nodejsdemo-dev.azureedge.net](https://nodejsdemo-dev.azureedge.net/css/styles.css) |
| Production | `production` | [nodejs-demo.onazure.io](https://nodejs-demo.onazure.io/) | [nodejsdemo-prod.azureedge.net](https://nodejsdemo-prod.azureedge.net/css/styles.css) |


## Architecture 

This demo leverages the [Static Content Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting) in Cloud Architecture.

The images and CSS can be served from app itself or pulled from external host, e.g. CDN via `ASSETS_BASE_URL` environment variable.

<img src="./azure-architecture.svg" alt="Demo Architecture" width="550">

## Real-World CI/CD Pipelines 

In real life you have more than one environment.

- **Azure Pipelines Best Practices** 
  - CI pipeline for feature branches and `main`
  - Deploy when pushing to `main` or `production` branches
  - See [./azure-pipelines](./azure-pipelines) for working pipelines and details

- **Asset Pipeline**  
	The included cd.yaml pipeline shows how to upload assets to Blob Storage and purge the Azure CDN cache as part of your deployment process.

- **CI/CD & Versioning**  
  Example versioning and promotion strategies leveraging git commit messages, git tags and `package.json`.

## Azure Demo

- **Azure PaaS**  
  This app is hosted on [Web App for Containers](https://azure.microsoft.com/en-us/services/app-service/containers/)

- **Azure App Insights integration**  
  Using [appinsights npm package](https://www.npmjs.com/package/applicationinsights) and Express.js middleware with just a few lines of code. See [monitor.js](./app/middleware/monitor.js)


## Endpoints

| Method | Path | Description |
|:--|:--|:--|
| GET | `/` | root |
| GET | `/health` | health check endpoint |
| POST | `/webhooks/test` | accepts JSON and logs output |

### Healthcheck

This is an example healthcheck endpoint with standardized JSON per draft [IETF standard](https://tools.ietf.org/html/draft-inadarei-api-health-check-04)

```json
{
	"status": "pass",
	"version": "0.7.1",
	"details": {
		"uptime": {
			"component_type": "system",
			"observed_value": 24208698,
			"human_readable": "0 days, 6 hours, 43 minutes, 28 seconds",
			"observed_unit": "ms",
			"status": "pass",
			"time": "2021-04-12T11:45:32.508Z"
		},
		"env": {
			"WEBSITE_HOSTNAME": "azure-nodejs-demo-dev.azurewebsites.net",
			"WEBSITE_INSTANCE_ID": "03e7481d3d5ff1e67e297f158abd943ce8c8b920fa55dc7bf0565e86886404a8",
			"ASSETS_BASE_URL": "https://nodejsdemo-dev.azureedge.net"
		}
	}
}
```
