"use strict";
const prettify = require("./__prettify");
const npmify = require("./__npmify");

const prettier = npmify.executeNpm("lint:prettier", "prettier");
if(prettier.status !== 0) {
  prettify.error("Code style issue is detected; Fixing automatically.");
  npmify.executeNpm("fix:prettier", "prettier(fixer)");

  prettify.warn("Please review the change and commit again.");
  process.exit(1)
}
console.log("");

prettify.progress("Continuing commit.");
process.exit(0)
