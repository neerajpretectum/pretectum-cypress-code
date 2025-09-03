// cypress.config.js
/*const { defineConfig } = require('cypress');
require('dotenv').config(); // Load environment variables from .env file

module.exports = defineConfig({
  projectId: 'skp6fh',
  e2e: {
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // Load environment variables from .env file into Cypress config
      config.env.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
      config.env.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
      config.env.OPEN_AI_API_KEY= process.env.OPEN_AI_API_KEY;
      config.env.GOOGLE_MAPS_API_KEY=process.env.GOOGLE_MAPS_API_KEY;

      // Return the modified config object
      return config;
    },
  },
});*/

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

