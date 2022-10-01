export type SettingsKey =
    | "general.hideWindowOnBlur"
    | "appearance.colorThemeName"
    | "searchEngine.automaticRescanEnabled"
    | "searchEngine.automaticRescanIntervalInSeconds"
    | "searchEngine.threshold";

export type Settings = Record<SettingsKey, unknown>;

export const defaultSettings: Settings = {
    "appearance.colorThemeName": "Web Dark",
    "general.hideWindowOnBlur": true,
    "searchEngine.automaticRescanEnabled": true,
    "searchEngine.automaticRescanIntervalInSeconds": 300,
    "searchEngine.threshold": 0.4,
};
