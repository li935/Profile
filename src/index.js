import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "mobx-react";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <Provider {...store}>
    <Provider>
        <App/>
    </Provider>
);