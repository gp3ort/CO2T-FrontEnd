import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
       <App />
    </Provider>
)
