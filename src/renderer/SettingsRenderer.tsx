import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { IpcChannel } from "../common/IpcChannel";
import { ExecutionContext } from "../common/ExecutionContext";
import { Settings } from "./Components/SettingsWindow/Settings";

const rootElement = document.getElementById("app");
const executionContext = window.Bridge.ipcRenderer.sendSync<unknown, ExecutionContext>(IpcChannel.GetExecutionContext);

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <HashRouter>
            <Settings executionContext={executionContext} />
        </HashRouter>
    );
}
