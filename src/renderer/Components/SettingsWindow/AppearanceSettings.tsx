import { Label } from "@fluentui/react-components";
import { Select } from "@fluentui/react-components/unstable";
import { FC } from "react";
import { getSettings, saveSettings } from "../../Actions";
import { ColorThemeName } from "../../ColorThemes";

interface AppearanceSettingsProps {
    colorTheme: string;
    onColorThemeChanged: (colorThemeName: ColorThemeName) => void;
}

export const AppearanceSettings: FC<AppearanceSettingsProps> = ({ colorTheme, onColorThemeChanged }) => {
    const settings = getSettings();

    const options: { label: string; value: ColorThemeName }[] = [
        { label: "Web Light", value: "Web Light" },
        { label: "Web Dark", value: "Web Dark" },
    ];

    const changeColorThemeName = async (updatedColorThemeName: ColorThemeName) => {
        settings.appearanceSettings.colorThemeName = updatedColorThemeName;
        onColorThemeChanged(settings.appearanceSettings.colorThemeName);
        await saveSettings(settings);
    };

    return (
        <div>
            <Label htmlFor="color-theme">Color Theme</Label>
            <Select
                id="color-theme"
                value={colorTheme}
                onChange={(_event) => {
                    const updatedColorThemeName = _event.target.value as ColorThemeName;
                    changeColorThemeName(updatedColorThemeName);
                }}
            >
                {options.map(({ value, label }, index) => (
                    <option key={`${label}-${value}-${index}`} value={value}>
                        {label}
                    </option>
                ))}
            </Select>
        </div>
    );
};
