import { Mock, Times } from "moq.ts";
import { ConsoleLogger } from "../../common/Logger/ConsoleLogger";
import { Settings } from "../../common/Settings/Settings";
import { SettingsManager } from "./SettingsManager";
import { SettingsRepository } from "./SettingsRepository";

describe(SettingsManager, () => {
    const logger = new ConsoleLogger();
    const defaultSettings = <Settings>{
        "general.hideWindowOnBlur": true,
        "searchEngine.automaticRescanEnabled": true,
        "searchEngine.automaticRescanIntervalInSeconds": 300,
        "searchEngine.threshold": 0.5,
    };

    let settingsRepository: Mock<SettingsRepository>;

    beforeEach(() => {
        settingsRepository = new Mock<SettingsRepository>();
    });

    describe(SettingsManager.prototype.getSettings, () => {
        it("should return default settings when repository returns `undefined`", () => {
            settingsRepository.setup((instance) => instance.readSettings()).returns(undefined);
            const settingsManager = new SettingsManager(settingsRepository.object(), defaultSettings, logger);
            expect(settingsManager.getSettings()).toEqual(defaultSettings);
        });

        it("should merge user settings with default when repository returns some settings", () => {
            settingsRepository
                .setup((instance) => instance.readSettings())
                .returns(<Settings>{ "general.hideWindowOnBlur": false });

            const settingsManager = new SettingsManager(settingsRepository.object(), defaultSettings, logger);

            expect(settingsManager.getSettings()).toEqual(<Settings>{
                "general.hideWindowOnBlur": false,
                "searchEngine.automaticRescanEnabled": true,
                "searchEngine.automaticRescanIntervalInSeconds": 300,
                "searchEngine.threshold": 0.5,
            });
        });
    });

    describe(SettingsManager.prototype.updateSettings, () => {
        it("should update settings on the repository", () => {
            const updatedSettings = <Settings>{ "general.hideWindowOnBlur": false };

            settingsRepository.setup((instance) => instance.writeSettings(updatedSettings)).returns(Promise.resolve());

            new SettingsManager(settingsRepository.object(), defaultSettings, logger).updateSettings(updatedSettings);

            settingsRepository.verify((instance) => instance.writeSettings(updatedSettings), Times.Once());
        });
    });
});
