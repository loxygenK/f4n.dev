"use strict";

// This file is run when...
//   - git checkout was run
//   - git pull suceessfully executed
//   - git merge suceessfully executed

const prettify = require("./__prettify");
const npmify = require("./__npmify");

npmify.executeNpm("install", "Install", true);
prettify.progress("Done!");
