import { ColorThemeName } from "../../renderer/ColorThemes";
import { ObjectUtility } from "../ObjectUtility";
import { Settings } from "./Settings";

export class SettingsBuilder {
    private constructor(private settings: Settings) {}

    public static fromSettings(settings: Settings): SettingsBuilder {
        return new SettingsBuilder(ObjectUtility.clone(settings));
    }

    public setHideWindowOnBlur(value: boolean): SettingsBuilder {
        this.settings.generalSettings.hideWindowOnBlur = value;
        return this;
    }

    public setColorThemeName(value: ColorThemeName): SettingsBuilder {
        this.settings.appearanceSettings.colorThemeName = value;
        return this;
    }

    public setSearchEngineThreshold(value: number): SettingsBuilder {
        this.settings.searchEngineSettings.threshold = value;
        return this;
    }

    public setSearchEngineAutomaticRescanEnabled(value: boolean): SettingsBuilder {
        this.settings.searchEngineSettings.automaticRescanEnabled = value;
        return this;
    }

    public setSearchEngineAutomaticRescanIntervalInSeconds(value: number): SettingsBuilder {
        this.settings.searchEngineSettings.automaticRescanIntervalInSeconds = value;
        return this;
    }

    public build(): Settings {
        return this.settings;
    }
}
