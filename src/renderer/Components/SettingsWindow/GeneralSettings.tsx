import { Label, Switch } from "@fluentui/react-components";
import { FC } from "react";

interface Props {
    hideWindowOnBlur: boolean;
    hideWindowOnBlurUpdated: (updatedValue: boolean) => void;
}

export const GeneralSettings: FC<Props> = ({ hideWindowOnBlur, hideWindowOnBlurUpdated }) => (
    <div>
        <div>
            <Label htmlFor="hide-window-on-blur">Hide window on blur</Label>
            <Switch
                id="hide-window-on-blur"
                checked={hideWindowOnBlur}
                onChange={(_, { checked }) => hideWindowOnBlurUpdated(checked)}
            />
        </div>
    </div>
);
