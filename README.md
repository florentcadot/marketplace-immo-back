# Marketplace immo Back

## Local development

### Database local setup

```bash
$ cd script
$ sh setup.sh
```

Or

with Docker 

```bash
$ docker-compose up
```

### Installation

```bash
$ yarn
```

### Running the app

```bash
# development (watch mode)
$ yarn run start

# production mode
$ yarn run start:prod
```

### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Techno
* NestJS
* Sequelize ORM

## Architecture

Following the common Nestjs approach
