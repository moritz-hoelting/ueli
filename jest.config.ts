import type { Config } from "jest";

const config: Config = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "((test|spec))\\.ts$",
    moduleFileExtensions: ["ts", "js", "json"],
};

export default config;
