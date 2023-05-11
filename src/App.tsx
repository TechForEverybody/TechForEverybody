import './App.css';
import './Styles/index.scss';
import { Routes, Route } from "react-router-dom";
import ErrorPage from './Components/Templates/ErrorPage';
import Home from './Components/Home/Home';

import { languageInitialState, updateLanguage, LanguageContext } from './Contexts/LanguageContext'
import { createContext, useReducer } from 'react';

let languageContext = createContext<LanguageContext | null>(null)

function App() {
    let [language, updateLanguageState] = useReducer(updateLanguage, languageInitialState);
    return (<>
        <languageContext.Provider value={{ language, updateLanguageState }}>
            <Routes>
                <Route path="/" element={<Home />} />







                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </languageContext.Provider>
    </>
    );
}
export default App;
export { languageContext }
