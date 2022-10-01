import { join } from "path";
import { ExecutionContext } from "../../../Common/ExecutionContext";
import { Searchable } from "../../Core/Searchable";
import { PowershellUtility } from "../../Utilities/PowershellUtility";
import { SearchPlugin } from "../SearchPlugin";
import { PluginUtility } from "../PluginUtility";
import { extractShortcutPowershellScript, getWindowsAppsPowershellScript } from "./PowershellScripts";
import { WindowsApplication } from "./WindowsApplication";
import { WindowsApplicationRetrieverResult } from "./WindowsApplicationRetrieverResult";
import { WindowsApplicationSearchSettings } from "./WindowsApplicationSearchSettings";

export class WindowsApplicationSearchPlugin implements SearchPlugin {
    private static readonly extractShortcutPowershellScript = extractShortcutPowershellScript;
    private static readonly getWindowsAppsPowershellScript = getWindowsAppsPowershellScript;

    private readonly settings: WindowsApplicationSearchSettings;
    private applications: WindowsApplication[] = [];

    public constructor(private readonly executionContext: ExecutionContext) {
        this.settings = {
            folderPaths: [
                "C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                join(executionContext.userHomePath, "AppData", "Roaming", "Microsoft", "Windows", "Start Menu"),
            ],
            fileExtensions: ["lnk"],
        };
    }

    public getPluginId(): string {
        return "WindowsApplicationSearchPlugin";
    }

    public async rescan(): Promise<void> {
        await PluginUtility.ensurePluginFolderExists(this);
        const stdout = await PowershellUtility.executePowershellScript(this.getPowershellScript(this.settings));
        const windowsApplicationRetrieverResults = <WindowsApplicationRetrieverResult[]>JSON.parse(stdout);

        this.applications = windowsApplicationRetrieverResults.map(
            (result) => new WindowsApplication(result.BaseName, result.FullName, result.IconFilePath)
        );
    }

    public getAllSearchables(): Searchable[] {
        return this.applications;
    }

    public getExecutionContext(): ExecutionContext {
        return this.executionContext;
    }

    private getPowershellScript(settings: WindowsApplicationSearchSettings): string {
        const folderPaths = WindowsApplicationSearchPlugin.getFolderPathFilter(settings.folderPaths);
        const fileExtensions = WindowsApplicationSearchPlugin.getFileExtensionFilter(settings.fileExtensions);
        const tempFolderPath = PluginUtility.getTemporaryFolderPath(this);

        return `
            ${WindowsApplicationSearchPlugin.extractShortcutPowershellScript}
            ${WindowsApplicationSearchPlugin.getWindowsAppsPowershellScript}

            Get-WindowsApps -FolderPaths ${folderPaths} -FileExtensions ${fileExtensions} -AppIconFolder ${tempFolderPath};
        `;
    }

    private static getFolderPathFilter(folderPaths: string[]): string {
        return folderPaths.map((folderPath) => `'${folderPath}'`).join(",");
    }

    private static getFileExtensionFilter(fileExtensions: string[]): string {
        return fileExtensions.map((fileExtension) => `'*.${fileExtension}'`).join(",");
    }
}
