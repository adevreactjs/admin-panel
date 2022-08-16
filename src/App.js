import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import {  userInputs } from './formSource';
import './pages/style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/admin-panel' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-panel/users' element={<List />} />
          <Route
            path='/admin-panel/users/new'
            element={<New inputs={userInputs} title='Add New User' />}
          />
          <Route path='/admin-panel/users/details' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
