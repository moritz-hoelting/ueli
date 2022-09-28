import { createContext } from "react";
import { ExecutionContext } from "../../../common/ExecutionContext";
import { Settings } from "../../../common/Settings/Settings";

export interface SettingsContext {
    executionContext: ExecutionContext;
    settings: Settings;
    settingsUpdated: (updatedSettings: Settings) => void;
}

export const Context = createContext<SettingsContext>({
    executionContext: <ExecutionContext>{},
    settings: <Settings>{},
    settingsUpdated: () => null,
});
