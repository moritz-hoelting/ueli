import { createHash } from "crypto";
import { join, normalize } from "path";
import { MacOsApplication } from "./MacOsApplication";
import { app } from "electron";
import { FileSystemUtility } from "../../Utilities/FileSystemUtility";
import { ExecutionContext } from "../../../Common/ExecutionContext";
import { SearchPlugin } from "../SearchPlugin";
import { Searchable } from "../../Core/Searchable";
import { CommandlineUtility } from "../../Utilities/CommandlineUtility";
import { SearchPluginUtility } from "../SearchPluginUtility";

export class MacOsApplicationSearchPlugin implements SearchPlugin {
    protected readonly defaultSettings: Record<string, unknown> = {};
    private applications: MacOsApplication[] = [];

    public constructor(private readonly executionContext: ExecutionContext) {}

    public getPluginId(): string {
        return "MacOsApplicationSearchPlugin";
    }

    public async rescan(): Promise<void> {
        await SearchPluginUtility.ensurePluginFolderExists(this);
        const filePaths = await this.retrieveAllApplicationFilePaths();
        await this.generateMacAppIcons(filePaths);

        this.applications = filePaths.map(
            (filePath) => new MacOsApplication(filePath, this.getApplicationIconFilePath(filePath))
        );
    }

    public getAllSearchables(): Searchable[] {
        return this.applications;
    }

    public getExecutionContext(): ExecutionContext {
        return this.executionContext;
    }

    private async generateMacAppIcons(filePaths: string[]): Promise<void> {
        await Promise.all(filePaths.map((filePath) => this.generateMacAppIcon(filePath)));
    }

    private async generateMacAppIcon(filePath: string): Promise<void> {
        const outPngFilePath = this.getApplicationIconFilePath(filePath);
        const fileExists = await FileSystemUtility.pathExists(outPngFilePath);

        if (fileExists) {
            return;
        }

        const image = await app.getFileIcon(filePath);
        await FileSystemUtility.writePng(image.toPNG(), outPngFilePath);
    }

    private getApplicationIconFilePath(applicationFilePath: string): string {
        const hash = createHash("sha256").update(`${applicationFilePath}`).digest("hex");
        return `${join(this.getTemporaryFolderPath(), hash)}.png`;
    }

    private getTemporaryFolderPath(): string {
        return join(this.executionContext.userDataPath, this.getPluginId());
    }

    private async retrieveAllApplicationFilePaths(): Promise<string[]> {
        const output = await CommandlineUtility.executeCommandWithOutput("mdfind kind:apps");

        return output
            .split("\n")
            .map((filePath) => normalize(filePath).trim())
            .filter((filePath) => [".", ".."].indexOf(filePath) === -1);
    }
}
