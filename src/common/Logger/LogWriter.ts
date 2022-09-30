import { LogLevel } from "./LogLevel";

export interface LogWriter {
    handleLog(level: LogLevel, message: string): void;
}
