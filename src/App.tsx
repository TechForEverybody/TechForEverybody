import './App.css';
import './Styles/index.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './Components/Templates/ErrorPage';
import Home from './Components/Home/Home';

function App() {
    return (<>
    
                <Routes>
                    <Route path="/" element={<Home/>}/>







                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
    </>
    );
}
export default App;
