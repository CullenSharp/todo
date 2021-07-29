import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import AuthorizationProvider from './context/authorization';
import SettingsProvider from './context/settings';

function Main() {
  return (
    <React.StrictMode>
      <AuthorizationProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthorizationProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
