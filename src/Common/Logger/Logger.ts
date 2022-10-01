import { LogLevel } from "./LogLevel";
import { LogWriter } from "./LogWriter";
import { Clock } from "../Clock/Clock";

export class Logger {
    private static logLevelMap: Record<LogLevel, number> = {
        debug: 0,
        info: 1,
        warning: 2,
        error: 3,
    };

    public constructor(private clock: Clock, private level: LogLevel, private logWriters: LogWriter[]) {}

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

    private handleLog(invokedLevel: LogLevel, message: string): void {
        if (this.isIgnoredLevel(invokedLevel)) {
            return;
        }

        for (const logWriter of this.logWriters) {
            logWriter.handleLog(invokedLevel, this.formatMessage(message));
        }
    }

    private isIgnoredLevel(invokedLevel: LogLevel): boolean {
        return Logger.logLevelMap[invokedLevel] < Logger.logLevelMap[this.level];
    }

    private formatMessage(message: string) {
        return `${this.clock.now().toLocaleTimeString()} - ${message}`;
    }
}
