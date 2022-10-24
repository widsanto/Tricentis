/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require("path");
const fs = require("fs-extra");
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

function getConfigurationByFile(file) {
  // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(["tsify"]);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

  on("file:preprocessor", cucumber(options));
  const file = config.env.configFile || "hml";
  return getConfigurationByFile(file);
};
