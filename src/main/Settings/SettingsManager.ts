import { Logger } from "../../common/Logger/Logger";
import { Settings } from "../../common/Settings/Settings";
import { SettingsRepository } from "./SettingsRepository";

export class SettingsManager {
    private userSettings?: Settings;

    public constructor(
        private readonly settingsRepository: SettingsRepository,
        private readonly defaultSettings: Settings,
        private readonly logger: Logger
    ) {
        this.userSettings = this.readSettingsFromFileSystem();
    }

    public getSettings(): Settings {
        return this.mergeUserSettingsWithDefault(this.userSettings ?? <Settings>{});
    }

    public updateSettings(updatedSettings: Settings): Promise<void> {
        this.userSettings = updatedSettings;
        return this.settingsRepository.writeSettings(updatedSettings);
    }

    private readSettingsFromFileSystem(): Settings | undefined {
        try {
            return this.settingsRepository.readSettings();
        } catch (error) {
            this.logger.error(`Failed to read user settings from settings file: Reason ${error}`);
            return undefined;
        }
    }

    private mergeUserSettingsWithDefault(userSettings: Settings): Settings {
        return { ...this.defaultSettings, ...userSettings };
    }
}
