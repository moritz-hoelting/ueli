import { Input } from "@fluentui/react-components";
import { FC, KeyboardEvent, useRef, useState } from "react";
import { IpcChannel } from "../../../common/IpcChannel";

interface Props {
    onSearchTermChanged: (searchTerm: string) => void;
    onKeyUp: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const UserInput: FC<Props> = ({ onSearchTermChanged, onKeyUp }) => {
    const userInputRef = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const onSearchTermChange = (updatedSearchTerm: string): void => {
        setSearchTerm(updatedSearchTerm);
        onSearchTermChanged(updatedSearchTerm ?? "");
    };

    window.Bridge.ipcRenderer.on(IpcChannel.MainWindowShown, () => {
        userInputRef?.current?.focus();
        userInputRef?.current?.select();
    });

    return (
        <Input
            ref={userInputRef}
            appearance="underline"
            size="large"
            value={searchTerm}
            onChange={(_, { value }) => onSearchTermChange(value)}
            onKeyUp={onKeyUp}
            style={{ width: "100%" }}
        />
    );
};
