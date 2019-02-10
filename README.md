[![Build Status](https://travis-ci.org/leolgrn/GiphyPWA.svg?branch=master)](https://travis-ci.org/leolgrn/GiphyPWA)

# Gifffle

Gifffle is a PWA app which gets gifs from Giphy API and displays them.

## Installation (local/prod)

```sh
yarn
```

## Run (local/prod)

```sh
yarn start # with 404 middleware
```

## Development (local)

```sh
yarn serve # with hot reload
```

## Run tests (test)

### End-to-end

```sh
# Local (Cypress app version)
yarn start # launch app in terminal 1
yarn e2e # test app in terminal 2

# CI (CLI version)
yarn e2e-ci

# Warning when using CLI version!
# Background process need to be killed manually :
sudo lsof -i tcp:5000
kill -9 PID
```

### Linter

```sh
yarn lint
```

### Fix linter errors

```sh
yarn cs-fix
```
