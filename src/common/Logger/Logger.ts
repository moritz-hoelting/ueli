import { LogLevel } from "./LogLevel";
import { LogWriter } from "./LogWriter";

export class Logger {
    private static logLevelMap: Record<LogLevel, number> = {
        debug: 0,
        info: 1,
        warning: 2,
        error: 3,
    };

    private static formatMessage = (message: string) => `${new Date().toLocaleTimeString()} - ${message}`;

    public constructor(private level: LogLevel, private logWriters: LogWriter[]) {}

    public debug(message: string): void {
        this.handleLog("debug", message);
    }

    public info(message: string): void {
        this.handleLog("info", message);
    }

    public warning(message: string): void {
        this.handleLog("warning", message);
    }

    public error(message: string): void {
        this.handleLog("error", message);
    }

    private handleLog(level: LogLevel, message: string): void {
        if (this.isIgnoredLevel(level)) {
            return;
        }

        for (const logWriter of this.logWriters) {
            logWriter.handleLog(level, Logger.formatMessage(message));
        }
    }

    private isIgnoredLevel(invokedLevel: LogLevel): boolean {
        return Logger.logLevelMap[invokedLevel] >= Logger.logLevelMap[this.level];
    }
}
