import { IMock, Mock, Times } from "moq.ts";
import { SearchResultItem } from "../../Common/SearchResult/SearchResultItem";
import { SearchResultItemDummy } from "../../Common/SearchResult/SearchResultItemDummy";
import { LocationOpener } from "../LocationOpeners/LocationOpener";
import { LocationOpeningService } from "./LocationOpeningService";

describe(LocationOpeningService, () => {
    const dummyLocationOpenerId = "LocationOpenerDummy";
    const searchResultItemDummy = SearchResultItemDummy.withLocationOpenerId(dummyLocationOpenerId);
    let locationOpener: IMock<LocationOpener>;

    beforeEach(() => {
        locationOpener = new Mock<LocationOpener>()
            .setup((instance) => instance.locationOpenerId)
            .returns(dummyLocationOpenerId)
            .setup((instance) => instance.openLocation(searchResultItemDummy))
            .returns(Promise.resolve());
    });

    describe(LocationOpeningService.prototype.openLocation, () => {
        it("should succeed if there is an corresponding location opener", async () => {
            const locationOpeningService = new LocationOpeningService([locationOpener.object()]);
            await locationOpeningService.openLocation(searchResultItemDummy);

            locationOpener.verify((instance) => instance.openLocation(searchResultItemDummy), Times.Once());
        });

        it("should fail if the corresponding location opener fails", async () => {
            expect.assertions(1);

            locationOpener
                .setup((instance) => instance.openLocation(searchResultItemDummy))
                .returns(Promise.reject("Failed"));

            try {
                await new LocationOpeningService([locationOpener.object()]).openLocation(searchResultItemDummy);
            } catch (error) {
                expect(error).toBe("Failed");
            }
        });

        it("should fail if there is no corresponding location opener", async () => {
            expect.assertions(1);

            try {
                await new LocationOpeningService([locationOpener.object()]).openLocation(<SearchResultItem>{
                    locationOpenerId: "Some other opener id",
                });
            } catch (error) {
                expect(error).toBe(
                    `Unable to open location for "Some other opener id". Reason: no location opener found.`
                );
            }
        });
    });
});
