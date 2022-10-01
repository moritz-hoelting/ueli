import { SearchResultItem } from "../../../Common_/SearchResult/SearchResultItem";
import { SearchResultItemIconType } from "../../../Common_/SearchResult/SearchResultItemIconType";
import { Searchable } from "../../Core/Searchable";
import { FilePathExecutor } from "../../Executors/FilePathExecutor";
import { FilePathLocationOpener } from "../../LocationOpeners/FilePathLocationOpener";

export class WindowsApplication implements Searchable {
    public constructor(
        private readonly name: string,
        private readonly filePath: string,
        private readonly iconFilePath: string
    ) {}

    public toSearchResultItem(): SearchResultItem {
        return {
            description: this.filePath,
            executionArgument: this.filePath,
            executorId: FilePathExecutor.executorId,
            icon: {
                icon: this.iconFilePath,
                type: SearchResultItemIconType.FilePath,
            },
            locationOpenerId: FilePathLocationOpener.locationOpenerId,
            name: this.name,
            openLocationArgument: this.filePath,
        };
    }
}
