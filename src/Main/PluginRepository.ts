import { ExecutionContext } from "../Common/ExecutionContext";
import { OperatingSystem } from "../Common/OperatingSystem/OperatingSystem";
import { SearchPlugin } from "./Plugins/SearchPlugin";
import { MacOsApplicationSearchPlugin } from "./Plugins/MacOsApplicationSearchPlugin/MacOsApplicationSearchPlugin";
import { SimpleFolderSearchPlugin } from "./Plugins/SimpleFolderSearchPlugin/SimpleFolderSearchPlugin";
import { UeliCommandsPlugin } from "./Plugins/UeliCommandsPlugin/UeliCommandsPlugin";
import { WindowsApplicationSearchPlugin } from "./Plugins/WindowsApplicationSearchPlugin/WindowsApplicationSearchPlugin";

export class PluginRepository {
    public constructor(protected readonly executionContext: ExecutionContext) {}

    public getAllPlugins(): SearchPlugin[] {
        return [...this.getOperatingSystemAgnosticPlugins(), ...this.getOperatingSystemSpecificPlugins()];
    }

    private getOperatingSystemAgnosticPlugins(): SearchPlugin[] {
        return [new UeliCommandsPlugin(this.executionContext), new SimpleFolderSearchPlugin(this.executionContext)];
    }

    private getOperatingSystemSpecificPlugins(): SearchPlugin[] {
        switch (this.executionContext.operatingSystem) {
            case OperatingSystem.macOS:
                return this.getMacOsSpecificPlugins();
            case OperatingSystem.Windows:
                return this.getWindowsSpecificPlugins();
            default:
                throw new Error(`Unsupported platform: ${this.executionContext.operatingSystem}`);
        }
    }

    private getMacOsSpecificPlugins(): SearchPlugin[] {
        return [new MacOsApplicationSearchPlugin(this.executionContext)];
    }

    private getWindowsSpecificPlugins(): SearchPlugin[] {
        return [new WindowsApplicationSearchPlugin(this.executionContext)];
    }
}
