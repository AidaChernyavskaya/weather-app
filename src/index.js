import React from 'react';
import './styles/style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from "./providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

