import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Pais from '../pages/Pais';
import Main from '../components/main';
import { useState } from 'react';
import Rodape from '../components/Rodape';

export default function AppRouter(){

    const [darkModeActive, setDarkModeActive] = useState(false);

    return(
        <Router>
            <Header darkModeActive={darkModeActive} setDarkModeActive={setDarkModeActive}/>
            <Routes>
                <Route path='/' element={<Main darkModeActive={darkModeActive}/>}/> 
                <Route path='/pais/:index' element={<Pais darkModeActive={darkModeActive}/>}/>
            </Routes>
            <Rodape/>
        </Router>
    );
}