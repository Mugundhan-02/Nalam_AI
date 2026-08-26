export interface TranslationSchema {
  app: {
    name: string;
    tagline: string;
    badge: string;
  };
  header: {
    statusAvailable: string;
    verifiedGuidance: string;
    emergencyCall: string;
    languageToggleLabel: string;
    aiAssistantBadge: string;
    trustedSafePrivate: string;
    themeToggleAriaLabel: string;
  };
  sidebar: {
    home: string;
    newChat: string;
    healthTopics: string;
    savedQuestions: string;
    disclaimer: string;
    about: string;
    trustCardTitle: string;
    trustCardDesc: string;
    copyright: string;
    rights: string;
    mainSidebarAriaLabel: string;
    navItemsAriaLabel: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    trustedInfoBadge: string;
    privacyBadge: string;
    bilingualBadge: string;
  };
  input: {
    placeholder: string;
    charLimit: string;
    askButton: string;
    voiceButtonTooltip: string;
    helpText: string;
    inputLanguageBadge: string;
  };
  quickQuestions: {
    title: string;
    subtitle: string;
    viewAll: string;
    symptomsTitle: string;
    symptomsQuestion: string;
    preventionTitle: string;
    preventionQuestion: string;
    whenToSeeDoctorTitle: string;
    whenToSeeDoctorQuestion: string;
    healthAdviceTitle: string;
    healthAdviceQuestion: string;
  };
  healthTopics: {
    title: string;
    subtitle: string;
    viewAll: string;
    viewGuide: string;
    learnMore: string;
  };
  chatWorkspace: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    onlineStatus: string;
    clearChat: string;
    emptyStateTitle: string;
    emptyStateSubtitle: string;
    userBadge: string;
    aiBadge: string;
    typingStatus: string;
    sourcesLabel: string;
    disclaimerNote: string;
    disclaimerFooter: string;
    keyboardHint: string;
    symptomsHeader: string;
    preventionHeader: string;
    whenToSeekHelpHeader: string;
    overviewHeader: string;
    errorMessage: string;
    retryAction: string;
    defaultAiIntro: string;
    pillDengue: string;
    pillFever: string;
    pillDoctor: string;
    pillDengueQuery: string;
    pillFeverQuery: string;
    pillDoctorQuery: string;
    menuCopyChat: string;
    menuCopiedNotice: string;
    menuScrollDisclaimer: string;
    menuClearChat: string;
  };
  chatPreview: {
    title: string;
    subtitle: string;
    structuredResponseTitle: string;
    overviewTitle: string;
    overview: string;
    symptomsTitle: string;
    symptoms: string[];
    preventionTitle: string;
    prevention: string[];
    emergencyTitle: string;
    whenToSeekHelp: string[];
    sourcesTitle: string;
    sampleSource1: string;
    sampleSource2: string;
    waitingForQuery: string;
    aiBadge: string;
  };
  disclaimer: {
    title: string;
    body: string;
    emergencyNotice: string;
    centerBanner: string;
  };
  savedQuestionsSection: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptySubtitle: string;
    addCustomBtn: string;
    saveCurrentPrompt: string;
    inputPlaceholder: string;
    saveAction: string;
    cancelAction: string;
    removeAction: string;
    clearAllAction: string;
    restoreSamplesAction: string;
    askThisQuestion: string;
    sampleQuestionsBadge: string;
    itemSavedToast: string;
  };
  aboutSection: {
    title: string;
    tagline: string;
    missionTitle: string;
    missionBody: string;
    featureBilingualTitle: string;
    featureBilingualDesc: string;
    featureEvidenceTitle: string;
    featureEvidenceDesc: string;
    featurePrivacyTitle: string;
    featurePrivacyDesc: string;
    disclaimerReminderTitle: string;
    disclaimerReminderBody: string;
    emergencyAction: string;
  };
  footer: {
    helpline: string;
  };
  accessibility: {
    switchToTamil: string;
    switchToEnglish: string;
    currentLanguage: string;
    discoveryAreaAriaLabel: string;
    chatWorkspaceAriaLabel: string;
    moreOptionsAriaLabel: string;
    clearChatAriaLabel: string;
    sendAriaLabel: string;
    retryAriaLabel: string;
  };
}

