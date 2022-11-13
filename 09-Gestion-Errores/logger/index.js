const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug', // PODEMOS DEFINIR EL LEVEL   error: 0, warn: 1, info: 2,  http: 3, verbose: 4, debug: 5, silly: 6
  // SI PONEMOS LEVEL INFO (LEVEL 2) DEBUG NO SALE YA QUE ESTA EN EL LEVEL 5. SALE ERROR(L0) Y WARM(L1)
  format: winston.format.json(), // define formato. otro podria ser printF
//   defaultMeta: { service: 'user-service' },
  transports: [ // LOS TRANSPORTES SON LAS ACCIONES QUE SE HARAN CUANDO SE EJECUTE UN LOG
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(), // winston.transports.Console() NOS SACA TODOS LOS LOGGER POR PANTALLA
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports =logger; // AGREGAR EXPORTS PARA QUE ESTE DISPONIBLE EN TODO EL PROYECTO
