import { ExecutionContext } from "../Common/ExecutionContext";
import { IpcChannel } from "../Common/IpcChannel";
import { Settings } from "../Common/Settings/Settings";

export const getExecutionContext = () =>
    window.Bridge.ipcRenderer.sendSync<unknown, ExecutionContext>(IpcChannel.GetExecutionContext);

export const getSettings = () => window.Bridge.ipcRenderer.sendSync<void, Settings>(IpcChannel.GetSettings);

export const saveSettings = (updatedSettings: Settings) =>
    window.Bridge.ipcRenderer.invoke<Settings, void>(IpcChannel.UpdateSettings, updatedSettings);
