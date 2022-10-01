import { SearchResultItem } from "../../Common_/SearchResult/SearchResultItem";

export interface Searchable {
    toSearchResultItem(): SearchResultItem;
}
