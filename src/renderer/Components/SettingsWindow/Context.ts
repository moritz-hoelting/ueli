import { createContext } from "react";
import { ExecutionContext } from "../../../common/ExecutionContext";
import { Settings, SettingsKey } from "../../../common/Settings/Settings";

export interface SettingsContext {
    executionContext: ExecutionContext;
    settings: Settings;
    settingsUpdated: (key: SettingsKey, value: unknown) => void;
}

export const Context = createContext<SettingsContext>({
    executionContext: <ExecutionContext>{},
    settings: <Settings>{},
    settingsUpdated: () => null,
});
