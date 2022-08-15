import { Label, Slider, Switch, SpinButton } from "@fluentui/react-components";
import { FC, useState } from "react";
import { getSettings, saveSettings } from "../../Actions";

export const SearchEngineSettings: FC = () => {
    const settings = getSettings();

    const [threshold, setThreshold] = useState<number>(settings.searchEngineSettings.threshold);

    const updateThreshold = async (value: number) => {
        settings.searchEngineSettings.threshold = value;
        setThreshold(settings.searchEngineSettings.threshold);
        await saveSettings(settings);
    };

    const [automaticRescanEnabled, setAutomaticRescanEnabled] = useState<boolean>(
        settings.searchEngineSettings.automaticRescanEnabled
    );

    const toggleAutomaticRescanEnabled = async () => {
        settings.searchEngineSettings.automaticRescanEnabled = !automaticRescanEnabled;
        setAutomaticRescanEnabled(settings.searchEngineSettings.automaticRescanEnabled);
        await saveSettings(settings);
    };

    const [automaticRescanInterval, setAutomaticRescanInterval] = useState<number>(
        settings.searchEngineSettings.automaticRescanIntervalInSeconds
    );

    const updateAutomaticRescanInterval = async (updatedValue: number) => {
        settings.searchEngineSettings.automaticRescanIntervalInSeconds = updatedValue;
        setAutomaticRescanInterval(updatedValue);
        await saveSettings(settings);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
                <Label htmlFor="threshold">Threshold</Label>
                <Slider
                    id="threshold"
                    min={0}
                    max={1}
                    step={0.1}
                    value={threshold}
                    onChange={(_event, { value }) => updateThreshold(value)}
                />
            </div>
            <div>
                <Label htmlFor="automatic-rescan-enabled">Automatic Rescan</Label>
                <Switch
                    id="automatic-rescan-enabled"
                    checked={automaticRescanEnabled}
                    onChange={() => toggleAutomaticRescanEnabled()}
                />
            </div>
            {automaticRescanEnabled ? (
                <div>
                    <Label htmlFor="automaticRescanInterval">Automatic Rescan Interval</Label>
                    <SpinButton
                        id="automaticRescanInterval"
                        min={10}
                        value={automaticRescanInterval}
                        onChange={(_, updatedValue) => updateAutomaticRescanInterval(Number(updatedValue))}
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
