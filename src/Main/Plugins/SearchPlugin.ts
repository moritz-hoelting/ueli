import { ExecutionContext } from "../../Common/ExecutionContext";
import { Searchable } from "../Core/Searchable";

export interface SearchPlugin {
    getPluginId(): string;
    rescan(): Promise<void>;
    getAllSearchables(): Searchable[];
    getExecutionContext(): ExecutionContext;
}
