import { UeliCommandEvent } from "../../UeliCommandEvent";
import { Searchable } from "../../Core/Searchable";
import { SearchPlugin } from "../SearchPlugin";
import { UeliCommand } from "./UeliCommand";
import { ExecutionContext } from "../../../Common/ExecutionContext";

export class UeliCommandsPlugin implements SearchPlugin {
    public constructor(private readonly executionContext: ExecutionContext) {}

    public getPluginId(): string {
        return "UeliCommandsPlugin";
    }

    public rescan(): Promise<void> {
        return Promise.resolve();
    }

    public getAllSearchables(): Searchable[] {
        return [
            new UeliCommand("Settings", "Opens ueli's settings", UeliCommandEvent.OpenSettings),
            new UeliCommand("Rescan", "Triggers a rescan for all plugins", UeliCommandEvent.Rescan),
            new UeliCommand("Quit", "Quits ueli", UeliCommandEvent.QuitApp),
        ];
    }

    public getExecutionContext(): ExecutionContext {
        return this.executionContext;
    }
}
