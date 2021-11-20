"use strict";
const prettify = require("./__prettify");
const npmify = require("./__npmify");

const tscFailed = npmify.executeLinter("lint:ts", "TypeScript Compiler (Analyzer)");
const eslintFailed = npmify.executeLinter("lint:eslint", "ESLint");
const stylelintFailed = npmify.executeLinter("lint:stylelint", "StyleLint");

if(tscFailed || eslintFailed || stylelintFailed) {
  prettify.error("Fix the error above before pushing.");
  prettify.warn("If you acknowledge the error above, and want to push anyway,");
  prettify.warn("you may add `--no-verify` (NOT `--force`) option to `git push`.")

  process.exit(1)
}

prettify.progress("No fatal issue detected! Continuing commit.");
process.exit(0)
