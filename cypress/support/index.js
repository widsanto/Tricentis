// /// <reference types="cypress" />


// const cucumber = require('cypress-cucumber-preprocessor').default

// const fs = require('fs-extra')
// const path = require('path')

// function getConfigurationByFile(file) {
//   // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
//   const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

//   return fs.readJson(pathToConfigFile)
// }

// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber())
//   // aceita um valor de "configFile" ou usa "hml" por padrão
//   const file = config.env.configFile || 'hml'
//   return getConfigurationByFile(file)
// }

import './commands'

