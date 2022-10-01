import { Bridge } from "../Common_/Bridge";

declare global {
    interface Window {
        Bridge: Bridge;
    }
}
