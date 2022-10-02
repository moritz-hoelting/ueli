import { FC, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { getExecutionContext, getSettings, saveSettings } from "../Actions";
import { Settings } from "./Components/Settings";
import { Settings as UserSettings, SettingsKey } from "../../Common/Settings";
import { Context } from "./SettingsContext";

const App: FC = () => {
    const executionContext = getExecutionContext();
    const [settings, setSettings] = useState<UserSettings>(getSettings());

    const settingsUpdated = (key: SettingsKey, value: unknown) => {
        const updatedSettings = { ...settings, ...{ [key]: value } };
        setSettings(updatedSettings);
        saveSettings(updatedSettings);
    };

    return (
        <Context.Provider value={{ executionContext, settings, settingsUpdated }}>
            <HashRouter>
                <Settings />
            </HashRouter>
        </Context.Provider>
    );
};

createRoot(document.getElementById("app") as HTMLDivElement).render(<App />);
