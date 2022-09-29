import { FC, useContext } from "react";
import { Context } from "./Context";

export const About: FC = () => {
    const { executionContext } = useContext(Context);

    return (
        <div>
            <div>Version: {executionContext.applicationVersion}</div>
            <div>Electron: {executionContext.electronVersion}</div>
        </div>
    );
};
