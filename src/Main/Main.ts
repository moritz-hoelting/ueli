import { app, globalShortcut, ipcMain, shell } from "electron";
import { platform } from "os";
import { join } from "path";
import { ConsoleLogWriter } from "../Common/Logger/ConsoleLogWriter";
import { OperatingSystem } from "../Common/OperatingSystem/OperatingSystem";
import { OperatingSystemHelper } from "../Common/OperatingSystem/OperatingSystemHelper";
import { ExecutionService } from "./Core/ExecutionService";
import { LocationOpeningService } from "./Core/LocationOpeningService";
import { SearchEngine } from "./Core/SearchEngine";
import { ExecutionContextFactory } from "./ExecutionContextFactory";
import { FilePathExecutor } from "./Executors/FilePathExecutor";
import { UeliCommandExecutor } from "./Executors/UeliCommandExecutor";
import { FileSettingsRepository } from "./Settings/FileSettingsRepository";
import { FilePathLocationOpener } from "./LocationOpeners/FilePathLocationOpener";
import { MainApplication } from "./MainApplication";
import { MacOsPluginRepository } from "./PluginRepository/MacOsPluginRepository";
import { WindowsPluginRepository } from "./PluginRepository/WindowsPluginRepository";
import { SettingsManager } from "./Settings/SettingsManager";
import { TrayIconManager } from "./TrayIconManager";
import { WindowManager } from "./WindowManager";
import { defaultSettings } from "../Common/Settings/Settings";
import { Logger } from "../Common/Logger/Logger";
import { Clock } from "../Common/Clock/Clock";

const operatingSystem = OperatingSystemHelper.getOperatingSystem(platform());
const clock = new Clock();
const logger = new Logger(clock, "debug", [new ConsoleLogWriter()]);
const executionContext = ExecutionContextFactory.fromElectronApp(operatingSystem, app, process.versions.electron);
const fileSettingsRepository = new FileSettingsRepository(join(executionContext.userDataPath, "ueli9.settings.json"));
const settingsManager = new SettingsManager(fileSettingsRepository, defaultSettings, logger);
const windowManager = new WindowManager(settingsManager);
const trayIconManager = new TrayIconManager(executionContext, ipcMain);

const pluginRepository =
    operatingSystem === OperatingSystem.Windows
        ? new WindowsPluginRepository(executionContext)
        : new MacOsPluginRepository(executionContext);

const searchEngine = new SearchEngine(settingsManager.getSettings(), pluginRepository.getAllPlugins(), logger);

const openFilePath = async (filePath: string): Promise<void> => {
    const errorMessage = await shell.openPath(filePath);

    if (errorMessage) {
        throw new Error(errorMessage);
    }
};

const openFileLocation = async (filePath: string): Promise<void> => {
    shell.showItemInFolder(filePath);
};

const executionService = new ExecutionService([new FilePathExecutor(openFilePath), new UeliCommandExecutor(ipcMain)]);
const locationOpeningService = new LocationOpeningService([new FilePathLocationOpener(openFileLocation)]);

new MainApplication(
    app,
    ipcMain,
    globalShortcut,
    executionContext,
    windowManager,
    trayIconManager,
    searchEngine,
    executionService,
    locationOpeningService,
    settingsManager,
    logger
).start();
