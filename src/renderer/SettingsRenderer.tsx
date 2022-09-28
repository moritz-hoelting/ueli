import { FC, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { getExecutionContext, getSettings, saveSettings } from "./Actions";
import { Settings } from "./Components/SettingsWindow/Settings";
import { Settings as UserSettings } from "../common/Settings/Settings";
import { Context } from "./Components/SettingsWindow/Context";

const App: FC = () => {
    const executionContext = getExecutionContext();
    const [settings, setSettings] = useState<UserSettings>(getSettings());

    const settingsUpdated = (updatedSettings: UserSettings) => {
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
