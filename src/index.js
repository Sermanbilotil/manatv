import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/header.css';
import './style/style.css';
import './style/media.css';
import './style/normalize.css';
import './style/footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet,HelmetProvider} from "react-helmet-async";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GoogleOAuthProvider clientId="338576098456-a7h7s7cj413egjmcdec86i8kj88dprh8.apps.googleusercontent.com">
  <React.StrictMode>
      <HelmetProvider >
    <App />


      <Helmet>
          <script type="text/babel" src="./../js/script.js"></script>
      </Helmet>
      </HelmetProvider>
  </React.StrictMode>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
