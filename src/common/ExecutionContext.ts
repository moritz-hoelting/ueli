import { OperatingSystem } from "../common/OperatingSystem/OperatingSystem";

export interface ExecutionContext {
    applicationVersion: string;
    electronVersion: string;
    executablePath: string;
    isPackaged: boolean;
    operatingSystem: OperatingSystem;
    temporaryDirectoryPath: string;
    userDataPath: string;
    userHomePath: string;
}
