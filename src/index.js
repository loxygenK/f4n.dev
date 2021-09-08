"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = require("./App");
react_dom_1.default.render(react_1.default.createElement("div", null,
    "YESSSSSSSSSS IT WORKS",
    react_1.default.createElement(App_1.App, null)), document.getElementById("app"));
