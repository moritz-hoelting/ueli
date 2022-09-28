import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Settings } from "./Components/SettingsWindow/Settings";
import { getExecutionContext, getSettings } from "./Actions";

const rootElement = document.getElementById("app");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <HashRouter>
            <Settings executionContext={getExecutionContext()} settings={getSettings()} />
        </HashRouter>
    );
}
