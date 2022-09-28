import { FC } from "react";
import { Context } from "./Context";

export const About: FC = () => {
    return (
        <Context.Consumer>
            {({ executionContext }) => (
                <div>
                    <div>Version: {executionContext.applicationVersion}</div>
                    <div>Electron: {executionContext.electronVersion}</div>
                </div>
            )}
        </Context.Consumer>
    );
};
