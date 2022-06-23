import { FC } from "react";
import { ExecutionContext } from "../../../common/ExecutionContext";

interface Props {
    exeuctionContext: ExecutionContext;
}

export const About: FC<Props> = ({ exeuctionContext }) => {
    return (
        <div>
            <div>Version: {exeuctionContext.applicationVersion}</div>
            <div>Electron: {exeuctionContext.electronVersion}</div>
        </div>
    );
};
