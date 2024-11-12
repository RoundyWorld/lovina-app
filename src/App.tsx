import React, { useState } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';


import Resume from './pages/resume';
import Games from './pages/games';
import Hobbies from './pages/hobbies';

const pages = ['resume', 'games', 'hobbies'];

function App() {
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header className="App-header">
          <AppNavBar 
            pages={pages}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </header>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="*" element={<Resume />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/games" element={<Games />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
