import { Text } from "@fluentui/react-components";
import { FC } from "react";
import { SearchResultItem } from "../../../common/SearchResult/SearchResultItem";
import { SearchResultListItemIcon } from "./SearchResultListItemIcon";

interface Props {
    searchResultItem: SearchResultItem;
    selected: boolean;
    colorThemeName: string;
}

export const SearchResultListItem: FC<Props> = ({ searchResultItem }) => {
    return (
        <div>
            <div>
                <SearchResultListItemIcon icon={searchResultItem.icon} />
            </div>
            <div>
                <div>
                    <Text>{searchResultItem.name}</Text>
                    <Text>{searchResultItem.executionArgument}</Text>
                </div>
            </div>
        </div>
    );
};
