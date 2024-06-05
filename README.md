# Serverless Boilerplate - Node.js & Typescript

![Branches](https://raw.githubusercontent.com/mauroccvieira/serverless-boilerplate/badges/badges/coverage-branches.svg)
![Functions](https://raw.githubusercontent.com/mauroccvieira/serverless-boilerplate/badges/badges/coverage-functions.svg)
![Lines](https://raw.githubusercontent.com/mauroccvieira/serverless-boilerplate/badges/badges/coverage-lines.svg)
![Statements](https://raw.githubusercontent.com/mauroccvieira/serverless-boilerplate/badges/badges/coverage-statements.svg)
![Coverage total](https://raw.githubusercontent.com/mauroccvieira/serverless-boilerplate/badges/badges/coverage-total.svg)

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
