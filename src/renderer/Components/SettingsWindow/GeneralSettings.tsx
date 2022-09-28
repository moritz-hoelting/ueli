import { Label, Switch } from "@fluentui/react-components";
import { FC } from "react";
import { ObjectUtility } from "../../../common/ObjectUtility";
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
                            onChange={(_, { checked }) => {
                                const x = ObjectUtility.clone(settings);
                                x.generalSettings.hideWindowOnBlur = checked;
                                settingsUpdated(x);
                            }}
                        />
                    </div>
                </div>
            )}
        </Context.Consumer>
    );
};
