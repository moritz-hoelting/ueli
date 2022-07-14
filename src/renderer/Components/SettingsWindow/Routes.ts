export enum RouteLabel {
    General = "General",
    SearchEngine = "Search Engine",
    Appearance = "Appearance",
    About = "About",
}

export interface Route {
    label: RouteLabel;
    path: string;
}

export const routes: Route[] = [
    { label: RouteLabel.General, path: "/" },
    { label: RouteLabel.Appearance, path: "/appearance" },
    { label: RouteLabel.SearchEngine, path: "/search-engine" },
    { label: RouteLabel.About, path: "/about" },
];
