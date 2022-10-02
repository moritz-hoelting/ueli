import { Settings } from "../../Common/Settings";

export interface SettingsRepository {
    readSettings(): Settings | undefined;
    writeSettings(settings: Settings): Promise<void>;
}
