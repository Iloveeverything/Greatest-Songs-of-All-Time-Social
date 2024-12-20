import './style.css'; 
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import greatest from './assets/greatest.png'

import MainSection from './components/MainSection'; 


const App = () => {
    return (
        <div>
            <h1 className="app-name">
                {/* <img src={greatest} alt="logo" /> */}
                Greatest Songs of All Time
                </h1>
            <MainSection />
            <footer className="footer">
                <p className="footer-p">&copy; <time dateTime="2024">2024</time> Greatest Songs of All Time</p>
            </footer>
        </div>
    )
}; 

createRoot(document.querySelector('#root')).render(<App />); 