import { FC } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Settings } from "./Components/SettingsWindow/Settings";

const App: FC = () => (
    <HashRouter>
        <Settings />
    </HashRouter>
);

createRoot(document.getElementById("app") as HTMLDivElement).render(<App />);
