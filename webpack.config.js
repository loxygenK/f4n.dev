"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const configuration = {
    // TODO: Change this using environemnt variable
    mode: "development",
    entry: path_1.default.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path_1.default.resolve(__dirname, "dist"),
        filename: "bundled_[contenthash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ['babel-loader'],
            }
        ]
    }
};
exports.default = configuration;
