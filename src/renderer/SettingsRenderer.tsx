import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Settings } from "./Components/SettingsWindow/Settings";
import { getExecutionContext, getSettings } from "./Actions";

createRoot(document.getElementById("app") as HTMLDivElement).render(
    <HashRouter>
        <Settings executionContext={getExecutionContext()} settings={getSettings()} />
    </HashRouter>
);
