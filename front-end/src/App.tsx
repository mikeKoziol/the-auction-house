import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from "./utils/routes.tsx";
import Header from "./components/header.tsx";
import { AuthContextProvider } from './components/AuthContextProvider.tsx';

import './styles/App.css';

/*
  TODO:
    - Shared Context, either use library or create a wrapper component
    - 
*/

const App: React.FC = () => {

  return (
    <div className="App">
      <AuthContextProvider>
        <Router>

          <Header />

          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
          </Routes>

        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
