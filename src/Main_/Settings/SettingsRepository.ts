import { Settings } from "../../Common_/Settings/Settings";

export interface SettingsRepository {
    readSettings(): Settings | undefined;
    writeSettings(settings: Settings): Promise<void>;
}
