import { FC, useContext } from "react";
import { Label, Slider, Switch, SpinButton } from "@fluentui/react-components";
import { Context } from "./Context";

export const SearchEngineSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
                <Label htmlFor="threshold">Threshold</Label>
                <Slider
                    id="threshold"
                    min={0}
                    max={1}
                    step={0.1}
                    value={settings["searchEngine.threshold"] as number}
                    onChange={(_event, { value }) => settingsUpdated("searchEngine.threshold", value)}
                />
            </div>
            <div>
                <Label htmlFor="automatic-rescan-enabled">Automatic Rescan</Label>
                <Switch
                    id="automatic-rescan-enabled"
                    checked={settings["searchEngine.automaticRescanEnabled"] as boolean}
                    onChange={(_, { checked }) => settingsUpdated("searchEngine.automaticRescanEnabled", checked)}
                />
            </div>
            {(settings["searchEngine.automaticRescanEnabled"] as boolean) ? (
                <div>
                    <Label htmlFor="automaticRescanInterval">Automatic Rescan Interval (in seconds)</Label>
                    <SpinButton
                        id="automaticRescanInterval"
                        min={10}
                        value={settings["searchEngine.automaticRescanIntervalInSeconds"] as number}
                        onChange={(_, { displayValue }) => {
                            if (displayValue) {
                                settingsUpdated("searchEngine.automaticRescanIntervalInSeconds", Number(displayValue));
                            }
                        }}
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
