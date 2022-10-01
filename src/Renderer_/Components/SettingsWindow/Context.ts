import { createContext } from "react";
import { ExecutionContext } from "../../../Common_/ExecutionContext";
import { Settings, SettingsKey } from "../../../Common_/Settings/Settings";

type SettingsContext = {
    executionContext: ExecutionContext;
    settings: Settings;
    settingsUpdated: (key: SettingsKey, value: unknown) => void;
};

export const Context = createContext<SettingsContext>({
    executionContext: <ExecutionContext>{},
    settings: <Settings>{},
    settingsUpdated: () => null,
});
