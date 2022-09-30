# Cypress end to end Automation 

Currently the project works with **NODEJS 10 LTS** environment. Please make sure you MAC/PC has a 10.x node version installed. (https://nodejs.org/dist/latest-v10.x/). You can also try NODEJS 12 LTS as an experiment but support has not been verified. 

Run ```node -v``` in a terminal to see which version of NodeJS you have

# App specs

Welcome to demo.realworld web application. Our app is the clone of Medium web application, where you post stories and see the stories feed

The application is in this repository in the `cypress` folder.

So, what you should expect when using this app are the following:

## Main features

* User should be able to sign up
* User should be able to sign in/sign out
* User should be able to post articles with all the inputs mentioned
* User should be able to comment on any articles, favorite it


### Additional flows
* Filter global feed based on tags, upon filter post that select any article and do activity related to the articles (comment, favorite, edit, follow authors)

## Requirements
* **NodeJS 10**
* Chrome browser
* Tested on Mac OS X

## Installation

```
npm install 
```

## Run

Navigate to `https://demo.realworld.io/#/` to launch application in browser
 

## Running end-to-end tests

* Run `npx cypress open` to launch cypress test runner
* Select E2E Testing
* Click on "Start e2e testing in Chrome" 
* Click on `e2e_flow.spec.ts` to execute the end-to-end tests via [Cypress].


## Report

* Access path `../Assignment/cypress/videos/e2e_flow.spec.ts.mp4` for execution video and screenshots for report dashboard.
