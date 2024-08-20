const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'skp6fh',
  e2e: {
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
