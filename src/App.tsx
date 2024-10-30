import React, { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Resume from './pages/resume';
import Games from './pages/games';
import Hobbies from './pages/hobbies';

const pages = ['resume', 'games', 'hobbies'];

function App() {
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  return (
    <BrowserRouter>
    <div className="App">
      
      
      <header className="App-header">
        <ResponsiveAppBar 
          pages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="*" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/games" element={<Games />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
