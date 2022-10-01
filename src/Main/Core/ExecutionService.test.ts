import { IMock, Mock, Times } from "moq.ts";
import { ExecutionService } from "./ExecutionService";
import { Executor } from "../Executors/Executor";
import { SearchResultItemDummy } from "../../Common/SearchResult/SearchResultItemDummy";

describe(ExecutionService, () => {
    const dummyExecutorId = "DummyExecutor";
    const searchResultItemDummy = SearchResultItemDummy.withExecutorId(dummyExecutorId);
    let executor: IMock<Executor>;

    beforeEach(() => {
        executor = new Mock<Executor>()
            .setup((instance) => instance.executorId)
            .returns(dummyExecutorId)
            .setup((instance) => instance.execute(searchResultItemDummy))
            .returns(Promise.resolve());
    });

    describe(Executor.prototype.execute, () => {
        it("should succeed if the corresponding executor resolves", async () => {
            const executionService = new ExecutionService([executor.object()]);
            await executionService.execute(searchResultItemDummy);
            executor.verify((instance) => instance.execute(searchResultItemDummy), Times.Once());
        });

        it("should fail if the corresponding executor rejects", async () => {
            expect.assertions(1);

            executor.setup((instance) => instance.execute(searchResultItemDummy)).returns(Promise.reject("Failed"));

            try {
                await new ExecutionService([executor.object()]).execute(searchResultItemDummy);
            } catch (error) {
                expect(error).toBe("Failed");
            }
        });

        it("should fail if there is no corresponding executor found", async () => {
            expect.assertions(1);

            try {
                searchResultItemDummy.executorId = "Some other executor id";
                await new ExecutionService([executor.object()]).execute(searchResultItemDummy);
            } catch (error) {
                expect(error).toBe(
                    `Can't execute "${searchResultItemDummy.executionArgument}". Reason: no executor found.`
                );
            }
        });
    });
});
