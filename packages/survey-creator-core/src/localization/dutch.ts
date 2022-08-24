//Uncomment this line on creating a translation file
import { editorLocalization, defaultStrings } from "survey-creator-core";

export var nlStrings = {
  //survey templates
  survey: {
    edit: "Bewerk",
    externalHelpLink: "Bekijk en leer hoe u enquêtes maakt",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Stel hier een vraag vanuit de Toolbox.",
    addLogicItem: "Maak een regel om de stroom van de enquête aan te passen.",
    copy: "Kopiëren",
    addToToolbox: "Toevoegen aan toolbox",
    deletePanel: "Paneel verwijderen",
    deleteQuestion: "Vraag verwijderen",
    convertTo: "Omzetten naar",
    drag: "Sleep element",
  },
  //questionTypes
  qt: {
    default: "Standaard",
    checkbox: "Selectievakje",
    comment: "Commentaar",
    imagepicker: "Afbeelingsvraag",
    image: "Afbeelding",
    dropdown: "Keuzelijst",
    file: "Bestandsupload",
    html: "Html",
    matrix: "Matrix (enkele keuze)",
    matrixdropdown: "Matrix (meerkeuze)",
    matrixdynamic: "Matrix (dynamische rijen)",
    multipletext: "Meervoudige tekstvak",
    panel: "Paneel",
    paneldynamic: "Paneel (dynamische panelen)",
    radiogroup: "Meerkeuzevraag",
    rating: "Beoordeling",
    text: "Tekstvak",
    boolean: "Boolean",
    expression: "Berekening",
    signaturepad: "Handtekening",
    flowpanel: "Stroompaneel",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Standaard ({0})",
    survey: "Enquête",
    settings: "Enquête-instellingen",
    settingsTooltip: "Open enquête-instellingen",
    //opjectPropertiesHeader: "Geavanceerd",
    //showObjectProperties: "Objecteigenschappen weergeven",
    //hideObjectProperties: "Verberg objecteigenschappen",
    showPanel: "Toon paneel",
    hidePanel: "Verberg paneel",
    //editSurvey: "Enquête bewerken",
    addNewPage: "Pagina toevoegen",
    moveRight: "Scroll naar rechts",
    moveLeft: "Scroll naar links",
    deletePage: "Pagina verwijderen",
    editPage: "Pagina aanpassen",
    edit: "Bewerk",
    newPageName: "Pagina",
    newQuestionName: "Vraag",
    newPanelName: "Paneel",
    newTextItemName: "Tekst",
    testSurvey: "Test de enquête",
    testSurveyAgain: "Test de enquête opnieuw",
    testSurveyWidth: "Onderzoeksbreedte: ",
    navigateToMsg: "Je moest navigeren naar:",
    logic: "Onderzoekslogica",
    embedSurvey: "Enquête insluiten",
    translation: "Vertaling",
    saveSurvey: "Enquête opslaan",
    saveSurveyTooltip: "Enquête opslaan",
    designer: "Enquête-ontwerper",
    jsonEditor: "JSON-editor",
    undo: "Ongedaan maken",
    redo: "Opnieuw uitvoeren",
    undoTooltip: "Maak de laatste wijziging ongedaan",
    redoTooltip: "Voer de wijziging opnieuw uit",
    copy: "Kopiëren",
    cut: "Besnoeiing",
    paste: "Plakken",
    copyTooltip: "Kopieer selectie naar klembord",
    cutTooltip: "Knip de selectie naar het klembord",
    pasteTooltip: "Plakken vanaf klembord",
    options: "Opties",
    generateValidJSON: "Genereer geldige JSON",
    generateReadableJSON: "Genereer leesbare JSON",
    toolbox: "Gereedschap",
    "property-grid": "Eigenschappen",
    toolboxGeneralCategory: "Algemeen",
    //delSelObject: "Verwijder het geselecteerde object",
    //editSelObject: "Bewerk het geselecteerde object",
    correctJSON: "Corrigeer JSON.",
    surveyResults: "Enquêteresultaat: ",
    surveyResultsTable: "Als tafel",
    surveyResultsJson: "Als JSON",
    resultsTitle: "Vraag titel",
    resultsName: "Vraag naam",
    resultsValue: "Antwoordwaarde",
    resultsDisplayValue: "Waarde weergeven",
    modified: "Gewijzigd",
    saving: "Besparing",
    saved: "Opgeslagen",
    propertyEditorError: "Fout:",
    saveError: "Fout! De inhoud van de editor wordt niet opgeslagen.",
    translationAddLanguage: "Selecteer de taal om te vertalen",
    translationShowAllStrings: "Toon alle snaren",
    translationShowAllPages: "Toon alle paginas",
    translationNoStrings: "Geen verplichtingen om te vertalen. Vervang alstublieft het filter.",
    translationExportToSCVButton: "Exporteren naar CSV",
    translationImportFromSCVButton: "Importeren vanuit CSV",
    translationMergeLocaleWithDefault: "Voeg {0} samen met de standaardlandinstelling",
    bold: "Vetgedrukt",
    italic: "Cursief",
    underline: "Onderstrepen",
    addNewQuestion: "Vraag toevoegen",
    selectPage: "Selecteer pagina...",
    //completedHtmlOnConditionItemText: "Laat zien of:",
    lg: {
      //Logic tab strings
      page_visibilityName: "Pagina zichtbaarheid",
      panel_visibilityName: "Paneel zichtbaarheid",
      panel_enableName: "Paneel inschakelen/uitschakelen",
      question_visibilityName: "Vraag zichtbaarheid",
      question_enableName: "Vraag inschakelen/uitschakelen",
      question_requireName: "Vraag optioneel vereist",
      trigger_completeName: "Volledige enquête",
      trigger_setvalueName: "Stel vraagwaarde in",
      trigger_copyvalueName: "Kopieer de vraagwaarde",
      trigger_skipName: "Ga naar de vraag",
      trigger_runExpressionName: "Voer een aangepaste expressie uit",
      completedHtmlOnConditionName: "Aangepaste 'Bedanktpagina'-tekst",

      page_visibilityDescription:
        "Maak de pagina zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      panel_visibilityDescription:
        "Maak het paneel zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      panel_enableDescription:
        "Zorg ervoor dat het paneel en alle elementen erin worden ingeschakeld wanneer de logische uitdrukking true retourneert. Houd ze anders uitgeschakeld.",
      question_visibilityDescription:
        "Maak de vraag zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      question_enableDescription:
        "Schakel de vraag in wanneer de logische uitdrukking true retourneert. Houd het anders uitgeschakeld.",
      question_requireDescription:
        "Vraag wordt vereist wanneer de logische uitdrukking true retourneert.",
      trigger_completeDescription:
        "Wanneer de logische uitdrukking true retourneert, wordt de enquête voltooid en ziet een eindgebruiker de 'Bedankpagina'.",
      trigger_setvalueDescription:
        "Wanneer vraagwaarden, die worden gebruikt in de logische uitdrukking, worden gewijzigd en de logische uitdrukking true retourneert, wordt de waarde ingesteld op de geselecteerde vraag.",
      trigger_copyvalueDescription:
        "Wanneer vraagwaarden, die worden gebruikt in de logische uitdrukking, worden gewijzigd en de logische uitdrukking true retourneert, wordt de waarde van een geselecteerde vraag gekopieerd naar een andere geselecteerde vraag.",
      trigger_skipDescription:
        "Als de logische uitdrukking true retourneert, gaat de enquête naar/focust de geselecteerde vraag.",
      trigger_runExpressionDescription:
        "Wanneer de logische expressie true retourneert, wordt de aangepaste expressie uitgevoerd. U kunt dit expressieresultaat optioneel instellen voor de geselecteerde vraag",
      completedHtmlOnConditionDescription:
        "Als de logische uitdrukking true retourneert, wordt de standaardtekst voor de 'Bedankpagina' gewijzigd in de opgegeven tekst.",

      itemExpressionText: "Wanneer expressie: '{0}' true retourneert:", //{0} - the expression
      page_visibilityText: "Maak pagina {0} zichtbaar", //{0} page name
      panel_visibilityText: "Maak paneel {0} zichtbaar", //{0} panel name
      panel_enableText: "Schakel paneel {0} in", //{0} panel name
      question_visibilityText: "Maak vraag {0} zichtbaar", //{0} question name
      question_enableText: "Schakel vraag {0} in", //{0} question name
      question_requireText: "Stel vraag {0} verplicht", //{0} question name
      trigger_completeText: "Enquête wordt voltooid",
      trigger_setvalueText: "Stel de vraag: {0} waarde {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopieer naar vraag: {0} waarde uit vraag {1}", //{0} and {1} question names
      trigger_skipText: "Enquête ga verder met de vraag {0}", //{0} question name
      trigger_runExpressionText1: "Uitdrukking uitvoeren: '{0}'", //{0} the expression
      trigger_runExpressionText2: " en stel het resultaat in vraag: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Toon aangepaste tekst voor de 'Bedankpagina'.",

      conditions: "Voorwaard(en)",
      actions: "Actie(s)",
      expressionEditorTitle: "Definieer conditie(s)",
      actionsEditorTitle: "Definieer actie(s)",

      deleteAction: "Actie verwijderen",
      addNewAction: "Voeg nieuwe actie toe",
      selectedActionCaption: "Selecteer een actie om toe te voegen...",

      expressionInvalid:
        "De logische uitdrukking is leeg of ongeldig. Verbeter dit alstublieft.",
      noActionError: "Voeg ten minste één actie toe.",
      actionInvalid: "Los problemen in uw actie(s) op.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Verplicht?"
  // },
  //Property Editors
  pe: {
    apply: "Van toepassing zijn",
    ok: "OK",
    save: "Opslaan",
    saveTooltip: "Opslaan",
    cancel: "Annuleren",
    reset: "Resetten",
    refresh: "Opslaan",
    // close: "Dichtbij",
    delete: "Verwijderen",
    add: "Toevoegen",
    addNew: "Nieuwe toevoegen",
    addItem: "Klik om een item toe te voegen...",
    addOther: "Andere",
    addSelectAll: "Selecteer alles",
    addNone: "Geen",
    removeAll: "Verwijder alles",
    edit: "Bewerk",
    back: "Keer terug zonder op te slaan",
    backTooltip: "Keer terug zonder op te slaan",
    saveAndBack: "Bewaar en keer terug",
    saveAndBackTooltip: "Bewaar en keer terug",
    // itemValueEdit: "Zichtbaar als",
    editChoices: "Keuzes bewerken",
    showChoices: "Toon keuzes",
    move: "Bewegen",
    empty: "<leeg>",
    // notEmpty: "<waarde bewerken>",
    fastEntry: "Snelle toegang",
    formEntry: "Formulierinvoer",
    testService: "Test de service",
    itemSelectorEmpty: "Selecteer het element",
    conditionActionEmpty: "Selecteer de actie",
    conditionSelectQuestion: "Selecteer vraag...",
    conditionSelectPage: "Selecteer pagina...",
    conditionSelectPanel: "Selecteer paneel...",
    conditionValueQuestionTitle: "Voer/selecteer de waarde",
    // conditionHelp:
    //   "Voer een booleaanse uitdrukking in. Het moet true retourneren om de vraag/pagina zichtbaar te houden. Bijvoorbeeld: {vraag1} = 'waarde1' of ({vraag2} * {vraag4}> 20 en {vraag3} <5)",
    expressionHelp:
      "U kunt accolades gebruiken om toegang te krijgen tot de vraagwaarden: {vraag1} + {vraag2}, ({prijs} * {aantal}) * (100 - {korting}). U kunt functies gebruiken als: iif(), today(), age(), min(), max(), count(), avg() en anderen.",
    aceEditorHelp: "Druk op Ctrl+spatiebalk om een hint voor het voltooien van een uitdrukking te krijgen",
    aceEditorRowTitle: "Huidige rij",
    aceEditorPanelTitle: "Huidig paneel",
    showMore: "Raadpleeg de documentatie voor meer details",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Beschikbare vragen:",
    cellsEmptyRowsColumns: "Er moet minimaal één kolom of rij zijn",

    propertyIsEmpty: "Voer alstublieft een waarde in",
    propertyNameIsNotUnique: "Voer een unieke naam in",
    listIsEmpty: "Voeg een nieuw item toe",
    expressionIsEmpty: "Expressie is leeg",
    value: "Waarde",
    text: "Tekst",
    rowid: "Rij-ID",
    imageLink: "Afbeeldingslink",
    columnEdit: "Kolom bewerken: {0}",
    itemEdit: "Bewerk item: {0}",

    url: "URL",
    path: "Pad",
    valueName: "Waardenaam",
    titleName: "Titel",
    titlePlaceholder: "Voer hier de titel in",
    surveyTitlePlaceholder: "Voer de enquêtetitel hier in",
    pageTitlePlaceholder: "Voer hier de paginatitel in",
    descriptionPlaceholder: "Voer een omschrijving in",
    surveyDescriptionPlaceholder: "Voer een onderzoeksbeschrijving in",
    pageDescriptionPlaceholder: "Voer een paginabeschrijving in",

    hasOther: "Heeft de 'Anders:'-optie",
    otherText: "Titel 'Anders:'-optie",
    hasNone: "Heeft de 'Geen'-optie",
    noneText: "Titel 'Geen'-optie",
    hasSelectAll: "Heeft de 'Alles selecteren'-optie",
    selectAllText: "Titel 'Alles selecteren'-optie",
    allowEmptyResponse: "Leeg respons toestaan",
    choicesMin: "Minimumwaarde voor automatisch gegenereerde items",
    choicesMax: "Maximale waarde voor automatisch gegenereerde items",
    choicesStep: "Het verschil tussen automatisch gegenereerde items",
    name: "Naam",
    title: "Titel",
    cellType: "Celtype",
    colCount: "Kolom tellen",
    choicesOrder: "Volgorde opties",
    visible: "Is zichtbaar?",
    isRequired: "Is verplicht?",
    defaultValueExpression: "Expressie standaardwaarde",
    isAllRowRequired: "Antwoord vereisen voor alle rijen",
    requiredErrorText: "Tekst bij niet-ingevulde verplichte vraag",
    startWithNewLine: "Beginnen met een nieuwe regel?",
    rows: "Aantal rijen",
    cols: "Kolom tellen",
    placeholder: "Hulptekst",
    showPreview: "Toon voorbeeldgebied",
    showPreviewBeforeComplete: "Voorbeeldweergave voor afronden",
    storeDataAsText: "Bewaar bestandsinhoud in JSON-resultaat als tekst",
    maxSize: "Maximale bestandsgrootte in bytes",
    imageHeight: "Afbeelding hoogte",
    imageWidth: "Afbeelding breedte",
    rowCount: "Aantal rijen",
    columnLayout: "Kolommen layout",
    addRowLocation: "Voeg de locatie van de rijknop toe",
    addRowText: "Voeg tekst van de rijknop toe",
    removeRowText: "Verwijder de tekst van de rijknop",
    rateMin: "Minimumtarief",
    rateMax: "Maximaal tarief",
    rateStep: "Beoordeel stap",
    minRateDescription: "Beschrijving minimumtarief",
    maxRateDescription: "Maximale tariefomschrijving",
    inputType: "Invoertype",
    optionsCaption: "Bijschrift opties",
    defaultValue: "Standaardwaarde",
    cellsDefaultRow: "Standaard celteksten",

    surveyEditorTitle: "Bewerk enquête-instellingen",
    qEditorTitle: "Bewerken: {0}",

    maxLength: "Maximale lengte",

    buildExpression: "Bouwen",
    editExpression: "Bewerk",
    and: "En",
    or: "Of",
    remove: "Verwijderen",
    addCondition: "Voorwaarde toevoegen",

    //survey
    showTitle: "Titel weergeven/verbergen",
    expandCollapseTitle: "Titel uitvouwen/samenvouwen",
    locale: "Standaardtaal",
    simulator: "Kies apparaat",
    landscapeOrientation: "Landschap",
    mode: "Modus (bewerken/alleen lezen)",
    clearInvisibleValues: "Wis onzichtbare waarden",
    cookieName: "Cookienaam (zodat enquête slechts éénmalig wordt ingevuld)",
    sendResultOnPageNext: "Antwoorden opslaan bij pagina-overgang",
    storeOthersAsComment: "Sla de waarde van 'anderen' op in een apart veld",
    showPageTitles: "Toon paginatitels",
    showPageNumbers: "Toon paginanummers",
    pagePrevText: "Knoptitel 'Vorige pagina'",
    pageNextText: "Knoptitel 'Volgende pagina'",
    completeText: "Knoptitel 'Afronden'",
    previewText: "Knoptitel 'Voorbeeldweergave'",
    editText: "Knoptitel 'Bewerken'",
    startSurveyText: "Knoptitel 'Starten'",
    showNavigationButtons: "Navigatieknoppen weergeven (standaardnavigatie)",
    showPrevButton: "Toon knop 'Vorige pagina' (gebruiker kan terugkeren)",
    firstPageIsStarted: "De eerste pagina in de enquête is een startpagina",
    showCompletedPage: "Toon bij afronden deze HTML-code",
    goNextPageAutomatic:
      "Na alle vragen automatisch naar volgende pagina gaan",
    focusOnFirstError: "Focus op eerste fout zetten",
    showProgressBar: "Toon voortgangsbalk",
    questionTitleLocation: "Plek vraagtitel",
    questionTitlePattern: "Patroon vraagtitel",
    questionTitle: "Vraagtitel",
    requiredText: "Symbool(en) verplichte vraag",
    questionStartIndex: "Eerste vraag (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Toon vraagnummers",
    textUpdateMode: "Modus tekstvernieuwing",
    questionTitleTemplate:
      "Vraagtitelsjabloon, standaard is: '{no}. {vereisen} {titel}'",
    questionErrorLocation: "Plek vraagfoutmelding",
    focusFirstQuestionAutomatic: "Op volgende pagina focus op de eerste vraag zetten",
    questionsOrder: "Volgorde elementen op pagina",
    maxTextLength: "Maximale tekstlengte",
    maxOthersLength: "Maximale tekstlengte optie 'Anders:'",
    maxTimeToFinish: "Maximale tijd om de enquête te voltooien",
    maxTimeToFinishPage: "Maximale tijd om een pagina in de enquête te voltooien",
    showTimerPanel: "Toon timerpaneel",
    showTimerPanelMode: "Modus timerpaneel",
    renderMode: "Render-modus",
    allowAddPanel: "Sta het toevoegen van een paneel toe",
    allowRemovePanel: "Laat het verwijderen van het paneel toe",
    panelAddText: "Paneeltekst toevoegen",
    panelRemoveText: "Paneeltekst verwijderen",
    isSinglePage: "Toon alle elementen op één pagina",
    html: "Html",
    expression: "Uitdrukking",

    minValue: "Minimale waarde",
    maxValue: "Maximale waarde",
    minLength: "Minimale lengte",
    allowDigits: "Cijfers toestaan",
    minCount: "Minimum aantal",
    maxCount: "Maximale telling",
    regex: "Reguliere expressie",

    totalText: "Totale tekst",
    totalType: "Totaal type",
    totalExpression: "Totale expressie",
    totalDisplayStyle: "Totale weergavestijl",
    totalCurrency: "Totale valuta",
    totalFormat: "Totaal formaat",

    // Header  adorner
    logoPosition: "Positie logo",
    addLogo: "Logo toevoegen...",
    changeLogo: "Logo wijzigen...",
    logoWidth: "Breedte logo",
    logoHeight: "Hoogte logo",
    logoFit: "Passend maken logo",
    logoPositions: {
      none: "Logo verwijderen",
      left: "Links",
      right: "Rechtsaf",
      top: "Bovenop",
      bottom: "Onder aan",
    },

    tabs: {
      general: "Algemeen",
      fileOptions: "Opties",
      html: "Html-editor",
      columns: "Kolommen",
      rows: "Rijen",
      choices: "Keuzes",
      items: "Artikelen",
      visibleIf: "Zichtbaar als",
      enableIf: "Schakel If in",
      requiredIf: "Vereist als",
      rateValues: "Beoordeel waarden",
      choicesByUrl: "Keuzes van internet",
      matrixChoices: "Standaardkeuzes",
      multipleTextItems: "Tekstinvoer",
      numbering: "Nummering",
      validators: "Validators",
      navigation: "Navigatie",
      question: "Vraag",
      pages: "Pagina's",
      completedHtml: "HTML bij afronden",
      completedHtmlOnCondition: "Voltooide html op voorwaarde",
      loadingHtml: "Html laden",
      timer: "Timer/Quiz",
      calculatedValues: "Berekende waardes",
      triggers: "Triggers",
      templateTitle: "Sjabloontitel",
      totals: "Totalen",
      logic: "Logica",
      layout: "Indeling",
      data: "Gegevens",
      validation: "Validatie",
      cells: "Cellen",
      showOnCompleted: "Weergeven bij afronden",
      logo: "Logo in enquêtetitel",
      slider: "Schuifregelaar",
      others: "Anderen",
    },
    editProperty: "Eigenschap '{0}' bewerken",
    items: "Items",

    enterNewValue: "Voer de waarde in.",
    noquestions: "Er is geen enkele vraag in de enquête.",
    createtrigger: "Maak een trigger",
    titleKeyboardAdornerTip: "Druk op de enter-knop om te bewerken",
    keyboardAdornerTip:
      "Druk op de enter-knop om het item te bewerken, druk op de delete-knop om het item te verwijderen, druk op alt plus pijl omhoog of pijl omlaag om item te verplaatsen",
    triggerOn: "Aan ",
    triggerMakePagesVisible: "Maak pagina's zichtbaar:",
    triggerMakeQuestionsVisible: "Maak elementen zichtbaar:",
    triggerCompleteText: "Vul de enquête in als dit lukt.",
    triggerNotSet: "De trigger is niet ingesteld",
    triggerRunIf: "Voer als",
    triggerSetToName: "Verander waarde van: ",
    triggerFromName: "Waarde kopiëren van: ",
    triggerRunExpression: "Voer deze expressie uit:",
    triggerSetValue: "naar: ",
    triggerGotoName: "Ga naar de vraag:",
    triggerIsVariable: "Zet de variabele niet in het onderzoeksresultaat.",
    triggerRunExpressionEmpty: "Voer een geldige uitdrukking in",

    noFile: "Geen bestand gekozen",
  },
  //Property values
  pv: {
    true: "Waar",
    false: "False",
    inherit: "Erven",
    show: "Tonen",
    hide: "Zich verstoppen",
    default: "Standaard",
    initial: "Standaard",
    random: "Willekeurig",
    collapsed: "Ingestort",
    expanded: "Uitgebreid",
    none: "Geen",
    asc: "Oplopend",
    desc: "Aflopend",
    indeterminate: "Onbepaald",
    decimal: "Decimale",
    currency: "Valuta",
    percent: "Procent",
    firstExpanded: "Eerste uitgevouwen",
    off: "Uit",
    onPanel: "Op paneel",
    onSurvey: "Op enquête",
    list: "Lijst",
    progressTop: "Voortgang top",
    progressBottom: "Voortgang bodem",
    progressTopBottom: "Voortgang top bodem",
    horizontal: "Horizontaal",
    vertical: "Verticaal",
    top: "Top",
    bottom: "Beneden",
    topBottom: "Top en beneden",
    both: "Beide",
    left: "Links",
    right: "Rechts",
    color: "Kleur",
    date: "Datum",
    datetime: "Datum/tijd",
    "datetime-local": "Datum/tijd lokaal",
    email: "E-mail",
    month: "Maand",
    number: "Nummer",
    password: "Wachtwoord",
    range: "Bereik",
    tel: "Tel",
    text: "Tekst",
    time: "Tijd",
    url: "URL",
    week: "Week",
    hidden: "Verborgen",
    on: "Aan",
    onPage: "Op pagina",
    underTitle: "Onder de titel",
    underInput: "Onder het invoerveld",
    edit: "Bewerk",
    display: "Scherm",
    onComplete: "Bij afronden",
    onHidden: "Bij verbergen",
    onBlur: "Bij verliezen focus",
    onTyping: "Tijdens het typen",
    all: "Alle",
    page: "Pagina",
    survey: "Enquête",
    onNextPage: "Bij pagina-overgang",
    onValueChanged: "Bij waardeverandering",
    singlePage: "Enkele pagina",
    standard: "Standaard",
    questionPerPage: "Vraag per pagina",
    noPreview: "Geen preview",
    showAllQuestions: "Toon voorbeeld met alle vragen",
    showAnsweredQuestions: "Toon voorbeeld met beantwoorde vragen",
    image: "Beeld",
    video: "Video",
    contain: "Inperken",
    cover: "Bedekken",
    fill: "Opvullen"
  },
  //Operators
  op: {
    empty: "is leeg",
    notempty: "is niet leeg",
    equal: "gelijk is",
    notequal: "niet gelijk",
    contains: "bevat",
    notcontains: "bevat niet",
    anyof: "een van",
    allof: "alles van",
    greater: "groter",
    less: "minder",
    greaterorequal: "groter of gelijk aan",
    lessorequal: "minder of gelijk aan",
    and: "en",
    or: "of",
  },
  //Embed window
  ew: {
    angular: "Gebruik de Angular-versie",
    jquery: "Gebruik de jQuery-versie",
    knockout: "Gebruik de Knockout-versie",
    react: "Gebruik de React-versie",
    vue: "Gebruik de Vue-versie",
    bootstrap: "Voor bootstrap-framework",
    modern: "Modern thema",
    default: "Standaard thema",
    orange: "Oranje thema",
    darkblue: "Donkerblauw thema",
    darkrose: "Donkereroos thema",
    stone: "Stenen thema",
    winter: "Winter thema",
    winterstone: "Wintersteen thema",
    showOnPage: "Toon enquête op een pagina",
    showInWindow: "Toon enquête in een venster",
    loadFromServer: "Laad Survey JSON vanaf de server",
    titleScript: "Scripts en stijlen",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Selecteer de pagina om deze te testen:",
    showInvisibleElements: "Toon onzichtbare elementen",
  },
  validators: {
    answercountvalidator: "Aantal antwoorden",
    emailvalidator: "E-mail",
    expressionvalidator: "Uitdrukking",
    numericvalidator: "Numeriek",
    regexvalidator: "Regex",
    textvalidator: "Tekst",
  },
  triggers: {
    completetrigger: "Volledige enquête",
    setvaluetrigger: "Ingestelde waarde",
    copyvaluetrigger: "Kopie waarde",
    skiptrigger: "Ga naar de vraag",
    runexpressiontrigger: "Run expressie",
    visibletrigger: "Zichtbaarheid wijzigen (verouderd)",
  },
  //Properties
  p: {
    name: "Naam",
    title: {
      name: "Titel",
      title: "Laat het leeg als het hetzelfde is als 'Naam'",
    },

    navigationButtonsVisibility: "Navigatie Knoppen zichtbaarheid",
    questionsOrder: "Vragen volgorde",
    maxTimeToFinish: "Maximale tijd om te voltooien",

    visible: "Zichtbaar",
    visibleIf: "Zichtbaar als",
    questionTitleLocation: "Plek vraagtitel",
    questionDescriptionLocation: "Plek vraagomschrijving",
    description: "Omschrijving",
    state: "Staat",
    isRequired: "Is benodigd",
    requiredIf: "Vereist als",
    indent: "Inspringen",
    requiredErrorText: "Vereiste fouttekst",
    startWithNewLine: "Begin met nieuwe regel",
    innerIndent: "Innerlijke inspringing",
    page: "Pagina",

    width: "Breedte",

    commentText: "Commentaar tekst",
    valueName: "Waarde naam",
    enableIf: "Inschakelen als",
    defaultValue: "Standaardwaarde",
    correctAnswer: "Goed antwoord",
    readOnly: "Alleen-lezen",
    validators: "Validators",
    titleLocation: "Plek titel",
    descriptionLocation: "Plek omschrijving",
    minWidth: "Minimale breedte",
    maxWidth: "Maximale breedte",
    useDisplayValuesInTitle: "Waardes in titel gebruiken",

    hasComment: "Heeft commentaar",
    hasOther: "Heeft andere",
    choices: "Keuzes",
    choicesOrder: "Keuzes bestellen",
    choicesByUrl: "Keuzes per url",
    otherText: "Andere tekst",
    otherErrorText: "Andere fouttekst",
    storeOthersAsComment: "Sla anderen op als commentaar",

    label: "Etiket",
    showTitle: "Laat de titel zien",
    valueTrue: "Waarde waar",
    valueFalse: "Waarde false",

    cols: "Kolommen",
    rows: "Rijen",
    placeholder: "Tijdelijke aanduiding",

    optionsCaption: "Bijschrift opties",

    expression: "Uitdrukking",
    format: "Formaat",
    displayStyle: "Weergavestijl",
    currency: "Valuta",
    useGrouping: "Gebruik groepering",

    showPreview: "Toon voorbeeld",
    allowMultiple: "Meerdere toestaan",
    imageHeight: "Afbeelding hoogte",
    imageWidth: "Afbeelding breedte",
    storeDataAsText: "Gegevens opslaan als tekst",
    maxSize: "Maximale grootte",

    html: "HTML",

    columns: "Kolommen",
    cells: "Cellen",
    isAllRowRequired: "Zijn alle rijen vereist",

    horizontalScroll: "Horizontale scroll",
    cellType: "Celtype",
    columnsLayout: "Kolommen layout",
    columnColCount: "Aantal kolommen",
    columnMinWidth: "Kolom min breedte",

    rowCount: "Rijen tellen",
    minRowCount: "Min rijen tellen",
    maxRowCount: "Max aantal rijen",
    keyName: "Sleutel naam",
    keyDuplicationError: "Key duplicatie fout",
    confirmDelete: "Bevestig verwijderen",
    confirmDeleteText: "Bevestigen verwijder tekst",
    addRowLocation: "Rijlocatie toevoegen",
    addRowText: "Rij tekst toevoegen",
    removeRowText: "Rij-tekst verwijderen",

    items: "Artikelen",
    itemSize: "Item grootte",
    colCount: "Kolommen tellen",

    templateTitle: "Sjabloontitel",
    templateDescription: "Sjabloonbeschrijving",
    allowAddPanel: "Toestaan om paneel toe te voegen",
    allowRemovePanel: "Laat het paneel verwijderen",
    panelCount: "Aantal panelen",
    minPanelCount: "Min paneel aantal",
    maxPanelCount: "Max aantal panelen",
    panelsState: "Panelen staat",
    panelAddText: "Paneel tekst toevoegen",
    panelRemoveText: "Paneel verwijder tekst",
    panelPrevText: "Paneel vorige tekst",
    panelNextText: "Paneel volgende tekst",
    showQuestionNumbers: "Toon vraagnummers",
    textUpdateMode: "Modus tekstvernieuwing",
    showRangeInProgress: "Toon lopende reeks",
    renderMode: "Render-modus",
    templateTitleLocation: "Sjabloon titel locatie",

    rateValues: "Tarief waarden",
    rateMin: "Tarief min",
    rateMax: "Tarief max",
    rateStep: "Tariefstap",
    minRateDescription: "Min tarief beschrijving",
    maxRateDescription: "Max tarief beschrijving",

    inputType: "Invoertype",
    size: "Grootte",

    locale: "Locale",
    focusFirstQuestionAutomatic: "Focus eerste vraag automatisch",
    completedHtml: "Voltooide html",
    completedBeforeHtml: "HTML bij tweede poging invullen",
    loadingHtml: "HTML te tonen bij opstarten",
    triggers: "Triggers",
    cookieName: "Cookie naam",
    sendResultOnPageNext: "Verzend resultaat op volgende pagina",
    showNavigationButtons: "Tonen navigatieknoppen",
    showPrevButton: "Toon vorige knop",
    showPageTitles: "Toon paginatitels",
    navigateToUrl: "Naar URL doorsturen",
    navigateToUrlOnCondition: "Conditie om naar URL door te sturen",
    completedHtmlOnCondition: "Conditie om HTML bij afronden te tonen",
    showCompletedPage: "Toon voltooide pagina",
    showPageNumbers: "Toon paginanummers",
    questionErrorLocation: "Vraag foutlocatie",
    showProgressBar: "Toon voortgangsbalk",
    progressBarType: "Type voortgangsbalk",
    questionsOnPageMode: "Vragen per pagina",
    mode: "Modus",
    goNextPageAutomatic: "Ga automatisch naar de volgende pagina",
    checkErrorsMode: "Modus foutcontrole",
    clearInvisibleValues: "Duidelijke onzichtbare waarden",
    startSurveyText: "Start enquêtetekst",
    pagePrevText: "Pagina vorige tekst",
    pageNextText: "Pagina volgende tekst",
    completeText: "Volledige tekst",
    requiredText: "Vereiste tekst",
    questionStartIndex: "Vraag start index",
    questionTitleTemplate: "Vraag titel sjabloon",
    firstPageIsStarted: "Eerste pagina is gestart",
    isSinglePage: "Is één pagina",
    maxTimeToFinishPage: "Maximale tijd om pagina te voltooien",
    showTimerPanel: "Toon timer paneel",
    showTimerPanelMode: "Toon timer paneelmodus",

    defaultPanelValue: "Standaard paneelwaarde",
    defaultRowValue: "Standaard rijwaarde",
    hasNone: "Heeft er geen",
    noneText: "Geen tekst",

    text: "Tekst",
  },
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nl"] = nlStrings;
