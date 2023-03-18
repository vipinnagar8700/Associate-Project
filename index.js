import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StationProvider from './components/Context/Stationform';
import  SessionProvider from './components/Context/Session';
import reportWebVitals from './reportWebVitals';
import Iconprovider from './components/Context/Sideicon';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
   <Iconprovider>
    <StationProvider>
    <SessionProvider>
    <App />
    </SessionProvider>
    </StationProvider>
    </Iconprovider>
  
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
