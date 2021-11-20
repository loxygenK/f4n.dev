"use strict";
const prettify = require("./__prettify");
const npmify = require("./__npmify");

const prettier = npmify.executeNpm("lint:prettier", "prettier");
if(prettier.status !== 0) {
  prettify.warn("Code style issue is detected; Fixing automatically.");
  npmify.executeNpm("fix:prettier", "prettier(fixer)");
}
console.log("");

const tscFailed = npmify.executeLinter("lint:ts", "TypeScript Compiler (Analyzer)");
const eslintFailed = npmify.executeLinter("lint:eslint", "ESLint");
const stylelintFailed = npmify.executeLinter("lint:stylelint", "StyleLint");

if(tscFailed || eslintFailed || stylelintFailed) {
  prettify.error("Fix the error above before commiting.");
  prettify.warn("You may skip this validation by adding `--no-verify` option to `git commit`.")

  process.exit(1)
}

prettify.progress("No fatal issue detected! Continuing commit.");
process.exit(0)
