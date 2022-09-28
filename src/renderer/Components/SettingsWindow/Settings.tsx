import { CSSProperties, FC, useState } from "react";
import { FluentProvider } from "@fluentui/react-components";
import { ColorThemeName, getTheme } from "../../ColorThemes";
import { Navigation } from "./Navigation";
import { Route, Routes } from "react-router-dom";
import { GeneralSettings } from "./GeneralSettings";
import { SearchEngineSettings } from "./SearchEngineSettings";
import { AppearanceSettings } from "./AppearanceSettings";
import { About } from "./About";
import { getExecutionContext, getSettings } from "../../Actions";

export const Settings: FC = () => {
    const executionContext = getExecutionContext();
    const settings = getSettings();

    const [colorThemeName, setColorThemeName] = useState<ColorThemeName>(settings.appearanceSettings.colorThemeName);
    const [hideWindowOnBlur, setHideWindowOnBlur] = useState<boolean>(settings.generalSettings.hideWindowOnBlur);
    const [threshold, setThreshold] = useState<number>(settings.searchEngineSettings.threshold);

    const [automaticRescanEnabled, setAutomaticRescanEnabled] = useState<boolean>(
        settings.searchEngineSettings.automaticRescanEnabled
    );

    const [automaticRescanIntervalInSeconds, setAutomaticRescanIntervalInSeconds] = useState<number>(
        settings.searchEngineSettings.automaticRescanIntervalInSeconds
    );

    const routes: { path: string; element: JSX.Element }[] = [
        {
            path: "/about",
            element: <About exeuctionContext={executionContext} />,
        },
        {
            path: "/appearance",
            element: <AppearanceSettings colorThemeName={colorThemeName} colorThemeNameUpdated={setColorThemeName} />,
        },
        {
            path: "/",
            element: (
                <GeneralSettings hideWindowOnBlur={hideWindowOnBlur} hideWindowOnBlurUpdated={setHideWindowOnBlur} />
            ),
        },
        {
            path: "/search-engine",
            element: (
                <SearchEngineSettings
                    automaticRescanEnabled={automaticRescanEnabled}
                    automaticRescanEnabledUpdated={setAutomaticRescanEnabled}
                    automaticRescanInterval={automaticRescanIntervalInSeconds}
                    automaticRescanIntervalUpdated={setAutomaticRescanIntervalInSeconds}
                    threshold={threshold}
                    thresholdUpdated={setThreshold}
                />
            ),
        },
    ];

    const fluentProviderStyle: CSSProperties = { height: "100vh", padding: 10, boxSizing: "border-box" };

    return (
        <FluentProvider theme={getTheme(colorThemeName)} style={fluentProviderStyle}>
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
