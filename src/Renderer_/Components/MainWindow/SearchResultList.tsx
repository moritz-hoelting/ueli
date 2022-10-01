import { FC } from "react";
import { SearchResultItem } from "../../../Common_/SearchResult/SearchResultItem";
import { ColorThemeName } from "../../ColorThemes";
import { SearchResultListItem } from "./SearchResultListItem";

type Props = {
    searchResultItems: SearchResultItem[];
    selectedIndex: number;
    colorThemeName: ColorThemeName;
    onClick: (itemIndex: number) => void;
    onDoubleClick: (itemIndex: number) => void;
};

export const SearchResultList: FC<Props> = ({
    searchResultItems,
    selectedIndex,
    colorThemeName,
    onClick,
    onDoubleClick,
}) => (
    <>
        {searchResultItems.map((searchResultItem, index) => (
            <SearchResultListItem
                key={`${searchResultItem.executionArgument}-${index === selectedIndex}`}
                searchResultItem={searchResultItem}
                selected={index === selectedIndex}
                colorThemeName={colorThemeName}
                onClick={() => onClick(index)}
                onDoubleClick={() => onDoubleClick(index)}
            />
        ))}
    </>
);
