import { createContext } from "react";
import { ExecutionContext } from "../../../Common/ExecutionContext";
import { Settings, SettingsKey } from "../../../Common/Settings/Settings";

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
