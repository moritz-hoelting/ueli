import { App } from "electron";
import { OperatingSystem } from "../common/OperatingSystem/OperatingSystem";
import { ExecutionContextFactory } from "./ExecutionContextFactory";

describe(ExecutionContextFactory, () => {
    const operatingSystem = OperatingSystem.Windows;
    const applicationVersion = "1.2.3";
    const electronVersion = "4.5.6";

    const electronApp = <App>{
        getPath: (name) => name,
        getVersion: () => applicationVersion,
        isPackaged: false,
    };

    describe(ExecutionContextFactory.fromElectronApp, () => {
        it("should set the correct public properties", () => {
            const executionContext = ExecutionContextFactory.fromElectronApp(
                operatingSystem,
                electronApp,
                electronVersion
            );

            expect(executionContext.applicationVersion).toBe(applicationVersion);
            expect(executionContext.electronVersion).toBe(electronVersion);
            expect(executionContext.executablePath).toBe("exe");
            expect(executionContext.isPackaged).toBe(false);
            expect(executionContext.temporaryDirectoryPath).toBe("temp");
            expect(executionContext.userDataPath).toBe("userData");
            expect(executionContext.userHomePath).toBe("home");
        });
    });

    describe(ExecutionContextFactory.fromDummy, () => {
        it("should set the correct public properties", () => {
            const executionContext = ExecutionContextFactory.fromDummy({
                applicationVersion: "1.2.3",
                executablePath: "exe",
                isPackaged: true,
                operatingSystem: OperatingSystem.macOS,
                temporaryDirectoryPath: "temp",
                userDataPath: "userData",
                userHomePath: "home",
            });

            expect(executionContext.applicationVersion).toBe("1.2.3");
            expect(executionContext.executablePath).toBe("exe");
            expect(executionContext.isPackaged).toBe(true);
            expect(executionContext.operatingSystem).toBe(OperatingSystem.macOS);
            expect(executionContext.temporaryDirectoryPath).toBe("temp");
            expect(executionContext.userDataPath).toBe("userData");
            expect(executionContext.userHomePath).toBe("home");
        });
    });
});
