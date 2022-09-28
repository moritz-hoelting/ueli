import { Label } from "@fluentui/react-components";
import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { FC } from "react";
import { ColorThemeName } from "../../ColorThemes";

interface AppearanceSettingsProps {
    colorThemeName: string;
    colorThemeNameUpdated: (colorThemeName: ColorThemeName) => void;
}

export const AppearanceSettings: FC<AppearanceSettingsProps> = ({
    colorThemeName: colorTheme,
    colorThemeNameUpdated: onColorThemeChanged,
}) => {
    const options: { label: string; value: ColorThemeName }[] = [
        { label: "Web Light", value: "Web Light" },
        { label: "Web Dark", value: "Web Dark" },
        { label: "Teams Light", value: "Teams Light" },
        { label: "Teams Dark", value: "Teams Dark" },
        { label: "Teams High Contrast", value: "Teams High Contrast" },
    ];

    const changeColorThemeName = (updatedColorThemeName: ColorThemeName) => onColorThemeChanged(updatedColorThemeName);

    return (
        <div>
            <Label htmlFor="color-theme">Color Theme</Label>
            <Dropdown
                selectedOptions={[colorTheme]}
                onOptionSelect={(_, { optionValue }) => changeColorThemeName(optionValue as ColorThemeName)}
            >
                {options.map(({ value, label }, index) => (
                    <Option key={`${label}-${value}-${index}`} value={value}>
                        {label}
                    </Option>
                ))}
            </Dropdown>
        </div>
    );
};
