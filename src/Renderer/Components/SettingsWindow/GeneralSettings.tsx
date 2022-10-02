import { SwitchField } from "@fluentui/react-components/unstable";
import { FC, useContext } from "react";

import { Context } from "../../Context/SettingsContext";

export const GeneralSettings: FC = () => {
    const { settings, settingsUpdated } = useContext(Context);

    return (
        <div>
            <div>
                <SwitchField
                    label="Hide window on blur"
                    checked={settings["general.hideWindowOnBlur"] as boolean}
                    onChange={(_, { checked }) => settingsUpdated("general.hideWindowOnBlur", checked)}
                />
            </div>
        </div>
    );
};
