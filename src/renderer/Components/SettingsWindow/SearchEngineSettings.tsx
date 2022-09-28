import { FC } from "react";
import { Label, Slider, Switch, SpinButton } from "@fluentui/react-components";
import { Context } from "./Context";
import { ObjectUtility } from "../../../common/ObjectUtility";

export const SearchEngineSettings: FC = () => {
    return (
        <Context.Consumer>
            {({ settings, settingsUpdated }) => (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div>
                        <Label htmlFor="threshold">Threshold</Label>
                        <Slider
                            id="threshold"
                            min={0}
                            max={1}
                            step={0.1}
                            value={settings.searchEngineSettings.threshold}
                            onChange={(_event, { value }) => {
                                const x = ObjectUtility.clone(settings);
                                x.searchEngineSettings.threshold = value;
                                settingsUpdated(x);
                            }}
                        />
                    </div>
                    <div>
                        <Label htmlFor="automatic-rescan-enabled">Automatic Rescan</Label>
                        <Switch
                            id="automatic-rescan-enabled"
                            checked={settings.searchEngineSettings.automaticRescanEnabled}
                            onChange={(_, { checked }) => {
                                const x = ObjectUtility.clone(settings);
                                x.searchEngineSettings.automaticRescanEnabled = checked;
                                settingsUpdated(x);
                            }}
                        />
                    </div>
                    {settings.searchEngineSettings.automaticRescanEnabled ? (
                        <div>
                            <Label htmlFor="automaticRescanInterval">Automatic Rescan Interval (in seconds)</Label>
                            <SpinButton
                                id="automaticRescanInterval"
                                min={10}
                                value={settings.searchEngineSettings.automaticRescanIntervalInSeconds}
                                onChange={(_, { displayValue }) => {
                                    if (displayValue) {
                                        const x = ObjectUtility.clone(settings);
                                        x.searchEngineSettings.automaticRescanIntervalInSeconds = Number(displayValue);
                                        settingsUpdated(x);
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </Context.Consumer>
    );
};
