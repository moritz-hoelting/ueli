import { FC, useContext } from "react";
import { Context } from "../../Context/SettingsContext";
import { SliderField, SpinButtonField, SwitchField } from "@fluentui/react-components/unstable";

export const SearchEngineSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
                <SliderField
                    label="Threshold"
                    min={0}
                    max={1}
                    step={0.1}
                    value={settings["searchEngine.threshold"] as number}
                    onChange={(_event, { value }) => settingsUpdated("searchEngine.threshold", value)}
                />
            </div>
            <div>
                <SwitchField
                    label="Automatic Rescan"
                    checked={settings["searchEngine.automaticRescanEnabled"] as boolean}
                    onChange={(_, { checked }) => settingsUpdated("searchEngine.automaticRescanEnabled", checked)}
                />
            </div>
            {(settings["searchEngine.automaticRescanEnabled"] as boolean) ? (
                <div>
                    <SpinButtonField
                        label="Automatic Rescan Interval (in seconds)"
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
