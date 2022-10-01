import { App } from "electron";
import { OperatingSystem } from "../Common/OperatingSystem/OperatingSystem";
import { ExecutionContext } from "../Common/ExecutionContext";

export class ExecutionContextFactory {
    public static fromElectronApp(
        operatingSystem: OperatingSystem,
        electronApp: App,
        electronVersion: string
    ): ExecutionContext {
        return {
            applicationVersion: electronApp.getVersion(),
            electronVersion: electronVersion,
            executablePath: electronApp.getPath("exe"),
            isPackaged: electronApp.isPackaged,
            operatingSystem: operatingSystem,
            temporaryDirectoryPath: electronApp.getPath("temp"),
            userDataPath: electronApp.getPath("userData"),
            userHomePath: electronApp.getPath("home"),
        };
    }

    public static fromDummy({
        applicationVersion = "",
        electronVersion = "",
        executablePath = "",
        isPackaged = false,
        operatingSystem = OperatingSystem.Windows,
        temporaryDirectoryPath = "",
        userDataPath = "",
        userHomePath = "",
    } = {}): ExecutionContext {
        return {
            applicationVersion: applicationVersion,
            electronVersion: electronVersion,
            executablePath: executablePath,
            isPackaged: isPackaged,
            operatingSystem: operatingSystem,
            temporaryDirectoryPath: temporaryDirectoryPath,
            userDataPath: userDataPath,
            userHomePath: userHomePath,
        };
    }
}
