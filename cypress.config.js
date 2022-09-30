const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dgxiz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**spec.ts',
    defaultCommandTimeout: 10000
  },
});
