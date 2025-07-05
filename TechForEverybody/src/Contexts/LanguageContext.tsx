let languageInitialState = {
    isHindi: false
}
type actionType = {
    isHindi: boolean
}
function updateLanguage(state: any, action: actionType) {
    return { ...state, isHindi: action.isHindi };
}

export { languageInitialState, updateLanguage }

export type LanguageContext = {
    language: {
        isHindi: boolean
    };
    updateLanguageState: (action: actionType) => void;
}