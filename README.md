# react-native

Node verison: 17.0.1

React native verison: 0.66.3

brew install node
brew install watchman

## Install node dependencies:

`npm install` or `yarn install`

## Install ios dependencies:

`cd ios && pod install && cd ..`

`yarn ios`

---

## Mock API and Local server:

1. `cd FakeServer`
2. `bundle install`
3. `yarn rake` - It will start the mock server

## Environment: As of now: dev and fake

DEV : `node scripts/setup-environment.js dev` or `yarn env:dev`
FAKE : `node scripts/setup-environment.js qa` or `yarn env:fake`

## Run unit test

yarn jest
