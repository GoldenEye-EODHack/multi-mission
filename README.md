# Multi-Mission for EO Dashboard

## Installation and Usage
The steps below will walk you through setting up your own instance of the project.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v12 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
yarn install
```

#### Starting the app

```
yarn serve
```

#### Deployment Steps on Google Cloud Platform

Create new Ubuntu VM instance, a virtual network and open ports tcp:8080 and tcp:8081 allowing all the http traffic.
upload eodash and mutli-mission app source code on the host.

##### Install pm2 to manage node apps:
```
sudo npm install pm2 -g
```

##### Build & start eodash:
```
cd eodash/app
yarn install
pm2 start yarn --name eodash -- serve
// eodash app should now start on port 8080.
```

##### Build & Run multi-mission app:
```
cd mutli-mission
yarn install
pm2 start yarn --name multi-mission -- serve
// multi-mission should now start on port 8081.
```

##### Troubleshooting via pm2:
```
pm2 ps   // to check the running app's process.
pm2 logs // to view the logs
pm2 delete <id> // to stop a running app
```
