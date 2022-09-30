import { Label, Switch } from "@fluentui/react-components";
import { FC, useContext } from "react";
import { Context } from "./Context";

export const GeneralSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    return (
        <div>
            <div>
                <Label htmlFor="hide-window-on-blur">Hide window on blur</Label>
                <Switch
                    id="hide-window-on-blur"
                    checked={settings["general.hideWindowOnBlur"] as boolean}
                    onChange={(_, { checked }) => settingsUpdated("general.hideWindowOnBlur", checked)}
                />
            </div>
        </div>
    );
};
