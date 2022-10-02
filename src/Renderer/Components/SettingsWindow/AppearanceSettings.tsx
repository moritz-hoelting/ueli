import { Radio } from "@fluentui/react-components";
import { RadioGroupField } from "@fluentui/react-components/unstable";
import { FC, useContext } from "react";
import { ColorThemeName } from "../../ColorThemes";
import { Context } from "../../Context/SettingsContext";

export const AppearanceSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    const options: { label: string; value: ColorThemeName }[] = [
        { label: "Web Light", value: "Web Light" },
        { label: "Web Dark", value: "Web Dark" },
        { label: "Teams Light", value: "Teams Light" },
        { label: "Teams Dark", value: "Teams Dark" },
        { label: "Teams High Contrast", value: "Teams High Contrast" },
    ];

    return (
        <div>
            <RadioGroupField
                label="Color Theme"
                value={settings["appearance.colorThemeName"] as ColorThemeName}
                onChange={(_, { value }) => settingsUpdated("appearance.colorThemeName", value as ColorThemeName)}
            >
                {options.map(({ value, label }, index) => (
                    <Radio key={`${label}-${value}-${index}`} value={value} label={label} />
                ))}
            </RadioGroupField>
        </div>
    );
};
