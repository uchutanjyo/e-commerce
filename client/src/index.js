import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import {AppProvider} from './context/Context'

ReactDOM.render(
 < AppProvider>
<React.StrictMode>   
   <App />
</React.StrictMode>  
 </AppProvider>,

  document.getElementById('root')
);
