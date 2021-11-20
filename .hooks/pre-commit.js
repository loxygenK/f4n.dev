"use strict";
const prettify = require("./__prettify");
const npmify = require("./__npmify");

const prettier = npmify.executeNpm("lint:prettier", "prettier");
if(prettier.status !== 0) {
  prettify.warn("Code style issue is detected; Fixing automatically.");
  npmify.executeNpm("fix:prettier", "prettier(fixer)");
}
console.log("");

prettify.progress("Continuing commit.");
process.exit(0)
