import { CSSProperties, FC } from "react";
import { FluentProvider } from "@fluentui/react-components";
import { getTheme } from "../../ColorThemes";
import { Navigation } from "./Navigation";
import { Route, Routes } from "react-router-dom";
import { GeneralSettings } from "./GeneralSettings";
import { SearchEngineSettings } from "./SearchEngineSettings";
import { AppearanceSettings } from "./AppearanceSettings";
import { About } from "./About";
import { Context } from "./Context";

export const Settings: FC = () => {
    const routes: { path: string; element: JSX.Element }[] = [
        { path: "/about", element: <About /> },
        { path: "/appearance", element: <AppearanceSettings /> },
        { path: "/", element: <GeneralSettings /> },
        { path: "/search-engine", element: <SearchEngineSettings /> },
    ];

    const fluentProviderStyle: CSSProperties = { height: "100vh", padding: 10, boxSizing: "border-box" };

    return (
        <Context.Consumer>
            {({ settings }) => (
                <FluentProvider
                    theme={getTheme(settings.appearanceSettings.colorThemeName)}
                    style={fluentProviderStyle}
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
            )}
        </Context.Consumer>
    );
};
