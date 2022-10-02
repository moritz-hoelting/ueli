import { createRoot } from "react-dom/client";
import { getExecutionContext, getSettings } from "../Actions";
import { Main } from "./Components/Main";

createRoot(document.getElementById("app") as HTMLDivElement).render(
    <Main settings={getSettings()} executionContext={getExecutionContext()} />
);
