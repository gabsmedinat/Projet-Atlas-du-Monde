import { useState, useEffect } from 'react';    // Hooks nécessaires pour ce composant
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Pays from './composants/Pays/Pays-composant'
import Header from './composants/Header/Header-composant'
import Langues from './composants/Langues/Langues-composant'
import Footer from './composants/Footer/Footer-composant'

const App = () => {

  return (
    <div className='App '>
      <BrowserRouter>
        <Header />
        <div className='App-contenu'>
          <Routes>
            <Route exact path='/' element={<Navigate to="/pays" />} />   // Cette ligne sert à rediriger la racine vers un lien connu (ici, /pays)
            <Route path='/pays' element={<Pays />} />
            <Route path='/langues' element={<Langues />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
