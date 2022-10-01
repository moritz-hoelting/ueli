import { SearchResultItem } from "../../Common/SearchResult/SearchResultItem";

export interface Searchable {
    toSearchResultItem(): SearchResultItem;
}
