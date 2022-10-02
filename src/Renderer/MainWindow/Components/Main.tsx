import { FluentProvider } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { ExecutionContext } from "../../../Common/ExecutionContext";
import { IpcChannel } from "../../../Common/IpcChannel";
import { SearchResultItem } from "../../../Common/SearchResult/SearchResultItem";
import { Settings } from "../../../Common/Settings";
import { ColorThemeName, getTheme } from "../../Common/ColorThemes";
import { calculateSelectedIndex, NavigationDirection } from "../SearchResultListUtility";
import { SearchResultList } from "./SearchResultList";
import { UserInput } from "./UserInput";

type Props = {
    settings: Settings;
    executionContext: ExecutionContext;
};

export const Main: FC<Props> = ({ settings }) => {
    const [searchResultItems, setSearchResultItems] = useState<SearchResultItem[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [colorThemeName, setColorTheme] = useState<ColorThemeName>(
        settings["appearance.colorThemeName"] as ColorThemeName
    );

    const registerIpcEventListeners = () =>
        window.Bridge.ipcRenderer.on<Settings>(IpcChannel.SettingsUpdated, (_, settings) =>
            setColorTheme(settings["appearance.colorThemeName"] as ColorThemeName)
        );

    const executeSearchResultItem = async (searchResultItem: SearchResultItem, openLocation: boolean) => {
        const ipcChannel = openLocation ? IpcChannel.OpenLocation : IpcChannel.Execute;
        await window.Bridge.ipcRenderer.invoke<SearchResultItem, void>(ipcChannel, searchResultItem);
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

    const onItemClicked = (itemIndex: number) => setSelectedIndex(itemIndex);
    const onItemDoubleClicked = (itemIndex: number) => executeSearchResultItem(searchResultItems[itemIndex], false);

    const onNavigate = (navigationDirection: NavigationDirection) =>
        setSelectedIndex(calculateSelectedIndex(selectedIndex, searchResultItems.length, navigationDirection));

    useEffect(() => registerIpcEventListeners(), []);

    return (
        <FluentProvider theme={getTheme(colorThemeName)}>
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ flexShrink: 0 }}>
                    <UserInput
                        onSearchTermChanged={onSearchTermChanged}
                        onEnterPressed={onEnterPressed}
                        onNavigate={onNavigate}
                    />
                </div>
                <div style={{ flexGrow: 1, overflowX: "hidden", overflowY: "scroll" }}>
                    <SearchResultList
                        searchResultItems={searchResultItems}
                        selectedIndex={selectedIndex}
                        colorThemeName={colorThemeName}
                        onClick={onItemClicked}
                        onDoubleClick={onItemDoubleClicked}
                    />
                </div>
            </div>
        </FluentProvider>
    );
};
