"use strict";

function colored(message, colorCode, bold = false) {
  const escapeSeq = `\u001b[38;5;${colorCode}${bold ? ";1" : ""}m`;
  return `${escapeSeq}${message}\u001b[m`;
}

function error(message) {
  console.log(`==> ${colored(message, 1, true)}`);
}

function warn(message) {
  console.log(`==> ${colored(message, 3, true)}`);
}

function progress(message) {
  console.log(`${colored("===", 240)} ${colored(message, 15, true)}`);
}

function indent(message) {
  const lines = message.split("\n");

  for(let line of lines.values()) {
    console.log(`${colored("    |", 240)} ${line}`);
  }
}

module.exports = {
  error, warn, progress, indent
}
