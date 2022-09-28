import { Label, Switch } from "@fluentui/react-components";
import { FC } from "react";
import { SettingsBuilder } from "../../../common/Settings/SettingsBuilder";
import { Context } from "./Context";

export const GeneralSettings: FC = () => {
    return (
        <Context.Consumer>
            {({ settings, settingsUpdated }) => (
                <div>
                    <div>
                        <Label htmlFor="hide-window-on-blur">Hide window on blur</Label>
                        <Switch
                            id="hide-window-on-blur"
                            checked={settings.generalSettings.hideWindowOnBlur}
                            onChange={(_, { checked }) =>
                                settingsUpdated(new SettingsBuilder(settings).setHideWindowOnBlur(checked).build())
                            }
                        />
                    </div>
                </div>
            )}
        </Context.Consumer>
    );
};
