import React from 'react';
import './App.css';
import { ROUTES } from "./utils/routes.tsx";
import Header from "./components/header.tsx";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

/*
  TODO:
    - Shared Context, either use library or create a wrapper component
    - 
*/

function App() {

  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
