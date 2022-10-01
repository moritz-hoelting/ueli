import { ExecutionContext } from "../../../Common/ExecutionContext";
import { Searchable } from "../../Core/Searchable";
import { FileIconUtility } from "../../Utility/FileIconUtility";
import { FileSystemUtility } from "../../Utility/FileSystemUtility";
import { SearchPlugin } from "../SearchPlugin";
import { SimpleFolderSearchItem } from "./SimpleFolderSearchItem";
import { SimpleFolderSearchResultItem } from "./SimpleFolderSearchResultItem";

export class SimpleFolderSearchPlugin implements SearchPlugin {
    private items: SimpleFolderSearchItem[] = [];

    public constructor(private readonly executionContext: ExecutionContext) {}

    public getPluginId(): string {
        return "SimpleFolderSearchPlugin";
    }

    public async rescan(): Promise<void> {
        const filePaths = await FileSystemUtility.getFolderItems(this.executionContext.userHomePath);
        this.items = await Promise.all(filePaths.map((filePath) => SimpleFolderSearchPlugin.getIcon(filePath)));
    }

    public getAllSearchables(): Searchable[] {
        return this.items.map((item) => new SimpleFolderSearchResultItem(item.filePath, item.iconDataUrl));
    }

    public getExecutionContext(): ExecutionContext {
        return this.executionContext;
    }

    private static async getIcon(filePath: string): Promise<SimpleFolderSearchItem> {
        return {
            filePath,
            iconDataUrl: await FileIconUtility.getIconDataUrlFromFilePath(filePath),
        };
    }
}
