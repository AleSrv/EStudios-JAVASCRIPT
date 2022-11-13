import * as operaciones from "./modulos/controller.js"
import chalk from 'chalk';
const ver = console.log

const sum = operaciones.suma
const multi = operaciones.multiplica

ver(sum(1,2))
ver(chalk.green(sum(4,5)))

