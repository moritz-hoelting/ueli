import { FluentProvider } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { IpcChannel } from "../../../common/IpcChannel";
import { SearchResultItem } from "../../../common/SearchResult/SearchResultItem";
import { Settings } from "../../../common/Settings/Settings";
import { getSettings } from "../../Actions";
import { ColorThemeName, getTheme } from "../../ColorThemes";
import { SearchResultList } from "./SearchResultList";
import { calculateSelectedIndex, NavigationDirection } from "./SearchResultListUtility";
import { UserInput } from "./UserInput";

export const Main: FC = () => {
    const [searchResultItems, setSearchResultItems] = useState<SearchResultItem[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [colorThemeName, setColorTheme] = useState<ColorThemeName>(getSettings().appearanceSettings.colorThemeName);

    const registerIpcEventListeners = () =>
        window.Bridge.ipcRenderer.on<Settings>(IpcChannel.SettingsUpdated, (_, { appearanceSettings }) =>
            setColorTheme(appearanceSettings.colorThemeName)
        );

    const executeSearchResultItem = (searchResultItem: SearchResultItem, openLocation: boolean): Promise<void> => {
        const ipcChannel = openLocation ? IpcChannel.OpenLocation : IpcChannel.Execute;
        return window.Bridge.ipcRenderer.invoke<SearchResultItem, void>(ipcChannel, searchResultItem);
    };

    const onSearchTermChanged = async (searchTerm: string) => {
        const result = await window.Bridge.ipcRenderer.invoke<unknown, SearchResultItem[]>(
            IpcChannel.Search,
            searchTerm
        );

        setSearchResultItems(result);
        setSelectedIndex(0);
    };

    const onEnterPressed = (ctrlOrMetaKeyPressed: boolean) =>
        executeSearchResultItem(searchResultItems[selectedIndex], ctrlOrMetaKeyPressed);

    const onNavigate = (navigationDirection: NavigationDirection) =>
        setSelectedIndex(calculateSelectedIndex(selectedIndex, searchResultItems.length, navigationDirection));

    useEffect(() => registerIpcEventListeners(), []);

    return (
        <FluentProvider theme={getTheme(colorThemeName)} style={{ height: "100vh" }}>
            <div>
                <div>
                    <UserInput
                        onSearchTermChanged={onSearchTermChanged}
                        onEnterPressed={onEnterPressed}
                        onNavigate={onNavigate}
                    />
                </div>
                <div>
                    <SearchResultList
                        searchResultItems={searchResultItems}
                        selectedIndex={selectedIndex}
                        colorThemeName={colorThemeName}
                    />
                </div>
            </div>
        </FluentProvider>
    );
};
