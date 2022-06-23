import { OperatingSystem } from "../common/OperatingSystem/OperatingSystem";

export interface ExecutionContext {
    operatingSystem: OperatingSystem;
    executablePath: string;
    temporaryDirectoryPath: string;
    userDataPath: string;
    userHomePath: string;
    applicationVersion: string;
    electronVersion: string;
}
