import { Menu, Tray, IpcMain } from "electron";
import { join } from "path";
import { ExecutionContext } from "../Common_/ExecutionContext";
import { IpcChannel } from "../Common_/IpcChannel";
import { OperatingSystem } from "../Common_/OperatingSystem/OperatingSystem";
import { TrayIconEvent } from "./TrayIconEvent";

export class TrayIconManager {
    private readonly trayIconFilePaths: Record<OperatingSystem, string> = {
        Windows: join(__dirname, "..", "assets", "trayicon", "icon-transparent.ico"),
        macOS: join(__dirname, "..", "assets", "trayicon", "ueliTemplate.png"),
    };

    private trayIcon?: Tray;

    public constructor(private readonly executionContext: ExecutionContext, private readonly ipcMain: IpcMain) {
        this.trayIcon = undefined;
    }

    public createTrayIcon(): void {
        this.trayIcon = new Tray(this.trayIconFilePaths[this.executionContext.operatingSystem]);
        this.trayIcon.setToolTip("ueli");
        this.trayIcon.setContextMenu(this.getContextMenu());
    }

    private getContextMenu(): Menu {
        return Menu.buildFromTemplate([
            {
                label: "Show",
                click: () => this.emitTrayIconEvent(TrayIconEvent.ShowClicked),
            },
            {
                label: "Settings",
                click: () => this.emitTrayIconEvent(TrayIconEvent.SettingsClicked),
            },
            {
                label: "Rescan",
                click: () => this.emitTrayIconEvent(TrayIconEvent.RescanClicked),
            },
            {
                label: "Clear caches",
                click: () => this.emitTrayIconEvent(TrayIconEvent.ClearCachesClicked),
            },
            {
                label: "Quit",
                click: () => this.emitTrayIconEvent(TrayIconEvent.QuitClicked),
            },
        ]);
    }

    private emitTrayIconEvent(event: TrayIconEvent): void {
        this.ipcMain.emit(IpcChannel.TrayIconEvent, undefined, event);
    }
}
