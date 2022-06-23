import { FC, useState } from "react";
import { FluentProvider } from "@fluentui/react-components";
import { ColorThemeName, getTheme } from "../../ColorThemes";
import { Navigation } from "./Navigation";
import { Route, Routes } from "react-router-dom";
import { GeneralSettings } from "./GeneralSettings";
import { SearchEngineSettings } from "./SearchEngineSettings";
import { AppearanceSettings } from "./AppearanceSettings";
import { getSettings } from "../../Actions";

export const Settings: FC = () => {
    const [colorThemeName, setColorThemeName] = useState<ColorThemeName>(
        getSettings().appearanceSettings.colorThemeName
    );

    return (
        <FluentProvider
            theme={getTheme(colorThemeName)}
            style={{ height: "100vh", padding: 10, boxSizing: "border-box" }}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                <div>
                    <Navigation />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<GeneralSettings />} />
                        <Route path="/search-engine" element={<SearchEngineSettings />} />
                        <Route
                            path="/appearance"
                            element={
                                <AppearanceSettings
                                    colorTheme={colorThemeName}
                                    onColorThemeChanged={setColorThemeName}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </FluentProvider>
    );
};
