import { Label } from "@fluentui/react-components";
import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { FC } from "react";
import { SettingsBuilder } from "../../../common/Settings/SettingsBuilder";
import { ColorThemeName } from "../../ColorThemes";
import { Context } from "./Context";

export const AppearanceSettings: FC = () => {
    const options: { label: string; value: ColorThemeName }[] = [
        { label: "Web Light", value: "Web Light" },
        { label: "Web Dark", value: "Web Dark" },
        { label: "Teams Light", value: "Teams Light" },
        { label: "Teams Dark", value: "Teams Dark" },
        { label: "Teams High Contrast", value: "Teams High Contrast" },
    ];

    return (
        <Context.Consumer>
            {({ settings, settingsUpdated }) => (
                <div>
                    <Label htmlFor="color-theme">Color Theme</Label>
                    <Dropdown
                        selectedOptions={[settings.appearanceSettings.colorThemeName]}
                        onOptionSelect={(_, { optionValue }) =>
                            settingsUpdated(
                                new SettingsBuilder(settings).setColorThemeName(optionValue as ColorThemeName).build()
                            )
                        }
                    >
                        {options.map(({ value, label }, index) => (
                            <Option key={`${label}-${value}-${index}`} value={value}>
                                {label}
                            </Option>
                        ))}
                    </Dropdown>
                </div>
            )}
        </Context.Consumer>
    );
};
