const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '311uwr',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
