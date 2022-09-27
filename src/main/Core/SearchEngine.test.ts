import { IMock, Mock, Times } from "moq.ts";
import { join } from "path";
import { Logger } from "../../common/Logger/Logger";
import { SearchResultItemDummy } from "../../common/SearchResult/SearchResultItemDummy";
import { SearchEngineSettings } from "../../common/Settings/SearchEngineSettings";
import { SearchPlugin } from "../Plugins/SearchPlugin";
import { FileSystemUtility } from "../Utilities/FileSystemUtility";
import { DummySearchable } from "./DummySearchable";
import { Searchable } from "./Searchable";
import { SearchEngine } from "./SearchEngine";

describe(SearchEngine, () => {
    let logger: IMock<Logger>;
    let searchPlugin: IMock<SearchPlugin<unknown>>;

    const tempFolderPath = join(__dirname, "temp");

    const searchEngineSettings: SearchEngineSettings = {
        automaticRescanEnabled: false,
        automaticRescanIntervalInSeconds: 0,
        threshold: 0.4,
    };

    const searchables: Searchable[] = [
        new DummySearchable(SearchResultItemDummy.withName("Search Result Item 1")),
        new DummySearchable(SearchResultItemDummy.withName("Search Result Item 2")),
        new DummySearchable(SearchResultItemDummy.withName("Search Result Item 3")),
        new DummySearchable(SearchResultItemDummy.withName("Search Result Item 4")),
    ];

    const setUpLoggerMock = (): IMock<Logger> =>
        new Mock<Logger>()
            .setup((instance) => instance.debug("Debug"))
            .returns()
            .setup((instance) => instance.info("Info"))
            .returns()
            .setup((instance) => instance.warning("Warning"))
            .returns()
            .setup((instance) => instance.error("Error"))
            .returns();

    const setUpSearchPluginMock = (): IMock<SearchPlugin<unknown>> =>
        new Mock<SearchPlugin<unknown>>()
            .setup((instance) => instance.createTemporaryFolder())
            .returns(Promise.resolve())
            .setup((instance) => instance.createSettingsFileIfNotExists())
            .returns(Promise.resolve())
            .setup((instance) => instance.getTemporaryFolderPath())
            .returns(tempFolderPath)
            .setup((instance) => instance.rescan())
            .returns(Promise.resolve())
            .setup((instance) => instance.getAllSearchables())
            .returns(searchables);

    const verifyLoggerLoggedInfo = (message: string, times?: Times) =>
        logger.verify((instance) => instance.info(message), times);

    beforeEach(async () => {
        await FileSystemUtility.createFolderIfDoesntExist(tempFolderPath);
        logger = setUpLoggerMock();
        searchPlugin = setUpSearchPluginMock();
    });

    afterEach(async () => await FileSystemUtility.deleteFolderRecursively(tempFolderPath));

    it("should create plugin temp folders and trigger a rescan on instantiation", async () => {
        const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());
        await searchEngine.initialize();
        const pluginFolderExists = await FileSystemUtility.pathExists(searchPlugin.object().getTemporaryFolderPath());

        expect(pluginFolderExists).toBe(true);
        verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        verifyLoggerLoggedInfo("Successfully rescanned", Times.Once());
    });

    describe(SearchEngine.prototype.search, () => {
        it("should return an empty array if search engine is not initialized yet", async () => {
            const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());

            expect(searchEngine.search("item").length).toBe(0);
            await searchEngine.initialize();
            expect(searchEngine.search("item").length).toBe(searchables.length);

            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });

        it("should return an empty array if the search term is an empty string", async () => {
            const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());

            await searchEngine.initialize();
            const actual = searchEngine.search("");

            expect(actual.length).toBe(0);
            verifyLoggerLoggedInfo("Staring rescan", Times.Never());
        });

        it("should return all items that match the search term", async () => {
            const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());

            await searchEngine.initialize();
            const actual = searchEngine.search("Search Result Item");

            expect(actual).toEqual(searchables.map((searchable) => searchable.toSearchResultItem()));
            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });

        it("should be case insensitive", async () => {
            const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());

            await searchEngine.initialize();
            const actual = searchEngine.search("search result item");

            expect(actual).toEqual(searchables.map((searchable) => searchable.toSearchResultItem()));
            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });

        it("should return an empty array if the search term does not match any of the items", async () => {
            const searchEngine = new SearchEngine(searchEngineSettings, [searchPlugin.object()], logger.object());

            await searchEngine.initialize();
            const actual = searchEngine.search("whatever");

            expect(actual).toEqual([]);
            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });

        it("should support fuzzy search if threshold is high enough", async () => {
            const searchEngine = new SearchEngine(
                { threshold: 0.6, automaticRescanIntervalInSeconds: 0, automaticRescanEnabled: false },
                [searchPlugin.object()],
                logger.object()
            );

            await searchEngine.initialize();
            const actual = searchEngine.search("srch rslt");

            expect(actual).toEqual(searchables.map((searchable) => searchable.toSearchResultItem()));
            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });

        it("should not supporty fuzzy search if threshold is 0", async () => {
            const searchEngine = new SearchEngine(
                { threshold: 0, automaticRescanIntervalInSeconds: 0, automaticRescanEnabled: false },
                [searchPlugin.object()],
                logger.object()
            );

            await searchEngine.initialize();
            const actual = searchEngine.search("srch rslt");

            expect(actual).toEqual([]);
            verifyLoggerLoggedInfo("Starting rescan", Times.Once());
        });
    });
});
