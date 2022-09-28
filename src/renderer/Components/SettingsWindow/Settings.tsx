import { FC, useState } from "react";
import { FluentProvider } from "@fluentui/react-components";
import { ColorThemeName, getTheme } from "../../ColorThemes";
import { Navigation } from "./Navigation";
import { Route, Routes } from "react-router-dom";
import { GeneralSettings } from "./GeneralSettings";
import { SearchEngineSettings } from "./SearchEngineSettings";
import { AppearanceSettings } from "./AppearanceSettings";
import { About } from "./About";
import { ExecutionContext } from "../../../common/ExecutionContext";
import { Settings as UserSettings } from "../../../common/Settings/Settings";

interface Props {
    settings: UserSettings;
    executionContext: ExecutionContext;
}

export const Settings: FC<Props> = ({ executionContext, settings }) => {
    const [colorThemeName, setColorThemeName] = useState<ColorThemeName>(settings.appearanceSettings.colorThemeName);

    const routes: { path: string; element: JSX.Element }[] = [
        {
            path: "/about",
            element: <About exeuctionContext={executionContext} />,
        },
        {
            path: "/appearance",
            element: <AppearanceSettings colorTheme={colorThemeName} onColorThemeChanged={setColorThemeName} />,
        },
        {
            path: "/",
            element: <GeneralSettings />,
        },
        {
            path: "/search-engine",
            element: <SearchEngineSettings />,
        },
    ];

    return (
        <FluentProvider
            theme={getTheme(colorThemeName)}
            style={{ height: "100vh", padding: 10, boxSizing: "border-box" }}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                <Navigation />
                <div style={{ flexGrow: 1 }}>
                    <Routes>
                        {routes.map(({ path, element }, index) => (
                            <Route key={`${path}-${index}`} path={path} element={element} />
                        ))}
                    </Routes>
                </div>
            </div>
        </FluentProvider>
    );
};
