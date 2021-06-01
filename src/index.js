import React from 'react';
import ReactDom from 'react-dom';

//Importing Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Importing Components
import App from './components/App';

ReactDom.render(
    <App />,
    document.getElementById('root'))