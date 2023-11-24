import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById('root'))
.render(
    <Provider store={store}>
       <App />
    </Provider>
)
