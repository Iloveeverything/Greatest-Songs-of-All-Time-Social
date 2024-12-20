import './style.css'; 
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import greatest from './assets/greatest.png'

import MainSection from './components/MainSection'; 


const App = () => {
    return (
        <div className="main-div">
            <header className="header">
              <img  className="app-name" src={greatest} alt="logo" />
            </header>
            {/* <h1 className="app-name"> */}
                {/* Greatest Songs of All Time */}
                {/* </h1> */}
            <main className="main">
              <MainSection />
              <div className="push"></div>
            </main>
            <footer className="footer">
              <p className="footer-p">&copy; <time dateTime="2024">2024</time> Greatest Songs of All Time</p>
            </footer>
        </div>
    )
}; 

createRoot(document.querySelector('#root')).render(<App />); 