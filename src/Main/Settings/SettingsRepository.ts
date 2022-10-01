import { Settings } from "../../Common/Settings/Settings";

export interface SettingsRepository {
    readSettings(): Settings | undefined;
    writeSettings(settings: Settings): Promise<void>;
}
