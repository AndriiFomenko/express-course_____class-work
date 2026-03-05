import chalk from 'chalk'
import * as util from 'node:util'

export const log = (...args) => {
  const color = args.pop()

  if (typeof chalk[color] !== 'function') {
    console.error(`Color '${color}' is not supported by chalk`)
    return
  }

  args.forEach((arg) => {
    if (arg === undefined) {
      console.log(chalk[color]('undefined'))
      return
    }

    if (typeof arg === 'string') {
      console.log(chalk[color](arg))
      return
    }

    console.log(chalk[color](util.inspect(arg, { depth: null, colors: true })))
  })
}

export const logColored = (...args) => {
  const colorfulArgument = args[0]
  const color = args[1]
  const simpleArgument = args[2]

  if (typeof chalk[color] !== 'function') {
    console.error(`Color '${color}' is not supported by chalk`)
    return
  }

  if (simpleArgument === undefined) {
    return console.log(chalk[color](colorfulArgument))
  }

  console.log(chalk[color](colorfulArgument), simpleArgument)
}


/*
 ! Colors
 black
 red
 green
 yellow
 blue
 magenta
 cyan
 white
 blackBright (alias: gray, grey)
 redBright
 greenBright
 yellowBright
 blueBright
 magentaBright
 cyanBright
 whiteBright

 ! Background colors
 bgBlack
 bgRed
 bgGreen
 bgYellow
 bgBlue
 bgMagenta
 bgCyan
 bgWhite
 bgBlackBright (alias: bgGray, bgGrey)
 bgRedBright
 bgGreenBright
 bgYellowBright
 bgBlueBright
 bgMagentaBright
 bgCyanBright
 bgWhiteBright
*/
