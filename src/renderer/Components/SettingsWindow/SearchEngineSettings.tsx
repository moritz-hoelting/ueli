import { FC } from "react";
import { Label, Slider, Switch, SpinButton } from "@fluentui/react-components";

interface Props {
    threshold: number;
    thresholdUpdated: (updatedValue: number) => void;
    automaticRescanEnabled: boolean;
    automaticRescanEnabledUpdated: (updatedValue: boolean) => void;
    automaticRescanInterval: number;
    automaticRescanIntervalUpdated: (updatedValue: number) => void;
}

export const SearchEngineSettings: FC<Props> = ({
    threshold,
    thresholdUpdated,
    automaticRescanEnabled,
    automaticRescanEnabledUpdated,
    automaticRescanInterval,
    automaticRescanIntervalUpdated,
}) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
            <Label htmlFor="threshold">Threshold</Label>
            <Slider
                id="threshold"
                min={0}
                max={1}
                step={0.1}
                value={threshold}
                onChange={(_event, { value }) => thresholdUpdated(value)}
            />
        </div>
        <div>
            <Label htmlFor="automatic-rescan-enabled">Automatic Rescan</Label>
            <Switch
                id="automatic-rescan-enabled"
                checked={automaticRescanEnabled}
                onChange={(_, { checked }) => automaticRescanEnabledUpdated(checked)}
            />
        </div>
        {automaticRescanEnabled ? (
            <div>
                <Label htmlFor="automaticRescanInterval">Automatic Rescan Interval (in seconds)</Label>
                <SpinButton
                    id="automaticRescanInterval"
                    min={10}
                    value={automaticRescanInterval}
                    onChange={(_, { displayValue }) =>
                        displayValue && automaticRescanIntervalUpdated(Number(displayValue))
                    }
                />
            </div>
        ) : (
            ""
        )}
    </div>
);
