import { Label, Switch } from "@fluentui/react-components";
import { FC, useState } from "react";
import { getSettings, saveSettings } from "../../Actions";

export const GeneralSettings: FC = () => {
    const settings = getSettings();
    const [hideWindowOnBlur, setHideWindowOnBlur] = useState<boolean>(settings.generalSettings.hideWindowOnBlur);

    const toggleHideWindowOnBlur = async () => {
        settings.generalSettings.hideWindowOnBlur = !hideWindowOnBlur;
        setHideWindowOnBlur(settings.generalSettings.hideWindowOnBlur);
        await saveSettings(settings);
    };

    return (
        <div>
            <div>
                <Label htmlFor="hide-window-on-blur">Hide window on blur</Label>
                <Switch id="hide-window-on-blur" checked={hideWindowOnBlur} onChange={() => toggleHideWindowOnBlur()} />
            </div>
        </div>
    );
};
