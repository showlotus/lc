import { globSync } from "glob"
import chalk from "chalk"

const Log = console.log

const pattern = "./**/*.js"
const files = globSync(pattern, { ignore: "node_modules/**" })

Log(chalk.bgYellow.bold("Total:"), chalk.greenBright(files.length))
