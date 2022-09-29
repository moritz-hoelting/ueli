import { Label, Switch } from "@fluentui/react-components";
import { FC, useContext } from "react";
import { SettingsBuilder } from "../../../common/Settings/SettingsBuilder";
import { Context } from "./Context";

export const GeneralSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    return (
        <div>
            <div>
                <Label htmlFor="hide-window-on-blur">Hide window on blur</Label>
                <Switch
                    id="hide-window-on-blur"
                    checked={settings.generalSettings.hideWindowOnBlur}
                    onChange={(_, { checked }) =>
                        settingsUpdated(SettingsBuilder.fromSettings(settings).setHideWindowOnBlur(checked).build())
                    }
                />
            </div>
        </div>
    );
};
