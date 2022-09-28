import { createRoot } from "react-dom/client";
import { Main } from "./Components/MainWindow/Main";

createRoot(document.getElementById("app") as HTMLDivElement).render(<Main />);
