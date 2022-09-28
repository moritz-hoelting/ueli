import { Settings } from "./Settings";
import { SettingsBuilder } from "./SettingsBuilder";

describe(SettingsBuilder, () => {
    describe(SettingsBuilder.prototype.build, () => {
        it("should correctly build settings object", () => {
            const actual = new SettingsBuilder(<Settings>{
                appearanceSettings: {},
                generalSettings: {},
                searchEngineSettings: {},
            })
                .setColorThemeName("Teams Dark")
                .setHideWindowOnBlur(true)
                .setSearchEngineThreshold(0.1)
                .setSearchEngineAutomaticRescanEnabled(true)
                .setSearchEngineAutomaticRescanIntervalInSeconds(200)
                .build();

            expect(actual).toEqual(<Settings>{
                appearanceSettings: { colorThemeName: "Teams Dark" },
                generalSettings: { hideWindowOnBlur: true },
                searchEngineSettings: {
                    automaticRescanEnabled: true,
                    automaticRescanIntervalInSeconds: 200,
                    threshold: 0.1,
                },
            });
        });
    });
});
