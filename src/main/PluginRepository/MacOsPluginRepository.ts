import { PluginRepository } from "./PluginRepository";
import { SearchPlugin } from "../Plugins/SearchPlugin";
import { MacOsApplicationSearchPlugin } from "../Plugins/MacOsApplicationSearchPlugin/MacOsApplicationSearchPlugin";
import { MacOsApplicationFilePathRetriever } from "../Plugins/MacOsApplicationSearchPlugin/MacOsApplicationFilePathRetriever";
import { ExecutionContext } from "../../common/ExecutionContext";

export class MacOsPluginRepository extends PluginRepository {
    public constructor(executionContext: ExecutionContext) {
        super(executionContext);
    }

    protected getOperatingSystemSpecificPlugins(): SearchPlugin<unknown>[] {
        return [
            new MacOsApplicationSearchPlugin(this.executionContext, () =>
                MacOsApplicationFilePathRetriever.retrieveAllApplicationFilePaths()
            ),
        ];
    }
}
