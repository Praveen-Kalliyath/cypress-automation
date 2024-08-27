const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'cypress/screenshots',
    supportFile: 'cypress/e2e/learnFast/support',
    video: false,
    videoCompression: 32,
    videoUploadOnPasses: false,
    videosFolder: 'cypress/videos',
    // baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    specPattern: ['cypress//**/*.{feature,features}'],
    setupNodeEvents,
  },
});