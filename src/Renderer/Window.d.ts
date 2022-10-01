import { Bridge } from "../Common/Bridge";

declare global {
    interface Window {
        Bridge: Bridge;
    }
}
