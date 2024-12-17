import './style.css'; 
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 

import MainSection from './components/MainSection'; 


const App = () => {
    return (
        <div>
            <h1>Scratch Project</h1>
            <MainSection />
        </div>
    )
}; 

createRoot(document.querySelector('#root')).render(<App />); 