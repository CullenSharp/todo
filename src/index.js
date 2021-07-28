/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import SettingsProvider from './context/settings';

function Main() {
  return (
    <React.StrictMode>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
