import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Contexto } from "./Contexto"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Contexto>
    <App />
</Contexto>

);

