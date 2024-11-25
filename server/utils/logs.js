const term = require('terminal-kit').terminal;

exports.logSucess = (Message) => {
  term.green.bold(Message);
}

exports.logError = (Error) => {
  term.red.bold(Error);
}

exports.logWarning = (Warning) => {
  term.yellow.bold(Warning);
}

exports.logInfo = (Info) => {
  term.cyan.bold(Info);
}
