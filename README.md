# Serverless Boilerplate - Node.js & Typescript

This is a boilerplate for a serverless project using Node.js and Typescript.

## Features

- **Typescript**: Write your code in Typescript.
- **Serverless Framework**: Deploy your functions to AWS or locally.
- **Localstack**: Develop locally using Localstack.

## Usage

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Docker](https://docs.docker.com/get-docker/) (local development)

### Installation

Clone the repository and install the dependencies.

```
yarn install
```

### Local development

Before you start, make sure you have Docker running on your machine. Then you need to deploy your service so all your resources are created locally.

```bash
yarn deploy:local
```

After that you can run your function locally using serverless-offline plugin

```bash
yarn start
```

**Deploy**

Deploy to AWS using the following command.

```
$ yarn sls deploy
```

> You can set the stage using the flag `--stage ${stage name}`
