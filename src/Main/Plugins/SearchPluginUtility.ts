import { join } from "path";
import { FileSystemUtility } from "../Utilities/FileSystemUtility";
import { SearchPlugin } from "./SearchPlugin";

export class SearchPluginUtility {
    public static getPluginFolderPath(plugin: SearchPlugin): string {
        return join(plugin.getExecutionContext().userDataPath, plugin.getPluginId());
    }

    public static async ensurePluginFolderExists(plugin: SearchPlugin): Promise<void> {
        return FileSystemUtility.createFolderIfDoesntExist(SearchPluginUtility.getPluginFolderPath(plugin));
    }

    public static async cleanPluginFolder(plugin: SearchPlugin): Promise<void> {
        return FileSystemUtility.cleanFolder(SearchPluginUtility.getPluginFolderPath(plugin));
    }
}
