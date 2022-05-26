import { Stack, StackItem, Text } from "@fluentui/react";
import { CSSProperties, FC } from "react";
import { SearchResultItem } from "../../../common/SearchResult/SearchResultItem";
import { getColorTheme } from "../../ColorTheme/UeliColorThemes";
import { SearchResultListItemIcon } from "./SearchResultListItemIcon";

interface Props {
    searchResultItem: SearchResultItem;
    selected: boolean;
    colorThemeName: string;
}

export const SearchResultListItem: FC<Props> = ({ searchResultItem, selected, colorThemeName }) => {
    const colorTheme = getColorTheme(colorThemeName);

    const generalSearchResultItemStyle: CSSProperties = { borderRadius: 2 };

    const searchResultItemStyle: CSSProperties = selected
        ? { background: colorTheme.palette.neutralLight }
        : { opacity: 0.5 };

    return (
        <Stack
            style={Object.assign(generalSearchResultItemStyle, searchResultItemStyle)}
            horizontal
            tokens={{ childrenGap: 10, padding: 10 }}
            verticalAlign="center"
        >
            <StackItem>
                <SearchResultListItemIcon icon={searchResultItem.icon} />
            </StackItem>
            <StackItem styles={{ root: { minWidth: 0, overflow: "hidden" } }}>
                <Stack>
                    <Text variant="mediumPlus" styles={{ root: { overflow: "hidden" } }} nowrap>
                        {searchResultItem.name}
                    </Text>
                    <Text variant="smallPlus" styles={{ root: { overflow: "hidden" } }} nowrap>
                        {searchResultItem.executionArgument}
                    </Text>
                </Stack>
            </StackItem>
        </Stack>
    );
};
