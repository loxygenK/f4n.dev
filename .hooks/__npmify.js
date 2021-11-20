"use strict";
const child_process = require("child_process");
const prettify = require("./__prettify");

function executeNpm(command, description) {
  prettify.progress(`Executing ${description} (pnpm ${command})...`);

  const child = child_process.spawnSync("pnpm", ["--silent", command]);

  if(child.status !== 0) {
    prettify.warn(`Something went wrong (exit code: ${child.status})`)
  }
  return child;
}

function validateFailure(process, issueDescription) {
  if(process.status === 0) return false;

  prettify.error(`${issueDescription} issue detected.`);
  prettify.indent(process.stdout.toString().trim());

  return true;
}

function executeLinter(command, description) {
  const tsc = executeNpm(command, description);
  const tscResult = validateFailure(tsc, description);
  console.log("");

  return tscResult;
}

module.exports = {
  executeNpm, validateFailure, executeLinter
};
