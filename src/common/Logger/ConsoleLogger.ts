import { LogLevel } from "./LogLevel";
import { LogWriter } from "./LogWriter";

export class ConsoleLogger implements LogWriter {
    public handleLog(level: LogLevel, message: string): void {
        switch (level) {
            case "debug":
                return console.debug(message);

            case "info":
                return console.info(message);

            case "warning":
                return console.warn(message);

            case "error":
                return console.error(message);

            default:
                throw new Error(`Unsupported log level: ${level}`);
        }
    }
}
