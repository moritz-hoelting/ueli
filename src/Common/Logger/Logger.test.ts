import { IMock, Mock, Times } from "moq.ts";
import { Clock } from "../Clock/Clock";
import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";
import { LogWriter } from "./LogWriter";

describe(Logger, () => {
    const now = new Date("2022-10-01T00:00:00");
    const logMessage = "This is a log message";

    let clock: IMock<Clock>;
    let logWriter: IMock<LogWriter>;

    const verifyLogWriterHandledLog = (level: LogLevel, logMessage: string, times: Times) =>
        logWriter.verify((instance) => instance.handleLog(level, `[${now.toLocaleTimeString()}] ${logMessage}`), times);

    beforeEach(() => {
        clock = new Mock<Clock>().setup((instance) => instance.now()).returns(now);
        logWriter = new Mock<LogWriter>();
    });

    describe(Logger.prototype.debug, () => {
        it("it should call the log writers handleLog method", () => {
            const level: LogLevel = "debug";
            logWriter.setup((instance) => instance.handleLog(level, logMessage)).returns();
            new Logger(clock.object(), level, [logWriter.object()]).debug(logMessage);
            verifyLogWriterHandledLog(level, logMessage, Times.Once());
        });

        it("it should not call the log writers handleLog method when the configured log level is higher", () => {
            const configuredLevel: LogLevel = "info";
            const invokedLevel: LogLevel = "debug";
            logWriter.setup((instance) => instance.handleLog(invokedLevel, logMessage)).returns();
            new Logger(clock.object(), configuredLevel, [logWriter.object()]).debug(logMessage);
            verifyLogWriterHandledLog(invokedLevel, logMessage, Times.Never());
        });
    });

    describe(Logger.prototype.info, () => {
        it("it should call the log writers handleLog method", () => {
            const level: LogLevel = "info";
            logWriter.setup((instance) => instance.handleLog(level, logMessage)).returns();
            new Logger(clock.object(), level, [logWriter.object()]).info(logMessage);
            verifyLogWriterHandledLog(level, logMessage, Times.Once());
        });

        it("it should not call the log writers handleLog method when the configured log level is higher", () => {
            const configuredLevel: LogLevel = "warning";
            const invokedLevel: LogLevel = "info";
            logWriter.setup((instance) => instance.handleLog(invokedLevel, logMessage)).returns();
            new Logger(clock.object(), configuredLevel, [logWriter.object()]).info(logMessage);
            verifyLogWriterHandledLog(invokedLevel, logMessage, Times.Never());
        });
    });

    describe(Logger.prototype.warning, () => {
        it("it should call the log writers handleLog method", () => {
            const level: LogLevel = "warning";
            logWriter.setup((instance) => instance.handleLog(level, logMessage)).returns();
            new Logger(clock.object(), level, [logWriter.object()]).warning(logMessage);
            verifyLogWriterHandledLog(level, logMessage, Times.Once());
        });

        it("it should not call the log writers handleLog method when the configured log level is higher", () => {
            const configuredLevel: LogLevel = "error";
            const invokedLevel: LogLevel = "warning";
            logWriter.setup((instance) => instance.handleLog(invokedLevel, logMessage)).returns();
            new Logger(clock.object(), configuredLevel, [logWriter.object()]).warning(logMessage);
            verifyLogWriterHandledLog(invokedLevel, logMessage, Times.Never());
        });
    });

    describe(Logger.prototype.error, () => {
        it("it should call the log writers handleLog method", () => {
            const level: LogLevel = "error";
            logWriter.setup((instance) => instance.handleLog(level, logMessage)).returns();
            new Logger(clock.object(), level, [logWriter.object()]).error(logMessage);
            verifyLogWriterHandledLog(level, logMessage, Times.Once());
        });
    });
});
