const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function miErrorpersonalizado() {
throw new Error("Este es mi mensaje personalizado")
}

try {
    miErrorpersonalizado()
} catch (error) {
    logger.log("error", error.toString());
}finally{
    console.log("Hemos terminado")
}

try {
    fmiErrorpersonalizado()
} catch (error) {
    logger.log("error", error.toString());
}finally{
    console.log("Hemos terminado")
}