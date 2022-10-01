import { join } from "path";
import { FileSystemUtility } from "../Utilities/FileSystemUtility";
import { SearchPlugin } from "./SearchPlugin";

export class PluginUtility {
    public static getTemporaryFolderPath(plugin: SearchPlugin): string {
        return join(plugin.getExecutionContext().userDataPath, plugin.getPluginId());
    }

    public static async ensurePluginFolderExists(plugin: SearchPlugin): Promise<void> {
        return FileSystemUtility.createFolderIfDoesntExist(PluginUtility.getTemporaryFolderPath(plugin));
    }

    public static async cleanTemporaryFolder(plugin: SearchPlugin): Promise<void> {
        return FileSystemUtility.cleanFolder(PluginUtility.getTemporaryFolderPath(plugin));
    }
}
