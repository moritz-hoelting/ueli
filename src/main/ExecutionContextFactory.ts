import { App } from "electron";
import { OperatingSystem } from "../common/OperatingSystem/OperatingSystem";
import { ExecutionContext } from "../common/ExecutionContext";

export class ExecutionContextFactory {
    public static fromElectronApp(
        operatingSystem: OperatingSystem,
        electronApp: App,
        electronVersion: string
    ): ExecutionContext {
        return {
            operatingSystem: operatingSystem,
            executablePath: electronApp.getPath("exe"),
            temporaryDirectoryPath: electronApp.getPath("temp"),
            userDataPath: electronApp.getPath("userData"),
            userHomePath: electronApp.getPath("home"),
            applicationVersion: electronApp.getVersion(),
            electronVersion: electronVersion,
        };
    }

    public static fromDummy({
        operatingSystem = OperatingSystem.Windows,
        executablePath = "",
        temporaryDirectoryPath = "",
        userDataPath = "",
        userHomePath = "",
        applicationVersion = "",
        electronVersion = "",
    } = {}): ExecutionContext {
        return {
            operatingSystem: operatingSystem,
            executablePath: executablePath,
            temporaryDirectoryPath: temporaryDirectoryPath,
            userDataPath: userDataPath,
            userHomePath: userHomePath,
            applicationVersion: applicationVersion,
            electronVersion: electronVersion,
        };
    }
}
