// cortamos todo el modulo de winston y lo llevamos a una carpeta superior logger
// IMPORTAMOS EL LOGGER
const logger = require("./logger") // carperta donde tenemos el modulo winston -> /logger/index.js

// logger.log("Mensaje log") EL LOG NO ESTA DENTRO DE WINSTON
logger.info("Mensaje info")
logger.warn("Mensaje warm")
logger.debug("Mensaje debug")
logger.error("Mensaje error")