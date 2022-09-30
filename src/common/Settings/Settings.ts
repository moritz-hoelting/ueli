export type SettingsKey =
    | "general.hideWindowOnBlur"
    | "appearance.colorThemeName"
    | "searchEngine.automaticRescanEnabled"
    | "searchEngine.automaticRescanIntervalInSeconds"
    | "searchEngine.threshold";

export type Settings = Record<SettingsKey, unknown>;
