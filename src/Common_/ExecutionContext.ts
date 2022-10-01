import { OperatingSystem } from "./OperatingSystem/OperatingSystem";

export type ExecutionContext = {
    applicationVersion: string;
    electronVersion: string;
    executablePath: string;
    isPackaged: boolean;
    operatingSystem: OperatingSystem;
    temporaryDirectoryPath: string;
    userDataPath: string;
    userHomePath: string;
};
