import { TranslationSet } from "./translation-set";

export const japaneseTranslationSet: TranslationSet = {
    trayIconShow: "表示",
    trayIconSettings: "設定",
    trayIconQuit: "終了",

    userConfirmationProceed: "続行しますか？",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "検索結果が見つかりません",

    refreshingIndexesPending: "インデックスを再作成しています",

    ueliCommandClearCaches: "キャッシュの消去",
    ueliCommandClearCachesDescription: "全てのプラグインのキャッシュを消去",
    ueliCommandEditSettingsFile: "設定ファイルの編集",
    ueliCommandEditSettingsFileDescription: "デフォルトのテキストエディタで設定ファイルを編集",
    ueliCommandExit: "終了",
    ueliCommandExitDescription: "ueli アプリケーションを終了",
    ueliCommandOpenSettings: "設定",
    ueliCommandOpenSettingsDescription: "設定の変更",
    ueliCommandRefreshIndexes: "インデックスの再作成",
    ueliCommandRefreshIndexesDescription: "全てのプラグインのインデックスを再作成",
    ueliCommandReload: "再読み込み",
    ueliCommandReloadDescription: "ueli の再読み込み",

    generalErrorTitle: "エラーが発生しました",
    generalErrorDescription: "詳細はログを確認してください",

    successfullyRefreshedIndexes: "インデックスの再作成が正常に終了しました",
    successfullyClearedCaches: "キャッシュの消去が正常に終了しました",
    successfullyUpdatedconfig: "設定が正常に更新されました",
    successfullyClearedExecutionLog: "実行ログの消去が正常に終了しました",

    commandlineSearchResultDescription: "{{command}} を実行",

    noFavoritesFoundDescription: "実行ログが空です",
    noFavoritesFoundTitle: "お気に入りが見つかりません",

    // settings
    settings: "設定",

    generalSettingsMenuSection: "全般",
    pluginSettingsMenuSection: "プラグイン",

    generalSettings: "全般",
    generalSettingsLanguage: "言語",
    generalSettingsLogExecution: "実行ログの記録",
    generalSettingsPersistentUserInput: "入力内容を残す",
    generalSettingsAutostartApp: "システム起動時に自動起動",
    generalSettingsShowTrayIcon: "トレイアイコンの表示",
    generalSettingsClearCachesOnExit: "終了時にキャッシュをクリア",
    generalSettingsHotKey: "ホットキー",
    generalSettingsRescanIntervalEnabled: "定期的な再スキャン",
    generalSettingsRescanInterval: "再スキャンの間隔 (秒)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "常にプライマリディスプレイに表示",
    generalSettingsRememberWindowPosition: "ウィンドウ位置を記憶",
    generalSettingsExportSettings: "現在の設定のエクスポート",
    generalSettingsSuccessfullyExportedSettings: "設定が正常にエクスポートされました",
    generalSettingsImportSettings: "設定のインポート",
    generalSettingsImportFileFilterJsonFiles: "JSON ファイル",
    generalSettingsImportErrorInvalidConfig: "設定のインポートに失敗: ファイルの内容が無効のようです",
    generalSettingsResetAllSettings: "全ての設定をデフォルトにリセット",
    generalSettingsResetWarning: "全ての全般設定をデフォルトにリセットします。続行しますか？",
    generalSettingsResetAllSettingsWarning: "全ての設定をデフォルトにリセットします。続行しますか？",
    generalSettingsClearExecutionLogWarning: "実行ログを消去します。続行しますか？",
    generalSettingsHideMainWindowAfterExecution: "実行後にウィンドウを非表示にする",
    generalSettingsHideMainWindowOnBlur: "フォーカスを失った際にウィンドウを非表示にする",
    generalSettingsDecimalSeparator: "小数点記号",
    generalSettingsCheckingForUpdate: "更新が利用可能かどうか確認する",
    generalSettingsDownloadUpdate: "更新のダウンロード",
    generalSettingsDownloadingUpdate: "更新のダウンロード中",
    generalSettingsLatestVersion: "最新バージョンです！",
    generalSettingsErrorWhileCheckingForUpdate: "更新の確認中にエラーが発生しました",
    clearExecutionLog: "実行ログの消去",
    openDebugLog: "デバッグログを開く",
    openTempFolder: "一時フォルダーを開く",

    hotkeyKeyBackspace: "Backspace",
    hotkeyKeyDelete: "Delete",
    hotkeyKeyDown: "Down",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Left",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Return",
    hotkeyKeyRight: "Right",
    hotkeyKeySpace: "Space",
    hotkeyKeyTab: "Tab",
    hotkeyKeyUp: "Up",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Ctrl",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Shift",
    hotkeyModifierSuper: "Super",

    appearanceSettings: "外観",
    appearanceSettingsWindowWidth: "ウィンドウ幅 (ピクセル)",
    appearanceSettingsMaxSearchResultsPerPage: "ページごとの検索結果最大件数",
    appearanceSettingsSearchResultHeight: "検索結果の高さ (ピクセル)",
    appearanceSettingsSmoothScrolling: "スムーズスクロール",
    appearanceSettingsUserInputHeight: "入力欄の高さ (ピクセル)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "全ての検索結果に説明を表示",
    appearanceSettingsShowSearchIcon: "検索領域に検索アイコンを表示",
    appearanceSettingsShowSearchResultNumbers: "検索結果の番号を表示",
    appearanceSettingsResetWarningMessage: "全ての外観設定をデフォルトにリセットします。続行しますか？",
    appearanceSettingsAllowTransparentBackground: "背景の透過を許可",
    appearanceSettingsFontFamily: "フォントファミリ",
    appearanceSettingsUserInputBorderRadius: "入力欄の境界コーナー半径",
    appearanceSettingsUserInputBottomMargin: "入力欄下側のマージン (ピクセル)",
    appearanceSettingsSearchResultsBorderRadius: "検索結果の境界コーナー半径",
    appearanceSettingsScrollbarBorderRadius: "スクロールバーの境界コーナー半径",
    appearanceSettingsBorderRadiusDescription:
        "CSS の値を指定するため '10px' あるいは個別のコーナー設定の場合は '10px 0px 10px 5px' のように 'px' を付加する必要があります",
    appearanceSettingsUserInputFontWeight: "入力欄のフォント太さ",
    appearanceSettingsSearchResultNameFontWeight: "検索結果名のフォント太さ",
    appearanceSettingsSearchResultDescriptionFontWeight: "検索結果説明のフォント太さ",
    appearanceSettingsUserInputFontSize: "入力欄のフォントサイズ",
    appearanceSettingsSearchResultDescriptionFontSize: "検索結果名のフォントサイズ",
    appearanceSettingsSearchResultNameFontSize: "検索結果説明フォントサイズ",

    settingsUserInputTitle: "入力欄",
    settingsSearchResultsBoxTitle: "検索結果",
    settingsScrollbarTitle: "スクロールバー",
    settingsGeneralTitle: "全般",

    colorThemeSettings: "配色テーマ",
    colorThemeSettingsImportColorTheme: "配色テーマのインポート",
    colorThemeSettingsExportColorTheme: "配色テーマのエクスポート",
    colorThemeSettingsResetWarning: "全ての配色テーマ設定をデフォルトにリセットします。続行しますか？",
    colorThemeExportSucceeded: "配色テーマが正常にエクスポートされました",
    colorThemeExportFailed: "配色テーマのエクスポートに失敗しました",
    colorThemeImportSucceeded: "配色テーマが正常にインポートされました",
    colorThemeImportFailed: "配色テーマのインポートに失敗しました",
    colorThemeInvalidColorTheme: "無効な配色テーマ",
    colorThemePresets: "プリセット",
    colorthemeUserInputBackgroundColor: "入力欄の背景色",
    colorThemeUserInputTextColor: "入力欄の文字色",
    colorThemeSearchResultsBackgroundColor: "検索結果の背景色",
    colorThemeSearchResultsItemActiveBackgroundColor: "アクティブな検索結果の背景色",
    colorThemeSearchResultsItemActiveTextColor: "アクティブな検索結果の文字色",
    colorThemeSearchResultsItemActiveDescriptionColor: "アクティブな検索結果の説明の文字色",
    colorThemeSearchResutlsItemNameTextColor: "検索結果の名称の文字色",
    colorThemeSearchResultsItemDescriptionTextColor: "検索結果の説明の文字色",
    colorThemeScrollbarForegroundColor: "スクロールバー前景色",
    colorThemeScrollbarBackgroundColor: "スクロールバー背景色",

    colorPicker: "カラーピッカー",

    applicationSearchSettings: "アプリケーション検索",
    applicationSearchSettingsDescription: `コンピューター上のアプリケーションを検索するプラグインです。アプリケーションがインストールされているフォルダーの場所、アプリケーションとして認識するファイルの拡張子を指定できます。`,
    applicationSearchSettingsApplicationFolders: "アプリケーションフォルダー",
    applicationSearchSettingsApplicationFolder: "アプリケーションフォルダー",
    applicationSearchSettingsFolderPath: "フォルダーのパス",
    applicationSearchSettingsRemoveAction: "削除",
    applicationSearchSettingsAddApplicationFolder: "アプリケーションフォルダーの追加",
    applicationSearchSettingsApplicationFileExtensions: "アプリケーションファイル拡張子",
    applicationSearchSettingsApplicationFileExtension: "ファイル拡張子",
    applicationSearchSettingsAddApplicationFileExtension: "ファイル拡張子の追加",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" は有効な拡張子ではありません`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}}" はフォルダーではありません`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}}" は存在しません`,
    applicationSearchSettingsFolderValidationError: `"{{value}}" の検証中にエラーが発生しました`,
    applicationSearchSettingsUseNativeIcons: "ネイティブなアイコンを使用 (無効にするとパフォーマンスが向上するかも)",

    searchEngineSettings: "検索エンジン",
    searchEngineSettingsDescription: `検索エンジンはアプリケーション、ショートカット及びオペレーティングシステムの設定・コマンドのように事前にインデックスが作成された項目に対して利用されます。`,
    searchEngineSettingsFuzzyness: "曖昧度",
    searchEngineSettingsFuzzynessDescription: "0 = 厳密, 1 = 曖昧",
    searchEngineSettingsStrict: "厳密",
    searchEngineSettingsFuzzy: "曖昧",
    searchEngineSettingsBlacklist: "ブラックリスト",
    searchEngineSettingsMaxSearchResults: "検索結果最大件数",
    searchEngineSettingsResetWarning: "全ての検索エンジン設定をデフォルトにリセットします。続行しますか？",

    shortcutSettings: "ショートカット",
    shortcutSettingsDescription: `このプラグインは独自のショートカットを設定することで素早くファイルやウェブサイトをオープンすることができます。`,
    shortcutSettingsTableType: "種別",
    shortcutSettingsTableName: "名称",
    shortcutSettingsTableExecutionArgument: "実行時引数",
    shortcutSettingsTableDescription: "説明",
    shortcutSettingsTableTags: "タグ",
    shortcutSettingsTableIcon: "アイコン",
    shortcutSettingsTableEdit: "編集",
    shortcutSettingsTableDelete: "削除",
    shortcutSettingsAddShortcut: "ショートカットの追加",
    shortcutSettingsEditModalImageUrl: "画像 URL",
    shortcutSettingsEditModalSvgString: "SVG 文字列",
    shortcutSettingsEditModalColor: "色",
    shortcutSettingsEditModalGoogleWebsite: "Google ウェブサイト",
    shortcutSettingsEditModalDownloadsFolder: "ダウンロードフォルダー",
    shortcutSettingsEditModalCommand: "コマンド",
    shortcutSettingsInvalidShortcutErrorMessage: "無効なショートカット",
    shortcutSettingsTagPlaceholder: "タグを追加してエンターを押下",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "コマンドラインツール",
    shortcutSettingsEditModalCommandLinetoolDescription: "Visual Studio Code でファイルを編集",
    shortcutSettingsNeedsUserConfirmation: "実行前に確認が必要",

    translationSettingsTranslation: "翻訳",
    translationSettingsDescription: `このプラグインは単語あるいは短文を素早く翻訳することができます。Linguee (https://linguee.de) の非公式 API (https://github.com/imankulov/linguee-api) を使用しており、不安定になる可能性があります。`,
    translationSettingsDebounceDelay: "デバウンス遅延 (ミリ秒)",
    translationSettingsMinSearchTermLength: "検索語の最小長さ",
    translationSettingsPrefix: "プレフィックス",
    translationSettingsSourceLanguage: "原文の言語",
    translationSettingsTargetLanguage: "訳文の言語",

    everythingSearch: "Everything 検索",
    everythingSearchSettingDescription: `このプラグインは Everything 検索を使用してローカルファイルシステムのファイルやフォルダを見つけることができます。https://www.voidtools.com/downloads/ より "Everything" 及び "Everything Command-line Interface" をインストールする必要があります。両者のインストール完了後 'es.exe' のファイルパスを以下で指定する必要があります。`,
    everythingSearchPathToBinary: `"es.exe" のパス`,
    everythingSearchPrefix: "プレフィックス",
    everythingSearchMaxSearchResults: "最大検索件数",
    everythingSearchPathToBinaryFilterName: "実行ファイル",

    mdfindSearch: "mdfind 検索",
    mdfindSettingsDescription:
        "このプラグインは macOS ネイティブの検索を利用してローカルファイルシステムのファイルやフォルダを検索することができます。",
    mdfindSearchDebounceDelay: "デバウンス遅延 (ミリ秒)",
    mdfindSearchPrefix: "プレフィックス",
    mdfindSearchMaxSearchResults: "最大検索件数",

    websearch: "ウェブ検索",
    websearchSettingDescription: `このプラグインは独自のウェブ検索エンジンを設定することでお気に入りのウェブ検索エンジンでインターネットを検索することができます。`,
    websearchEngines: "ウェブ検索エンジン",
    websearchEditingModalTitleAdd: "ウェブ検索エンジンの追加",
    websearchEditingModalTitleEdit: "ウェブ検索エンジンの編集",
    websearchName: "名称",
    websearchPrefix: "プレフィックス",
    websearchUrl: "URL",
    websearchSuggestionUrl: "サジェスト URL",
    websearchIcon: "アイコン",
    websearchPriority: "優先度",
    websearchIsFallback: "フォールバック",
    websearchEncodeSearchTerm: "検索語のエンコード",
    websearchInvalidWebsearchEngine: "無効なウェブ検索エンジンです",
    websearchDescription: `{{websearch_engine}} で "{{search_term}}" を検索する`,

    fileBrowser: "ファイルブラウザー",
    fileBrowserSettingsDescription: `このプラグインはローカルファイルシステムにざっと目を通すことができます。開始するには有効な絶対ファイルパスを入力する必要があります。`,
    fileBrowserSettingsMaxSearchResults: "検索最大件数",
    fileBrowserOptionsShowHiddenFiles: "隠しファイルの表示",
    fileBrowserOptionsBlackList: "ブラックリスト",
    fileBrowserOptionsBlackListPlaceholder: "ファイルもしくはフォルダ名称",

    operatingSystemCommands: "オペレーティングシステムコマンド",
    operatingSystemCommandsSettingsDescription: `オペレーティングシステムコマンドは例えばコンピューターのシャットダウンや再起動といったオペレーティングシステムをコントロールする基本的なコマンドです。`,

    operatingSystemSettings: "オペレーティングシステム設定",
    operatingSystemSettingsSettingsDescription:
        "このプラグインはオペレーションシステムの設定を素早く探し出すことができます。",

    macOsShutdown: "シャットダウン",
    macOsShutdownDescription: "コンピューターをシャットダウンする",
    macOsRestart: "再起動",
    macOsRestartDescription: "コンピューターを再起動する",
    macOsLogout: "ログアウト",
    macOsLogoutDescription: "現在のユーザーをログアウトする",
    macOsSleep: "スリープ",
    macOsSleepDescription: "コンピューターをスリープする",
    macOsLock: "ロック",
    macOsLockDescription: "コンピュータをロックする",

    windowsShutdown: "シャットダウン",
    windowsShutdownDescription: "コンピューターをシャットダウンする",
    windowsRestart: "再起動",
    windowsRestartDescription: "コンピューターを再起動する",
    windowsReboot: "リブート",
    windowsSignout: "サインアウト",
    windowsSignoutDescription: "現在のユーザーをサインアウトする",
    windowsLock: "ロック",
    windowsLockDescription: "コンピューターをロックする",
    windowsSleep: "スリープ",
    windowsSleepDescription: "コンピューターをスリープ状態にする",
    windowsHibernation: "休止",
    windowsHibernationDescription: "コンピューターを休止状態にする",

    calcuator: "計算機",
    calculatorCopyToClipboard: "エンターを押下してクリップボードにコピー",
    calculatorDescription: "このプラグインで簡単な計算を素早く行うことができます。",
    calculatorPrecision: "精度",

    openUrlWithBrowser: "ウェブブラウザーで開く",
    url: "URL",
    urlDescription: "このプラグインは URL を入力することで素早くウェブサイトを開くことができます。",
    urlDefaultProtocol: "デフォルトのプロトコル",

    email: "Eメール",
    emailSettingsDescription:
        "このプラグインはEメールアドレスを入力することで素早くEメールを書き始めることができます。",
    openNewMail: "新しいEメールを開く",

    currencyConverter: "通貨コンバーター",
    currencyConverterDescription:
        "このプラグインは素早く通貨を変換することができます。最新の交換レートは https://exchangeratesapi.io/ より提供されます。",
    currencyConverterPrecision: "精度",
    currencyConverterCopyToClipboard: "エンターを押下してクリップボードにコピー",

    workflows: "ワークフロー",
    workflowSettingsDescription: "このプラグインは複数の物事を一度に実行することができます。",
    workflowSettingsAddWorkflow: "ワークフローの追加",
    workflowName: "名称",
    workflowNamePlaceholder: "ワークフローの名称をここに記述",
    workflowDescription: "説明",
    workflowDescriptionPlaceholder: "ワークフローの説明をここに記述",
    workflowTags: "タグ",
    workflowIcon: "アイコン",
    workflowExecutionSteps: "実行ステップ",
    workflowExecutionArgumentType: "実行引数型",
    workflowExecutionArgumentTypeCommandlineTool: "コマンドラインツール",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "無効な実行ステップ",
    workflowInvalidWorkflow: "無効なワークフロー",
    workflowNeedsUserConfirmationBeforeExecution: "実行前に確認が必要",

    commandline: "コマンドライン",
    commandlinePrefix: "プレフィックス",
    commandlineSettingsDescription: "このプラグインはコマンドラインのコマンドを素早く実行することができます。",
    commandlineShell: "シェル",

    simpleFolderSearch: "シンプルフォルダー検索",
    simpleFolderSearchDescription: "このプラグインはファイルやフォルダーを素早く検索することができます。",
    simpleFolderSearchRecursive: "再帰的なファイルスキャン",
    simpleFolderSearchExcludeHiddenFiles: "隠しファイルを除外",
    simpleFolderSearchFolderPath: "フォルダーパス",
    simpleFolderSearchAddFolder: "フォルダーの追加",
    simpleFolderSearchEditFolder: "フォルダーの編集",

    uwpSettingsDescription: "このプラグインはインストール済みの UWP アプリケーションを探すことができます。",

    colorConverter: "カラーコンバーター",
    colorConverterDescription: "このプラグインは色を異なる書式に素早く変換することができます。",
    colorConverterShowColorPreview: "色のプレビューを表示",

    dictionary: "辞書",
    dictionaryDescription:
        "このプラグインは単語の定義や同義語を素早く調べることができます。非公式の Google Dictionary API (https://dictionaryapi.dev/) を使用します。",
    dictionaryPrefix: "プレフィックス",
    dictionaryMinSearchTermLength: "検索語の最小長さ",
    dictionaryDebounceDelay: "デバウンス遅延 (ミリ秒)",

    browserBookmarks: "ブラウザーブックマーク",
    browserBookmarksDescription: "このプラグインはブラウザーのブックマークを検索することができます。",
    browserBookmarksBrowser: "ブラウザー",
    browserBookmarksUseFavicons: "ファビコンを使用する",
    browserBookmark: "ブックマーク",

    cancel: "キャンセル",
    save: "保存",
    add: "追加",
    remove: "削除",
    edit: "編集",
    forExample: "例",
    example: "例",
    iconType: "アイコン種別",
    iconTypeColor: "色",
    showFullFilePath: "ファイルのフルパスを表示",
    yes: "はい",
    no: "いいえ",
    resetToDefault: "デフォルトにリセットしますか？",
    resetPluginSettingsToDefaultWarning: "このプラグインの設定を全てデフォルトにリセットします。続行しますか？",
    filePath: "ファイルパス",
    folderPath: "フォルダーパス",
    chooseFile: "ファイルの選択",
    chooseFolder: "フォルダーの選択",
    restartRequired: "再起動が必要",

    controlPanel: "コントロールパネル",
    controlPanelSettingsDescription: "このプラグインでコントロールパネルの項目を素早く見つけることができます。",

    weather: "天気",
    weatherPrefix: "接頭辞",
    weatherSettingsDescription:
        "このプラグインは、あなたが任意の地域の気象条件を確認することができます。リージョンが指定されていない場合、既定では現在の場所の天気が表示されます。データは wttr.in によって提供されます",
    weatherTemperatureUnit: "温度単位",
    weatherCopyToClipboard: "エンターを押下してクリップボードにコピー",
    
    loremIpsum: "Lorem Ipsum",
    loremIpsumPrefix: "接頭辞",
    loremIpsumCopyToClipboard: "エンターを押下してクリップボードにコピー",
    loremIpsumSettingsDescription: "このプラグインを使用すると、サンプル テキストをクリップボードにすばやくコピーできます。",

    notes: "ノート",
    notesPrefixWrite: "プレフィックス (新しいメモを追加)",
    notesPrefixRead: "プレフィックス (検索メモ)",
    notesNew: "新しいメモ: ",
    notesReadDescription: "Enter キーを押してクリップボードにコピーするか、Shift+Enter キーを押して削除します。",
    notesWriteDescription: "Enter キーを押して、新しいメモを追加します。",
    notesSettingsDescription: "このプラグインを使用すると、簡単なメモを ueli に直接書き込むことができます。",
};
